const prompt = require('prompt-sync')();

// Menerima input dari pengguna untuk nilai tinggi
const height = parseInt(prompt('Masukkan nilai tinggi: '));

// Menerima input dari pengguna untuk nilai lebar
const width = parseInt(prompt('Masukkan nilai lebar: '));

// Membuat variabel untuk menampung output
let output = '';

// Membuat perulangan untuk mencetak gambar kartu wajik
for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
    // Cek apakah saat ini kita berada di dalam area wajik atau di luar
    if (j >= Math.ceil(height/2) - i + 1 && j <= Math.floor(height/2) + i - 1 && j >= i - Math.floor(height/2) && j <= width - (i - Math.floor(height/2))) {
        output += '*';
    } else {
        output += ' ';
    }
    }
  // Tambahkan baris baru setiap selesai mencetak satu baris
    output += '\n';
}

// Cetak output ke konsol
console.log(output);