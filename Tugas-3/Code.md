# Assignment 03 Praktikum
<h3>Nama : Rifki Anashirul</h3>

<h4>NIM : 10221044</h4>

1. Dalam praktikum, saya mempelajari Modul minggu ke-5 yaitu **Statement**. Pada modul kali mempelajari banyak hal terkait **Statement** yang ada di JavaScript. Adapun materinya yaitu :
   
   #### Expression Statements
    Merupakan kumpulan ekspresi yang dapat dijalankan tanpa tambahan ekspresi yang lain.
    Contohnya :
    ```js
        let name = "Rifkinasss";

        greeting = "Hello" + name;

        console.log(greeting); 
    ```

    #### Pengkondisian if-else
    Merupakan control structure untuk mengendalikan statement yang dapat melakukan pemilihan keputusan (decision).
    Contohnya :
    ```js
        let isNextWeekExam = true;
        
        if (isNextWeekExam) {
            console.log("You need to study now.");
        } else {
            console.log("No need to study.");
        }
    ```

    #### Perulangan while
    Merupakan control structure yang akan menjalankan statements berulang-ulang hingga kondisi yang
diberikan tidak terpenuhi lagi.
    Contohnya :
    ```js
        let count = 0;
        while (count < 10) {
        console.log(count);
        count++;
        }
    ```

    #### Jumps
    Merupakan statement yang mampu melakukan lompatan menuju baris-baris kode secara
spesifik.
    Contohnya :

    ```Continue```
    ```js
    let data = [1, 2, 3, undefined, 4, 5];
    let total = 0;
    for (let i = 0; i < data.length; i++) {
    if (!data[i]) {
    continue; // tidak memproses `undefined` elemen 
        }
    total += data[i]; 
    }
    console.log(`total = ${total}`);
    ```

    ```Try/Catch/finally```
    ```js
    try {
        var sopojarwo = persons;
        } catch ( e if e instanceof TypeError ) {
            console.log( e );
        } finally {
            console.log( 'blok finally' );
            }
    ```

    #### Miscellaneous Statements
    
    ```use strict```
    Merupakan statement khusus mengubah mode dari Js ke Strict Mode
    Contohnya :
    ```js
        // Strict mode
        "use strict";
        let x = 10;
        delete x; // => SyntaxError (we cannot perform delete)
        console.log(x); 
    ```

2. Program untuk mencetak kartu : [_Code.js_](Code.js)