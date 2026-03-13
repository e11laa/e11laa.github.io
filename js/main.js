/* ============================================================
   main.js — elli mia personal portfolio
   Vanilla JS: mobile nav toggle, smooth scroll, active nav link
   ============================================================ */

(function () {
  "use strict";

  /* ── Mobile nav toggle / Focus trap ───────────────────────── */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    const mainContent = document.getElementById("main-content");
    const footer = document.querySelector(".site-footer");

    function setMenuState(open) {
      navToggle.setAttribute("aria-expanded", String(open));
      navLinks.classList.toggle("open", open);
      
      /* Focus trap via inert and scroll lock */
      if (mainContent) mainContent.inert = open;
      if (footer) footer.inert = open;
      document.body.style.overflow = open ? "hidden" : "";
    }

    navToggle.addEventListener("click", function () {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isExpanded);
    });

    /* Close mobile menu when a link is clicked */
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuState(false);
      });
    });

    /* Close mobile menu on Escape key */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("open")) {
        setMenuState(false);
        navToggle.focus();
      }
    });
  }

  /* ── Active nav link on scroll ────────────────────────────── */
  const sections = document.querySelectorAll("main section[id]");
  const navItems = document.querySelectorAll("#nav-links a[href^='#']");

  if (sections.length && navItems.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navItems.forEach(function (a) {
              a.classList.toggle(
                "active",
                a.getAttribute("href") === "#" + id
              );
            });
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ── Reveal email on click ──────────────────────────────────── */
  var emailBtn = document.getElementById('reveal-email-btn');
  var emailLink = document.getElementById('contact-email-link');
  var emailText = document.getElementById('contact-email-text');
  
  if (emailBtn && emailLink && emailText) {
    emailBtn.addEventListener('click', function () {
      var user = 'elliprod000';
      var domain = 'gmail.com';
      var address = user + '@' + domain;
      emailText.textContent = address;
      emailLink.href = 'mailto:' + address;
      emailLink.removeAttribute('hidden');
      emailBtn.setAttribute('hidden', '');

      // Copy to clipboard safely
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(address).then(function() {
          emailText.textContent = 'コピーしました / Copied!';
          setTimeout(function() {
            emailText.textContent = address;
          }, 2000);
        }).catch(function() { /* Ignore */ });
      }
    });
  }

  /* ── Language toggle ────────────────────────────────────────── */
  var langBtn = document.getElementById('lang-toggle');
  
  if (langBtn) {
    /* Inject sr-only warning for external links BEFORE collecting translatable nodes */
    var extLinks = document.querySelectorAll('a[target="_blank"]');
    extLinks.forEach(function(link) {
      // Don't inject if already exists (e.g., dynamically re-run)
      if (link.querySelector('.sr-only')) return;
      var span = document.createElement('span');
      span.className = 'sr-only';
      span.setAttribute('data-en', ' (opens in a new window)');
      span.setAttribute('data-ja', ' (新しいタブで開く)');
      span.textContent = ' (新しいタブで開く)';
      link.appendChild(span);
    });

    /* All elements with both data-en and data-ja */
    var nodes = document.querySelectorAll('[data-en][data-ja]');
    /* Elements that contain child HTML tags (em, strong, etc.) */
    var htmlNodes = document.querySelectorAll('[data-i18n-html="true"]');

    function applyLang(lang) {
      /* Plain-text nodes */
      nodes.forEach(function (el) {
        if (el.getAttribute('data-i18n-html') !== 'true') {
          el.textContent = el.getAttribute('data-' + lang);
        }
      });
      /* Rich-HTML nodes */
      htmlNodes.forEach(function (el) {
        el.innerHTML = el.getAttribute('data-' + lang);
      });
      /* ARIA label nodes */
      var ariaNodes = document.querySelectorAll('[data-aria-en][data-aria-ja]');
      ariaNodes.forEach(function (el) {
        el.setAttribute('aria-label', el.getAttribute('data-aria-' + lang));
      });
      /* Hide elements whose data-ja is empty string */
      document.querySelectorAll('[data-ja=""]').forEach(function (el) {
        if (lang === 'ja') {
          el.setAttribute('hidden', '');
        } else {
          el.removeAttribute('hidden');
        }
      });
      /* Sync html[lang] for screen readers / SEO */
      document.documentElement.lang = lang;
      /* Update button label */
      langBtn.textContent = lang === 'en' ? 'JAPANESE' : 'ENGLISH';
      langBtn.setAttribute('aria-label', lang === 'en' ? 'Switch to Japanese' : 'Switch to English');
      langBtn.setAttribute('data-current-lang', lang);
      /* Persist preference */
      try { localStorage.setItem('ellimia_lang', lang); } catch (e) { }
    }

    langBtn.addEventListener('click', function () {
      var current = langBtn.getAttribute('data-current-lang');
      applyLang(current === 'en' ? 'ja' : 'en');
    });

    /* On load: restore saved preference; or auto-detect from browser language */
    var saved = (function () { try { return localStorage.getItem('ellimia_lang'); } catch (e) { return null; } }());
    if (saved === 'en') {
      applyLang('en');
    } else if (saved === 'ja') {
      applyLang('ja');
    } else {
      /* No manual preference saved — detect browser language */
      var browserLang = (navigator.language || navigator.userLanguage || 'ja').toLowerCase();
      if (!browserLang.startsWith('ja')) {
        applyLang('en');
      }
    }
  }
})();
