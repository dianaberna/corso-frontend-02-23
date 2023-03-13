console.log("-- funzioni --");

/*
DICHIARAZIONE FUNZIONE

parametri di default --> valori che la funzione utilizzerà se dall'esterno non viene assegnato un valore a quel parametro 
function nomeFunzione(parametro1, parametro2, etc){
    blocco/corpo della funzione

    return valoreLettoFuori --> la funzione terminerà 
}

RICHIAMO/INVOCO LA FUNZIONE
nomeFunzione(parametro1, parametro2, etc)

*/

// funzione che calcola la somma di due numeri

function calcoloSomma (a, b) {
    console.log(a, b);
    // let somma = 1+5 = 6
    let somma = a + b;
    return somma; // 6
}

// console.log(somma) --> qui la variabile somma non esiste
// console.log(a, b) --> qui le variabili a e b non esistono

const stampa = calcoloSomma(1, 5);

console.log(stampa);
console.log("tipo del return: " + typeof stampa);
console.log("tipo della funzione: " + typeof calcoloSomma(1, 0));

console.log(calcoloSomma(1, 5));
console.log(calcoloSomma(30, 5));
console.log(calcoloSomma(0, 5));

function calcoloDifferenza(a, b) {
    const differenza = a - b;
    console.log(differenza);
    return;
    console.log("ciao");
}

let stampa2 = calcoloDifferenza(2, 6);
console.log("stampa2 -> "+stampa2)

function ciao() {
    console.log("ciao");
    return;
}

function sommaElementiArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma = calcoloSomma(somma,array[i]);
    }
    ciao();
    return somma;
}

console.log(sommaElementiArray([1, 2, 3]));
console.log(sommaElementiArray([1, 2, 3, 5, 6, 7, 8]));

