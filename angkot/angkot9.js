// Membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            alert('Angkot Masih Kosong!')
            return false;
        }

        for (i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }

    }

}

let angkot1 = new Angkot("Fraza Aditya Wiguna", ['Tigaraksa', 'Tangerang'], [], 0)