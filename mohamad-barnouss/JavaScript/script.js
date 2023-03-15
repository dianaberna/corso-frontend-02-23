/*
let a = 1;
let b = 2;
const c = 3;

console.log("a =" + a);
console.log("ciao");
console.log(b);
console.log("somma a+b+c=" + (a + b + c));
a = "1";

console.log(typeof a);
console.log(
  "prova somma con concatenazione a= 1 ma indicato come carattere 1 + 2 risulta=" +
    (a + b)
);

let modulo = a % b; //da il resto della divisione, esempio a%2 se da resto 0 allora è pari, se resto 1 allora dispari;

//CONVERSIONE
let numeroNuovo = 2;
console.log("prova di conversione");
console.log(typeof numeroNuovo);
let numeroNuovoStringa = String(numeroNuovo); // per la conversione da numero a stringa
console.log(typeof numeroNuovoStringa);
console.log(typeof numeroNuovo, typeof numeroNuovoStringa);
console.log(numeroNuovo, numeroNuovoStringa);
*/

//ESERCIZI
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

/*1Stampare tutti gli elementi dell’array

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
*/

/* 2) Stampare la somma di tutti gli elementi dell’ array
let somma = 0;
for (let i = 0; i < array.length; i++) {
  somma += array[i];
}
console.log("la somma è uguale a " + somma);
*/

/* 3) Stampare la somma dei soli elementi dispari

let sommaDispari = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 1 || array[i] % 2 == -1) {
    sommaDispari += array[i];
    console.log(array[i]);
  }
}

console.log("La somma degli elementi dispari è " + sommaDispari);
*/

/* 4) Stampare la somma dei soli elementi in posizione pari → 14

let sommaPosizionePari = 0;

for (i = 0; i < array.length; i++) {
  if (i % 2 == 0) {
    sommaPosizionePari += array[i];
  }
}
console.log("La somma degli elementi in posizione pari " + sommaPosizionePari);
*/

/* 5) Stampare quante volte compare il numero 2 → 2

var cont = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] == 2) {
    cont++;
  }
}
console.log("Il 2 compare " + cont + "  volte");
*/

/*6) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array
var cont = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    cont++;
  }
}
console.log("Numeri maggiori di zero sono " + cont);
*/

/*7) e 8) Stampare il numero massimo e il minimo
let min = array[0];
let max = array[0];
for (i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
  if (max < array[i]) {
    max = array[i];
  }
}
console.log("il minimo è " + min + " il massimo è " + max);
*/

/*9) Inserire in un nuovo array solo gli elementi negativi
let v = [];
for (i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    v.push(array[i]);
  }
}
console.log(v);
*/

/*10) Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato

let v = [];
for (i = 0; i < array.length; i++) {
  v.push(array[i] * 2);
}
console.log(v);
*/

/*12) Stampare al contrario gli elementi dell’array
let v = [];
for (i = array.length; i > 0; i--) {
  v.push(array[i]);
}

console.log(v);
*/

/*11) Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato

let v = [];
for (i = 0; i < array.length; i++) {
  v.push(array[i]);
}
for (i = 0; i < array.length; i++) {
  v.push(array[i]);
}
console.log(v);
console.log("ciao");
*/

//13) Creare un array3 con la somma degli elementi dell’array1 e dell’array2
/*
let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let v = [];

for (j = 0; j < array2.length; j++) {
  v.push(array1[j] + array2[j]);
}
for (i = array2.length; i < array1.length; i++) {
  v.push(array1[i]);
}
console.log(v);

SECONDA VERSIONE SOLUZIONE ESERCIZIO 13
*/
/*
let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let v = [];
for (j = 0; j < array1.length; j++) {
  if (j < array2.length) {
    v.push(array1[j] + array2[j]);
  } else v.push(array1[j]);
}
console.log(v);
*/
//14) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di
/*
let versione1 = [];
for (j = 0; j < array1.length; j++) {
  if (array1[j] % 2 == 1) versione1.push(array1[j]);
}
for (i = 0; i < array2.length; i++) {
  if (array2[i] % 2 == 0) versione1.push(array2[i]);
}

console.log(versione1);
*/

//16) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”,
//“emme”, “1221”, “4224”
/*
 */
/*
let palindromo1 = [1, 2, 2, 1];
let palindromo2 = [1, 2, 2, 1];
let verificata = true;
for (i = 0; i <= palindromo1.length; i++) {

  if( palindromo1[i]!=palindromo2[palindromo1.length-1]){
    verificata= false
    break;
  }
}
if(verificata{
  display.log(`L'elemento ${palindromo1} e ${palindromo2} sono palindromi`)
})
*/
/*
console.log("ciaooooooooooo");
let palindromo1 = [1, 2, 2, 1];
let palindromo2 = [1, 2, 2, 1];
let verificata = true;
for (i = 0; i <= palindromo1.length; i++) {
  console.log(
    "valore alla" + i + " iterazione " + (palindromo1.length - i - 1)
  );
  if (palindromo1[i] != palindromo2[palindromo1.length - i - 1]) {
    verificata = false;
    console.log("non sono palindromi");
    break;
  }
}
console.log("la lunghezza dell array è " + palindromo1.length);
if (verificata) console.log("L'elemento sono palindromi");
*/

//prendere la prima lettera di una paraola da un array di stringhe
/*
let arrayParole = ["ciao", "buongiorno", "pomeriggio"];

console.log(arrayParole[0]);
console.log(arrayParole[0][0]); //stampero la prima lettera dell'elemento in posizione zero
console.log(arrayParole[1][1]);
*/

// Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente
/*
let parole = ["precipitevolissimevolmente"];
let cont = 0;
for (i = 0; i < parole[0].length; i++) {
  if (parole[0][i] == "e") {
    cont++;
  }
}
console.log(`la lettera e si trova ${cont} volte `);
*/

//Scrivere un programma che verifica  se due stringhe sono palindrome
/*
let parola1 = ["anna"];
//let parola2 = ["oaic"];
let palindroma = true;
for (i = 0; i < parola1[0].length; i++) {
  if (parola1[0][i] != parola1[0][parola1[0].length - i - 1]) {
    palindroma = false;
    break;
  }
}
if (palindroma) {
  console.log("le due parole sono palindorme");
}

if (!palindroma) {
  console.log("NON è PALINDORMA");
}
*/

// 3 nuovi
//Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti
/*
let cerca = ["scafo"];
let parola = ["piroscafo"];
trovato = false;
for (i = 0; i <= parola[0].length; i++) {
  for (j = 0; j < parola[0].length; j++) {
    if (parola[0][j] == cerca[0][0]) {
      for (k = 0; k < cerca[0].length; k++) {
        if (parola[0][j + k] != cerca[0][k]) {
          trovato = true;
        }
      }
    }
  }
}
if (trovato == false) {
  console.log("non trovato");
} else if (trovato == true) {
  console.log("TROVATOOOOO");
}

console.log(parola[0].length);
console.log(cerca[0][0]);
*/

//4 Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
/*
let parola = prompt("inserisci una parola");
let inversa = ""; //se lascio vuota e non dichiaro che sarà una stringa il l'ultimo risultato mi dara undefined

for (i = parola.length - 1; i >= 0; i--) {
  inversa += parola[i]; //stampa tutto ma poi undefined alla fine
}
console.log("HAI INSERITO " + parola + " ALL' INCONTRARIO RISULTA " + inversa);
*/
/*
console.log(parola);
console.log(parola[0].length);
let inverso = [];
let prova;
for (i = parola[0].length - 1; i >= 0; i--) {
  // console.log(i);
  //console.log(parola[0][i]);
  inverso.push(parola[0][i]);
}

console.log(inverso);
*/

//MANCA ESERCIZIO 5

//Cifratio di cesare
/*
let v = prompt("Inserici parola");
//let n = prompt("inserisci numero di cifratura");
let nuova = [];
//console.log("Valore in ASCI " + v.charCodeAt());
// charCodeAt() restituisce il valore Numerico in Asci
//String.fromCharCode() restituisce dal numero tabella ASCII alcarattere
for (let i = 0; i < v.length; i++) {
  nuova.push(v[i].charCodeAt());
  //nuova += v[i].charCodeAt();
}

console.log(nuova);
let cifrata = "";
for (let i = 0; i < nuova.length; i++) {
  cifrata += String.fromCharCode(nuova[i] + 3);
}

console.log(cifrata);
*/
//FUNZIONI!!

//7) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa
//che contiene solo le vocali presenti nella stringa originale
/*
let v = prompt("Inserisci parola");
let soloVocali = ""; //se cia vessi messo un array ogni vocale trovata sarebbe stata un elemento dell'array
for (let i = 0; i < v.length; i++) {
  if (v[i] == "a" || v[i] == "e" || v[i] == "i" || v[i] == "o" || v[i] == "o") {
    soloVocali += v[i];
  }
}
console.log(soloVocali);
//console.log(soloVocali.join());
*/

//esercizio 8
/* 8) Scrivere una funzione che accetti due stringhe come input 
e restituisca una nuova stringa che contiene solo i caratteri 
comuni alle due stringhe. (versione 1: senza escludere i duplicati,
versione 2: escludendo i duplicati) */

// 01 FUNZIONI Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
/*
function moltiplicazione(a, b) {
  return a * b;
}

let a = prompt("inserisci primo numero");
let b = prompt("inserisci secondo numero");
console.log(`il risultato di ${a}*${b}= ` + moltiplicazione(a, b));
*/

// 02 FUNZIONI
//Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
/*
function giorni(anni) {
  return anni * 365;
}

var x = prompt("quanti hanni hai");
var y = Math.floor(x / 4); //calsolo dei bisestili
console.log(`la tua età in giorni è ${giorni(x) + y}`);
*/

//Crea una funzione che accetta un numero come unico argomento e restituisce
//true se è minore o uguale a zero, altrimenti restituisce false.

//function minoreMaggioreZero(x) {
/*if (typeof x != "number") {
   var y;
    return (x = "Errore! inserisci un numero");
  }
  */

/*
  if (x <= 0) {
    return true;
  }

  if (x > 0) {
    return false;
  }
}

var numero = prompt("Inserisci un Numero");
console.log(minoreMaggioreZero(numero));
*/

//TROVARE LO SCONTO

//Crea una funzione che accetta due numeri e un
//operatore matematico + - / * ed eseguirà un calcolo con i numeri indicati.
/*
function calcolatrice(numero1, numero2, operazione) {
  let risultato;
  switch (operazione) {
    case "+":
      console.log(
        `${numero1} + ${numero2} risulta essere uguale a ${numero1 + numero2}`
      );
      break;
    case "-":
      console.log(
        `${numero1} - ${numero2} risulta essere uguale a ${numero1 - numero2}`
      );
      break;
    case "*":
      console.log(
        `${numero1} * ${numero2} risulta essere uguale a ${numero1 * numero2}`
      );
      break;
    case "/":
      console.log(
        `${numero1} / ${numero2} risulta essere uguale a ${numero1 / numero2}`
      );
      break;
  }
}

let val1 = prompt("Inserisci primo numero");
let val2 = prompt("Inserisci secondo numero");
let op = prompt("Inserisci tipo di operazione");

console.log(calcolatrice(val1, val2, op));
*/

//Crea una funzione che restituisce la somma di tutti i valori di un array.
/*
function vettoriale(v) {
  let somma = 0;
  for (i = 0; i < v.length; i++) {
    somma += v[i];
  }
  return console.log(`la somma del vettore risulta ${somma}`);
}

v = [1, 2, 4];

console.log(vettoriale(v));
*/

//VALIDATORE DI EMAIL
/*
function validatore(email) {
  // contiene "@" e "."
  if (!(email.includes("@") && email.includes("."))) {
    return console.log("deve includere @ e .");
  }

  //contiene "@" e lettera priama sia un carattere
  for (let i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      if (typeof email[i - 1] != "string")
        return console.log("Manca un carattere prima di @");
    }
  }

  //Se dopo "." ci sono le "@"
  let corretta = true;
  if (email.lastIndexOf("@") > email.lastIndexOf(".")) {
    corretta = false;
  }

  if (corretta === false) {
    return console.log("EMAIL NON VALIDA manca . dopo la @");
  }

  if (corretta === true) {
    return console.log("VERIFICATA");
  }
}

let email = prompt("Inserisci email");

console.log(validatore(email));
*/

//SASSO CARTA FORBICI
/*
function vincitore(primoGiocatore, secondoGiocatore) {
  if (
    primoGiocatore != "sasso" &&
    primoGiocatore != "carta" &&
    primoGiocatore != "forbice"
  ) {
    return "inserisci valori validi per il primo giocatore";
  }

  if (
    secondoGiocatore != "sasso" &&
    secondoGiocatore != "carta" &&
    secondoGiocatore != "forbice"
  ) {
    return console.log("inserisci valori validi per il secondo giocatore");
  }

  switch (primoGiocatore) {
    case "sasso": //player uno mette sasso
      switch (secondoGiocatore) {
        case "sasso":
          return console.log("pareggio");

        case "forbice":
          return console.log(
            "Ha vinto il PlayerUno ${primoGiocatore} batte ${secondoGiocatore}"
          );

        case "carta":
          return console.log(
            `Ha vinto il PlayerDue ${secondoGiocatore} batte ${primoGiocatore}`
          );
      }
    // sha scelto CARTA
    case "carta":
      switch (secondoGiocatore) {
        case "sasso":
          return console.log(
            `Ha vinto il PlayerUno ${primoGiocatore} batte ${secondoGiocatore}`
          );

        case "forbice":
          return console.log(
            `Ha vinto il PlayerDue ${secondoGiocatore} batte ${primoGiocatore}`
          );

        case "carta":
          return console.log("Pareggio");
      }

    //SCELTA FORBICCE
    case "forbice":
      switch (secondoGiocatore) {
        case "sasso":
          return console.log(
            `Ha vinto il PlayerDue ${secondoGiocatore} batte ${primoGiocatore}`
          );

        case "forbice":
          return console.log(`Pareggio`);

        case "carta":
          return console.log(
            `Ha vinto il PlayerUno ${primoGiocatore} batte ${secondoGiocatore}`
          );
      }
  }
}

let x = prompt("PlayerUno");
let y = prompt("PlayerDue");

console.log(x, y);
console.log(vincitore(x, y));
*/

//Elimina duplicati
/* Crea una funzione che accetta un array di elementi,
rimuove tutti gli elementi duplicati e restituisce un nuovo array nello 
stesso ordine sequenziale del vecchio array (meno i duplicati).*/

function eliminaDoppi(v = []) {
  let nuovo = [];
  for (let i = 0; i < v.length; i++) {
    let trovato = false;
    for (let j = 0; j < nuovo.length; j++) {
      if (v[i] == nuovo[j]) {
        trovato = true;
      }
    }
    if (trovato == false) {
      nuovo.push(v[i]);
    }
    // console.log("nuovo " + nuovo);
  }
  //console.log("nuovo fuori ==> " + nuovo);
  return console.log(nuovo);
}
let v = [1, 2, 3, 2, 4, 1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 8];
console.log("Vettore originale ===>" + v);
console.log("sotto c'è il vettore senza doppi");
console.log(eliminaDoppi(v));

//Quanti giorni fra due date
/*
function days(x, y) {
  //let dayFirst = new Date(x);
  //let daySecond = new Date(y);

  return console.log(Math.ceil((y - x) / (1000 * 60 * 60 * 24)));
}

let x = new Date(prompt("Inserisci prima data"));
let y = new Date(prompt("Inserisci seconda data"));

console.log(days(x, y));
*/

//17 SOMMA BUDGET PERSONE
/*
function sommaBudget(lista) {
  let somma = 0;
  for (let i = 0; i < lista.length; i++) {
    somma += lista[i].budget;
  }
  return somma;
}

let budgetTotale = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

for (let i = 0; i < budgetTotale.length; i++) {
  console.log(budgetTotale[i].budget);
}

console.log(sommaBudget(budgetTotale));
*/

//18 PREZZO TOTALE GENERI ALIMENTARI
/*
function totaleAlimentari(valore, prodottoFind) {
  let trovato = false;
  for (let i = 0; i < valore.length; i++) {
    if (valore[i].product == prodottoFind) {
      trovato = true;
      return console.log(
        `${valore[i].product} totale costo = ${
          valore[i].quantity * valore[i].price
        }`
      );
    }
  }
  if (trovato == false)
    return console.log(`${prodottoFind} non c'è nel negozio`);
}

let negozio = [
  { product: "Milk", quantity: 3, price: 1.5 },
  { product: "Tea", quantity: 10, price: 7 },
  { product: "Bread", quantity: 5, price: 2 },
];

let x = prompt("Cerca il prodotto");

console.log(totaleAlimentari(negozio, x));
*/

//GENRETATORE PASSWORD

function generatorePassword(n) {
  fo;
}
