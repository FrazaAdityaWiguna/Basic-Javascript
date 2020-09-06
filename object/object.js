// membuat objeck literal
let anggota = {
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
anggota.register();
console.log(anggota.register());