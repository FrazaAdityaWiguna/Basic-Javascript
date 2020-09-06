// Manipulasi Array

// 1. Menambahkan isi Array
// let arr = [];
// arr[0] = "Fraza";
// arr[1] = "Aditya";
// arr[2] = "Wiguna";
// arr[3] = "BigDream";

// console.log(arr);

// 2. Menghapus isi Array
// let arr = ["Senin", "Selasa", "Rabu"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array
// let arr = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at"];
// for (i = 0; i < arr.length; i++) {
//     console.log('Hari - ' + arr[i]);
// }

// Method JavaScript
let arr = ['January', 'February', 'March'];

// 1. Join 
// console.log(arr.join(' - '));

// 2. Push (Menambah Element Array diakhir) & Pop (Menghapus Element Array diakhir)

arr.push('April', 'May');
// arr.pop();

// 3. Shift (Menghilangkan Element Array diawal) & unshift (Menambah Menghilangkan Element Array diakhir)

// arr.unshift('Blank', 'Bigdream');
// arr.shift();

// 4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1,2,3, ...);
// arr.splice(1, 2, 'zaza', 'Dream');

// 5. Slice
// slice(awal, akhir);
// let arr2 = arr.slice(1, 3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. forEach
// function( element(e), index(i))
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let nama = ['Fraza', 'Aditya', 'Wiguna'];

// for (i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });


// angka.forEach(e => {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('Anggota ke-' + (i + 1) + ' adalah ' + e);
// })

// 7. map

// let angka2 = angka.map(function(e) {
//     return e;
// })
// console.log(angka2.join(' - '));

// 8. sort
// memngurutkan angka,huruf ...
// let angka3 = [1, 10, 2, 20, 5, 2, 3, 6, 8, 1, 4, 9, 994];
// angka3.sort(function(a, b) {
//     return a - b;
// })
// console.log(angka3.join(' - '))
// nama.sort();
// console.log(nama.join(' - '));

// 9. filter & find
let angka3 = [1, 10, 2, 20, 5, 2, 3, 6, 8, 1, 4, 9, 994];
// let angka4 = angka3.filter(function(x) {
//     return x > 7;
// })
// console.log(angka4.join(' - '));

// let angka4 = angka3.find(function(x) {
//     return x > 7;
// })
// console.log(angka4);