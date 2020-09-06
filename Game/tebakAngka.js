let game = true;
while (game) {
    // Intro
    alert('Game Tebak Angka! \nPilih nomor dari 1 - 10 \nKamu hanya memiliki 3 kesempatan!');

    // Simpan pilihan comp
    let comp = Math.floor(Math.random() * 10) + 1;
    console.log(comp);

    let hasil = '';
    // Rules Game
    for (kesempatan = 2; kesempatan >= 0; kesempatan--) {
        let user = prompt('Tebak Angka :');
        if (user == comp && kesempatan != 0) {
            hasil = 'Selamat hasil anda Benar!';
            alert(hasil);
            break;
        } else if (user < comp && kesempatan != 0) {
            hasil = 'Angka anda terlalu rendah!';
            alert(hasil + '\nkesempatan anda tinggal ' + kesempatan + 'x');
        } else if (user > comp && kesempatan != 0) {
            hasil = 'Angka anda terlalu besar!';
            alert(hasil + '\nkesempatan anda tinggal ' + kesempatan + 'x');
        } else if (kesempatan == 0) {
            alert('Game Over kesempatan anda telah habis! \nAngka yang dicari adalah ' + comp + '\nSilkan isi ulang');
        };
    }
    // Game Lagi
    game = confirm('Main Lagi?');
}
alert('Terima Kasih telah bermain!');