// Commento, 1 riga

/* commento,
commmento 2 righe */

//  var e let sono variabili
var a = 1;
var d; // valore non definito
let b = 2;

// let let = 1; --> Non è consentito usare 'let' come nome in dichiarazioni.
// const è una costante --> E' una scatola che non può essere cambiata dopo la sua denominazione.
const COSTANTE = 3;
console.log("ciao");
console.log(a, b, COSTANTE);

a = 5;
console.log("a = " + a);
b = 3;
a = b + 1; // 3 + 1 = 4
console.log(a, b);

let parola = "ciao mondo";
console.log(parola);
console.log(parola + "hola");

let variabile = COSTANTE;
variabile = variabile + 1;
console.log("variabile = " + variabile);

d = 8; // assegnazione

// scope = contesto
var variabileNuovaConVarFuori = 6; // --> esiste globalmente --> scope globale
let variabileNuovaConLetFuori = 10; // --> esiste all'interno di un blocco --> scope locale

e = 10; // --> dichiarato come un var  -> esisterà globalmente in tutto il file (sia fuori che dentro).
{
  // un blocco di codice
  console.log("sono in un blocco");
  console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
  //   var variabile --> non possiamo dichiarare più volte la stessa variabile.

  var variabileNuovaConVar = 2;
  let variabileNuovaConLet = 4; // esiste solo all'interno del blocco dove viene dichiarata.
  console.log(variabileNuovaConVar, variabileNuovaConLet);
  // avremo uno strumento per restituire all'esterno un valore interno al blocco.
}

console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
console.log(variabileNuovaConVar);
// console.log(variabileNuovaConLet) --> essendo una variabile in let dentro ad un blocco allora fuori...

// operazioni base

let somma = 1 + 2;
let sommaConVariabili = a + b;
console.log("a= " + a);
console.log("b= " + b);
console.log("sommaConVariabili= " + sommaConVariabili);

let differenza = 1 - 2;
let differenzaConVariabili = a - b;
console.log("a= " + a);
console.log("b= " + b);
console.log("differenzaConVariabili= " + differenzaConVariabili);

console.log("a= " + a);
a = a + 1;
console.log("a= " + a);
// prendo il valore di a ci aggiungo 1 e il valore risultante lo assegno alla variabile a.

//  sinistra dell'uguale abbiamo la variabile dove verrà salvato il valore.
// a destra dell'uguale c'è il calcolo (i valori letti dalle variabili) che verrà utilizzato per essere assegnato alla variabile a sinistra dell'uguale.

let ciao = "ciao";
let mondo = "mondo";
let risultato = ciao + mondo; // concatenazione tra stringhe
console.log(risultato);

/*
numero + numero --> numero
...
*/

// somma tra numeri e stringhe --> la stringa prevale sui numeri

let parola2 = "parola";
let stampa = a + parola2; // a = 5 , b = parola
console.log(stampa);
let numero = 3; // qualsiasi cosa è tra " " allora è una stringa/parola
let stampa2 = a + numero; // a = 5, numero = "3"
console.log(stampa2);

// javascript è debolmente e dinamicamente tipizzato.
// stampa2 = a --> stampa2 sarà un numero
// stampa2 a + numero --> in questo momento il + non è una somma aritmetica, ma è una concatenazione perchè numero...

// tipo di dato -> typeof
console.log(typeof stampa2); // voglio sapere il tipo di dato di stampa2

// operazioni matematiche varie
let moltiplicazione = a * b;
let divisione = a / b;
console.log(moltiplicazione, divisione);
console.log(a / 0);
let modulo = a % b; // a/b --> il modulo non è il risultato, ma il resto della divisione.
let dispari = 5 % 2; // a/2 = 5/2 -> resto = 1
let pari = 6 % 2; // resto = 0
console.log(a);
console.log(dispari, pari);

// differenza tra =, ==, ===
// = -> operatore di assegnazione
// ==, === -> operatore di comparazione
// se a == b ? -> mi controlla se a è uguale a b.
// se a === b -> mi controlla se a è uguale a b, ma anche se sono dello stesso tipo.
// a = 4, b = "4" --> se lo verifico con == mi da che è vero, se lo verifico con === mi da falso perchè ho un numero e una stringa.

// operazione di conversione
console.log("-- funzioni di conversione --");

console.log("conversione da Number a String");
let numeroNuovo = 2;
console.log(numeroNuovo + 1); // 3 number
let numeroNuovoStringa = String(numero); // conversione numero in String
console.log(typeof numeroNuovo, typeof numeroNuovoStringa);
console.log(numeroNuovoStringa + 1); // 21 stringa

console.log("conversione da String a Number");
let stringaNumero = "5";
console.log(stringaNumero + 3); // 53 string
let numeroNuovo2 = Number(stringaNumero); // conversione in Number
console.log(typeof stringaNumero, typeof numeroNuovo2);
console.log(stringaNumero, numeroNuovo2);
console.log(numeroNuovo2 + 3); // 8 number

console.log("operatori di assegnamento");
a = a + 1;
a = a + 4; // a = 1 + 4
console.log(a);
a += 4; // a = a + 4 = 1 + 4
console.log(a);

a++; // a = a + 1
console.log(a);
// gruppo di numeri, questo gruppo lo andremo a scorrere

// verificare se maggiorenne
// se età > 18 e età < 120

// console.log(b+4++) // (b+5) oppure (b+4)++
console.log("---");
console.log(a);
console.log(a++); // a = a + 1
console.log(a);
console.log(++a); // a + 1 = a

/*
poi ci torniamo

b = 5;
console.log(a, b);
console.log(typeof a == b);

*/
