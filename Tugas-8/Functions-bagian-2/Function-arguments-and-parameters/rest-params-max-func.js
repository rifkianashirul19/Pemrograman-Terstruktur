// Fungsi untuk menghitung nilai maksimumn. Terlihat disini digunakan
// rest parameters yang diawali oleh tiga titik.
// Output dari fungsi ini adalah nilai maksimum dari inputan yang diberikan
function max(...rest) {
    let maxValue = -Infinity;
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    
    // Return the biggest
    return maxValue
}
    
// Disini kita memberikan input arguments lebih dari satu, namun
// di dalam pendeklarasian fungsi kita hanya cukup menggunakan rest
// parameter menggunakan ...rest
let result = max(1, 10, 100, 2, 3, 1000, 4, 5, 6);
console.log(result);