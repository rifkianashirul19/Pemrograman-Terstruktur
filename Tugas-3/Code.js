const prompt = require("prompt-sync")();
    const size = parseInt(prompt('Masukkan ukuran kartu wajik! (1 - 6): '));

    if (isNaN(size) || size < 1 || size > 6) {
    console.log('yang bener!, bisanya 1-6 aja');
    } else {
    const topBottomRow = '#' + '---'.repeat(size)+'#';
    // Mengubah topBottomRow
    console.log(topBottomRow);

    // Membuat setengah pada bagian atas kartu wajik
    for (let i = 1; i <= size; i++) {
        let row = '|';
    for (let j = 1; j <= size - i; j++) {
        row += ' ';
        }
    for (let k = 1; k <= i * 2 - 1; k++) {
        row += ' * ';
    }
    for (let l = 1; l <= size - i; l++) {
        row += ' ';
    }
    row += '|';
    console.log(row);
    }

    // Membuat setengah pada bagian bawah kartu wajik
    for (let i = size - 1; i >= 1; i--) {
        let row = '|';
    for (let j = 1; j <= size - i; j++) {
        row += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        row += ' * ';
    }
    for (let l = 1; l <= size - i; l++) {
        row += ' ';
    }
    row += '|';
    console.log(row);
    }

    console.log(topBottomRow);
    }