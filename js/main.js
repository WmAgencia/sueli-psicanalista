/* ════════════════════════════════════════
   Sueli Boni — Interações
   ════════════════════════════════════════ */

/* CONFIGURAÇÃO — número real do WhatsApp (55 + DDD + número) */
const WHATSAPP_NUMBER = "5521964565206";
const WA_MESSAGE = "Olá, Sueli! Conheci seu trabalho pelo site e gostaria de conversar.";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Links WhatsApp ── */
(function initWhatsAppLinks() {
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
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
      link.setAttribute("href", url);
      link.setAttribute("target", "_blank");
    }
  });
})();

/* ── Header ao rolar ── */
(function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ── Barra de progresso de leitura ── */
(function initProgress() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${ratio})`;
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
})();

/* ── Reveal on scroll ── */
(function initReveal() {
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
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  items.forEach((el) => io.observe(el));
})();

/* ── Menu mobile ── */
(function initMobileMenu() {
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
})();

/* ── FAQ acordeão ── */
(function initFaq() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-item__q");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      faqItems.forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq-item__q")?.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();

/* ── Link ativo na navegação ── */
(function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const sections = [...navLinks]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const byId = new Map(
    [...navLinks].map((a) => [a.getAttribute("href").slice(1), a]),
  );
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("is-active"));
          byId.get(entry.target.id)?.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-38% 0px -55% 0px" },
  );
  sections.forEach((s) => io.observe(s));
})();

/* ── Ano no rodapé ── */
document.getElementById("year").textContent = new Date().getFullYear();
