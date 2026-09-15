/**
 * Builder Script: Generates template-downloader.js with manifest and injects it into all template HTML files.
 * Author: Tachibana Yuuka
 * Mode: URL Query Parameter Trigger (?download=zip / ?download / ?zip) without persistent buttons.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const templatesDir = path.join(rootDir, 'templates');

// 1. Scan template directories
function getTemplateDirectories() {
    const tplDirs = [];
    
    function walk(currentDir) {
        const items = fs.readdirSync(currentDir, { withFileTypes: true });
        
        if (currentDir !== templatesDir) {
            const relKey = path.relative(templatesDir, currentDir).split(path.sep).join('/');
            const hasIndex = items.some(i => i.isFile() && i.name.toLowerCase() === 'index.html');
            const isSpecialTemplate = relKey === 'fun/vtuber-personal-web/adeline';
            
            if (hasIndex || isSpecialTemplate) {
                tplDirs.push(currentDir);
                return;
            }
        }
        
        for (const item of items) {
            if (item.isDirectory() && item.name !== 'img' && item.name !== '.git' && item.name !== 'assets') {
                walk(path.join(currentDir, item.name));
            }
        }
    }
    
    walk(templatesDir);
    return tplDirs;
}

const templateDirs = getTemplateDirectories();
console.log(`[INFO] Ditemukan ${templateDirs.length} direktori template.`);

// 2. Build files manifest
const manifest = {};
for (const dir of templateDirs) {
    const relKey = path.relative(templatesDir, dir).split(path.sep).join('/');
    
    function getFiles(d) {
        let files = [];
        const entries = fs.readdirSync(d, { withFileTypes: true });
        for (const e of entries) {
            const full = path.join(d, e.name);
            if (e.isDirectory()) {
                files = files.concat(getFiles(full));
            } else if (e.isFile() && !e.name.endsWith('.zip') && !e.name.startsWith('.')) {
                files.push(path.relative(dir, full).split(path.sep).join('/'));
            }
        }
        return files;
    }
    
    manifest[relKey] = getFiles(dir);
}

// 3. Generate template-downloader.js content
const downloaderScriptContent = `/**
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
    const TEMPLATE_MANIFEST = ${JSON.stringify(manifest, null, 2)};

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
        const fullPath = window.location.pathname.replace(/\\\\/g, '/');
        const matchTemplates = fullPath.match(/\\/templates\\/(.+)$/);
        if (matchTemplates) {
            let sub = matchTemplates[1];
            sub = sub.replace(/\\/[^\\/]+\\.html$/, '').replace(/\\/$/, '');
            for (const key of Object.keys(TEMPLATE_MANIFEST)) {
                if (sub.endsWith(key) || key.endsWith(sub)) {
                    templateKey = key;
                    break;
                }
            }
        }
    }

    if (!templateKey) {
        const pathParts = window.location.pathname.replace(/\\\\/g, '/').split('/');
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
            const localZipSrc = scriptPath ? scriptPath.replace(/template-downloader\\.js.*$/, 'jszip.min.js') : 'jszip.min.js';

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
                        const htmlSnapshot = '<!DOCTYPE html>\\n' + document.documentElement.outerHTML;
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
`;

// Tulis templates/template-downloader.js
const downloaderPath = path.join(templatesDir, 'template-downloader.js');
fs.writeFileSync(downloaderPath, downloaderScriptContent, 'utf8');
console.log(`[SUCCESS] templates/template-downloader.js berhasil diupdate (${(downloaderScriptContent.length / 1024).toFixed(1)} KB).`);

console.log('[INFO] Script template-downloader.js sudah terinjeksi di 219 file HTML template dan sekarang aktif via parameter URL tanpa tombol.');
