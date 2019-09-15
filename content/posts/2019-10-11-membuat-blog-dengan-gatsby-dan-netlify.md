---
date: 2019-09-21
title: 'Membuat blog dengan Gatsby dan Netlify'
template: post
thumbnail: '../thumbnails/gatsby.png'
slug: membuat-blog-dengan-gatsby-dan-netlify
categories:
  - Code
  - Popular
tags:
  - gatsby
  - react
  - node
---

## Apa itu Gatsby?


Gatsby adalah open source framework yang free dan salah satu bagian dari Jamstack dimana keunggulan paling utama nya adalah di fitur React nya sehingga Kamu bisa membuat website yang lebih interaktif tanpa harus mengkhawatirkan kecepatan load nya.


## Kenapa Gatsby?

Ada [banyak generator situs statis](https://www.staticgen.com/) untuk dipilih. Jekyll, Hugo, Next, dan Hexo adalah beberapa yang terkenal dan beberapa yang menarik seperti Eleventy juga. Pada awalnya, saya hanya ingin membuat sesuatu yang dapat menghasilkan HTML secara langsung dan JavaScript app yang berat tidak mungkin lebih baik daripada HTML dan CSS sederhana.

Namun, saya sadari bahwa SSG seperti Gatsby memanfaatkan power pemisahan kode / data, pra-load, pra-cache, pengoptimalan gambar, dan segala macam peningkatan kinerja yang akan sulit atau tidak mungkin dilakukan dengan HTML biasa.

## Apa itu situs statis?

Situs statis sudah ada sejak lama. Bahkan, mereka mungkin situs web asli: hanya HTML, CSS, dan JavaScript. Mereka tidak diberikan selama runtime; tidak ada server-side code, tidak ada database, dll.
Generator situs statis adalah alat yang menghasilkan situs statis. Sehubungan dengan JS frameworks and libraries, ini biasanya menghasilkan konten HTML di sisi klien selama runtime. Generator situs statis menghasilkan konten ini selama waktu pembuatan. Kemudian, setelah dimuat, React mengambil alih, dan Anda memiliki aplikasi satu halaman!

## Apa bedanya dengan server-side rendering? 

Perbedaan utama adalah bahwa tidak ada server-side code. Jadi, tidak seperti tool Next.js, Gatsby tidak membuat apa pun di server saat request dibuat. Ini semua dilakukan pada saat membangun sebuah aplikasi.
Beberapa manfaat dari situs statis adalah: load cepat, optimisasi mesin pencari, dan keamanan. Tidak hanya situs dibuat dengan Gatsby yang sangat cepat, tetapi mereka memiliki keamanan implisit karena tidak ada database atau server, dan tidak seperti aplikasi React standar, mereka membuat SEO lebih mudah karena crawler dapat menemukan konten.

## Hal yang saya sukai dari Gatsby

- No page reloads  - situs ini sekarang menjadi SPA (single page app), dan ketika mengklik halaman internal apa pun dari dalam situs web tidak perlu lagi mereload semua page.
- Image optimization - semua gambar secara otomatis dihapus dari metadata, optimized, resized, lazy-loaded, dan compressed
- Pre-fetch resources - Gatsby mendeteksi tautan apa yang tersedia pada halaman tertentu dan memuat data itu ke dalam cache
- Bundling and minification - kode diperkecil, dibundel, dan disajikan.
- Server side ditampilkan pada waktu pembuatan

Gatsby juga menggunakan [GraphQL](https://graphql.org/) untuk mengimpor data secara default, bahkan jika Anda tidak tahu tata bahasanya, Anda dapat secara intuitif memahami kueri terstruktur sehingga Anda dapat mengembangkannya tanpa belajar. Halaman dapat dikembangkan seperti komponen, dan pada dasarnya memberikan kemampuan untuk memasukkan data ke dalam komponen.

Tunggu apa lagi, ayo buat!. Klik [tautan ini](https://www.gatsbyjs.org/starters/?v=2)

# Mari kita mulai 😎

##  Membuat situs Gatsby.

💻 Buka `Command Prompt`

Pertama Anda harus menginstall Node JS, untuk mengecek sudah terinstal atau belum, ketik saja di terminal

```sh
node -v
```

Jika belum silahkan download dulu di [sini](https://nodejs.org/en/download/)
Kalau muncul version nya berarti sudah terinstall. Selanjutnya teman-teman bisa ketikan perintah seperti ini untuk menginstall Gatsby CLI nya.


```sh
npm install -g gatsby-cli
gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
```

##  Start developing.

```sh
cd my-blog-starter/
gatsby develop
```


Situs sudah bisa di akses di `http://localhost:8000`

Note: Kamu akan melihat tautan kedua: `http://localhost:8000/___graphql` 

Ini adalah tools yang dapat kamu gunakan untuk bereksperimen dengan mengetes data kamu. Pelajari lebih lanjut tentang menggunakan tools ini di [tutorial Gatsby](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).


Buka direktori my-blog-starter di editor kode favorit kamu saya sendiri menggunakan [Visual Studio Code](https://code.visualstudio.com/) dan edit src / pages / index.js. Simpan perubahan dan reaload browser kamu! 

Nah sudah jadi, tapi bagaimana caranya saya me-live kan blog saya ini, ada banyak cara, teman-teman bisa lihat dokumentasinya [disini](https://www.gatsbyjs.org/docs/deploying-and-hosting/)

Namun saya lebih merekomendasikan untuk meng-host di [netlify](https://netlify.com), tinggal login dengan akun github teman-teman. Jangan lupa untuk push blog teman-teman ke repository github dan hubungkan dengan netlify nya. Secara otomatis setiap teman-teman meng-commit maka blog akan terupdate atau bisa kita istilahkan auto-deploy.

## Cara menghubungkan situs Gatsby dengan [netlify](https://netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

:bulb: jika Kamu ingin menggunakan halaman github, tambahkan skrip berikut ke package.json

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master -r 'git@github.com:${your github id}/${github page name}.github.io.git'"
}
```

Yah mungkin segini dulu 😎

Baca juga Cara [Optimasi SEO untuk Gatsby Blog](https://www.aradechoco.com/optimasi-seo-untuk-gatsby-blog-part-1/)


## Referensi 

[Gatsby](https://www.gatsbyjs.org/docs/quick-start) - Quick Start

[Github](https://github.com/gatsbyjs/gatsby-starter-blog) - Gatsby Starter Blog
