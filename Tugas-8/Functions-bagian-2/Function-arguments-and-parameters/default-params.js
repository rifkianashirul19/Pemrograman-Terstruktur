function getPropertyNames02(obj, arr=[]) {
    for (let property in obj) {
        arr.push(property);
    }
    
    return arr;
}
    
// Object berikut menggambarkan konfigurasi laman website yang diambil
// dari berkas .css
let obj = {
    'max-width': '36rem', 
    'padding': ['0', '1rem'],
    'margin': ['3rem', 'auto', '6rem']
};
let arr = ['display']; // konfigurasi lain yang hanya memuat property name

// Pemanggilan fungsi pengumpulan property names dari parameters obj
// namun tanpa parameters arr (parameter arr disini akan diset secara
// otomatis sebagai array kosong)
let objPropNames = getPropertyNames(obj);
console.log(objPropNames); // => ['max-width', 'padding', 'margin']
    
// Pemanggilan fungsi pengumpulan property names dari parameter obj
// dengan default parameter arr yang telah terisi element 'display'
let objPropNamesWithOption = getPropertyNames(obj, arr);
console.log(objPropNamesWithOption);