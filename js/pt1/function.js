// 1) Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
function moltiplica(num1, num2) {
    return num1 * num2;
}
console.log(moltiplica(3, 2));
console.log(moltiplica(-3, -6));
console.log(moltiplica(7, 3));

// 2) Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
function convertireAnniInGiorni() {
    const giorniInUnAnno = 365.25;
    const etaInGiorni = etaInAnni * giorniInUnAnno;
    return etaInGiorni;
}

const etaInAnni = 65;
const etaInGiorni = convertireAnniInGiorni(etaInAnni);
console.log(etaInGiorni);

// 3) Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
function controllaNumero(numero) {
    if (numero <= 0) {
        return true;
    } else {
        return false
    }
}
console.log(controllaNumero(5));
console.log(controllaNumero(0));
console.log(controllaNumero(-2));

// 4) In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. 

// 5) Crea una funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step.

// 6) Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.
function sommaNumeri(n) {
    let somma = 0;
    for (let i = 1; i <= n; i++) {
        somma += i;
    }
    return somma;
}
console.log(sommaNumeri(4));
console.log(sommaNumeri(13));
console.log(sommaNumeri(600));

// 7) Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come numeri interi e restituisce il prezzo finale dopo lo sconto.
// function trovaSconto(prezzoOriginale, percentualeSconto) {
//     if (prezzoOriginale <= 0 || percentualeSconto < 0 || percentualeSconto > 100) {
//       return null; 
//     }
//     const prezzoFinale = prezzoOriginale * (100 - percentualeSconto) / 100;
//     return prezzoFinale;
//   }
// console.log(trovaSconto(1500, 50));  
// console.log(trovaSconto(89, 20));
// console.log(trovaSconto(100, 75));    

function trovaSconto(prezzoOriginale, percentualeSconto) {
    if (prezzoOriginale <= 0 || percentualeSconto < 0 || percentualeSconto > 100) {
      return null; 
    }
    const prezzoFinale = prezzoOriginale * (100 - percentualeSconto) / 100;
    return prezzoFinale.toFixed(2);
  }
  console.log(trovaSconto(1500, 50));  
  console.log(trovaSconto(89, 20));
  console.log(trovaSconto(100, 75));    

// 8)

// 9) Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà un calcolo con i numeri indicati.
function calcola(numero1, numero2, operatore) {
    let risultato;
    switch (operatore) {
      case "+":
        risultato = numero1 + numero2;
        break;
      case "-":
        risultato = numero1 - numero2;
        break;
      case "*":
        risultato = numero1 * numero2;
        break;
      case "/":
        risultato = numero1 / numero2;
        break;
      default:
        return null; 
    }
    return risultato;
  }
console.log(calcola())
  