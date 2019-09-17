---
date: 2019-08-24
title: 'Menambahkan Comment Disqus ke Blog Gatsby dengan disqus-react'
template: post
thumbnail: '../thumbnails/disqus.png'
slug: menambahkan-comment-disqus-ke-blog-gatsby-dengan-disqus-react
categories:
  - Tutorial
tags:
  - Gatsby
  - React
  - Disqus
---

Pada artikel pertama saya telah membuat postingan tentang [Membuat blog dengan Gatsby dan Netlify](https://www.aradechoco.com/membuat-blog-dengan-gatsby-dan-netlify/). Pada kesempatan kali ini saya akan membagikan tutorial cara Menambahkan Comment Disqus ke Blog Gatsby dengan disqus-react.

## Apa itu Disqus?

Layanan komentar di situs blog memerlukan server dinamis untuk memfasilitasinya dengan cepat. Itu sebabnya tidak mungkin bagi blog statis untuk mendukung layanan komentar. Namun, dengan dukungan dari aplikasi pihak ketiga seperti Disqus , sangat memungkinkan untuk menambahkan layanan komentar ke blog statis.
Pada artikel ini saya akan menunjukkan cara menambahkan komentar ke situs blog yang didukung [Gatsby] dengan menggunakan komponen 'disqus-react' ( komponen Reach untuk Disqus).


## Apa itu komponen 'disqus-react'?

'disqus-react' adalah komponen React untuk menambahkan komentar Disqus ke aplikasi web seperti situs blog ini. Mendukung reload secara langsung ketika data baru (komentar) diterima dari pengguna. Karena semua situs Gatsby adalah React site, jadi ini adalah cara yang lebih sederhana dan lebih mudah untuk menambahkan kotak komentar disqus ke blog Gatsby.


## Bagaimana caranya?

Pertama, Anda harus mendaftarkan blog gatsby Anda di [disqus.com](https://disqus.com/) , dan Anda akan mendapatkan "shortname" yang unik untuk blog Anda yang nantinya akan digunakan dalam konfigurasi disqus blog Anda.
Kedua, Anda harus menginstal paket 'disqus-react' di situs Anda melalui 'NPM' atau 'YARN'. Saya telah mempraktekannya di situs ini.

```bash
# jika menggunakan NPM
$ npm install --save disqus-react
```

```bash
# jika menggunakan YARN
$ yarn add disqus-react
```

Ketiga, Anda harus menambahkan komponen dalam template posting blog Anda (yaitu di mana Anda ingin menanamkan kolom komentar disqus). Lokasi file template posting blog Gatsby yang khas adalah src / templates / blog-post.js , jadi tambahkan kode berikut di sana untuk mengimpor komponen `disqus-react`.


```jsx
// blog-post.js
import { DiscussionEmbed } from 'disqus-react'

```


Sekarang, saatnya untuk mendefinisikan objek confiq disqus. Untuk ini, Anda harus mempertimbangkan variabel-variabel berikut:

1. `shortname` adalah pengidentifikasi unik dari blog Anda yang sudah Anda ketahui dengan mendaftarkan blog Anda di disqus.com . Tanpa variabel ini, kolom komentar disqus tidak akan dimuat di blog Anda.

2. `identifier` digunakan untuk mengidentifikasi setiap posting blog Anda. Jika tidak terdefinisi maka URL posting blog akan digunakan sebagai pengidentifikasi. Sangat disarankan untuk mendefinisikan variabel ini sendiri karena URL posting tidak dapat diandalkan (karena dapat diubah atau dimodifikasi). Dengan melakukan itu, Anda dapat memastikan utas yang sama dari posting blog Anda terlepas dari URL-nya.

3. `url` mendefinisikan URL posting. Ketika sebuah thread disqus dibuat untuk posting blog, URL posting blog tersebut dicatat bersama dengan thread tersebut sehingga disqus tahu halaman apa yang menjadi milik thread mana. Disarankan untuk mendefinisikan variabel ini.

4. `title` mendefinisikan judul posting blog ketika thread disqus dibuat untuk posting tersebut. Jika tidak terdefinisi maka tag < title > halaman digunakan untuk menentukan judul posting. Jika disqus tidak dapat mengambil < title > halaman maka URL halaman yang digunakan tidak terlalu cantik. Jadi, lebih baik untuk menentukan judul posting blog di konfigurasi disqus Anda.

5. `Category_id` digunakan untuk mendefinisikan kategori posting ketika sebuah thread disqus dibuat untuk posting tersebut. Jika tidak terdefinisi maka digunakan kategori "General" default disqus yang dapat Anda atur ketika mendaftarkan blog Anda di [disqus.com](https://disqus.com/).

Untuk informasi lebih lanjut tentang variabel konfigurasi disqus, kunjungi [JavaScript configuration variables](https://help.disqus.com/developer/javascript-configuration-variables).

Terakhir, lekatkan tag `< Disqus.DiscussionEmbed >` di bagian bawah posting blog Anda untuk menampilkan bidang komentar disqus.

Itu semua tentang pengaturan layanan komentar disqus di blog yang diberdayakan Gatsby.
Untuk kenyamanan Anda, saya telah mempresentasikan kode contoh di bawah ini dengan konfigurasi disqus, yang dapat Anda gunakan dalam templat posting blog Anda (misalnya, lokasi file templat posting blog Gatsby yang khas adalah src / templates / blog-post.js).


```jsx 
// blog-post.js

// kode lainnya...
import { DiscussionEmbed } from 'disqus-react'
// kode lainnya...

    const BlogPost = ({ data }) => {
    // kode lainnya ...
    
    // konfigurasi disqus 
    const baseUrl = 'https://www.aradechoco.com' // Edit sesuai url situs Anda
    const disqusShortname = 'aradechoco-com'; // Edit sesuai Shortname Disqus Anda
    const disqusConfig = {
      url: baseUrl + this.props.pageContext.slug, 
      identifier: post.id, 
      title: post.title,
        }

    return (
      <Layout>
            <div>
                // isi detail posting blog...
            </div>
            <div>
            // tambahkan kode ini 
            <Disqus.DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
            </div>
        </Layout>
    )
}
```


Selesai! Kunjungi situs blog dan Anda akan menemukan disqus komentar yang diajukan dimuat di setiap posting blog Anda. Keren kan!


## Ringkasan

Komponen 'disqus-react' benar-benar membuat proses lebih mudah untuk menambahkan komentar Disqus ke blog yang diberdayakan Gatsby. Dengan mengikuti artikel ini, Anda dapat menambahkan layanan komentar Disqus ke blog Gatsby Anda. 

Jika masih bingung silahkan komentar di bawah 👍

Semoga bermanfaat!

## Referensi

- <a href="https://github.com/disqus/disqus-react" target="_blank"> 'disqus-react' - GitHub </a>

- <a href="https://help.disqus.com/developer/javascript-configuration-variables" target="_blank"> Variabel konfigurasi JavaScript </a>
