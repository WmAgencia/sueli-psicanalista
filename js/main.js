/* ════════════════════════════════════════
   Sueli Boni — Interações v2.0
   Premium · Suave · Performático
   ════════════════════════════════════════ */

(function () {
  "use strict";

  /* CONFIGURAÇÃO */
  const WHATSAPP_NUMBER = "5521964565206";
  const WA_MESSAGE = "Olá, Sueli! Conheci seu trabalho pelo site e gostaria de conversar.";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ── Loader ── */
  function initLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;

    if (prefersReducedMotion) {
      loader.classList.add("is-hidden");
      setTimeout(() => loader.remove(), 800);
      return;
    }

    const hideLoader = () => {
      loader.classList.add("is-hidden");
      setTimeout(() => loader.remove(), 800);
    };

    if (document.readyState === "complete") {
      setTimeout(hideLoader, 400);
    } else {
      window.addEventListener("load", () => {
        setTimeout(hideLoader, 500);
      });
      // Fallback de segurança após 2.5s
      setTimeout(hideLoader, 2500);
    }
  }

  /* ── Cursor custom ── */
  function initCursor() {
    const cursor = document.getElementById("cursor");
    if (!cursor || window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const dot = cursor.querySelector(".cursor__dot");
      if (dot) {
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
      }
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      const ring = cursor.querySelector(".cursor__ring");
      if (ring) {
        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";
      }
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverables = document.querySelectorAll(
      "a, button, .pillar, .ig-card, .wa-float, [role='button']"
    );
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
    });
  }

  /* ── Links WhatsApp ── */
  function initWhatsAppLinks() {
    const links = document.querySelectorAll("[data-wa]");
    const numberIsPlaceholder = /X/.test(WHATSAPP_NUMBER);

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (numberIsPlaceholder) {
          e.preventDefault();
          link.blur();
        }
      });
      if (!numberIsPlaceholder) {
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          WA_MESSAGE
        )}`;
        link.setAttribute("href", url);
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  }

  /* ── Header ao rolar ── */
  function initHeaderScroll() {
    const header = document.querySelector(".header");
    if (!header) return;
    let ticking = false;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    };
    onScroll();
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(onScroll);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ── Barra de progresso ── */
  function initProgress() {
    const bar = document.getElementById("progressBar");
    if (!bar) return;
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${ratio})`;
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  /* ── Reveal on scroll ── */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ── Menu mobile ── */
  function initMobileMenu() {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");
    if (!burger || !nav) return;

    const close = () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Abrir menu");
      document.body.style.overflow = "";
    };

    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      document.body.style.overflow = open ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ── FAQ acordeão ── */
  function initFaq() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      const btn = item.querySelector(".faq-item__q");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        faqItems.forEach((other) => {
          other.classList.remove("is-open");
          other
            .querySelector(".faq-item__q")
            ?.setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ── Link ativo na navegação ── */
  function initActiveNav() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    const sections = [...navLinks]
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const byId = new Map(
      [...navLinks].map((a) => [a.getAttribute("href").slice(1), a])
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => {
              a.classList.remove("is-active");
              a.removeAttribute("aria-current");
            });
            const active = byId.get(entry.target.id);
            if (active) {
              active.classList.add("is-active");
              active.setAttribute("aria-current", "page");
            }
          }
        });
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* ── Contadores animados ── */
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length || prefersReducedMotion) {
      counters.forEach((c) => (c.textContent = c.dataset.count));
      return;
    }

    const animateCount = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1800;
      const start = performance.now();
      const startVal = 0;

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const value = Math.floor(startVal + (target - startVal) * eased);
        el.textContent = value;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((c) => io.observe(c));
  }

  /* ── Parallax sutil no hero ── */
  function initParallax() {
    if (prefersReducedMotion) return;
    const hero = document.querySelector(".hero__media");
    const orbs = document.querySelectorAll(".hero__orb");
    if (!hero || !orbs.length) return;

    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 800) {
        hero.style.transform = `translateY(${y * 0.08}px)`;
        orbs.forEach((orb, i) => {
          orb.style.transform = `translate(${y * 0.02 * (i + 1)}px, ${
            y * 0.03
          }px)`;
        });
      }
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(onScroll);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ── Tilt sutil em cards 3D ── */
  function initTilt() {
    if (prefersReducedMotion) return;
    const cards = document.querySelectorAll(".pillar, .ig-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
        card.style.transform = `translateY(-10px) perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* ── Smooth anchor scroll (com offset do header) ── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      });
    });
  }

  /* ── Ano no rodapé ── */
  function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* ── Service Worker (PWA) ── */
  function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    if (location.protocol === "file:") return;
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(() => {});
    });
  }

  /* ── Inicialização ── */
  function init() {
    initLoader();
    initCursor();
    initWhatsAppLinks();
    initHeaderScroll();
    initProgress();
    initReveal();
    initMobileMenu();
    initFaq();
    initActiveNav();
    initCounters();
    initParallax();
    initTilt();
    initSmoothScroll();
    setYear();
    initServiceWorker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
