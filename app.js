// ============================================================
//  MIKUPEDIA — APP.JS
//  Jangan ubah file ini kecuali kamu tahu JavaScript.
//  Semua konfigurasi produk ada di products.js
// ============================================================

(function () {
  "use strict";

  // ── 1. Isi konten dari SITE_CONFIG ──────────────────────
  function initSiteConfig() {
    const cfg = SITE_CONFIG;

    // Nav
    document.getElementById("nav-tiktok").href = cfg.socialLinks.tiktok;

    // Hero
    document.getElementById("hero-label").textContent   = cfg.heroLabel;
    document.getElementById("hero-title").textContent   = cfg.heroTitle;
    document.getElementById("hero-subtitle").textContent = cfg.heroSubtitle;
    document.getElementById("hero-cta").textContent     = cfg.ctaText;

    // Footer
    document.getElementById("footer-text").textContent  = cfg.footerText;
    document.getElementById("footer-tiktok").href       = cfg.socialLinks.tiktok;
    document.getElementById("footer-shopee").href       = cfg.socialLinks.shopee;

    // Title tag
    document.title = `${cfg.siteName} — ${cfg.tagline}`;

    // OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = `${cfg.siteName} — ${cfg.tagline}`;
  }

  // ── 2. Ticker berjalan ───────────────────────────────────
  function initTicker() {
    const items = PRODUCTS.map(p =>
      `<span class="ticker-item"><span class="dot"></span>${p.name} — ${p.price}</span>`
    ).join("");
    // Duplikasi agar loop seamless
    const track = document.getElementById("ticker-track");
    track.innerHTML = items + items;
  }

  // ── 3. Filter Kategori ───────────────────────────────────
  let activeCategory = "all";

  function initFilters() {
    const bar = document.getElementById("filter-bar");
    CATEGORIES.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (cat.id === "all" ? " active" : "");
      btn.textContent = cat.label;
      btn.dataset.id  = cat.id;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = cat.id;
        renderProducts();
      });
      bar.appendChild(btn);
    });
  }

  // ── 4. Render Produk ─────────────────────────────────────
  function renderStars(rating) {
    const full  = Math.floor(rating);
    const half  = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
  }

  function badgeClass(badge) {
    return "badge-" + badge.replace(/\s+/g, "-");
  }

  function renderProducts() {
    const grid  = document.getElementById("products-grid");
    const empty = document.getElementById("empty-state");
    grid.innerHTML = "";

    const filtered = activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCategory);

    if (filtered.length === 0) {
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";

    filtered.forEach((product, idx) => {
      const card = document.createElement("article");
      card.className = "card";
      card.style.animationDelay = `${idx * 0.06}s`;

      card.innerHTML = `
        <div class="card-img-wrap">
          <img class="card-img" src="${product.image}" alt="${product.name}" loading="lazy" />
          ${product.badge ? `<span class="card-badge ${badgeClass(product.badge)}">${product.badge}</span>` : ""}
        </div>
        <div class="card-body">
          <p class="card-name">${product.name}</p>
          <div class="card-pricing">
            <span class="card-price">${product.price}</span>
            ${product.discount ? `<span class="card-discount">${product.discount}</span>` : ""}
          </div>
          <div class="card-meta">
            <span class="card-rating">${renderStars(product.rating)} ${product.rating}</span>
            <span class="card-sold">${product.sold} terjual</span>
          </div>
          <a class="card-shopee-cta" href="${product.shopeeUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
            🛒 Beli di Shopee
          </a>
        </div>
      `;

      card.addEventListener("click", () => openModal(product));
      grid.appendChild(card);
    });
  }

  // ── 5. Modal ─────────────────────────────────────────────
  function openModal(product) {
    document.getElementById("modal-img").src          = product.image;
    document.getElementById("modal-img").alt          = product.name;
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById("modal-price").textContent = product.price;
    document.getElementById("modal-shopee-btn").href  = product.shopeeUrl;

    const badgeEl = document.getElementById("modal-badge");
    if (product.badge) {
      badgeEl.textContent = product.badge;
      badgeEl.className   = `modal-badge card-badge ${badgeClass(product.badge)}`;
      badgeEl.style.display = "inline-block";
    } else {
      badgeEl.style.display = "none";
    }

    const discEl = document.getElementById("modal-discount");
    discEl.textContent   = product.discount || "";
    discEl.style.display = product.discount ? "inline" : "none";

    document.getElementById("modal-rating-stars").textContent =
      `⭐ ${renderStars(product.rating)} (${product.rating})`;
    document.getElementById("modal-sold").textContent =
      `📦 ${product.sold} terjual`;

    document.getElementById("modal-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.getElementById("modal-overlay").classList.remove("open");
    document.body.style.overflow = "";
  }

  function initModal() {
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-overlay").addEventListener("click", function (e) {
      if (e.target === this) closeModal();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") closeModal();
    });
  }

  // ── 6. Nav scroll effect ─────────────────────────────────
  function initNav() {
    const nav = document.getElementById("nav");
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });
  }

  // ── INIT ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    initSiteConfig();
    initTicker();
    initFilters();
    renderProducts();
    initModal();
    initNav();
  });

})();
