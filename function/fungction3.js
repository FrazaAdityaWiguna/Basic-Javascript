function tambah() {

    let hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

// let a = parseInt(prompt('Masukan nilai 1 : '));
// let b = parseInt(prompt('Masukan nilai 2 : '));
// let hasil = tambah(a * 2, b * 2);

function kali(a, b) {
    return a * b;
}

let hasil = tambah(2, 1, 5, 40);
console.log(hasil);