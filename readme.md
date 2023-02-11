#

# Wiki-Translator

## Daftar Isi

- [Pengantar](#Pengantar)
- [Fitur](#Fitur)
- [Cara install](#Installing)
- [Cara pakai](#Usage)
- [Notes](#Notes)
- [Tips](#Tips)

# Pengantar

Wiki-Translator adalah project yang dibuat diatas node.js yang bertujuan untuk mempermudah translasi dari terraria.wiki.gg versi inggris ke indonesia

Wiki-Translator berkerja dengan memanfaatkan package [Puppeteer](https://www.npmjs.com/package/puppeteer), Yaitu sebuah Package yang akan menjalankan Chromium dengan otomatis untuk melakukan aksi yang dibutuhkan seperti mengambil text, melihat preview, dan mempublish hasil translasi

# Fitur

- Memudahkan translasi dengan cara memisahkan antara area yang tidak penting (seperti tabel) dengan kontent utama
- Melihat preview lewat via screenshoot tanpa meninggalkan text-editor
- Merilis hasil translasi ke wiki via terminal
- pengubahan otomatis untuk link yang bertipe [[link]]

# Installing

0. Install [node.js](https://nodejs.org/en/) versi LTS dan sebuah Text editor seperti

- [vscode](https://code.visualstudio.com/download) (recomendded)
- [notepad++](https://notepad-plus-plus.org/downloads/)

1. Install dan extrak file di [release](https://github.com/andiputraw/wiki-translator/releases)
2. Buka command line lalu navigasikan ke tempat kamu men-ekstrak (atau double click di navigasi folder lalu ketik cmd)
3. di command line ketikan `npm install`

# Usage

- Sebelum menggunakannya, pertama buka folder translation lalu buka config.json menggunakan text editor pilihan kalian. lalu isi config yang diperlukan

```
{
    "url" : "Link menuju ke url yang ingin di translate (gunakan link versi inggris tanpa /id)",
    "username" : "username yang digunakan untuk login ke terraria.wiki.gg",
    "password" : "password yang digunakan untuk login ke terraria.wiki.gg",
}
```

- Setelah itu buka wiki-translator.bat dengan cara double-click
- Akan ada pilihan

  - `"Ambil Data"`
    Ini akan mengambil data dari wiki versi en, lalu menuliskannya ke `translate.json`. disinilah kamu melakukan translasi.
  - `"Lihat Preview"`
    Ini akan menuliskan hasil trasnslasi dari `translate.json` ke wiki. lalu mengambil screenshoot di wiki (membutuhkan Login).
  - `"Publish"`
    Sama seperti Preview, ini akan menuliskan hasil translasi dari `translate.json` ke wiki. tetapi akan merilisnya langsung (Membutuhkan Login).
  - `"Utility"`
    Merupakan Opsi QoL yang dapat membantu pengguna

    - `"Ubah [[content]] menjadi [[content/id|content]]"`
      Mengubah Seluruh link yang menuju ke en menjadi ke id.

# Notes

- Program ini berkerja dengan cara mengecek huruf pertama dari setiap baris. jika huruf pertama termasuk dari bagian ini `{{,}},[[,</tabber>,--,  |,|,==` atau `""` (kosong). maka bagian itu akan dihapus. mungkin akan ada baris yang seharusnya tidak di filter tetapi terhapus

- Cek setelah menggunakan `"Ubah [[content]] menjadi [[content/id|content]]"`, Mungkin saja ada hal yang tak terduga diubah

# Tips

- Jika menggunakan Text editor VS Code, Translator bisa membuat sebuah "snippet" yang bermanfaat untuk membuat snippet, Snippet bisa dibuat di folder .vscode (pastikan untuk membukanya vscode di folder hasil ekstrak, bukan folder `translation`)
- Gunakan Utility `"Ubah [[content]] menjadi [[content/id|content]]"` Sebelum melakukan translasi
