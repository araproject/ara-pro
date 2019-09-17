---
date: 2019-08-14
title: 'Mengenal Command Git dasar'
template: post
thumbnail: '../thumbnails/git.png'
slug: mengenal-command-git-dasar
categories:
  - Tutorial
tags:
  - Git
  - Github
  - Terminal
---

## Apa itu git?

Git adalah version control system dimana bisa mengingat setiap perubahan file. Git sangat efektif dan cepat untuk membantu kita khusunya dalam pembuatan projek yang besar dan dengan harga sangat murah yaitu gratis.

Sebelumnya dalam contoh berikut saya akan menggunakan Windows 10 pro dan penginstalannya dengan download file installernya (Installer latest version bisa kamu download di [sini](https://git-scm.com) ).

# Referensi perintah Git.

## Cara upload semua file dari direktori lokal ke repositori Git baru

Jika kamu memiliki project di komputer dan kamu baru saja membuat repositori Git kosong di GitHub, gunakan perintah ini untuk mengunggah semuanya ke Git.

```bash
cd your-directory
git init
git remote add origin git@github.com:your-username/your-repo.git
git add .
git commit -am "Message"
git push -u origin master
```

## Cara download semua file dari repositori Git ke direktori lokal.

Kebalikan dari opsi di atas - misalnya, jika repositori kamu ada di GitHub, dan kamu sedang mengerjakannya di komputer lokal yang berbeda. Jalankan perintah ini di luar tempat kamu ingin direktori baru muncul (bukan di dalam direktori yang kamu ingin munculkan).

```bash
git clone git@github.com:your-username/your-repo.git     # jika memakai SSH
git clone https://github.com/your-username/your-repo.git # jika memakai HTTPS
```

## Cara hapus satu file dari Git cache

Hapus satu file yang di-cache.

```bash
git rm -r —-cached file.txt
```

## Ganti seluruh direktori lokal

Jika kamu memiliki beberapa konflik penggabungan, atau secara tidak sengaja mulai membuat perubahan ke direktori lokal sebelum menarik perubahan dari master, inilah cara yang dapat mengembalikan direktori lokal ke apa yang ada di GitHub.

```bash
git fetch --all
git reset --hard origin/master
```

## Abaikan direktori

Jika kamu telah melacak direktori dan kemudian memutuskan untuk meng-ignore seluruh direktori, cukup menambahkannya ke `.gitignore`. Pertama, kamu harus menambahkan direktori ke .gitignore, lalu jalankan perintah ini:

```bash
git rm -r --cached your-directory
```

Kemudian push perubahan.

## Add .gitignore to an existing repository

Mirip dengan di atas, tetapi jika kamu telah menambahkan `.gitignore` dengan banyak perubahan.

```bash
git rm -r --cached .
git add .
git commit -m "Message"
```

## Force a push or pull

Ketika kamu benar-benar ingin repositori lokal Anda menimpa remote.

```bash
git push -f origin master
git pull -f origin master
```

## Menggabungkan perubahan dari remote pull request dengan konflik

Buat branch baru dengan perubahannya.

```bash
git checkout -b their-branch master
git pull their.git master
```

Play with the files and commit them.    

```bash
git add files
git commit -m “Message"
git push origin master
```

Gabungkan kembali ke branch.  

```bash
git checkout master
git merge --no-ff <their-branch) (:wq!)
git push origin master
```

## Remove branch

Letakkan `:` di depan untuk menghapus instead of update remotely.

```bash
git push origin :branch-name
```

Use `--delete` or `-D` for local.

```
git branch --delete branch-name
````

## Ganti master dengan konten dari branch lain 

```bash
git checkout branch-name
git merge -s ours master
git checkout master
git merge branch-name
```

## Hapus semua branch lokal kecuali master

```bash
git branch | grep -v "master" | xargs git branch -D
```

Lebih dari satu branch dapat ditambahkan ke grep. Untuk menghapus semua branch lokal kecuali "master" dan "develop":

```bash
git branch | grep -v "master\|develop" | xargs git branch -D
```

 ## Biarkan commit kosong
 
Perbaiki masalah git hooks yang mengklaim semuanya ada "Up-to-date".
 
 ```bash
 git push production master
 git commit --allow-empty -m 'push to execute post-receive'
 git push production master
 ```
 
 ## Gabungkan branch fitur baru menjadi master
 
 Merge branches.

```bash
git checkout master
git pull origin master
git merge new-feature
git push origin master
```

## Switch to branch that exists on origin

```bash
git fetch --prune --all
git checkout other-branch
```

## Fetch branch from origin

```bash
git fetch origin
git checkout --track origin/<remote_branch_name>
```

## Accept all incoming changes

```bash
git pull -Xtheirs
```

## Rebase from develop

```bash
git fetch --prune --all
git rebase origin/develop
git pull
git push
```

## Stashing

Singkirkan perubahan dan alihkan ke branch lain

```bash
git stash
git checkout -b new-branch
git stash pop
```

## Accidentally committed to develop and want to move that commit to a branch

```bash
git branch new-branch
git reset HEAD~1
git checkout <files>
```

## GitHub pages to non-docs folder

"dist" atau terserah yang kamu inginkan.

```bash
git subtree push --prefix dist origin gh-pages
```

## Subtree within repo

```bash
git subtree add --prefix <local-dir> https://github.com/aradechoco/<repo> master --squash
git subtree pull --prefix <local-dir> https://github.com/aradechoco/<repo> master --squash
git subtree push --prefix <local-dir> https://github.com/aradechoco/<repo> master --squash
```

## Exiting VIM

Bagi mereka yang baru ke baris perintah, berakhir di layar pesan komit (sering kali ketika kamu lupa menambahkan flag `-m` ke commit) itu kadang membingungkan karena menekan escape (atau` CTRL` + `C`) tidak membuat keluar dari layar, sebagai editor default untuk Git adalah VIM. Sebagai gantinya, tekan escape (jika kamu sudah mulai mencoba mengetik sesuatu) dan ketikkan perintah berikut:

```bash
:q
```


Dan tekan enter, maka kamu akan kembali ke tempat sebelumnya.

Terima kasih sudah membaca dan Semoga bisa bermanfaat bagi kita semua.

## Referensi

[Git-scm](https://git-scm.com/book/en/v1/Getting-Started)
