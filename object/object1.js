// membuat objeck literal
let anggota1 = {
    nama: "Fraza Aditya Wiguna",
    jabatan: "Leader",
    umur: 18,
    code: [8, 9, 2],
    alamat: {
        kota: "Tangerang",
        jalan: "Jl.abc",
        provinsi: "Banten"
    },
    register: function() {
        let total = 0;
        let nilaiCode = this.code;
        for (let i = 0; i < nilaiCode.length; i++) {
            total += nilaiCode[i];
        }
        return total * nilaiCode.length;
    }
}

anggota1.register();
console.log(anggota1.register());

// membuat object: function declaration
function buatAnggota(nama, jabatan, umur) {
    let anggota = {};
    anggota.nama = nama;
    anggota.jabatan = jabatan;
    anggota.umur = umur;
    return anggota;
}

let anggota2 = buatAnggota('Fraza Aditya Wiguna', "Leader", 18)
let anggota3 = buatAnggota('Raja', "Co-Leader", 18)

// function Constructor
// Cirinya nama diawali huruf Capital
function Anggota(nama, jabatan, umur) {
    // let this = {};
    this.nama = nama;
    this.jabatan = jabatan;
    this.umur = umur;
    // return this;
}
// memanggilnya wajib menggunakan keyword 'new'
let anggota4 = new Anggota('Rehan', 'Member', 18)