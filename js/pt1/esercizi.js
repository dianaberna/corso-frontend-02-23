let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//           0  1  2                    9  10

console.log("esercizi.js");

// 1) Stampare tutti gli elementi dell’array -> scorrere tutto l'array -> while/for

/*
variabile per la condizione
while(condizione){
    ...
    aggiornamento della variabile per la condizione
}
*/

console.log("esercizio 1 - con while");

// condizione falsa è quando "usciamo" dall'array
// while/for -> strumenti che mi aiutano a scorrere da 0 a 4 
// array[i] -> elemento dell'array chiamato array nella posizione i

let i = 0;
while (i < array.length) {
    console.log(array[i]); // --> [] in questo caso ci permette di accedere all'elemento in posizione i dell'array numeriBari
    i = i + 1;
}

console.log("esercizio 1 - con for");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 2) Stampare la somma di tutti gli elementi dell’ array
// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//              0  1  2   3   4

i = 0;
let somma = 0;
let lunghezza = array.length;
while (i <= lunghezza - 1) {
    somma = somma + array[i];
    //console.log("array[" + i + "] = " + array[i], "somma = " + somma);
    i++;
}
console.log("esercizio 2 = " + somma);

// 3) Stampare la somma dei soli elementi positivi → 35

let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sommaPositivi = sommaPositivi + array[i];
    }
}
console.log("esercizio 3 = " + sommaPositivi);

// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
// 3.1) contare quanti elementi positivi ci sono nell'array

i = 0;
let variabileContatore = 0;
while (i < array.length) {
    if (array[i] >= 0) {
        variabileContatore = variabileContatore + 1;
    }
    i++;
}
console.log("esercizio 3.1 = " + variabileContatore);
