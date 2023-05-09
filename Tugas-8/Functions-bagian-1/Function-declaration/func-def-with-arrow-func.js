let result;

// Mendefinisikan fungsi jumlahan dua buat variabel x dan y menggunakan arrow
// function ( () => {} )
const sum = (x, y) => { return x + y; };
result = sum(25, 75);
console.log(result);

// Tanpa kurung kurawal dan kata kunci `return`
const sumShort = (x, y) => x + y;
result = sumShort(25, 75);
console.log(result);

// Untuk arrow function dengan satu parameter tidak perlu menggunakan kurung
const polynomial = x => x*x + 2*x + 3;
result = polynomial(1);
console.log(result);

// Untuk arrow function tanpa argumen dapat menggunakan kurung saja
const greeting = () => "Hi!";
result = greeting();
console.log(result);

// -- Penggunaan arrow function sebagai argument suatu array method
// Digunakan untuk menghapus element yang bernilai null
let filtered = [1, null, 2, 3].filter(x => x !== null);
console.log(filtered);

// Digunakan untuk melakukan kuadrat setiap element array tanpa harus
// melakukan perulangan menggunakan array method `map()`
let squares = [1, 2, 3, 4].map(x => x*x);
console.log(squares);