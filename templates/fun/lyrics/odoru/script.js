const timestamps = [15.251458, 17.544663, 19.404217, 21.777831, 23.508135, 25.215339, 27.015531, 28.669866, 30.018605, 32.044104, 33.702348, 35.785377, 40.882079, 42.438869, 43.261985, 44.339325, 45.858459, 46.70203, 47.760885, 49.25446, 50.116992, 50.812313, 54.65962, 56.153424, 56.960941, 58.091944, 59.569461, 60.391411, 61.495005, 62.983366, 63.934022, 69.927833, 71.122958, 71.874933, 74.291268, 76.644268, 78.44193, 80.124124, 81.703261, 83.465572, 84.988396, 86.96779, 88.510984, 90.752576, 95.739199, 97.283525, 98.111202, 99.220939, 100.739929, 101.579788, 102.62857, 104.113458, 104.986423, 106.036394, 109.475486, 110.987835, 111.829696, 112.926978, 114.408747, 115.234335, 116.230123, 117.83087, 119.251322, 130.272307, 131.181536, 133.191228, 134.801385, 137.060257, 143.766311, 145.272755, 146.155714, 147.20162, 148.72336, 149.56914, 150.60441, 157.53096, 158.961199, 159.834838, 160.910704, 162.364036, 163.263169, 164.278834, 165.825881, 167.295772, 172.72815, 173.52692, 174.826977, 179.548228, 180.97883, 188.899228];

const rawLyrics = [
    // --- VERSE 1 ---
    { text: "Nandemo kandemo", kanji: "なんでもかんでも", style: "jump-rotate", size: "4rem", color: "var(--lyric-color-1)" },
    { text: "minna odori o", kanji: "みんな おどりを", style: "jump-rotate", size: "4rem", color: "var(--lyric-color-2)" },
    { text: "odotte iru yo", kanji: "おどっているよ", style: "manga-shake", size: "5rem", color: "var(--lyric-color-3)" },
    { text: "Onabe no naka kara", kanji: "おなべの中から", style: "pop-in" },
    { text: "bowatto", kanji: "ボワっと", style: "slam", size: "6rem", color: "var(--lyric-color-4)" },
    { text: "Inchiki ojisan", kanji: "インチキおじさん", style: "glitch" },
    { text: "toujou", kanji: "登場", size: "8rem", style: "slam", color: "var(--lyric-color-5)" }, // HUGE ENTER

    { text: "Itsudatte", kanji: "いつだって", style: "pop-in" },
    { text: "wasurenai", kanji: "わすれない", style: "pop-in" },
    { text: "Edison wa", kanji: "エジソンは", style: "shutter", color: "var(--lyric-color-6)" }, // Shutter effect
    { text: "erai hito", kanji: "えらい人", style: "pop-in" },
    { text: "Sonna no joushiki", kanji: "そんなの常識", style: "manga-shake" },
    { text: "Tattatararira", kanji: "タッタタラリラ", style: "jump-rotate" },

    // --- CHORUS 1 ---
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "pappaparapa", kanji: "パッパパラパ", style: "manga-shake" },
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "pappaparapa", kanji: "パッパパラパ", style: "manga-shake" },
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "oheso ga chirari", kanji: "おへそがちらり", style: "shutter" },
    { text: "Tattatararira", kanji: "タッタタラリラ", style: "jump-rotate" },

    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "pappaparapa", kanji: "パッパパラパ", style: "manga-shake" },
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "Odoru Ponpokorin", kanji: "おどるポンポコリン", style: "slam", size: "7rem", color: "var(--lyric-color-3)", particles: true },
    { text: "Piihyara pii", kanji: "ピーヒャラ ピ", style: "jump-rotate" },
    { text: "onaka ga hetta yo", kanji: "お腹がへったよ", style: "pop-in" },

    // --- VERSE 2 ---
    { text: "Ano ko mo", kanji: "あの子も", style: "pop-in" },
    { text: "kono ko mo", kanji: "この子も", style: "pop-in" },
    { text: "minna isoide", kanji: "みんな いそいで", style: "manga-shake" },
    { text: "aruite iru yo", kanji: "歩いているよ", style: "glitch" },
    { text: "Denshinbashira no", kanji: "でんしんばしらの", style: "pop-in" },
    { text: "kage kara", kanji: "かげから", style: "pop-in" },
    { text: "Owarai geinin", kanji: "お笑い芸人", style: "glitch", color: "var(--tertiary)" },
    { text: "toujou", kanji: "登場", size: "8rem", style: "slam", color: "var(--lyric-color-5)" },

    { text: "Itsudatte", kanji: "いつだって", style: "pop-in" },
    { text: "mayowanai", kanji: "迷わない", style: "pop-in" },
    { text: "Kiyosuku wa", kanji: "キヨスクは", style: "shutter" },
    { text: "eki no naka", kanji: "駅の中", style: "pop-in" },
    { text: "Sonna no yuumei", kanji: "そんなの有名", style: "manga-shake" },
    { text: "Tattatararira", kanji: "タッタタラリラ", style: "jump-rotate" },

    // --- CHORUS 2 ---
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "pappaparapa", kanji: "パッパパラパ", style: "manga-shake" },
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "pappaparapa", kanji: "パッパパラパ", style: "manga-shake" },
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "ninjin iranai", kanji: "ニンジンいらない", style: "shutter", color: "var(--lyric-color-7)" },
    { text: "Tattatararira", kanji: "タッタタラリラ", style: "jump-rotate" },

    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "pappaparapa", kanji: "パッパパラパ", style: "manga-shake" },
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "Odoru Ponpokorin", kanji: "おどるポンポコリン", style: "slam", size: "7rem", color: "var(--lyric-color-3)", particles: true },
    { text: "Piihyara pii", kanji: "ピーヒャラ ピ", style: "jump-rotate" },
    { text: "Buta no Puutarou", kanji: "ブタのプータロー", style: "pop-in" },

    // --- VERSE 3 (Repeat of start) ---
    { text: "Itsudatte", kanji: "いつだって", style: "pop-in" },
    { text: "wasurenai", kanji: "わすれない", style: "pop-in" },
    { text: "Edison wa", kanji: "エジソンは", style: "shutter", color: "var(--secondary)" },
    { text: "erai hito", kanji: "えらい人", style: "pop-in" },
    { text: "Sonna no joushiki", kanji: "そんなの常識", style: "manga-shake" },
    { text: "Tattatararira", kanji: "タッタタラリラ", style: "jump-rotate" },

    // --- FINAL CHORUS LOOP ---
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "pappaparapa", kanji: "パッパパラパ", style: "manga-shake" },
    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "oheso ga chirari", kanji: "おへそがちらり", style: "shutter", duration: 1500 },
    { text: "Tattatararira", kanji: "タッタタラリラ", style: "jump-rotate", duration: 1000 },

    { text: "Piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "piihyara", kanji: "ピーヒャラ", style: "slam", size: "5rem", particles: true },
    { text: "Odoru Ponpokorin", kanji: "おどるポンポコリン", style: "slam", size: "6rem", particles: true },
    { text: "Piihyara pii", kanji: "ピーヒャラ ピ", style: "jump-rotate" },
    { text: "onaka ga hetta yo", kanji: "お腹がへったよ", style: "pop-in", duration: 2000 },
    { text: "END", kanji: "おしまい", style: "glitch", size: "8rem", duration: 5000 },
];

// Merge Timestamps
const lyricsData = rawLyrics.map((line, index) => {
    // If we run out of timestamps, just use the previous one + 2s
    let start = timestamps[index];
    if (start === undefined) {
        start = timestamps[timestamps.length - 1] + (index - timestamps.length + 1) * 2;
    }

    // Determine end time from next line start, or default 2s
    let end;
    if (index < timestamps.length - 1) {
        end = timestamps[index + 1];
    } else {
        end = start + 3; // Last line duration
    }

    return {
        ...line,
        startTime: start,
        endTime: end
    };
});

const stage = document.getElementById('stage');
const container = document.getElementById('lyric-container');
const startBtn = document.getElementById('start-btn');
const loader = document.getElementById('loader');
const bgm = document.getElementById('bgm');
const particleContainer = document.getElementById('particle-container');
const speedLines = document.getElementById('speed-lines');

// Style Switcher Logic (Kept for fun)
const btnAdo = document.getElementById('btn-ado');
const btnMaruko = document.getElementById('btn-maruko');
const popStyle = document.getElementById('pop-style');
const body = document.body;

if (btnAdo && btnMaruko) {
    btnAdo.addEventListener('click', () => {
        body.classList.remove('pop-mode');
        body.classList.add('ado-mode');
        popStyle.disabled = true;
        btnAdo.classList.add('active');
        btnMaruko.classList.remove('active');
    });

    btnMaruko.addEventListener('click', () => {
        body.classList.remove('ado-mode');
        body.classList.add('pop-mode');
        popStyle.disabled = false;
        btnMaruko.classList.add('active');
        btnAdo.classList.remove('active');
    });
}

// Hide loader after load
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.transform = 'translateY(-100%)';
    }, 2000);
});

// Cursor effect
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// --- MAIN LOGIC ---
let currentLineIndex = -1;

// START SEQUENCE
startBtn.addEventListener('click', () => {
    bgm.volume = 0.7;
    bgm.currentTime = 0;
    currentLineIndex = -1;

    const playPromise = bgm.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            console.log("Audio started");
            // CLEAN UI FOR TIKTOK
            container.innerHTML = '';
            startBtn.style.display = 'none'; // Hide button
            document.querySelector('.intro-title').style.display = 'none';
            document.querySelector('.artist-name').style.display = 'none';
            document.getElementById('sync-controls').style.display = 'none'; // Hide debug helper

            // Add 'playing' class to body if I want to hide cursor via CSS
            document.body.classList.add('is-playing');
        })
            .catch(error => {
                console.error("Audio play failed:", error);
                alert(`Gagal Play: ${error.message}`);
            });
    }

    bgm.addEventListener('timeupdate', syncLyrics);
});


bgm.addEventListener('error', (e) => {
    console.error("Audio Error:", e);
});

function syncLyrics() {
    const audioTimeMs = bgm.currentTime; // seconds

    // Find active lyric
    const activeLineIndex = lyricsData.findIndex(line =>
        audioTimeMs >= line.startTime && audioTimeMs < line.endTime
    );

    if (activeLineIndex !== -1 && activeLineIndex !== currentLineIndex) {
        currentLineIndex = activeLineIndex;
        renderLyric(lyricsData[activeLineIndex]);
    }
}

function renderLyric(data) {
    if (!data) return;

    // Clear previous
    container.innerHTML = '';

    const div = document.createElement('div');
    div.classList.add('lyric-line');

    // Custom styles
    if (data.size) div.style.fontSize = data.size;
    else div.style.fontSize = '3rem'; // Default

    if (data.color) div.style.color = data.color;
    else div.style.color = 'white';

    // Apply animation class container
    div.classList.add(`anim-${data.style}`);

    // Trigger Camera Shake
    if (data.style === 'slam' || data.style === 'jump-rotate') {
        document.body.classList.remove('camera-shake');
        void document.body.offsetWidth; // Trigger reflow
        document.body.classList.add('camera-shake');
    }

    // Trigger Speed Lines
    if (data.style === 'jump-rotate' || data.style === 'manga-shake' || data.style === 'slam') {
        document.body.classList.add('speed-active');
    } else {
        document.body.classList.remove('speed-active');
    }

    // Spawn Particles
    if (data.particles) {
        spawnParticles(20);
    }

    // Split text for pop-in effect
    if (data.style === 'pop-in') {
        const chars = data.kanji.split('');
        chars.forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.classList.add('char');
            span.style.animationDelay = `${i * 0.05}s`;
            div.appendChild(span);
        });

        // Subtitle (Romaji)
        const sub = document.createElement('div');
        sub.textContent = data.text;
        sub.style.fontSize = '1.5rem';
        sub.style.color = 'var(--secondary)';
        sub.style.marginTop = '10px';
        sub.style.opacity = '0';
        sub.style.animation = 'fadeIn 0.5s ease forwards 0.3s';
        div.appendChild(sub);

    } else if (data.style === 'glitch') {
        div.setAttribute('data-text', data.kanji);
        div.textContent = data.kanji;
        // Subtitle (Romaji)
        const sub = document.createElement('div');
        sub.textContent = data.text;
        sub.style.fontSize = '1.5rem';
        sub.style.color = 'var(--secondary)';
        sub.style.marginTop = '10px';
        div.appendChild(sub);
    } else {
        div.textContent = data.kanji;
        // Subtitle (Romaji)
        const sub = document.createElement('div');
        sub.textContent = data.text;
        sub.style.fontSize = '1.5rem';
        sub.style.color = 'var(--secondary)';
        sub.style.marginTop = '10px';
        div.appendChild(sub);
    }

    container.appendChild(div);
}

function spawnParticles(count) {
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = '50%';
        p.style.top = '50%';

        // Random explosion direction
        const angle = Math.random() * Math.PI * 2;
        const velocity = 200 + Math.random() * 300;
        const tx = Math.cos(angle) * velocity + 'px';
        const ty = Math.sin(angle) * velocity + 'px';

        p.style.setProperty('--tx', tx);
        p.style.setProperty('--ty', ty);

        // Random color
        const cols = ['#FF00FF', '#00FFFF', '#FFD700', '#FFFFFF'];
        p.style.background = cols[Math.floor(Math.random() * cols.length)];

        particleContainer.appendChild(p);

        // Cleanup
        setTimeout(() => p.remove(), 1000);
    }
}

// Noise Canvas Optimization
const ctx = document.getElementById('noise').getContext('2d');
let w, h;
let frameCount = 0;

function resize() {
    w = ctx.canvas.width = window.innerWidth / 2; // Low res
    h = ctx.canvas.height = window.innerHeight / 2;
    ctx.scale(2, 2); // Upscale
}
resize(); window.onresize = resize;

function noise() {
    frameCount++;
    if (frameCount % 3 !== 0) { // Update only every 3rd frame
        requestAnimationFrame(noise);
        return;
    }

    const wScaled = w / 2;
    const hScaled = h / 2;

    const idata = ctx.createImageData(wScaled, hScaled);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++)
        if (Math.random() < 0.1) buffer32[i] = 0x10ffffff; // Lower density, low opacity

    ctx.putImageData(idata, 0, 0);
    requestAnimationFrame(noise);
}
noise();
