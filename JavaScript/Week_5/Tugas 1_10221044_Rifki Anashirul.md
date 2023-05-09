# Assignment 01
<h3>Nama : Rifki Anashirul</h3>

<h4>NIM : 10221044</h4>

1. Choose four string methods and give some examples how to use them.
    - repeat - Mengulang string dengan jumlah tertentu
      ```js
        let nama = "Rifkinasss"
        console.log(nama.repeat(4)); //output Rifkinasss Rifkinasss Rifkinasss Rifkinasss
      ```    
    - toUpperCase - Mengubah semua text menjadi huruf kapital
      ```js
        let nama = "Rifki Anashirul"
        console.log(nama.toUpperCase()) //output RIFKI ANASHIRUL
      ```
    - toLowerCase - Mengubah semua text menjadi huruf kecil
      ```js
        let nama = "Rifki Anashirul"
        console.log(nama.toLowerCase()) //output rifki anashirul
      ```
    - lenght - Menghitung panjang string
      ```js
        let nama = 'Rifki Anashirul';
        console.log(nama.length); //output 15 
      ```
      
2. Explain the following code and what the results are
    ```js
    let a = 1, b = 2, c = 3; console.log(a, b, c);
    [a, b, c] = [a, c, b]; console.log(a, b, c);
    [a, b, c] = [c ,b, a]; console.log(a, b, c);
    [a, b, c] = [a, c, b]; console.log(a, b, c);
    [a, b, c] = [c, b, a]; console.log(a, b, c);
    [a, b, c] = [a, c, b]; console.log(a, b, c);
    ```
    jawab :
    ```js 
    let a = 1, b = 2, c = 3; console.log(a, b, c); //mendeklarasikan  a=1, b=2 dan c=3 dengan output 1 2 3

    [a, b, c] = [a, c, b]; console.log(a, b, c); //mengubah nilai menjadi a=1 b=c=3 c=b=2 output 1 3 2
    [a, b, c] = [c ,b, a]; console.log(a, b, c); //mengubah nilai menjadi a=c=2 b=3 c=a=1 output 2 3 1
    [a, b, c] = [a, c, b]; console.log(a, b, c); //mengubah nilai menjadi a=2 b=c=1 c=a=3 output 2 1 3
    [a, b, c] = [c, b, a]; console.log(a, b, c); //mengubah nilai menjadi a=c=3 b=1 c=a=2 output 3 1 2
    [a, b, c] = [a, c, b]; console.log(a, b, c); //mengubah nilai menjadi a=3 b=c=2 c=b=1 output 3 2 1
    ```

3. Calculate the total annual income of Abdul from the following paragraph.

    “Abdul earns 2.800.000 rupiahs from salary per month, 5.300.000 rupiahs from freelance per month, and 20.300.000 rupiahs per year.”

    Hint: define it as a string text and extract the number by the string methods.
    ```js
    let questions = "Abdul earns 2.800.000 rupiahs from salary per month, 5.300.000 rupiahs from freelance per month, and 20.300.000 rupiahs per year.";

    let salary = /(\d+(?:\.\d+)?) rupiahs from salary per month/;
    let freelance = /(\d+(?:\.\d+)?) rupiahs from freelance per month/;
    let yearly = /(\d+(?:\.\d+)?) rupiahs per year/;

    let salaryMatch = questions.match(salary);
    let freelanceMatch = questions.match(freelance);
    let yearlyMatch = questions.match(yearly);

    let salaryIncome = parseFloat(salaryMatch[1].replace(/\./g, ''));
    let freelanceIncome = parseFloat(freelanceMatch[1].replace(/\./g, ''));
    let yearlyIncome = parseFloat(yearlyMatch[1].replace(/\./g, ''));

    let totalIncome = salaryIncome * 12 + freelanceIncome * 12 + yearlyIncome;
    console.log(totalIncome.toLocaleString() + " rupiahs"); 
    ```
    ```
    output
    13,500,000 rupiahs
    ```