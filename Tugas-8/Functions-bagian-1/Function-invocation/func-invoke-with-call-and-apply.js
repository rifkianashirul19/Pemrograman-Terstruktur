let arrayOfNumbers = [4, 2, 3, 1, 1, 2, 3, 5, 1, 3, 3];
let biggest;

// Pemanggilan fungsi Math.max secara langsung
biggest = Math.max(...arrayOfNumbers)
console.log(biggest);

// Kita menggunakan Math object (object bawaan dari JavaScript)
// yng memuat semua type bilangan. Kita terapkan fungsi Math.max
// ke arrayOfNumber tetapi secara tidak langsung menggunakkan .appyly
// Math.max akan menjadi method dari Math object dan juga arrayNumbers
// akan menjadi argument dari Math.max dan kita tidak perlu melakukan
// unpack menggunakan spread operator
biggest = Math.max.apply(Math, arrayOfNumbers)
console.log(biggest);

// with .call you have to use spread operator to unpack the elements
biggest = Math.max.call(Math, ...arrayOfNumbers);
console.log(biggest);