// Object calculator yang dapat menyimpan input penjumlahan dan hasil
// penjumlahannya
let calculator = {
    operand1: 1,
    operand2: 1,
    
    add() {
        this.result = this.operand1 + this.operand2
    }
}

// Kita berikan input bilangan yang akan dilakukan penjumlahan
calculator.operand1 = 5;
calculator.operand2 = 7;

// Lakukan proses penjumlahan setelah memasukan inpuit
calculator.add();

// Tampilkan hasil penjumlahan
console.log(calculator.result);