(function () {
  'use strict';

  var PHRASES = [
    { line1: '让知识', line2: '回归连续' },
    { line1: '让信息', line2: '回归透明' },
  ];

  var TYPE_MS  = 68;   // ms per char while typing
  var DEL_MS   = 28;   // ms per char while deleting (faster)
  var PAUSE_MS = 2800; // pause after full phrase before deleting
  var INIT_MS  = 400;  // delay before first character

  function run(h1) {
    h1.innerHTML = '';

    var span1  = document.createElement('span');
    var br     = document.createElement('br');
    var span2  = document.createElement('span');
    span2.className = 'df-lred';
    var cursor = document.createElement('span');
    cursor.className = 'tw-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.textContent = '|';

    br.style.display = 'none';

    h1.appendChild(span1);
    h1.appendChild(br);
    h1.appendChild(span2);
    h1.appendChild(cursor);

    var phraseIdx = 0;

    /* cursor solid while typing, blinks while paused */
    function setActive(on) {
      cursor.classList.toggle('tw-active', on);
    }

    function typePhrase() {
      var phrase = PHRASES[phraseIdx];
      var i = 0;
      setActive(true);

      function typeLine1() {
        if (i >= phrase.line1.length) {
          br.style.display = '';
          i = 0;
          setTimeout(typeLine2, TYPE_MS);
          return;
        }
        span1.textContent += phrase.line1[i++];
        setTimeout(typeLine1, TYPE_MS);
      }

      function typeLine2() {
        if (i >= phrase.line2.length) {
          setActive(false);
          setTimeout(deletePhrase, PAUSE_MS);
          return;
        }
        span2.textContent += phrase.line2[i++];
        setTimeout(typeLine2, TYPE_MS);
      }

      typeLine1();
    }

    function deletePhrase() {
      setActive(true);

      function delLine2() {
        if (!span2.textContent.length) {
          br.style.display = 'none';
          setTimeout(delLine1, DEL_MS);
          return;
        }
        span2.textContent = span2.textContent.slice(0, -1);
        setTimeout(delLine2, DEL_MS);
      }

      function delLine1() {
        if (!span1.textContent.length) {
          phraseIdx = (phraseIdx + 1) % PHRASES.length;
          setActive(false);
          setTimeout(typePhrase, 220);
          return;
        }
        span1.textContent = span1.textContent.slice(0, -1);
        setTimeout(delLine1, DEL_MS);
      }

      delLine2();
    }

    setTimeout(typePhrase, INIT_MS);
  }

  function init() {
    var h1 = document.querySelector('h1.df-lhl');
    if (!h1) return;
    run(h1);
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () { setTimeout(init, 80); });
  }
  document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 80); });
})();
