// Refaktoring
function tes(n) {
    // Base Case
    if (n === 0) return;
    console.log(n);
    return tes(n - 1);

}

tes(10);