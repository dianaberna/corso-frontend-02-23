// 1 esercizio
// Moltiplicazione di due numeri

function moltiplicazione(a, b) {
  return a * b;
}

console.log(moltiplicazione(3, 2));
console.log(moltiplicazione(-3, -6));
console.log(moltiplicazione(7, 3));

//2 esercizio
//Convertire anni in giorni
function anniInGiorni(a) {
  return a * 365;
}
console.log(anniInGiorni(65));
console.log(anniInGiorni(0));
console.log(anniInGiorni(20));

//3 esercizio
// Minore o uguale a zero

function minoreUgualeAZero(a) {
  if (a <= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(minoreUgualeAZero(5));
console.log(minoreUgualeAZero(0));
console.log(minoreUgualeAZero(-2));

//4 esercizio
// Il problema della fattoria

function numeroZampe(a, b, c) {
  let sum = a * 2 + b * 4 + c * 4;
  return sum;
}

console.log(numeroZampe(2, 3, 5));

//5 esercizio fiammiferi

function numeroDiFiammiferi(a) {
  if (a < 0) {
    console.log("errore");
    return;
  } else if (a > 0) {
    return a * 6 - (a - 1);
  } else {
    return 0;
  }
}

console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

//6 esercizio
// Somma i numeri da un unico numero
let sum = 0;
function sommaDaUnUnicoNumero(a) {
  for (let i = 0; i <= a; i++) {
    sum += i;
  }
  return sum;
}

console.log(sommaDaUnUnicoNumero(23));

// 7 esercizio
// Trova lo sconto

function trovaSconto(a, b) {
  return a - (a / 100) * b;
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

//8 esercizio
// Posizione nell'alfabeto

function letteraInPosizione(num) {
  let x = "";
  if (num % 1 != 0 || num == 0) {
    console.log("non è valido");
  } else if (num > 0 && num < 27) {
    x = String.fromCharCode(num + 96);
    console.log(x);
  }
}

letteraInPosizione(26.0);

//9 esercizio
//Calcolatrice di base
function calcolatrice(a, operator, b) {
  let operazione = 0;

  switch (operator) {
    case "+":
      operazione = a + b;
      break;

    case "-":
      operazione = a - b;

    case "/":
      if (b != 0) {
        operazione = a / b;
      } else {
        return "errore";
      }
      break;

    case "*":
      operazione = a * b;
      break;

    default:
      return "errore";
  }
  return operazione;
}

console.log(calcolatrice(2, "+", 2));

//10 esercizio
// Fare la somma di tutti gli elementi di un array
// sommaElementiArray([1, 2, 4]) ➞ 7

function sommaElementiArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sommaElementiArray([1, 2, 4]));

//11 esercizio
// Quante volte è vero?
// Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
// quantiTrue([true, false, false, true, false]) ➞ 2
// quantiTrue([false, false, false, false]) ➞ 0

function quantiTrue(x) {
  let cont = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === true) {
      cont++;
    }
  }
  return cont;
}

console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([]));

//12 esercizio
// Piegare un pezzo di carta
// Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta dopo averlo
// piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.

function spessore(num) {
  let foglioSpessore = 0.5 / 1000;
  let risultato = foglioSpessore * 2 ** num;
  return risultato;
}

console.log(spessore(4));

//13 esericizio
// Validare l'email
let domini = ["gmail", "hotmail", "outlook"];

let email = "prova@gmail.com";

function validateEmail(mail) {
  let cont = "";
  if (mail.includes("@") && mail.includes(".")) {
    cont = mail.indexOf("@");
    for (let i = cont; i < mail.length; i++) {
      // for(let i = 0; i < domini.length; i++) {
      while (mail[i + 1] != ".") {
        if (typeof cont[i--] == "string" && typeof cont[i++] == "string") {
          
        }
        i++;
      }
    }
  }
  return false;
}

console.log(validateEmail("@gmail.com"));
console.log(validateEmail("hello.gmailcom"));
console.log(validateEmail("federica@gmail.com"));


//14 Esercizio
// Carta, forbice, sasso
// Crea una funzione che accetta due stringhe (p1 e p2 ⁠— che rappresentano i giocatori 1 e 2) 
// come argomenti e restituisce una stringa che indica il vincitore in una partita a Sasso, Carta, Forbici.





//15 esercizio
// Rimuovere i duplicati da un array
// Crea una funzione che accetta un array di elementi, rimuove tutti gli elementi duplicati
//  e restituisce un nuovo array nello stesso ordine sequenziale del vecchio array (meno i duplicati).





//17 esercizio
// Crea la funzione che accetta un array con oggetti e restituisce la somma dei budget delle persone.

let prova = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

function budgetTotale(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i].budget;
  }
  return somma;
}

console.log(budgetTotale(prova));
console.log(
  budgetTotale([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
);

function budget(array) {
  let somma = 0;
  array.forEach((element) => {
    somma += element.budget;
  });
  return somma;
}

//18 esercizio
// Calcola il prezzo totale dei generi alimentari
//Crea una funzione che prenda un array di oggetti (alimentari) che calcoli il prezzo totale e lo
//restituisca come un numero. Un oggetto alimentare ha un prodotto, una quantità e un prezzo, ad esempio:

function prezzoTotaleAlimenti(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i].price * array[i].quantity;
  }
  return somma;
}

console.log(
  prezzoTotaleAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
);
console.log(
  prezzoTotaleAlimenti([
    { product: "milk", quantity: 1, price: 1.5 },
    { product: "cereals", quantity: 1, price: 2.5 },
  ])
);
console.log(
  prezzoTotaleAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
  prezzoTotaleAlimenti([
    { product: "milk", quantity: 1, price: 1.5 },
    { product: "eggs", quantity: 12, price: 0.1 },
    { product: "bread", quantity: 2, price: 1.6 },
    { product: "cheese", quantity: 1, price: 4.5 },
  ])
);
console.log(
  prezzoTotaleAlimenti([
    { product: "chocolate", quantity: 1, price: 0.1 },
    { product: "lollipop", quantity: 1, price: 0.2 },
  ])
);
