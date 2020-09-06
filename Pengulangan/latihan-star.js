let s = '';

for (i = 0; i < 9; i++) {
    for (j = 8; j > i; j--) {
        s += ' ';
    }
    for (k = 0; k <= i; k++) {
        s += '*';
    }
    for (p = 0; p < i; p++) {
        s += '*';
    }
    s += '\n';
}
for (i = 0; i < 9; i++) {
    for (j = 0; j <= i; j++) {
        s += ' ';
    }
    for (k = 7; k >= i; k--) {
        s += '*';
    }
    for (p = 6; p >= i; p--) {
        s += '*';
    }

    s += '\n';
}


console.log(s);