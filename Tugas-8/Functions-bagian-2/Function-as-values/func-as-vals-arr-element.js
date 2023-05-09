// Fungsi dideklarasikan sebagai element pertama dari arr, lalu nilai
// argumentnya dapat diambil dari element kedua dari arr
let arr = [function(x) => { return x * x; }, 16]
console.log(arr[0](arr[1]));