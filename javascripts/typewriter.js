(function () {
  'use strict';

  var PHRASES = [
    { line1: '让知识', line2: '回归连续' },
    { line1: '让信息', line2: '回归透明' },
  ];

  var TYPE_MS  = 68;   // ms per char while typing
  var PAUSE_MS = 1800; // pause after full phrase before clearing
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
      /* 淡出 → 清空 → 淡入 → 开始打下一句 */
      setActive(false);
      h1.style.transition = 'opacity 90ms ease';
      h1.style.opacity = '0';
      setTimeout(function () {
        span1.textContent = '';
        span2.textContent = '';
        br.style.display = 'none';
        phraseIdx = (phraseIdx + 1) % PHRASES.length;
        h1.style.opacity = '1';
        setTimeout(function () {
          h1.style.transition = '';
          setActive(true);
          typePhrase();
        }, 500);
      }, 100);
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
