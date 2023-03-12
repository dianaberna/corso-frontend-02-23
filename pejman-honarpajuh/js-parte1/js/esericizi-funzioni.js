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

function conta(a){
let rest = 0;
// for (let i=1 ; i<=a ; i++){
//     rest+= i;
// }
for(let i=a ; i>=1 ; i--){
    //rest += i;
    rest = rest +i
}
return rest;
}console.log(conta(4));

// Esercizio 7) Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come
// // numeri interi e restituisce il prezzo finale dopo lo sconto.
console.log('Esercizio 7 ');
function calcsconto(a,b){
    let prezzo = a - ((a*b)/100)
    return prezzo;
}console.log(calcsconto(89,20));

//Esercizio 8)
console.log('Esercizio 8 ');
function trovaposizione(a){
    let  index = '';
    const alfabeto = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let x = a.toString()
    if(x.includes(".")){
        let y = x.split(".")
        if(y[1] != "0"){
            a = "Invalid"
            return a;
        }else{
            index = (alfabeto.charAt(a))
            return index;
        }
    }else{
        if(a<=0 ){
            a = "Invalid"
            return a;
        }else{
            index = (alfabeto.charAt(a))
            return index;
        }
    }
    
}console.log(trovaposizione(5.0));

//Esercizio 9) Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà
// un calcolo con i numeri indicati.
//  const expr = 2 + 4;
//  switch (expr){
//     case 2 * 4 :
//         console.log('8');
//         break;
//         case 2 + 4:
//         console.log('6');
//         break;
//         default:
//             console.log(`Sorry, we are out of ${expr}.`)
//  }

//Esercizio 10) Crea una funzione che restituisce la somma di tutti i valori di un array.
console.log('Esercizio 10 ');



