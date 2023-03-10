console.log("---------------------- funzioni ----------------------");

/* -------Esercizi Funzioni--------*/

// Esercizio 1) Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.

function multiplicazione(a, b) {
    const somma = a * b;
    return somma;
}

console.log(multiplicazione(5, 2));

// Esercizio 2) Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
console.log('Esercizio 2 ');

function eta(a) {
    let day = a * 365
    return day;
}
console.log(eta(65));

// Esercizio 3)Crea una funzione che accetta un numero come unico
//             argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false. 
console.log('Esercizio 3 ');

function calc(a) {
    if (a <= 0) {
        return true;
    } else {
        return false
    }
} console.log(calc(2));
console.log(calc(0));
console.log(calc(-2));
// Esercizio 4) 
console.log('Esercizio 4 ');

function zampe(a, b, c) {
    let po = a * 2;
    let mu = b * 4;
    let ma = c * 4;
    let somma = po + mu + ma;
    return somma;

} console.log(zampe(2, 3, 5));
console.log(zampe(1, 2, 3));
// Esercizio 5) 
console.log('Esercizio 5 ');

function fiammiferi(a) {
    if (a === 0) {
        somma = 0;
        return somma;
    }
    if(a < 0){
        console.log('inserire numero intero positivo');
    }
    if (a > 0) {
        somma = (a * 6) - (a - 1);
        return somma;
    }
} console.log('i fiammiferi sono: ' + fiammiferi(87));

// Esercizio 6) 
console.log('Esercizio 6 ');

// function conta(a){


// }console.log(conta(2));
