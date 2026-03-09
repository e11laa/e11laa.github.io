/* ============================================================
   main.js — elli mia personal portfolio
   Vanilla JS: mobile nav toggle, smooth scroll, active nav link
   ============================================================ */

(function () {
  "use strict";

  /* ── Mobile nav toggle ────────────────────────────────────── */
  const navToggle = document.getElementById("nav-toggle");
  const navLinks  = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("open", !expanded);
    });

    /* Close mobile menu when a link is clicked */
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("open");
      });
    });

    /* Close mobile menu on Escape key */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("open")) {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("open");
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
})();

// ── Reveal email on click ──────────────────────────────────────
(function () {
  const btn = document.getElementById('reveal-email-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const user = 'elliprod000';
    const domain = 'gmail.com';
    const address = user + '@' + domain;
    const link = document.getElementById('contact-email-link');
    const text = document.getElementById('contact-email-text');
    if (link && text) {
      text.textContent = address;
      link.href = 'mailto:' + address;
      link.style.display = '';
      btn.style.display = 'none';
    }
  });
}());
