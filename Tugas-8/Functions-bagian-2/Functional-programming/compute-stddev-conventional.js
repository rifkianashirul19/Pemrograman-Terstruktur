const formatStr = require('@stdlib/string-format')

let data = [1, 1, 3, 3, 5, 7, 7, 9, 9];

// Menghitung rata-rata dengan cara menjumlahkan semua element
// dan membaginya dengan banyaknya element
let total = 0;
for (let i = 0; i < data.length; i++) {
    total += data[i];
}
let mean = total / data.length;

// Menghitung standard deviasi, pertama menghitung jumlahan
// kuadrat deviasi setiap element terhadap rata-rata.
// Setelah itu di bagi dengan (jumlah data - 1)
total = 0;
for (let i = 0; i < data.length; i++) {
    let deviation = data[i] - mean;
    total += deviation * deviation;
}
let stddev = Math.sqrt(total/(data.length - 1));
console.log(formatStr('%.2f', stddev)); // => 3.16