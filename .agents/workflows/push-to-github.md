---
description: Workflow standar git commit & push dengan auto versioning dinamis dan penanganan branch/conflict
---

# Workflow: Push to GitHub

Workflow ini digunakan untuk melakukan `git add`, `git commit` dengan penomoran versi dinamis otomatis, sinkronisasi branch, dan `git push` ke GitHub.

---

## Aturan Utama

1. **Commit Message**:
   - Harus relevan dan mendeskripsikan secara akurat apa saja perubahan yang dikerjakan (disarankan format conventional commits, contoh: `feat: ...`, `fix: ...`, `refactor: ...`, `chore: ...`).
2. **Format Versi (`Update <v1>.<v2>.<v3>[.<v4>] - <pesan>`)**:
   - Pola format: `Update <nomor1.nomor2.nomor3.nomor4> - <pesan commit>` atau `Update <nomor1.nomor2.nomor3> - <pesan commit>`.
   - **Logika Tanggal yang Sama**:
     - Jika commit terakhir dibuat di **hari/tanggal yang sama**:
       - Jika commit sebelumnya tidak punya `nomor4` (misal `1.2.35`), maka versi berikutnya menjadi `1.2.35.1`.
       - Jika commit sebelumnya punya `nomor4` (misal `1.2.34.2`), maka `nomor4` ditambah 1 (`1.2.34.3`).
   - **Logika Ganti Hari / Tanggal Baru**:
     - Jika tanggal hari ini berbeda dengan tanggal commit terakhir:
       - `nomor4` **dihapus**.
       - `nomor3` bertambah 1 (misal dari `1.2.34.2` menjadi `1.2.35`).
   - **Logika Overflow / Rollover**:
     - Jika `nomor3` > 99: `nomor3` kembali ke `0`, dan `nomor2` bertambah 1.
     - Jika `nomor2` > 99: `nomor2` kembali ke `0`, dan `nomor1` bertambah 1.
3. **Branch & Push Flow**:
   - Cek branch yang sedang aktif.
   - **Jika branch BUKAN `main`**:
     1. Stage & Commit di branch aktif terlebih dahulu.
     2. Lakukan `git pull origin main`.
     3. Jika ada conflict, selesaikan conflict hingga tuntas dan bersih, lalu commit hasil merge.
     4. Lakukan `git push origin <nama-branch-aktif>`.
   - **Jika branch ADALAH `main`**:
     1. Stage & Commit langsung di `main`.
     2. Lakukan `git push origin main` (tanpa perlu pull dari main).

---

## Langkah Eksekusi

### Langkah 1: Cek Status Perubahan dan Branch Aktif
Jalankan perintah berikut di terminal:
```powershell
git status -s
git branch --show-current
```

Pastikan ada perubahan file yang siap untuk di-commit. Catat nama branch yang sedang aktif.

### Langkah 2: Dapatkan Commit Terakhir & Hitung Versi Baru
Ambil tanggal dan pesan commit terakhir:
```powershell
git log -1 --format="%cd | %s" --date=short
```

#### Rumus Kalkulasi Versi:
1. Ambil tanggal commit terakhir (format: `YYYY-MM-DD`) dan bandingkan dengan tanggal hari ini.
2. Ekstrak nomor versi dari commit terakhir (contoh regex: `Update\s+(\d+)\.(\d+)\.(\d+)(?:\.(\d+))?`).
3. Tentukan nomor baru:
   - **Jika Tanggal Berbeda (Hari Baru)**:
     - `new_v4` = null (dihilangkan)
     - `new_v3 = last_v3 + 1`
     - Jika `new_v3 > 99`: `new_v3 = 0`; `new_v2 = last_v2 + 1`
     - Jika `new_v2 > 99`: `new_v2 = 0`; `new_v1 = last_v1 + 1`
     - Versi teks: `<new_v1>.<new_v2>.<new_v3>`
   - **Jika Tanggal Sama (Hari yang Sama)**:
     - `new_v1 = last_v1`
     - `new_v2 = last_v2`
     - `new_v3 = last_v3`
     - `new_v4 = (last_v4 ?? 0) + 1`
     - Versi teks: `<new_v1>.<new_v2>.<new_v3>.<new_v4>`

*(Opsional) Script otomatis kalkulasi versi di PowerShell:*
```powershell
$lastCommit = git log -1 --format="%cd|%s" --date=short
$parts = $lastCommit -split '\|', 2
$lastDate = $parts[0].Trim()
$lastMsg = $parts[1].Trim()

$today = (Get-Date).ToString("yyyy-MM-dd")

if ($lastMsg -match "Update\s+(\d+)\.(\d+)\.(\d+)(?:\.(\d+))?") {
    [int]$v1 = $matches[1]
    [int]$v2 = $matches[2]
    [int]$v3 = $matches[3]
    $hasV4 = $matches.Count -ge 5 -and $matches[4] -ne ""
    [int]$v4 = if ($hasV4) { [int]$matches[4] } else { 0 }

    if ($today -ne $lastDate) {
        $v3++
        if ($v3 -gt 99) { $v3 = 0; $v2++ }
        if ($v2 -gt 99) { $v2 = 0; $v1++ }
        $newVersion = "$v1.$v2.$v3"
    } else {
        $v4++
        $newVersion = "$v1.$v2.$v3.$v4"
    }
    Write-Output "Next Version: Update $newVersion"
} else {
    Write-Output "Format sebelumnya tidak sesuai, tentukan manual."
}
```

### Langkah 3: Stage dan Commit
1. Susun pesan commit sesuai pekerjaan yang telah dilakukan.
   Contoh format: `Update <versi> - <tipe>: <penjelasan singkat>`
2. Tambahkan semua perubahan dan lakukan commit:
```powershell
git add .
git commit -m "Update <versi> - <pesan commit>"
```

### Langkah 4: Sinkronisasi dan Push

#### Kondisi A: Jika branch aktif adalah `main`
Langsung lakukan push ke remote `origin`:
```powershell
git push origin main
```

#### Kondisi B: Jika branch aktif BUKAN `main` (misal: `feature/xyz` atau `dev`)
1. Pull pembaruan dari `main`:
   ```powershell
   git pull origin main
   ```
2. Cek apakah ada konflik:
   - Jika **tidak ada konflik**: Lanjut ke push.
   - Jika **ada konflik**:
     - Buka file yang berkonflik, telaah conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
     - Selesaikan konflik dengan mempertahankan kode yang benar.
     - Simpan file, lalu stage dan commit hasil resolusi:
       ```powershell
       git add .
       git commit -m "Merge branch 'main' into <nama-branch> (resolve conflicts)"
       ```
3. Push branch aktif ke GitHub:
   ```powershell
   git push origin <nama-branch>
   ```

---

## Verifikasi Akhir
Pastikan status git sudah bersih dan push berhasil:
```powershell
git status
```
Output harus menunjukkan `nothing to commit, working tree clean` dan branch up to date dengan remote.
