# Assignment 02
<h2>Nama : Rifki Anashirul</h2>

<h2>NIM : 10221044</h2>

<br>

1. [40 points] What kind of situation do we need to use for loops or while loops? Explain with a concrete example.

    Answer:

    - For loop digunakan untuk melakukan tugas yang sama dalam pola yang sama berkali-kali dan for digunakan untuk mengulang sejumlah kali yang telah ditentukan sebelumnya.

        ```js
        for (let i = 1; i <= 10; i++) {
        console.log("Perulangan ke-" + i);
        }
        ```
        

    - While loop digunakan ketika melakukan sejumlah besar urutan pemecahan masalah yang diulang tetapi jumlah iterasinya tidak diketahui atau ketika kita ingin melakukan perulangan sampai kondisi tertentu terpenuhi.

        ```js
        let i = 1;

        while (i <= 10) {
        console.log("Perulangan ke-" + i);
        i++;
        }
        ```
<br>

2. [30 points] Write a JavaScript program to create the following multiplication table with user input up to number 9:
    ```
        1 2 3 
    ------
    1 | 1 2 3
    2 | 2 4 6
    3 | 3 6 9
    ```

    Use prompt-sync to get user input, for loops, and put the correct space when the result of multiplication is two digit numbers.
    
    Answer :

    ```js
    const prompt = require('prompt-sync')(); 
    console.log("## Tabel perkalian ##");
    const number = parseInt(prompt('Masukan angka antara 1-9: ')); 
    let tabel = '  | ';
    for (let i = 1; i <= angka; i++) {
    tabel += `${i}  `;
    }
    tabel += '\n--|';
    for (let i = 1; i <= angka; i++) {
    tabel += '---';
    }
    tabel += '\n';
    for (let i = 1; i <= angka; i++) {
    tabel += `${i} | `;
    for (let j = 1; j <= angka; j++) {
        let hasil = i * j;
        if (hasil < 10) {
        tabel += ` ${hasil} `;
        } else {
        tabel += `${hasil} `;
        }
    }
    tabel += '\n';
    }
    console.log(tabel); 
    ```
<br>

3. [30 points] To emulate the age restriction of an webpage in a website (figure on the right side), make a simpler one that can ask the user to input their age or cancel to enter the page. The program should stop asking the user input until the user type “cancel” in the program.

    Answer:

    ```js
    const prompt = require('prompt-sync')();

        let hari = parseInt(prompt('Masukan tanggal lahir: '));
        let bulan = parseInt(prompt('Masukan bulan lahir: '));
        let tahun = parseInt(prompt('masukan tahun lahir: '));

        let hariIni = new Date();
        let umur = hariIni.getFullYear() - tahun;

        if (hariIni.getMonth() < bulan || (hariIni.getMonth() === bulan && hariIni.getDate() < hari)) {
        umur--;
        }

        while (umur < 20) {
        let batal = prompt('Maaf, Anda tidak diizinkan untuk melihat materi ini saat ini. ketik "yes" untuk keluar dan "no" untuk memasukan ulang: ');
        if (batal === 'yes') {
            break;
        }
        hari = parseInt(prompt('Masukan tanggal lahir: '));
        bulan = parseInt(prompt('Masukan bulan lahir: '));
        tahhun = parseInt(prompt('masukan tahun lahir: '));
        hariIni = new Date();
        umur = hariIni.getFullYear() - tahun;
        if (hariIni.getMonth() < bulan || (hariIni.getMonth() === bulan && hariIni.getDate() < hari)) {
            umur--;
        }
        }

        if (umur >= 20) {
        console.log('Selamat Datang!');
        }
    ```

