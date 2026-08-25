/* ════════════════════════════════════════
   Sueli Boni — Interações discretas
   ════════════════════════════════════════ */

/* CONFIGURAÇÃO — substituir pelo número real quando fornecido (formato: 55 + DDD + número) */
const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
const WA_MESSAGE = "Olá, Sueli! Conheci seu trabalho pelo site e gostaria de conversar.";

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

(function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

(function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
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
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
  );
  items.forEach((el) => io.observe(el));
})();

(function initMobileMenu() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (!burger || !nav) return;
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }),
  );
})();

document.getElementById("year").textContent = new Date().getFullYear();
