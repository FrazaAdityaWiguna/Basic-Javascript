let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let angkot = 1; angkot <= jmlAngkot; angkot++) {

    if (angkot <= angkotBeroperasi) {
        console.log('Angkot No.' + angkot + ' Beroperasi dengan baik!');
    } else if (angkot === 8 || angkot === 10) {
        console.log('Angkot No.' + angkot + ' Sedang lembur');
    } else {
        console.log('Angkot No.' + angkot + ' Tidak Beroperasi dengan baik!');
    }

}