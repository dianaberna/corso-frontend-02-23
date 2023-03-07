let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//           0  1  2                    9  10

console.log("esercizi.js");

// 1) Stampare tutti gli elementi dell’array →  2, 6, 9, 10, -2, -3, 0, 2, 5, 1

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

// 2) Stampare la somma di tutti gli elementi dell’ array → 30
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

// 4) Stampare la somma dei soli elementi dispari → 12
i = 0;
somma = 0;
while (i < array.length) {
    // elemento dell'array in posizione i dispari
    if (array[i] % 2 !== 0) {   // if( array[i] % 2 == -1 || array[i] % 2 == 1 ) 
        somma = somma + array[i];
    }
    i++;
}
// 5) Stampare la somma dei soli elementi in indice/posizione pari  → 14
i = 0;
somma = 0;
while (i < array.length) {
    if (i % 2 == 0) {       // posizione i pari
        somma = somma + array[i];
    }
    i++;
}
// 6) Stampare quante volte compare il numero 2 → 2
// 7) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
// 8) Stampare il numero massimo (senza usare funzioni matematiche) → 10
// 9) Stampare il numero minimo → -3
// 10) Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
// 11) Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]
// 12) Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
// 13) Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2 🙂
