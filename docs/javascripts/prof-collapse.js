// Professor card collapse: show first 10, toggle rest
(function () {
  const VISIBLE = 10;

  function initGrid(grid) {
    if (grid.dataset.collapseInit) return;
    grid.dataset.collapseInit = "1";

    // Material renders grid cards as <ul><li>... inside the div
    const ul = grid.querySelector("ul");
    if (!ul) return;

    const items = Array.from(ul.querySelectorAll(":scope > li"));
    if (items.length <= VISIBLE) {
      // Hide the show-all button when ≤10 cards
      const btn = grid.nextElementSibling;
      if (btn && btn.classList.contains("prof-show-all")) {
        btn.style.display = "none";
      }
      return;
    }

    // Hide items beyond VISIBLE
    items.slice(VISIBLE).forEach((li) => (li.style.display = "none"));

    const btn = grid.nextElementSibling;
    if (!btn || !btn.classList.contains("prof-show-all")) return;

    const total = items.length;
    const hidden = total - VISIBLE;

    btn.textContent = `显示全部（${total} 个）↓`;
    btn.style.display = "";

    let expanded = false;
    btn.onclick = function () {
      expanded = !expanded;
      items.slice(VISIBLE).forEach((li) => {
        li.style.display = expanded ? "" : "none";
      });
      btn.textContent = expanded
        ? "收起 ↑"
        : `显示全部（${total} 个）↓`;
    };
  }

  function setup() {
    document.querySelectorAll(".prof-collapse").forEach(initGrid);
  }

  // MkDocs Material SPA support
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      // Small delay to let Material finish rendering the grid
      setTimeout(setup, 50);
    });
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
