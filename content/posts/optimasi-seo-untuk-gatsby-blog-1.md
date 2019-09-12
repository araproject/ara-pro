---
date: 2019-10-13
title: 'Optimasi SEO untuk Gatsby Blog Bagian 1'
template: post
thumbnail: '../thumbnails/google.png'
slug: optimasi-seo-untuk-gatsby-blog-part-1
categories:
  - SEO
  - Code
tags:
  - gatsby
  - google
  - search engine
---

Jika membuat sebuah situs web atau blog, pasti menginginkan blog Anda muncul di halaman pertama untuk hasil pencarian google. Saya sudah menulis blog untuk beberapa waktu, tetapi saya baru tahu dan mulai menerapkannya di blog saya.

![](../images/searchconsolegoogle.png)

Apakah Anda berada di halaman pertama atau halaman keempat, Anda harus bisa membuat Blog Anda agar di kenali oleh hasil pencarian google. Apa yang perlu Anda lakukan untuk melakukan ini? Sebelum kita sampai di sana, kita perlu memahami cara kerja Search Engine Optimization atau mesin pencari.

Detail bervariasi dari mesin pencari ke mesin pencari, tetapi bekerja dalam urutan crawl-> pengindeksan-> peringkat-> posting. Salah satu hal yang harus diperhatikan hari ini adalah crawl. Crawl adalah tindakan menavigasi situs Web, mengekstraksi informasi, dan menjelajah dengan mesin pencari berarti menemukan dan menambahkan halaman baru yang diperbarui, indeks dan seterusnya.
Setelah alamat halaman situs web ditambahkan ke indeks, itu dapat diekspos ke halaman pencarian. Untuk melakukan itu, kita perlu memberi tahu crawler mesin pencari (bot) bahwa kita memiliki situs web, dan itu adalah sitemap atau peta situs.

## sitemap.xml

Sitemap adalah jenis peta situs web yang membantu mesin pencari meng crawler halaman situs web Anda dengan lebih cerdas. Ia juga memberi tahu crawler apa yang menurut penting di situs Anda dan memberi informasi penting tentangnya.

Jadi, setiap kali kita menambahkan halaman ke situs web, kita harus terus memperbarui peta situs ini. Halaman yang dibuat pada platform tertentu, seperti Naver Blog atau Tstory. Untungnya, ada plug-in ke Gatsby yang mengotomatisasi ini.

```shell
$ npm install --save gatsby-plugin-sitemap
```

Instal plugin dan tambahkan plugin ke file 'gatsby-config.js' seperti yang diperintahkan! (Untuk referensi, saya membuat file itu karena saya 
fork [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog). Temukan dan tambahkan file konfigurasi Anda sendiri.)

```js
module.exports = {
  siteMetadata: {
    title: 'aradechoco',
    author: 'aradechoco',
    description: 'This blog is powered by gatsby',
    siteUrl: 'https://www.aradechoco.com',
  },
  plugins: [
    ...
    'gatsby-plugin-sitemap',
    ...
  ],
  ...
}
```

Jika Anda ingin memeriksa apakah peta situs Anda dibuat dengan baik, Anda dapat mencari sitemap.xml di folder publik setelah `gatsby build`. Tampilan dan arti file ini adalah sebagai berikut.

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url>
<loc>
https://aradechoco.com/cara-mengakses-reddit-yang-di-blokir/
</loc>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>
https://aradechoco.com/membuat-blog-dengan-gatsby-dan-netlify/
</loc>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>
</urlset>
```

`<loc>`: URL halaman
`<changefreg>`: seberapa sering halaman telah berubah (seberapa sering crawler ingin merayapnya)
-` <priority> `: prioritas relatif URL ini di atas URL lain di situs itu (prioritas di dalam situs itu, bukan peringkat di antara semua situs web)

Peta situs sudah cukup untuk memberi tahu perayap tentang situs web kami dan memberi kami kontrol atas akses, tetapi ada satu file lagi yang melakukan sesuatu yang serupa tetapi melakukan sesuatu yang sedikit berbeda. File `robots.txt` terkait erat dengan bot dengan melihat namanya.🤖

## robots.txt

robots.txt adalah file yang memberi tahu crawler mesin pencari ruang lingkup akses ke situs kami. Menurut Google, ini terutama digunakan untuk mencegah halaman dari kelebihan oleh crawler, daripada digunakan untuk menyembunyikan halaman web. Itu juga dapat mengatur lalu lintas perayap dan memberi tahu di mana sitemap Anda berada.

Persyaratan untuk file ini adalah sebagai berikut:

Harus ada di direktori tingkat atas
-UTF-8 disandikan dan ekstensi .txt.

Tampilan umum dan makna isinya adalah sebagai berikut.

```txt
User-agent: *
Allow: /please-crawl/
Disallow: /dont-crawl/
Sitemap: https://www.aradechoco.com/sitemap.xml
```

-User-agent: Nama bot (perayap) untuk mengontrol akses, \ * berarti semua bot ex) Googlebot, Yeti, dll.
-Biarkan: area untuk dirayapi
-Disallow: area yang tidak boleh dirayapi
-Sitemap: jalan menuju sitemap Anda

Jika file ini tidak ada di direktori tingkat atas, crawler mengenali semua file sebagai Boleh.

Keberadaan file ini tidak diperlukan, tetapi ini merupakan sarana untuk berkomunikasi dengan crawler, jadi jika Anda menggunakannya dengan baik dapat membantu Anda untuk menjalankan situs web (saya belum tahu bagaimana menggunakannya). Jika Anda tidak membuat bangunan terpisah setiap kali membangun.

```shell
$ npm install --save gatsby-plugin-robots-txt
```

Demikian pula, tambahkan plug-in ke file 'gatsby-config.js'. Tulis saja opsi yang disebutkan di atas dalam `options`. Saya ingin semua crawler untuk mengikis semua halaman, jadi saya menulis:

```js
module.exports = {
  siteMetadata: {
    title: 'aradechocco',
    author: 'aradechoco',
    description: 'This blog is powered by gatsby',
    siteUrl: 'https://www.aradechoco.com',
  },
  plugins: [
    ...
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.aradechoco.com',
        sitemap: 'https://www.aradechoco.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    ...
  ],
  ...
};
```

Setelah membangun dengan `gatsby build` dan mencari 'robots.txt' di folder publik, Anda dapat melihat bahwa itu dibuat sebagai berikut.

```
User-agent: *
Allow: /
Sitemap: https://www.aradechoco.com/sitemap.xml
Host: https://www.aradechoco.com
```

Bahkan, ini mungkin bahkan tidak otomatis. 😅

Sejauh ini, Anda telah melihat optimasi mesin pencari dasar menggunakan 'sitemap.xml' dan 'robots.txt', dan cara mengotomatiskannya dengan plugin untuk situs yang dibuat dengan Gatsby. Dalam [artikel Optimasi SEO untuk Gatsby Blog #2](https://www.aradechoco.com/optimasi-seo-untuk-gatsby-blog-part-2/), Anda akan menemukan pengoptimalan yang lebih spesifik dan cara meningkatkan peringkat blog di mesin pencarian. Mari belajar.

## referensi 

- <a href="https://support.google.com/webmasters/answer/70897?ref_topic=3309469#long_version" target="_blank"> How Google Search Works </a>
- <a href="https://extrememanual.net/10728" target="_blank"> How to set up robots.txt for search engine index optimization </a>
- <a href="https://www.sitemaps.org/en/protocol.html" target="_blank"> Sitemap XML Format </a>
