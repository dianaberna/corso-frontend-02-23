/* COMMENTO IN PIU RIGHE*/ 
// COMMENTO IN UNA RIGA

var a = 1;
let b = 2;
var d; //dichiarazione di una variabile senza valore
console.log(d); //il valore è undefined (nullo)
const C = 3; // la variabile const non può essere cambiato il valore dopo la sua dichiarazione

console.log("ciao");
console.log(a, b, C);


a=5;
b=3;
a=b+1; // 3 + 1 = 4
d = 10; //assegnazione di un valore

console.log(a);
console.log(b);
let parola = "ciao mondo";
console.log(parola);
console.log(parola + "hola");

var variabileNuovaConVarFuori = 6; // esiste globalmente --> scope globale
let variabileNuovaConLetFuori = 10; // esiste all'interno di un blocco --> scope locale

e = 15; // automaticamente si dichiara come var ed è scope global

{
    //sono dentro un blocco
    console.log("sono in un blocco")

    console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);

    var variabileNuovaConVar = 2;
    let variabileNuovaConLet = 4;  // esiste solo all'interno del blocco dove viene dichiarata.
    console.log(variabileNuovaConVar, variabileNuovaConLet);
}

console.log(variabileNuovaConVar);
// console.log(variabileNuovaConLet);  essendo all'interno di un blocco al di fuori non esiste.
console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);

//operazioni base

let somma = 1 + 2;

let sommaConVariabili = a + b; // somma aritmetica

console.log("a =" + a);
console.log("b = " + b);
console.log("sommaConVariabili = " + sommaConVariabili);

let differenza = 1 - 2;
let differenzaConVariabili = a - b;

console.log("a =" + a);
console.log("b = " + b);
console.log("differenzaConVariabili = " + differenzaConVariabili);

let ciao = "ciao";
let mondo = "mondo";
let risultato = ciao + mondo; //concatenazione tra stringhe
console.log(risultato);

// somma tra numeri e stringhe -> la stringa prevale sui numeri

let parola2 = "parola";
let stampa = a + parola2; // a = 5, b = parola
console.log(stampa);

let numero ="3"; //qualsiasi cosa inserita tra le " " è una stringa
let stampa2 = a + numero; // a = 5, numero = "3"
console.log(stampa2);


// javascript è debolmente e dinamicamente tipizzato
// stampa2 = a -> stampa2 è un numero
// stampa2 a + numero -> in questo momento il + non è una somma aritmetica ma una cancatenazione.

//tipo di dato -> typeof
console.log(typeof stampa2); // voglio sapere il tipo di dato di stampa2


// operazione matematiche varie

let moltiplicazione = a * b;
let divisione = a / b;
 
console.log(moltiplicazione, divisione); // la divisione è sempre precisa di default di tot num, noi possiamo richiedere tot valori dopo la virgola
console.log(a/0); //non restituisce un errore ma semplicemente valore infinito

let modulo = a % b; // a/b -> il modulo non è il risultato ma il resto della divisione
let dispari = 5 & 2; // 5 / 2 -> resto = 1 è quindi dispari
let pari = 6 % 2; // 6 / 2 -> resto = 0 è quindi pari
console.log(dispari);
console.log(pari);


/*
 * numero + numero = numero
 * numero + stringa = stringa
 * stringa + stringa = stringa
 * stringa + numero = stringa
*/ 


// differenza tra =, ==, ===
// = -> operatore di assegnazione
// ==, === -> operatore di comparazione
// ==  mi controlla se i valori dele due var sono uguali
// === mi controlla se i valori delle due var sono uguali ma anche se son dello stesso tipo


// funzioni di conversione
console.log("-- funzioni di conversione --");

console.log("conversione da Number a String");
let numeroNuovo = 2;
console.log(numeroNuovo + 1); // 3 number
let numeroNuovoStringa = String(numeroNuovo); // conversione in String
console.log(typeof numeroNuovo, typeof numeroNuovoStringa);
console.log(numeroNuovo, numeroNuovoStringa);
console.log(numeroNuovoStringa + 1); // 21 string

console.log("conversione da String a Number");
let stringaNumero = "5";
console.log(stringaNumero + 3); // 53 string
let numeroNuovo2 = Number(stringaNumero); // conversione in Number
console.log(typeof stringaNumero, typeof numeroNuovo2);
console.log(stringaNumero, numeroNuovo2);
console.log(numeroNuovo2 + 3); // 8 number

console.log("Operatori di assegnamento");
a = 1;
a = a + 4; // a = 1 + 4
console.log(a);
a += 4; // a = a + 4 = 1 + 4
console.log(a);

a++; // a = a + 1
console.log(a);
// gruppo di numeri, questo gruppo lo andremo a scorrere

//console.log(b+4++) // (b+5) oppure (b+4)++
console.log("---")
console.log(a)
console.log(a++) // a = a + 1 
console.log(a)
console.log(++a) // a + 1 = a