let angka = parseInt(prompt('Masukkan angka: '));

switch (angka) {
    case 1:
        alert('anda memasukan angka 1');
        break;

    case 2:
        alert('anda memasukan angka 2');
        break;

    case 3:
        alert('anda memasukan angka 3');
        break;

    default:
        alert('salah');
        break;
}

let makanan = prompt('Masukan makanan: \n (cth: Nasi, Kacang Kedelai,Ubi Jalar, Gandum, Buah, Sayur');

switch (makanan) {
    case 'Nasi':
    case 'Kacang Kedelai':
    case 'Ubi Jalar':
        alert('Makanan pokok orang Indonesia');
        break;

    case 'Gandum':
    case 'Buah':
    case 'Sayur':
        alert('Makanan pokok orang Eropa');
        break;

    default:
        alert('Anda bukan orang!!!');
        break;

}