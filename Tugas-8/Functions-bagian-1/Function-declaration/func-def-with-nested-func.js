// Fungsi berikut akan menghitung sisi miring dari suatu segitiga siku-siku
// dengan diberikan panjang sisi tegak dan sisi mendatar.
// Fungsi yang memuat definisi suatu fungsi (square). Disini fungsi square
// dapat memanggil variabel tempat fungsi tersebut didefinisikan, yaitu
// dapat mengakses variabel a dan b dari fungsi hypotenuse
function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}
    
let result = hypotenuse(5, 12);
console.log(result);