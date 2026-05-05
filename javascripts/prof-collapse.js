// Professor card collapse: show first 10, toggle rest
(function () {
  const VISIBLE = 10;

  function findBtn(grid) {
    // MkDocs may wrap the button in a <p>, so walk siblings and check inside
    let el = grid.nextElementSibling;
    while (el) {
      if (el.classList.contains("prof-show-all")) return el;
      const inner = el.querySelector(".prof-show-all");
      if (inner) return inner;
      el = el.nextElementSibling;
    }
    return null;
  }

  function initGrid(grid) {
    if (grid.dataset.collapseInit) return;
    grid.dataset.collapseInit = "1";

    const ul = grid.querySelector("ul");
    if (!ul) return;

    const items = Array.from(ul.querySelectorAll(":scope > li"));
    const btn = findBtn(grid);

    if (items.length <= VISIBLE) {
      if (btn) btn.style.display = "none";
      return;
    }

    // Hide items beyond VISIBLE
    items.slice(VISIBLE).forEach((li) => (li.style.display = "none"));

    if (!btn) return;

    const total = items.length;
    btn.textContent = `显示全部（${total} 个）↓`;
    btn.style.display = "";

    let expanded = false;
    btn.onclick = function () {
      expanded = !expanded;
      items.slice(VISIBLE).forEach((li) => {
        li.style.display = expanded ? "" : "none";
      });
      btn.textContent = expanded ? "收起 ↑" : `显示全部（${total} 个）↓`;
    };
  }

  function setup() {
    document.querySelectorAll(".prof-collapse").forEach(initGrid);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      setTimeout(setup, 80);
    });
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
