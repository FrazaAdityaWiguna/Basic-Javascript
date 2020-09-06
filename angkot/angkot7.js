let penumpang = [];
let tambahPenumpang = function(namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length == 0) {
        // Tambah Penumpang diawal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array * keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (let i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' Penumpang sudah naik!');
                //  kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi tlah diisi
            else if (i == penumpang.length - 1) {
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                //  kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}