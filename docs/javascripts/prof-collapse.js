// Professor card collapse: show first 10, toggle rest
(function () {
  var VISIBLE = 10;

  function setup() {
    // Iterate over buttons; for each, find the nearest preceding .prof-collapse grid
    document.querySelectorAll(".prof-show-all").forEach(function (btn) {
      if (btn.dataset.init) return;
      btn.dataset.init = "1";

      // Find the nearest .prof-collapse that comes BEFORE this button in DOM order
      var grid = null;
      document.querySelectorAll(".prof-collapse").forEach(function (g) {
        // DOCUMENT_POSITION_FOLLOWING (4): btn follows g → g precedes btn
        if (g.compareDocumentPosition(btn) & Node.DOCUMENT_POSITION_FOLLOWING) {
          grid = g; // keep overwriting → last match = nearest preceding grid
        }
      });

      if (!grid) return;

      var ul = grid.querySelector("ul");
      if (!ul) return;

      var items = Array.from(ul.querySelectorAll(":scope > li"));

      if (items.length <= VISIBLE) {
        btn.style.display = "none";
        return;
      }

      // Hide items beyond the visible limit
      items.slice(VISIBLE).forEach(function (li) {
        li.style.display = "none";
      });

      var total = items.length;
      btn.textContent = "显示全部（" + total + " 个）↓";
      btn.style.display = "";

      var expanded = false;
      btn.onclick = function () {
        expanded = !expanded;
        items.slice(VISIBLE).forEach(function (li) {
          li.style.display = expanded ? "" : "none";
        });
        btn.textContent = expanded ? "收起 ↑" : "显示全部（" + total + " 个）↓";
      };
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      setTimeout(setup, 150);
    });
  } else {
    document.addEventListener("DOMContentLoaded", setup);
  }
})();
