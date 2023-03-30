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

// arrow function 
// comparazione
console.log("---")
function somma(a, b){
    return a+b;
}

console.log(somma(1,2))
console.log("---")

// nomefunzione = (parametri) => corpo della funzione
let sommaArrowFunction = (a, b) => a+b

console.log(sommaArrowFunction(1,2))
console.log("---")

let array = [1, 2, 3]
array.forEach(elemento => console.log(elemento))

console.log("---")

// Traditional anonymous function
/* (function (a) {
    return a + 100;
  }); */
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  /* (a) => 
    a + 100;
  ; */
  
  // 2. Remove the body braces and word "return" — the return is implied.
  /* (a) => a + 100; */
  
  // 3. Remove the parameter parentheses
  /* a => a + 100; */
  


function restituisciArray(a, b){
    let array = [a, b]
    return array
} 

let nuovoarray = restituisciArray(2, 3)
console.log(nuovoarray)

console.log("---")
let array1 = [1, 2, 3]
let array2 = array1

let array3 = []
for(let i=0; i<array1.length; i++){
    array3.push(array1[i])
}
console.log(array3)

let array4 = [...array1]
console.log(array4)

// non crea un nuovo array (array2) uguale ad array1
// js crea un collegamento dalla variabile array2 alla variabile array1
console.log(array1)
console.log(array2)
array2.push(5)
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4)