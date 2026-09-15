/**
 * Template ZIP Downloader (URL Parameter Triggered)
 * Created for Fazal Said's Templates Showcase
 * Parameter support: ?download / ?download=zip / ?download=true / ?zip / ?zip=1
 * Tanpa tombol permanen di halaman.
 */
(function() {
    'use strict';

    if (window.__TEMPLATE_DOWNLOADER_INITIALIZED__) return;
    window.__TEMPLATE_DOWNLOADER_INITIALIZED__ = true;

    // Database manifest semua template dan file-filenya
    const TEMPLATE_MANIFEST = {
  "admin/marketing_analytical": [
    "appearance-banners.html",
    "appearance-testimonials.html",
    "campaigns.html",
    "cms-blog-form.html",
    "cms-blog.html",
    "content-pages.html",
    "content-portfolio.html",
    "index.html",
    "leads-inbox.html",
    "login.html",
    "performance.html",
    "settings.html",
    "system-users.html"
  ],
  "automotive/bengkel-mobil-motor/bengkelprima": [
    "index.html"
  ],
  "automotive/jasa-cuci-kendaraan/cucikilap": [
    "index.html"
  ],
  "automotive/klub-modifikasi/modifkeren": [
    "index.html"
  ],
  "automotive/sewa-motor/motorjalan": [
    "index.html"
  ],
  "automotive/showroom-mobil-motor/mobilimpian": [
    "index.html"
  ],
  "automotive/toko-sparepart/sukucadangasli": [
    "index.html"
  ],
  "community-social/aplikasi-kencan-online/jodohpasti": [
    "index.html"
  ],
  "community-social/forum-diskusi-online/ruangbicara": [
    "index.html"
  ],
  "community-social/ikatan-alumni-sekolah-kampus/jejakalumni": [
    "index.html"
  ],
  "community-social/komunitas-lingkungan/bumihijau": [
    "index.html"
  ],
  "community-social/komunitas-orang-tua/duniaparenting": [
    "index.html"
  ],
  "community-social/komunitas-relawan/aksinyata": [
    "index.html"
  ],
  "corporate/accounting-keuangan/hitungpasti": [
    "images/hero-finance.png",
    "index.html"
  ],
  "corporate/arsitek-desain-bangunan/arsivisi": [
    "images/hero-arch.png",
    "index.html"
  ],
  "corporate/business-consultant/solusibisnis": [
    "images/hero-consultant.png",
    "index.html"
  ],
  "corporate/construction-kontraktor/bangunmegah": [
    "index.html"
  ],
  "corporate/creative-agency/nexus": [
    "index.html"
  ],
  "corporate/creative-agency-digital-marketing/ideliar": [
    "hero-bg.png",
    "index.html"
  ],
  "corporate/law-firm-konsultan-hukum/hukumtegak": [
    "images/law-hero.png",
    "index.html"
  ],
  "edu/academicPortal/EduSmart": [
    "billing.html",
    "grades.html",
    "index.html",
    "login.html",
    "profile.html",
    "schedule.html"
  ],
  "edu/coding-bootcamp/kodemaster": [
    "index.html"
  ],
  "edu/course-online-lms/akademidigital": [
    "index.html"
  ],
  "edu/perpustakaan-digital/pustakamaya": [
    "index.html"
  ],
  "edu/sistem-informasi-sekolah/sekolahpintar": [
    "index.html"
  ],
  "edu/situs-donasi-yayasan/berbagikasih": [
    "index.html"
  ],
  "edu/tk-paud/tamanceria": [
    "index.html"
  ],
  "event-entertainment/event-organizer/meriahacara": [
    "index.html"
  ],
  "event-entertainment/fotografer-videografer/lensaajaib": [
    "index.html"
  ],
  "event-entertainment/jadwal-bioskop-review-film/layarkaca": [
    "index.html"
  ],
  "event-entertainment/music-streaming-platform/nadakita": [
    "index.html"
  ],
  "event-entertainment/portal-berita-game/zonagamer": [
    "index.html"
  ],
  "event-entertainment/website-konser-event/tiketsultan": [
    "index.html"
  ],
  "expedition/Paket": [
    "about.html",
    "career.html",
    "contact.html",
    "index.html",
    "partner.html"
  ],
  "fashion-lifestyle/batik-and-kain-nusantara/warisanbatik": [
    "index.html"
  ],
  "fashion-lifestyle/batik-kain-nusantara/warisanbatik": [
    "index.html"
  ],
  "fashion-lifestyle/brand-streetwear-lokal/gayajalanan": [
    "index.html"
  ],
  "fashion-lifestyle/jam-tangan-mewah/waktumewah": [
    "index.html"
  ],
  "fashion-lifestyle/thrift-shop/bajubekasmewah": [
    "index.html"
  ],
  "fashion-lifestyle/toko-kacamata/kacamatagaya": [
    "index.html"
  ],
  "fashion-lifestyle/toko-sneakers/sepatukeren": [
    "index.html"
  ],
  "food/angkringan": [
    "bk.jpg",
    "index.html"
  ],
  "food/ayamgeprekjuara": [
    "img/ayam_geprek.png",
    "index.html"
  ],
  "food/catering-harian/dapurbunda": [
    "index.html"
  ],
  "food/coffee-shop/kopisenja": [
    "index.html"
  ],
  "food/frozen-food-store/bekumart": [
    "index.html"
  ],
  "food/toko-roti-kue/rotikuenak": [
    "index.html"
  ],
  "food/web-kasir-kafe-pos/poskafe": [
    "index.html"
  ],
  "food/website-umkm-angkringan/angkringangaul": [
    "index.html"
  ],
  "fun/countdown_new_year": [
    "index.html"
  ],
  "fun/lyrics/odoru": [
    "index.html",
    "odoru.mp3",
    "script.js",
    "style-pop.css",
    "style.css"
  ],
  "fun/tombol-pindah": [
    "index.html"
  ],
  "fun/vtuber-personal-web/adeline": [
    "img/adeline.png",
    "img/adeline_1.png",
    "img/adeline_2.png",
    "img/adeline_3.png",
    "img/adeline_4.png",
    "index3.html",
    "index5.html",
    "index6.html",
    "index7.html"
  ],
  "fun/vtuber-personal-web/angie": [
    "backup/index.html",
    "backup/index2.html",
    "backup/index3.html",
    "backup/index4.html",
    "img/aNG.png",
    "img/aNG_1.png",
    "img/aNG_2.png",
    "img/aNG_logo.png",
    "img/♡anG様.png",
    "index.html"
  ],
  "fun/vtuber-personal-web/azki": [
    "img/azki.png",
    "img/azki_1.png",
    "img/azki_2.png",
    "index.html",
    "index2.html"
  ],
  "fun/vtuber-personal-web/choelia-shiraken": [
    "img/choelia.png",
    "img/choelia_art_1.png",
    "img/choelia_shiraken_logo.png",
    "index.html"
  ],
  "fun/vtuber-personal-web/hakoz-baelz": [
    "img/hakos_baelz.png",
    "img/hakoz_baelz.png",
    "index.html"
  ],
  "fun/vtuber-personal-web/mumei": [
    "img/mumei.png",
    "img/mumei_1.png",
    "img/mumei_2.png",
    "img/mumei_3.png",
    "index.html",
    "index2.html",
    "index3.html"
  ],
  "fun/vtuber-personal-web/sucrose": [
    "img/sucrose_oneplus.png",
    "index.html"
  ],
  "fun/vtuber-personal-web/todoroki-hajime": [
    "img/Todoroki-Hajime_pr-img_02.png",
    "img/todoroki_hajime_art_1.jpg",
    "img/todoroki_hajime_art_2.jpg",
    "index.html"
  ],
  "games/arcade": [
    "img/bg.jpeg",
    "img/enemy_left.png",
    "img/enemy_right.png",
    "img/pose_depan.png",
    "img/pose_samping_kanan.png",
    "img/pose_samping_kiri.png",
    "index.html"
  ],
  "gov/village/kebonagung": [
    "assets/img/gerabah.png",
    "assets/img/harvest.png",
    "assets/img/hero.png",
    "assets/img/kaliklepu.png",
    "assets/img/meeting.png",
    "assets/img/pangasan.png",
    "assets/img/videosz.png",
    "index.html"
  ],
  "health/apotek/apoplus": [
    "barang-expired.html",
    "img/arrazi_logo_horizontal.png",
    "img/arrazi_logo_single.png",
    "img/arrazi_logo_vertical.png",
    "index.html",
    "kasir.html",
    "laporan-keuangan.html",
    "login.html",
    "manajemen-user.html",
    "master-barang.html",
    "pembelian.html",
    "pengaturan.html",
    "penjualan.html",
    "stock-opname.html"
  ],
  "health/apotek-online/sehatcepat": [
    "index.html"
  ],
  "health/gym-fitness-center/ironbodygym": [
    "index.html"
  ],
  "health/health-information": [
    "artikel.html",
    "direktori-penyakit.html",
    "index.html",
    "tanya-dokter.html"
  ],
  "health/hospital-system/rs-dr-suroso": [
    "appointments.html",
    "doctors.html",
    "index.html",
    "patients.html",
    "queue.html"
  ],
  "health/hospital-system/rs-harapan-insan-sendawar": [
    "dashboard.html",
    "dokter.html",
    "img/gedung.png",
    "img/rs_harapan_insan_sendawar.png",
    "index.html",
    "login.html",
    "pasien.html"
  ],
  "health/klinik-gigi/gigiputih": [
    "index.html"
  ],
  "health/klinik-kecantikan-skincare/glowupclinic": [
    "index.html"
  ],
  "health/rumah-sakit-klinik-24-jam/rumahsehat": [
    "index.html"
  ],
  "health/studio-yoga-pilates/jiwatenang": [
    "index.html"
  ],
  "hobbies-interest/blog-resep-masakan/reseplezat": [
    "index.html"
  ],
  "hobbies-interest/galeri-lukisan-seni/kanvaswarna": [
    "index.html"
  ],
  "hobbies-interest/perlengkapan-hiking-camping/jejakpetualang": [
    "index.html"
  ],
  "hobbies-interest/perlengkapan-memancing/pancingmania": [
    "index.html"
  ],
  "hobbies-interest/toko-sepeda-aksesoris/gowessehat": [
    "index.html"
  ],
  "hobbies-interest/toko-sepeda-and-aksesoris/gowessehat": [
    "index.html"
  ],
  "hobbies-interest/toko-tanaman-hias/kebunhijau": [
    "index.html"
  ],
  "hospitality-travel/gyg": [
    "cart.html",
    "detail.html",
    "index.html"
  ],
  "hospitality-travel/hotel-villa-booking/stayease": [
    "index.html"
  ],
  "hospitality-travel/jasa-visa-paspor/pasporkilat": [
    "index.html"
  ],
  "hospitality-travel/paket-wisata-tour-agent/jelajahdunia": [
    "index.html"
  ],
  "hospitality-travel/resort-and-spa/surgatropis": [
    "index.html"
  ],
  "hospitality-travel/resort-spa/surgatropis": [
    "index.html"
  ],
  "hospitality-travel/sewa-mobil-travel/jalansantai": [
    "index.html"
  ],
  "hospitality-travel/tiket-pesawat-kereta/tiketlibur": [
    "index.html"
  ],
  "layanan-services/jasa-kebersihan-rumah/rumahresik": [
    "index.html"
  ],
  "layanan-services/jasa-pindahan/pindahlancar": [
    "index.html"
  ],
  "layanan-services/jasa-rental-mobil/otosewa": [
    "index.html"
  ],
  "layanan-services/jasa-tukang-reparasi-ac/tukangahli": [
    "index.html"
  ],
  "layanan-services/laundry-kiloan-sepatu/cucikilat": [
    "index.html"
  ],
  "layanan-services/sewa-buku-komik/bukukita": [
    "index.html"
  ],
  "news-magazine/berita-ekonomi-and-bisnis/wartabisnis": [
    "index.html"
  ],
  "news-magazine/berita-ekonomi-bisnis/wartabisnis": [
    "index.html"
  ],
  "news-magazine/berita-olahraga/kabarolahraga": [
    "index.html"
  ],
  "news-magazine/berita-politik-and-hukum/suararakyat": [
    "index.html"
  ],
  "news-magazine/berita-politik-hukum/suararakyat": [
    "index.html"
  ],
  "news-magazine/info-viral-and-trending/gosipviral": [
    "index.html"
  ],
  "news-magazine/info-viral-trending/gosipviral": [
    "index.html"
  ],
  "news-magazine/majalah-gaya-hidup/gayahidup": [
    "index.html"
  ],
  "news-magazine/portal-berita-nasional/beritaterkini": [
    "index.html"
  ],
  "personal/designer": [
    "index.html"
  ],
  "pet-animals/dokter-hewan-klinik/dokterhewanku": [
    "index.html"
  ],
  "pet-animals/ikan-hias-aquascape/duniaair": [
    "index.html"
  ],
  "pet-animals/penitipan-hewan/hotelkucing": [
    "index.html"
  ],
  "pet-animals/pusat-adopsi-hewan/adopsiteman": [
    "index.html"
  ],
  "pet-animals/salon-hewan-grooming/salonhewan": [
    "index.html"
  ],
  "pet-animals/toko-makanan-hewan/duniahewan": [
    "index.html"
  ],
  "posyandu": [
    "data_balita.html",
    "detail_balita.html",
    "index.html",
    "laporan.html"
  ],
  "real-estate/info-kost/infokost": [
    "index.html"
  ],
  "real-estate/jasa-desain-interior/desaininterior": [
    "index.html"
  ],
  "real-estate/jual-beli-tanah/tanahemas": [
    "index.html"
  ],
  "real-estate/property-agent-jual-rumah/rumahidaman": [
    "index.html"
  ],
  "real-estate/sewa-jual-apartemen/apartemenmewah": [
    "index.html"
  ],
  "real-estate/sewa-ruang-kerja/ruangkerja": [
    "index.html"
  ],
  "religion/belajar-quran-online/qurandigital": [
    "index.html"
  ],
  "religion/kalender-kegiatan-agama/agendaumat": [
    "index.html"
  ],
  "religion/komunitas-keagamaan/komunitasiman": [
    "index.html"
  ],
  "religion/lembaga-zakat-sedekah/sedekahberkah": [
    "index.html"
  ],
  "religion/website-gereja-kristen/cahayakasih": [
    "index.html"
  ],
  "religion/website-masjid-islam/infoumat": [
    "index.html"
  ],
  "rental/carrent": [
    "about.html",
    "booking.html",
    "contact.html",
    "dashboard.html",
    "fleet.html",
    "index.html",
    "login.html",
    "privacy.html",
    "register.html",
    "services.html",
    "terms.html"
  ],
  "retail-e-commerce/baby-shop-perlengkapan-bayi/duniasikecil": [
    "index.html"
  ],
  "retail-e-commerce/fashion-brand/ootdstyle": [
    "index.html",
    "ootd_hero_bg.webp",
    "ootd_hero_luxury.png"
  ],
  "retail-e-commerce/florist-toko-bunga/bungaabadi": [
    "index.html"
  ],
  "retail-e-commerce/furniture-interior/estetikaruang": [
    "index.html"
  ],
  "retail-e-commerce/gadget-elektronik/technogadget": [
    "index.html"
  ],
  "retail-e-commerce/home-appliances-elektronik-rumah-tangga/rumahcerdas": [
    "index.html"
  ],
  "retail-e-commerce/sport-equipment-alat-olahraga/juarasport": [
    "index.html"
  ],
  "retail-e-commerce/stationery-alat-tulis-kantor/penakertas": [
    "index.html"
  ],
  "retail-e-commerce/toko-mainan/duniamainan": [
    "index.html"
  ],
  "retail-e-commerce/toko-perhiasan/kilaupermata": [
    "index.html"
  ],
  "retail-e-commerce/toko-sembako-online/belanjaharian": [
    "index.html"
  ],
  "technology/aplikasi-mobile-showcase/aplikasijuara": [
    "index.html"
  ],
  "technology/cyber-security-services/perisaidigital": [
    "index.html"
  ],
  "technology/jasa-pembuatan-aplikasi/kodekreatif": [
    "index.html"
  ],
  "technology/portal-berita-teknologi/beritatekno": [
    "index.html"
  ],
  "technology/software-as-a-service/rocketlaunch": [
    "index.html"
  ],
  "technology/web-hosting-provider/awancepat": [
    "index.html"
  ],
  "ticket/concert/blood": [
    "index.html"
  ],
  "ticket/concert/dreamscape": [
    "index.html"
  ],
  "ticket/concert/etheria": [
    "index.html"
  ],
  "ticket/concert/inferno": [
    "index.html"
  ],
  "ticket/concert/voltage": [
    "am.jpg",
    "index.html",
    "paramore.png",
    "timpala.jpg",
    "ts.jpg"
  ],
  "wedding/catering-pernikahan/rasapesta": [
    "index.html"
  ],
  "wedding/foto-prewedding-wedding/momenbahagia": [
    "index.html"
  ],
  "wedding/jasa-wo/pelaminanindah": [
    "index.html"
  ],
  "wedding/sewa-gaun-pengantin/gaunimpian": [
    "index.html"
  ],
  "wedding/toko-souvenir/kenanganmanis": [
    "index.html"
  ],
  "wedding/undangan-pernikahan-digital/janjisuci": [
    "index.html"
  ]
};

    // Deteksi script tag dan atribut data-template
    const currentScript = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        for (let i = scripts.length - 1; i >= 0; i--) {
            if (scripts[i].src && scripts[i].src.includes('template-downloader.js')) {
                return scripts[i];
            }
        }
        return null;
    })();

    let templateKey = currentScript ? currentScript.getAttribute('data-template') : null;

    // Fallback: deteksi otomatis dari window.location
    if (!templateKey || !TEMPLATE_MANIFEST[templateKey]) {
        const fullPath = window.location.pathname.replace(/\\/g, '/');
        const matchTemplates = fullPath.match(/\/templates\/(.+)$/);
        if (matchTemplates) {
            let sub = matchTemplates[1];
            sub = sub.replace(/\/[^\/]+\.html$/, '').replace(/\/$/, '');
            for (const key of Object.keys(TEMPLATE_MANIFEST)) {
                if (sub.endsWith(key) || key.endsWith(sub)) {
                    templateKey = key;
                    break;
                }
            }
        }
    }

    if (!templateKey) {
        const pathParts = window.location.pathname.replace(/\\/g, '/').split('/');
        for (const key of Object.keys(TEMPLATE_MANIFEST)) {
            const folderName = key.split('/').pop();
            if (pathParts.includes(folderName)) {
                templateKey = key;
                break;
            }
        }
    }

    const templateFolderName = templateKey ? templateKey.split('/').pop() : 'template';
    const templateFiles = (templateKey && TEMPLATE_MANIFEST[templateKey]) ? TEMPLATE_MANIFEST[templateKey] : ['index.html'];

    // Dynamic Loader JSZip
    function loadJSZip() {
        return new Promise(function(resolve, reject) {
            if (window.JSZip) return resolve(window.JSZip);

            const scriptPath = currentScript && currentScript.src ? currentScript.src : '';
            const localZipSrc = scriptPath ? scriptPath.replace(/template-downloader\.js.*$/, 'jszip.min.js') : 'jszip.min.js';

            const script = document.createElement('script');
            script.src = localZipSrc;
            script.onload = function() {
                if (window.JSZip) resolve(window.JSZip);
                else tryCDN();
            };
            script.onerror = tryCDN;

            function tryCDN() {
                const cdnScript = document.createElement('script');
                cdnScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
                cdnScript.onload = function() {
                    if (window.JSZip) resolve(window.JSZip);
                    else reject(new Error('JSZip tidak berhasil dimuat'));
                };
                cdnScript.onerror = function() {
                    reject(new Error('Gagal memuat JSZip dari CDN dan lokal'));
                };
                document.head.appendChild(cdnScript);
            }

            document.head.appendChild(script);
        });
    }

    // Fungsi notifikasi status download (toast kecil elegan yang hilang otomatis)
    function showToast(message, type, progress) {
        let toast = document.getElementById('tpl-dl-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'tpl-dl-toast';
            toast.style.cssText = [
                'position: fixed',
                'bottom: 24px',
                'right: 24px',
                'z-index: 9999999',
                'background: rgba(12, 12, 12, 0.95)',
                'color: #F0EBE3',
                'padding: 12px 20px',
                'border-radius: 50px',
                'border: 1px solid rgba(212, 168, 67, 0.5)',
                'box-shadow: 0 10px 30px rgba(0,0,0,0.7), 0 0 20px rgba(212, 168, 67, 0.2)',
                'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                'font-size: 13px',
                'font-weight: 600',
                'display: flex',
                'align-items: center',
                'gap: 12px',
                'backdrop-filter: blur(12px)',
                'transition: all 0.3s ease',
                'user-select: none'
            ].join(';');
            document.body.appendChild(toast);
        }

        let iconSvg = '';
        if (type === 'loading') {
            iconSvg = '<div style="width:16px;height:16px;border:2px solid rgba(212,168,67,0.3);border-top-color:#D4A843;border-radius:50%;animation:tpl-spin 0.8s linear infinite;"></div>';
        } else if (type === 'success') {
            iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        } else {
            iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
        }

        // Pastikan keyframe spinner ada
        if (!document.getElementById('tpl-spin-style')) {
            const spinStyle = document.createElement('style');
            spinStyle.id = 'tpl-spin-style';
            spinStyle.textContent = '@keyframes tpl-spin { to { transform: rotate(360deg); } }';
            document.head.appendChild(spinStyle);
        }

        toast.innerHTML = iconSvg + '<span>' + message + '</span>';

        if (type === 'success' || type === 'error') {
            setTimeout(function() {
                if (toast && toast.parentNode) {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateY(10px)';
                    setTimeout(function() {
                        if (toast.parentNode) toast.parentNode.removeChild(toast);
                    }, 300);
                }
            }, 3000);
        }
    }

    // Fungsi Utama Eksekusi Generate ZIP
    async function startZipDownload() {
        showToast('Menyiapkan kompresi <b>' + templateFolderName + '.zip</b>...', 'loading');

        try {
            const JSZip = await loadJSZip();
            const zip = new JSZip();
            const rootFolder = zip.folder(templateFolderName);

            showToast('Mengambil file ' + templateFolderName + '...', 'loading');

            const filePromises = templateFiles.map(async function(relFilePath) {
                try {
                    const response = await fetch(encodeURI(relFilePath));
                    if (!response.ok) throw new Error('HTTP ' + response.status);
                    const blob = await response.blob();
                    rootFolder.file(relFilePath, blob);
                } catch (err) {
                    if (relFilePath === 'index.html' || relFilePath.endsWith('.html')) {
                        const htmlSnapshot = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
                        rootFolder.file(relFilePath, htmlSnapshot);
                    } else {
                        console.warn('[ZIP-DOWNLOADER] Gagal mengambil aset ' + relFilePath + ':', err);
                    }
                }
            });

            await Promise.all(filePromises);

            showToast('Mengompres arsip .zip...', 'loading');

            const contentBlob = await zip.generateAsync({
                type: 'blob',
                mimeType: 'application/zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 6 }
            }, function(meta) {
                showToast('Zipping ' + templateFolderName + ' (' + Math.round(meta.percent) + '%)...', 'loading');
            });

            // Trigger Download File (aman untuk Chromium/Chrome/Edge/Firefox)
            const fileName = templateFolderName + '.zip';
            const zipBlob = (contentBlob.type === 'application/zip') ? contentBlob : new Blob([contentBlob], { type: 'application/zip' });
            const downloadUrl = URL.createObjectURL(zipBlob);
            const tempLink = document.createElement('a');
            tempLink.style.display = 'none';
            tempLink.href = downloadUrl;
            tempLink.setAttribute('download', fileName);
            tempLink.download = fileName;
            document.body.appendChild(tempLink);

            setTimeout(function() {
                tempLink.click();
                setTimeout(function() {
                    if (tempLink.parentNode) tempLink.parentNode.removeChild(tempLink);
                    URL.revokeObjectURL(downloadUrl);
                }, 2000);
            }, 60);

            showToast(fileName + ' berhasil di-download!', 'success');

        } catch (err) {
            console.error('[ZIP-DOWNLOADER] Error:', err);
            showToast('Gagal mengompres ' + templateFolderName + '.zip', 'error');
        }
    }

    // Expose API global agar bisa dipanggil lewat console jika perlu
    window.downloadTemplateZip = startZipDownload;

    // Cek URL Query Parameters: ?download / ?download=zip / ?download=true / ?download=1 / ?zip / ?zip=1
    function checkUrlTrigger() {
        const urlParams = new URLSearchParams(window.location.search);
        const hasDownloadParam = 
            urlParams.has('download') || 
            urlParams.has('zip') || 
            urlParams.get('action') === 'download';

        if (hasDownloadParam) {
            startZipDownload();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkUrlTrigger);
    } else {
        checkUrlTrigger();
    }
})();
