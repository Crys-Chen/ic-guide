(function () {
  "use strict";

  function initialiseResourceFilter() {
    var root = document.querySelector("[data-resource-filters]");
    var table = document.getElementById("resource-table");
    if (!root || !table) return;

    var controls = {
      query: document.getElementById("filter-query"),
      window: document.getElementById("filter-window"),
      direction: document.getElementById("filter-direction"),
      role: document.getElementById("filter-role"),
      language: document.getElementById("filter-language"),
      duration: document.getElementById("filter-duration"),
      source: document.getElementById("filter-source")
    };
    var count = document.getElementById("resource-count");
    var empty = document.getElementById("resource-empty");
    var reset = document.getElementById("filter-reset");
    var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));

    function durationMatches(value, band) {
      if (!band) return true;
      if (band === "le1") return value <= 1;
      if (band === "1to5") return value > 1 && value <= 5;
      if (band === "5to10") return value > 5 && value <= 10;
      if (band === "gt10") return value > 10;
      return true;
    }

    function applyFilters() {
      var query = controls.query.value.trim().toLocaleLowerCase();
      var visible = 0;
      rows.forEach(function (row) {
        var directions = (row.dataset.directions || "").split("||");
        var show = (!query || (row.dataset.search || "").indexOf(query) !== -1) &&
          (!controls.window.value || row.dataset.window === controls.window.value) &&
          (!controls.direction.value || directions.indexOf(controls.direction.value) !== -1) &&
          (!controls.role.value || row.dataset.role === controls.role.value) &&
          (!controls.language.value || row.dataset.language === controls.language.value) &&
          (!controls.source.value || row.dataset.source === controls.source.value) &&
          durationMatches(Number(row.dataset.duration), controls.duration.value);
        row.hidden = !show;
        if (show) visible += 1;
      });
      count.textContent = String(visible);
      if (empty) empty.hidden = visible !== 0;
    }

    Object.keys(controls).forEach(function (key) {
      controls[key].addEventListener(key === "query" ? "input" : "change", applyFilters);
    });
    reset.addEventListener("click", function () {
      Object.keys(controls).forEach(function (key) { controls[key].value = ""; });
      applyFilters();
      controls.query.focus();
    });
    applyFilters();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initialiseResourceFilter);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseResourceFilter);
  } else {
    initialiseResourceFilter();
  }
}());
