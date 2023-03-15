// array/vettore -> gruppo di numeri
// inizieremo a contare da zero e non da uno
console.log("-- array/vettori -- ");
let vettore = [3, 2, 6, 0]; // array con 4 numeri
console.log(typeof vettore);
// posizione =  0, 1, 2, 3 --> l'ultimo valore si trova nella posizione lunghezza-1
console.log(vettore);
console.log(vettore.length); // lunghezza array = quanti valori ci sono all'interno dell'array
console.log(vettore[0]); // elemento dell'array chiamato vettore nella posizione 0
console.log(vettore[1]);
console.log(vettore[2]);
console.log(vettore[3]);
// console.log(vettore[100]) --> undefined

// calcolare la somma di tutti i valori dell'array
let sommaVettore = vettore[0] + vettore[1] + vettore[2] + vettore[3];
console.log("sommaVettore= " + sommaVettore);

// con il while
let i = 0;
let sommaVettoreConWhile = 0;
while (i < vettore.length) {
    // la condizione può essere o i<vettore.length oppure i<=vettore.length-1
    sommaVettoreConWhile = sommaVettoreConWhile + vettore[i];
    i++;
}
console.log("sommaVettoreConWhile= " + sommaVettoreConWhile);

/*

i=0 sommaVettoreConWhile=0
i < vettore.length ? 0 < 4 ? si
    sommaVettoreConWhile = 0 + vettore[0] = 0 + 3 = 3
    i++ -> i=1
i < vettore.length ? 1 < 4 ? si
    sommaVettoreConWhile = 3 + vettore[1] = 3 + 2 = 5
    i++ -> i=2
i < vettore.length ? 2 < 4 ? si
    sommaVettoreConWhile = 5 + vettore[2] = 5 + 6 = 11
    i++ -> i=3
i < vettore.length ? 3 < 4 ? si
    sommaVettoreConWhile = 11 + vettore[3] = 11 + 0 = 11
    i++ -> i=4
i < vettore.length ? 4 < 4? no

i=0 sommaVettoreConWhile=0
i <= vettore.length ? 0 <= 3 ? si
    sommaVettoreConWhile = 0 + vettore[0] = 0 + 3 = 3
    i++ -> i=1
i <= vettore.length ? 1 <= 3 ? si
    sommaVettoreConWhile = 3 + vettore[1] = 3 + 2 = 5
    i++ -> i=2
i <= vettore.length ? 2 <= 3 ? si
    sommaVettoreConWhile = 5 + vettore[2] = 5 + 6 = 11
    i++ -> i=3
i <= vettore.length ? 3 <= 3 ? si
    sommaVettoreConWhile = 11 + vettore[3] = 11 + 0 = 11
    i++ -> i=4
i <= vettore.length ? 4 <= 3? no

*/

let sommaVettoreConFor = 0;
for (let indice = 0; indice < vettore.length; indice++) {
    sommaVettoreConFor = sommaVettoreConFor + vettore[indice];
}
// console.log(indice) --> indice qui fuori non esiste
console.log("sommaVettoreConFor= " + sommaVettoreConFor);

let vettoreStrano = [1, "ciao", true, 4];
console.log(vettoreStrano);
console.log(typeof vettoreStrano);

let sommaVettoreStrano = 0;
for (let indice = 0; indice < vettoreStrano.length; indice++) {
    if (typeof vettoreStrano[indice] == "number") {
        console.log(vettoreStrano[indice]);
        sommaVettoreStrano = sommaVettoreStrano + vettoreStrano[indice];
    }
}
// console.log(indice) --> indice qui fuori non esiste
console.log("sommaVettoreConFor= " + sommaVettoreStrano);
console.log(typeof sommaVettoreStrano);

console.log("prove elementi fuori dall'array");
// array va da 0 a 9
if (vettore[12]) {
    console.log("l'elemento esiste");
} else {
    console.log("l'elemento non esiste");
}

// array[2] che tipo di dato è ? number
// number che tipo di dato è ? string
let tipoDiDato = typeof vettore[12];
let tipoDelTipoDiDato = typeof tipoDiDato;
console.log(tipoDiDato, tipoDelTipoDiDato);

if (tipoDiDato !== "undefined") {
    console.log("l'elemento esiste");
} else {
    console.log("l'elemento non esiste");
}
