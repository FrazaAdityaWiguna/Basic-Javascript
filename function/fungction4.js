// Global scope
let a = 1;

function tes() {

    let a = 2;

    console.log(window.a);
}
tes();