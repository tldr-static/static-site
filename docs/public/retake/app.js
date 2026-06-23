(function () {
  'use strict';

  // ── Mobile Nav Toggle ──
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  // ── Smooth scroll offset for fixed nav ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = 64;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ── Intersection Observer: reveal sections ──
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.section-wrap, .hero').forEach(function (el) {
    observer.observe(el);
  });

  // ── CTA click tracking ──
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var label = this.textContent.trim().replace(/\\s+/g, '_').toLowerCase();
      if (this.href && this.href.includes('apps.apple.com')) {
        label = 'app_store_click';
      }
      if (window.gtag) {
        gtag('event', 'click', { event_category: 'cta', event_label: label });
      }
    });
  });

  // ── Nav background on scroll ──
  var nav = document.querySelector('.site-navbar');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 40) {
        nav.style.borderBottomColor = 'rgba(41,41,41,0.18)';
      } else {
        nav.style.borderBottomColor = 'rgba(41,41,41,0.12)';
      }
    });
  }
})();
