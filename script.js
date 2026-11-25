(function () {
  'use strict';

  // Ícones Lucide
  function renderIcons() {
    if (window.lucide) window.lucide.createIcons();
  }
  window.addEventListener('load', renderIcons);
  document.addEventListener('DOMContentLoaded', renderIcons);

  // Sombra do header ao rolar
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile
  var menuBtn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  function setMenu(open) {
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.innerHTML = '<i data-lucide="' + (open ? 'x' : 'menu') + '"></i>';
    renderIcons();
  }
  menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) setMenu(false);
  });

  // Filtros do protótipo
  var chips = document.querySelectorAll('.chip');
  var events = document.querySelectorAll('.event');
  var emptyMsg = document.getElementById('emptyMsg');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.dataset.filter;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('active', on);
        c.setAttribute('aria-selected', String(on));
      });
      var visible = 0;
      events.forEach(function (ev) {
        var show = f === 'todos' || ev.dataset.tags.split(' ').indexOf(f) !== -1;
        ev.hidden = !show;
        if (show) { visible++; ev.style.animation = 'none'; ev.offsetHeight; ev.style.animation = ''; }
      });
      emptyMsg.hidden = visible > 0;
    });
  });

  // Destaque do item de menu da seção atual
  var links = document.querySelectorAll('.nav a[data-spy]');
  var sections = Array.prototype.map.call(links, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });
  }

  // Barras animadas e contadores ao entrar na tela
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function fillBars(root) {
    root.querySelectorAll('.track i').forEach(function (b) { b.style.width = b.dataset.w + '%'; });
  }
  function countUp(el) {
    var target = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec, 10) || 0;
    var start = null, dur = 1100;
    function fmt(v) { return v.toFixed(dec).replace('.', ',') + '%'; }
    if (reduce) { el.textContent = fmt(target); return; }
    function step(t) {
      if (start === null) start = t;
      var p = Math.min((t - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var bars = document.querySelector('.bars');
  var stats = document.querySelector('.stats');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        if (en.target === bars) fillBars(bars);
        if (en.target === stats) stats.querySelectorAll('[data-count]').forEach(countUp);
        obs.unobserve(en.target);
      });
    }, { threshold: 0.3 });
    io.observe(bars); io.observe(stats);
  } else {
    fillBars(bars);
  }
})();
