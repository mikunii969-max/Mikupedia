// ============================================================
//  MIKUPEDIA — KONFIGURASI PRODUK
//  Edit file ini untuk mengubah produk, gambar, harga, & link
// ============================================================

const SITE_CONFIG = {
  siteName: "Mikupedia",
  tagline: "Produk Pilihan Terbaik",
  description: "Kurator produk TikTok terpercaya — langsung ke Shopee.",
  heroLabel: "🔥 Trending di TikTok",
  heroTitle: "Produk Viral,\nHarga Terbaik",
  heroSubtitle: "Semua yang kamu lihat di FYP, ada di sini. Langsung beli di Shopee.",
  ctaText: "Belanja Sekarang",
  footerText: "© 2025 Mikupedia. Affiliate Shopee Indonesia.",
  socialLinks: {
    tiktok: "https://tiktok.com/@mikumovie",  // ganti dengan TikTok kamu
    shopee: "https://shopee.co.id",
  }
};

const CATEGORIES = [
  { id: "all",      label: "Semua" },
  { id: "beauty",   label: "Beauty" },
  { id: "gadget",   label: "Gadget" },
  { id: "fashion",  label: "Fashion" },
  { id: "lifestyle",label: "Lifestyle" },
];

// ============================================================
//  PRODUK — Tambah atau hapus objek di array ini
// ============================================================
// Setiap produk memiliki:
//  id        : unik, huruf kecil tanpa spasi
//  name      : nama produk
//  category  : harus sesuai dengan id di CATEGORIES
//  image     : URL gambar produk (bisa dari Shopee, Imgur, dll)
//  price     : harga asli (format: "Rp 150.000")
//  discount  : harga coret / harga sebelum diskon (opsional, bisa "")
//  badge     : label badge (contoh: "BEST SELLER", "NEW", "VIRAL") — bisa ""
//  rating    : angka 1-5
//  sold      : jumlah terjual (contoh: "2.3rb")
//  shopeeUrl : link affiliate Shopee kamu
// ============================================================

const PRODUCTS = [
  {
    id: "serum-glowing",
    name: "Serum Glowing Viral TikTok",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
    price: "Rp 89.000",
    discount: "Rp 150.000",
    badge: "VIRAL",
    rating: 4.8,
    sold: "12rb",
    shopeeUrl: "https://shopee.co.id/link-affiliate-kamu-di-sini"
  },
  {
    id: "sunscreen-korea",
    name: "Sunscreen Korea SPF 50+",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400&q=80",
    price: "Rp 65.000",
    discount: "Rp 120.000",
    badge: "BEST SELLER",
    rating: 4.9,
    sold: "28rb",
    shopeeUrl: "https://shopee.co.id/link-affiliate-kamu-di-sini"
  },
  {
    id: "earphone-tws",
    name: "TWS Earphone Noise Cancel",
    category: "gadget",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
    price: "Rp 149.000",
    discount: "Rp 280.000",
    badge: "HOT",
    rating: 4.7,
    sold: "5.6rb",
    shopeeUrl: "https://shopee.co.id/link-affiliate-kamu-di-sini"
  },
  {
    id: "powerbank-slim",
    name: "Powerbank Slim 10.000mAh",
    category: "gadget",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80",
    price: "Rp 119.000",
    discount: "Rp 200.000",
    badge: "",
    rating: 4.6,
    sold: "3.2rb",
    shopeeUrl: "https://shopee.co.id/link-affiliate-kamu-di-sini"
  },
  {
    id: "tote-bag-viral",
    name: "Tote Bag Aesthetic Viral",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80",
    price: "Rp 55.000",
    discount: "Rp 95.000",
    badge: "NEW",
    rating: 4.5,
    sold: "8.1rb",
    shopeeUrl: "https://shopee.co.id/link-affiliate-kamu-di-sini"
  },
  {
    id: "lampu-ring",
    name: "Ring Light LED 10 Inch",
    category: "gadget",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
    price: "Rp 75.000",
    discount: "Rp 130.000",
    badge: "",
    rating: 4.7,
    sold: "9.4rb",
    shopeeUrl: "https://shopee.co.id/link-affiliate-kamu-di-sini"
  },
  {
    id: "parfum-lokal",
    name: "Parfum Lokal Tahan Lama",
    category: "lifestyle",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80",
    price: "Rp 99.000",
    discount: "Rp 175.000",
    badge: "VIRAL",
    rating: 4.8,
    sold: "15rb",
    shopeeUrl: "https://shopee.co.id/link-affiliate-kamu-di-sini"
  },
  {
    id: "tumbler-stanless",
    name: "Tumbler Stainless 600ml",
    category: "lifestyle",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    price: "Rp 45.000",
    discount: "",
    badge: "",
    rating: 4.4,
    sold: "4.7rb",
    shopeeUrl: "https://shopee.co.id/link-affiliate-kamu-di-sini"
  },
];
