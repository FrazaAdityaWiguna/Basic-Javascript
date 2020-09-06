// this
// Contex :
// this === window


// Object
// Cara 1 - Literal

// let obj = {
//     nama: "Fraza",
//     jabatan: "Leader"
// };
// obj.halo = function() {
//     console.log(this);
//     console.log("halo");
// }
// obj.halo();
// this pada literal mengembalikan object yang bersangkutan



// Cara 2  - Declaration
// function halo() {
//     console.log(this);
//     console.log("halo");
// }
// this.halo();
// this di Declaratin mengembalikan nilai global



// Cara 3 - Construction
// function Halo() {
//     console.log(this);
//     console.log("halo");
// }
// let obj1 = new Halo();
// let obj2 = new Halo();
// this di Construction mengembalikan object yang baru dibuat