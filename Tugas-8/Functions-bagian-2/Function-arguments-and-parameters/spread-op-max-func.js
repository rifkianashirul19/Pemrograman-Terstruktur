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
    
let inputArr = [1, 10, 100, 2, 3, 1000, 4, 5, 6];
let result = max(...inputArr) // Disini kita menggunakan spread operator
                                       // pada argument inputArr
console.log(result);