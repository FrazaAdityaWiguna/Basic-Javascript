let tanya = true;
while (tanya) {
    // Menyimpan pilihan player
    let ply = prompt('Pilih: gajah, semut, orang');

    // menyimpan pilihan comp
    // Meng-generate angka random
    let comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    let hasil = '';
    // menentukan rules
    if (ply == comp) {
        hasil = 'SERI';
    } else if (ply == 'gajah') {
        // if (comp == 'orang') {
        //     hasil: 'MENANG';
        // }
        // else {
        //     hasil: 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (ply == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else if (ply == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan pilihan yang Salah!!!';
    }

    // tampilkan hasil
    alert('Kamu memilih: ' + ply + ' dan Comp memilih: ' + comp + '\nMaka Hasilnya: Kamu ' + hasil);

    tanya = confirm('Lagi?');
}
alert('Terima Kasih Telah Bermain!');