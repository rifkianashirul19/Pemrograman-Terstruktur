const prompt = require('prompt-sync')();

        let hari = parseInt(prompt('Masukan tanggal lahir: '));
        let bulan = parseInt(prompt('Masukan bulan lahir: '));
        let tahun = parseInt(prompt('masukan tahun lahir: '));

        let hariIni = new Date();
        let umur = hariIni.getFullYear() - tahun;

        if (hariIni.getMonth() < bulan || (hariIni.getMonth() === bulan && hariIni.getDate() < hari)) {
        umur--;
        }

        while (umur < 18) {
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

        if (umur >= 18) {
        console.log('Selamat Datang!');
        }