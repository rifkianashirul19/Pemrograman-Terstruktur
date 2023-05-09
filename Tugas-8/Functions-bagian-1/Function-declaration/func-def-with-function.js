// Mencetak `property name` dan `property value` dari suatu object o
function printops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}`);
    }
}
    
// Melakukan penghitungan jarak antara dua titik (x1, y1) dan (x2, y2)
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
    }
    
// FUngsi rekursif yang memanggil dirisnya sendiri dan digunakan untuk
// menghitung faktorial
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}

let o = {"apple": 5000, "mango": 7000, "pineapple": 15000};
printops(o);
    
console.log();
let dist = distance(0, 0, 5, 12); // => 13 = sqrt(5^2 + 12^2)
console.log("dist: ", dist);
    
console.log();
console.log("factorial(5): ", factorial(5)); // => 120 = 5 x 4 x 3 x 2 x 1

// Function expression berikut mendefinisikan nilai kuadrat dari argument
// yang diberikan kepada fungsi tersebut
const square = function(x) { return x*x; };
console.log(square(5));

// Function expression dapat memuat nama yang dapt digunakan
// untuk mendefinisikan fungsi rekursif
const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1);
};
console.log(f(5));

// Function expression dapat digunakan sebagai suatu argumen untuk fungsi
// yang lain
let result = [3, 2, 1].sort(function(a, b) { return a - b; });
console.log(result);

// Function expression dapat juga didefinisikan dan langsung di panggil
// dengan nilai argument
let tensquared = (function(x) { return x*x; }(10));
console.log(tensquared);