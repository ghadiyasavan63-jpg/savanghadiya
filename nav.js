// Mobile nav toggle + active-page highlighting (shared across all pages)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("is-open");
      const open = links.classList.contains("is-open");
      toggle.textContent = open ? "✕" : "☰";
      toggle.setAttribute("aria-expanded", open);
    });

    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.textContent = "☰";
      })
    );
  }

  const current = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav__links a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("is-active");
  });

  document.querySelectorAll(".subnav a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("is-active");
  });
});

// Lightbox — opens full-size poster view. Any element with [data-lightbox]
// and matching data-src / data-caption attributes will trigger this.
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector(".lightbox__caption");
  const closeBtn = lightbox.querySelector(".lightbox__close");

  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      img.src = el.dataset.src;
      img.alt = el.dataset.caption || "";
      caption.textContent = el.dataset.caption || "";
      lightbox.classList.add("is-open");
    });
  });

  function close() {
    lightbox.classList.remove("is-open");
  }

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

document.addEventListener("DOMContentLoaded", initLightbox);
