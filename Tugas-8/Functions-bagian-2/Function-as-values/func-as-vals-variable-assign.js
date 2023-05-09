// Berikut adalah fungsi untuk melakukan pengkuadratan
function square(x) { return x*x; }

// Kita assign fungsi tersebut (tanpa argument) ke variable s
let s = square;

// Kita dapat memanggil fungsi tersebut (invocation) dengan nama fungsi square
// atau dengan variable s
console.log(square(16));
console.log(s(16));