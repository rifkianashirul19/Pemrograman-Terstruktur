# Tugas 5 Praktikum Pemrograman Terstruktur
Nama : Rifki Anashirul
NIM : 10221044

1. Pelajari terkait implementasi LIFO (Last-In First Out) dan FIFO (First-In First-Out) menggunakan array. Carilah kasus nyata penggunaan LIFO dan FIFO dan ceritakan dalam bentuk contoh penggunaan.

2. Dalam bidang business analytics dikenal suatu indikator bernama ROI (Return on Investment). Rumus sederhana untuk menghitung ROI selama setahun diberikan oleh:
```
ROI = hasil investasi - besar investasi  x 100
      ----------------------------------
              besar investasi
```  

Diberikan tabel besar investasi dan hasil investasi selama setahun untuk 5 buah investasi, carilah investasi manakah yang paling menguntungkan untuk dilakukan investasi.
```
Nama investasi  Besar Investasi	Hasil Investasi
   BBCA	        18,500	          22,200
   UNVR	        25,200	          29,500
   TLKM	        10,000	          11,800
   PGAS	        5,500	            7,400
   ASII	        28,000	          32,900 
   WSKT	        16,700	          19,300
```
Selesaikan pencarian investasi dengan hasil investasi terbaik menggunakan konsep 2D array, control structure looping, dan array method .sort().

## Jawab

1. LIFO (Last-In-First-Out) dan FIFO (First-In-First-Out) adalah dua konsep penting dalam pemrograman, termasuk dalam bahasa JavaScript.

- LIFO berarti bahwa item yang terakhir dimasukkan ke dalam suatu struktur data akan menjadi yang pertama diambil atau dihapus. Sementara itu, FIFO berarti bahwa item yang pertama dimasukkan akan menjadi yang pertama diambil atau dihapus.

Berikut adalah contoh sederhana dari LIFO dan FIFO dalam JavaScript menggunakan array:

LIFO:
```js
let stack = []; 

stack.push('A');
stack.push('B');
stack.push('C');

let item1 = stack.pop(); 
let item2 = stack.pop(); 
let item3 = stack.pop(); 
```
- Pada contoh di atas, item terakhir yang dimasukkan ke dalam stack adalah 'C', sehingga item tersebut akan diambil terlebih dahulu ketika stack.pop() dipanggil. Setelah itu, 'B' yang menjadi item terakhir sebelumnya diambil, dan seterusnya.

FIFO:
```js
let queue = []; 

queue.push('A');
queue.push('B');
queue.push('C');

let item1 = queue.shift(); 
let item2 = queue.shift(); 
let item3 = queue.shift(); 
```
Pada contoh di atas, item pertama yang dimasukkan ke dalam queue adalah 'A', sehingga item tersebut akan diambil terlebih dahulu ketika queue.shift() dipanggil. Setelah itu, 'B' yang menjadi item berikutnya diambil, dan seterusnya.

<br>

2. 
```js
let investasi = [  ['BBCA', 18500, 22200],
  ['UNVR', 25200, 29500],
  ['TLKM', 10000, 11800],
  ['PGAS', 5500, 7400],
  ['ASII', 28000, 32900],
  ['WSKT', 16700, 19300]
];

let rois = [];

for (let i = 0; i < investasi.length; i++) {
  let roi = ((investasi[i][2] - investasi[i][1]) / investasi[i][1]) * 100;
  rois.push({nama: investasi[i][0], roi: roi});
}

rois.sort(function(a, b) {
  return b.roi - a.roi;
});

console.log('ROI semua investasi:');
for (let i = 0; i < rois.length; i++) {
  console.log(`${rois[i].nama}: ${rois[i].roi.toFixed(2)}%`);
}

console.log(`investasi dengan ROI tertinggi: ${rois[0].nama}`);

```
Output:
```
ROI semua investasi:
ASII: 17.50%
UNVR: 17.06%
BBCA: 20.00%
TLKM: 18.00%
WSKT: 15.57%
PGAS: 34.55%
investasi dengan ROI tertinggi: PGAS
```