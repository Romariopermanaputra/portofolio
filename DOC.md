# DOC - CV Mahasiswa (React SPA)

## Deskripsi Aplikasi
Aplikasi ini adalah contoh Single Page Application (SPA) sederhana menggunakan ReactJS (Vite) untuk menampilkan CV Mahasiswa. Aplikasi menampilkan 3 section utama: Profil, Keahlian, dan Pengalaman. Data mahasiswa disimpan pada file `src/dataMahasiswa.json` dan diimport ke dalam komponen; **ganti isinya dengan data Anda sendiri** (Nama, NIM, foto, dsb).

## Cara Menjalankan
1. Install dependencies:

```powershell
npm install
```

2. Jalankan mode development:

```powershell
npm run dev
```

3. Build untuk production:

```powershell
npm run build
npm run preview
```

## Struktur File
- `src/dataMahasiswa.json` - Data mahasiswa (ganti dengan data Anda)
- `src/components/Profile.jsx` - Komponen Profil
- `src/components/Skills.jsx` - Komponen Keahlian
- `src/components/Experiences.jsx` - Komponen Pengalaman

## Responsive & Desktop Layout
Perbaikan tata letak untuk desktop: kontainer maksimum diperbesar ke 1200px, tata letak menjadi dua kolom (profil kiri, konten di kanan), dan ukuran avatar, gap, serta padding disesuaikan agar tampilan rapi pada resolusi desktop.
- `src/App.jsx` - Halaman utama, menggabungkan semua komponen
- `DOC.md` - Dokumentasi

## Deployment
Situs ini dapat dideploy ke Vercel atau Netlify. Ikuti panduan di README tugas atau petunjuk Vercel/Netlify.

Silakan tambahkan link deployment Anda di bagian ini setelah deploy (contoh: https://my-portfolio.vercel.app).

## Screenshot
- Ambil screenshot tampilan desktop `src/screenshots/desktop.png` dan mobile `src/screenshots/mobile.png`.
- Anda juga bisa menambahkan screenshot ke README untuk menampilkan hasil deployment.

---

Catatan: Pastikan untuk mengganti isi `src/dataMahasiswa.json` dengan data diri Anda sendiri sebelum pengumpulan tugas.
## Menambahkan foto lokal
Jika Anda ingin menggunakan foto lokal bernama `foto.jpg`, letakkan file foto Anda di folder `public/` dengan nama `foto.jpg` — path final: `public/foto.jpg`.

Contoh: ganti `photo` pada `src/dataMahasiswa.json` menjadi:

```json
{
	"photo": "foto.jpg"
}
```

Aplikasi sudah dikonfigurasi untuk memuat file foto dari `public/foto.jpg` ketika `photo` berisi nama file saja. Jika Anda ingin menggunakan foto dari URL eksternal, gunakan URL lengkap (mis. `https://.../foto.jpg`).

### Cara memastikan foto muncul di Vercel
1. Letakkan `foto.jpg` di `public/` (path final: `public/foto.jpg`).
2. Pastikan `src/dataMahasiswa.json` menunjuk ke `"foto.jpg"` (atau `"/foto.jpg"`).
3. Commit file `public/foto.jpg` ke repo dan push:

```powershell
git add public/foto.jpg
git commit -m "chore: add foto profil to public"
git push origin main
```

4. Build secara lokal untuk memastikan file tercopy ke folder `dist/`:

```powershell
npm run build
dir dist\
# Pastikan dist\foto.jpg atau dist\assets\... (tergantung) ada
```

5. Deploy ke Vercel (hubungkan repo GitHub, atau gunakan CLI `vercel`):
	- Deploy dari GitHub: import repository, lalu Vercel akan menjalankan build.
	- Pastikan output `dist/foto.jpg` selama build dan konfirmasi di URL deployed `https://<your-site>.vercel.app/foto.jpg` — jika dapat diakses maka foto tersedia untuk profile.

6. Jika tidak muncul setelah deploy:
	- Periksa log build di Vercel, pastikan file tidak di-ignore, dan file benar berada pada lokasi `public/foto.jpg`.
	- Pastikan `src/dataMahasiswa.json` menggunakan `"foto.jpg"` (tanpa spasi), atau mengarah ke URL eksternal yang valid.
Aplikasi sudah dikonfigurasi untuk memuat file foto dari `public/foto.jpg` ketika `photo` berisi nama file saja. Jika Anda ingin menggunakan foto dari URL eksternal, gunakan URL lengkap (mis. `https://.../foto.jpg`).