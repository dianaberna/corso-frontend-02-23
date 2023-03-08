// es 1 e 2
let vettore1 = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
n = 0;
sommVettore = 0;
for (let index = 0; index < vettore1.length; index++) {
    console.log(vettore1[index]);
    sommVettore += vettore1[index];
}
console.log(sommVettore);

// es 3
sommaPositivi = 0;
for (i = 0; i < vettore1.length; i++) {
    if (vettore1[i] > 0) {
        sommaPositivi += vettore1[i];
    }
}
console.log(sommaPositivi);
// es 4
sommaDispari = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] % 2 != 0) {
        sommaDispari += vettore1[index];
    }
}
console.log(sommaDispari);
//es 5
sommaIndicePari = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (index % 2 == 0) {
        sommaIndicePari += vettore1[index];
    }
}
console.log(sommaIndicePari);

//es 6
let cont = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] == 2) {
        cont += 1;
    }
}
console.log("Il numero 2 compare " + cont + " volte");

//es 7
cont = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] >= 0) {
        cont += 1;
    }
}
console.log("I numeri positivi sono: " + cont);

//es 8

let max = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] > max) {
        max = vettore1[index];
    }
}
console.log("Il valore massimo è: " + max);

//es 9

let min = 10000000;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] < min) {
        min = vettore1[index];
    }
}
console.log("Il valore minimo è: " + min);

//es 17

array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
let metaArray1 = array1.length / 2;
for (let index = 0; index < metaArray1; index++) {
    if (array1[index] != array1[array1.length - index - 1]) {
        console.log("L'array1 non è palindromo");
        break;
    } else {
        console.log("Valori uguali");
    }
}

let metaArray2 = array2.length / 2;
for (let index = 0; index < metaArray2; index++) {
    if (array2[index] != array2[array2.length - index - 1]) {
        console.log("L'array2 non è palindromo");
        console.log(array2[index], array2[array2.length - index - 1]);
        
    } else {
        console.log(array2[index], array2[array2.length - index - 1]);
    }
}
