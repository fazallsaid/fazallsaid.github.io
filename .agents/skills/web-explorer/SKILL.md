---
name: web-explorer
description: "Mencari, menjelajahi, mengekstrak, dan menganalisa halaman web atau kompetitor berdasarkan URL atau kata kunci. Menganalisa struktur UI/UX, tech stack, konten, dan SEO."
---

# Web Explorer & Site Analyzer Skill

Skill ini memandu AI untuk mencari, menjelajahi, melakukan scraping, dan menganalisa situs web secara mendalam berdasarkan kata kunci atau URL spesifik.

---

## 1. Alur Kerja (Workflow)

### A. Jika Input Berupa Kata Kunci (Keyword Search)
1. Gunakan tool `search_web` untuk mencari informasi atau website kompetitor teratas yang relevan.
2. Identifikasi 2-3 URL target yang paling representatif dari hasil pencarian.
3. Lanjutkan ke langkah analisis URL di bawah.

### B. Jika Input Berupa URL Spesifik (URL Deep Analysis)
Jalankan langkah eksplorasi menggunakan script lokal atau cURL PowerShell:

```powershell
# Quick HTML fetch & header inspection
$url = "https://example.com"
$response = Invoke-WebRequest -Uri $url -UseBasicParsing -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
$html = $response.Content
```

---

## 2. Parameter Analisis Menyeluruh (Deep Analysis Checklist)

Setiap kali menganalisa website, selalu sajikan laporan terstruktur dengan poin-poin berikut:

### 1. Profil & Metatag (Overview & SEO)
- **Judul Halaman (`<title>`) & Meta Description**: Value proposition utama situs.
- **OpenGraph & Twitter Card**: Gambar preview sharing, title, dan summary.
- **Favicon & Brand Identity**: Nama brand, positioning, target audiens.

### 2. Deteksi Tech Stack & Framework
- **Frontend / Styling**: Tailwind CSS, Bootstrap, CSS Modules, Styled Components, dsb.
- **JavaScript Library / Framework**: React, Vue, Next.js, Nuxt, Alpine.js, jQuery, Vanilla JS.
- **Backend / CMS Signature**: Laravel (CSRF tokens, cookie names), WordPress (wp-content), Shopify, Webflow.
- **Font & Typography**: Google Fonts, Typekit, custom web fonts (font-family).

### 3. Analisis UI/UX & Desain Visual
- **Palet Warna Utama**: Dominan background, accent color, primary CTA color, text contrast.
- **Layout & Hierarki**: Hero section, Navigation bar, Sectioning, Footer, Sticky elements.
- **Interaksi & Motion**: Hover states, micro-interactions, animations, modal/popups.
- **Mobile Responsiveness**: Adaptasi layar kecil, hamburger menu, ukuran tombol tap-target.

### 4. Struktur Konten & Call to Action (CTA)
- **Hero Headline & Subheadline**: Kejelasan pesan utama.
- **Value Proposition & Social Proof**: Testimonial, portofolio, logo klien, sertifikasi.
- **Conversion Flow**: Tombol daftar/beli/hubungi, form input, form leads, chat widget.

### 5. Rekomendasi & Insight
- Apa yang sudah sangat bagus dari situs tersebut.
- Celah/kekurangan yang bisa dioptimalkan (UX friction, loading time, kontras, copywriting).
- Cara meng-clone atau mengadopsi elemen terbaiknya ke dalam proyek Ventyra Labs.

---

## 3. Tool Alternatif untuk Browsing Interaktif
Jika user membutuhkan interaksi live (klik tombol, screenshot visual halaman, login, atau render dynamic Single Page App):
- Rekomendasikan command `/browser` di Antigravity.
- Atau gunakan plugin **Browserbase** (`antigravity-plugins-partners/plugin/browse`).

