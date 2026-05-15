// Firebase shared like system for professor tables
// Config placeholder — fill in after creating your Firebase project
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyARlXinXe1KBx4IkNOq6QRzW3sLyGZSP9k",
  authDomain: "fudanme.firebaseapp.com",
  projectId: "fudanme",
  storageBucket: "fudanme.firebasestorage.app",
  messagingSenderId: "1092867516373",
  appId: "1:1092867516373:web:6e8a36814fd6954f61bf5c"
};

const COLLECTION = "prof_likes";
let db = null;

function loadFirebase(callback) {
  if (typeof firebase !== "undefined") {
    callback();
    return;
  }
  const scripts = [
    "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",
    "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js",
  ];
  let loaded = 0;
  scripts.forEach((src) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => {
      loaded++;
      if (loaded === scripts.length) callback();
    };
    document.head.appendChild(s);
  });
}

function initFirebase() {
  if (db) return;
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  db = firebase.firestore();
}

// Stable doc ID: hash of professor name only (cross-page sync)
function makeDocId(name) {
  const key = name.trim();
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (Math.imul(31, hash) + key.charCodeAt(i)) | 0;
  }
  const safeName = name.trim().replace(/[^a-zA-Z0-9一-鿿]/g, "_").slice(0, 40);
  return safeName + "_" + Math.abs(hash).toString(36);
}

function getLikedSet() {
  try {
    return new Set(JSON.parse(localStorage.getItem("liked_profs") || "[]"));
  } catch {
    return new Set();
  }
}

function saveLikedSet(set) {
  localStorage.setItem("liked_profs", JSON.stringify([...set]));
}

function renderButton(btn, count, liked) {
  btn.innerHTML = `${liked ? "❤️" : "🤍"} <span>${count}</span>`;
  btn.classList.toggle("liked", liked);
  btn.title = liked ? "取消感兴趣" : "感兴趣";
}

// Inject like buttons into professor grid cards (new card format)
function injectLikeButtonsCards() {
  document.querySelectorAll(".grid.cards:not(.community-cards) li").forEach((card) => {
    if (card.querySelector(".like-btn")) return;
    const nameEl = card.querySelector("strong");
    if (!nameEl) return;
    const nameText = nameEl.textContent.trim();
    if (!nameText) return;

    const docId = makeDocId(nameText);
    const likedSet = getLikedSet();
    const liked = likedSet.has(docId);

    const btn = document.createElement("button");
    btn.className = "like-btn" + (liked ? " liked" : "");
    btn.setAttribute("data-doc", docId);
    renderButton(btn, "…", liked);

    db.collection(COLLECTION).doc(docId).get().then((snap) => {
      const count = snap.exists ? (snap.data().count || 0) : 0;
      renderButton(btn, count, getLikedSet().has(docId));
    }).catch(() => renderButton(btn, "?", getLikedSet().has(docId)));

    btn.addEventListener("click", () => {
      const currentLiked = getLikedSet().has(docId);
      const delta = currentLiked ? -1 : 1;
      const s = getLikedSet();
      if (currentLiked) s.delete(docId); else s.add(docId);
      saveLikedSet(s);
      const cur = parseInt(btn.querySelector("span")?.textContent) || 0;
      renderButton(btn, Math.max(0, cur + delta), !currentLiked);
      db.collection(COLLECTION).doc(docId).set(
        { count: firebase.firestore.FieldValue.increment(delta), name: nameText },
        { merge: true }
      ).catch(() => {
        const s2 = getLikedSet();
        if (!currentLiked) s2.delete(docId); else s2.add(docId);
        saveLikedSet(s2);
        renderButton(btn, cur, currentLiked);
      });
    });

    card.appendChild(btn);
  });
}

function injectLikeButtons() {
  // Legacy: professor tables with "姓名" header (kept for compatibility)
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    const headers = table.querySelectorAll("th");
    const hasProfHeader = [...headers].some((th) => th.textContent.trim() === "姓名");
    if (!hasProfHeader) return;

    // Add "感兴趣" column header
    const headerRow = table.querySelector("thead tr");
    if (!headerRow) return;

    // Avoid double-injection on SPA re-render
    if (headerRow.querySelector(".like-th")) return;

    const th = document.createElement("th");
    th.className = "like-th";
    th.textContent = "感兴趣";
    headerRow.appendChild(th);

    // Add like button to each data row
    const rows = table.querySelectorAll("tbody tr");
    const likedSet = getLikedSet();

    rows.forEach((row) => {
      const nameCell = row.querySelector("td:first-child");
      if (!nameCell) return;
      const nameText = nameCell.textContent.trim();
      const docId = makeDocId(nameText);
      const liked = likedSet.has(docId);

      const td = document.createElement("td");
      td.className = "like-td";

      const btn = document.createElement("button");
      btn.className = "like-btn" + (liked ? " liked" : "");
      btn.setAttribute("data-doc", docId);
      renderButton(btn, "…", liked);

      // Load current count from Firestore
      db.collection(COLLECTION).doc(docId).get().then((snap) => {
        const count = snap.exists ? (snap.data().count || 0) : 0;
        renderButton(btn, count, likedSet.has(docId));
      }).catch(() => {
        renderButton(btn, "?", likedSet.has(docId));
      });

      btn.addEventListener("click", () => {
        const currentLiked = likedSet.has(docId);
        const delta = currentLiked ? -1 : 1;

        if (currentLiked) likedSet.delete(docId);
        else likedSet.add(docId);
        saveLikedSet(likedSet);

        // Optimistic UI update
        const currentCount = parseInt(btn.querySelector("span")?.textContent) || 0;
        renderButton(btn, Math.max(0, currentCount + delta), !currentLiked);

        // Write to Firestore
        const ref = db.collection(COLLECTION).doc(docId);
        ref.set(
          { count: firebase.firestore.FieldValue.increment(delta), name: nameText },
          { merge: true }
        ).catch(() => {
          // Revert on error
          if (!currentLiked) likedSet.delete(docId);
          else likedSet.add(docId);
          saveLikedSet(likedSet);
          renderButton(btn, currentCount, currentLiked);
        });
      });

      td.appendChild(btn);
      row.appendChild(td);
    });
  });
}

function setup() {
  loadFirebase(() => {
    initFirebase();
    injectLikeButtons();
    injectLikeButtonsCards();
  });
}

// MkDocs Material SPA navigation support
if (typeof document$ !== "undefined") {
  document$.subscribe(() => setup());
} else {
  document.addEventListener("DOMContentLoaded", setup);
}
