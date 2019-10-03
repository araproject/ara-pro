---
date: 2019-09-26
title: 'Cara memasang Kode Iklan Google Adsense di Gatsby'
template: post
thumbnail: '../images/adsense.png'
slug: memasang-google-adsense-gatsby
categories:
  - Tutorial
  - Code
tags:
  - info
  - gatsby
  - google adsense
 
---

Menambahkan iklan Adsense ke Blog Gatsby sedikit rumit karena Anda tidak dapat langsung menggunakan kode yang di siapkan oleh Google. 

Namun, Anda dapat membuat komponen yang memungkinkan Anda menampilkan iklan dengan tips di bawah ini.

Dalam tutorial ini, saya akan berbagi tentang cara menambahkan kode iklan google adsense ke gatsby dan react.js apps.

## Pertama salin kode iklan Adsense Anda

Buka akun Google Adsense dan kemudian salin kode iklan, kodenya terlihat seperti di bawah ini.

```jsx
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">
</script>

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="xxxxxxxxxxxx"
     data-ad-slot="xxxxxxxx"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## Salin skrip kode adsense 

Salin kode `<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>` ke `src/layout/index.js`.

<div class="filename">index.js</div>

```jsx
import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
     <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Helmet>
    {children}
  </div>
);

export default Layout;
```

## Install plugin `react-adsense` 

```bash 
npm install --save react-adsense
```

## Masukkan Iklan Adsense secara manual

Ada sedikit masalah iklan yang tidak tampil karena dua tag. Ketika salah satu tag dihapus,iklan otomatis akan muncul. Untuk masalah in saya belum menemukan solusinya.

Sepertinya iklan otomatis dan gatsby tampaknya tidak kompatibel satu sama lain, untuk masalah ini saya telah memodifikasi kodenya sehingga iklan dapat muncul jika di memasukkan secara manual.

pada `src/templates/post.js`

<div class="filename">post.js</div>

```jsx

import AdSense from 'react-adsense'

...
const Post = ({post}) => {
    ...

    return (
        <div className={styles['post']}>
            <Link className={styles['post__home-button']} to="/">All Articles</Link>

            <div>
                <AdSense.Google
                    client="ca-pub-970xxxxxxxxxxx"
                    // slot="test"
                    style={{display: "block"}}
                    layout="in-article" format="auto"/>
            </div>
            <div className={styles['post__content']}>
                <Content body={html} title={title}/>
            </div>
            <div>
                <AdSense.Google
                    client="ca-pub-97xxxxxxxxxxxx"
                    // slot="test"
                    style={{display: "block"}}
                    layout="in-article" format="auto"/>
            </div>

            ...
        </div>
    );
};

export default Post;
```

Demikianlah cara menambahkan kode Google Adsense ke Gatsby, jika mempunyai masalah selama instalasi kode iklan silahkan komentar di bawah.

## Terkait 

- [Membuat blog dengan Gatsby dan Netlify](https://www.aradechoco.com/membuat-blog-dengan-gatsby-dan-netlify/)
- [Menambahkan Comment Disqus ke Blog Gatsby dengan disqus-react](https://www.aradechoco.com/menambahkan-comment-disqus-ke-blog-gatsby-dengan-disqus-react/)


