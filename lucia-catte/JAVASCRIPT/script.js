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

// aggiunge 1 ad a
// assegna il nuovo valore ad a

console.log(a);
++a; // a + 1 = a
// aggiunge il nuovo valore ad a
// e lo assegna
console.log(a);
console.log("---");
console.log(a);
console.log(a++);
console.log(++a);

console.log("--- esempio --- ");
a = "5";
b = 5;
console.log(a, b);
console.log(a == b);
console.log(a === b);
console.log(typeof a == b); // typeof (a == b) oppure typeof(a) == b
console.log(typeof (a == b));
console.log(typeof a == b); // string == 5 ? false

let valore = true;
let valore2 = false;
console.log(valore, valore2);
console.log(typeof valore, typeof valore2);

console.log("-- if/else -- ");
a = 8;
console.log(a > 0);

if (a > 0) {
    // corpo/blocco dell'if
    // ramo della condizione verificata
    console.log("a è maggiore di zero");
}

if (a > 0) {
    // ramo della condizione verificata
    console.log("a è maggiore di zero");
} else {
    // ramo della condizione NON verificata
    console.log("a NON è maggiore di zero");
}

// if annidati
if (a > 0) {
    // dal backend prendiamo un valore da sommare ad a
    if (a < 10) {
        console.log("a è maggiore di 0 e minore di 10");
    }
}

if (a > 0 && a < 10) {
    // true && true -> true
    console.log("a è maggiore di 0 e minore di 10");
}

// if-else if
if (a > 0) {
    console.log("a è maggiore di zero");
} else if (a > -40) {
    console.log("a è minore di 0 e maggiore di -40");
}

// switch
const colore = "viola";
switch (colore) {
    case "blu":
        console.log("sono nel blu");
        break;
    case "rosso":
    case "giallo":
        console.log("sono nel giallo o rosso");
        break;
    default:
        console.log("non è blu/rosso/giallo");
}

// cicli/loop/iterazioni
console.log("-- loop --");

/* 

while (condition) {
    
}

for (let index = 0; index < n; index++) {
    
}

do {
    
} while (condition); 

*/

// 5 - Stampare la somma dei primi 4 numeri interi (slide problem solving)
let cont = 0; // step 1
let sommaNuova = 0;
let n = 4; // i primi 4 numeri
console.log("condizione fuori = " + (cont <= n));
while (cont <= n) {
    // step 2
    // corpo/blocco del while
    console.log("condizione dentro = " + (cont <= n));
    sommaNuova = sommaNuova + cont;
    cont = cont + 1; // cont++; step 3
    console.log("sommaNuova = " + sommaNuova, "cont = " + cont);
} // fine finché

console.log(sommaNuova);

/* 
    1) inizializzare la variabile che utilizzeremo per la condizione --> cont = 0
    2) condizione da verificare -> cont <= n
    3) aggiornare la variabile della condizione -> cont = cont + 1
*/
sommaNuova = 0;
// for(inizializzazione; condizione; aggiornamento/incremento)
// cont = 0, 1, 2, 3, 4
// se vogliamo che il 4 sia "letto" dalla condizione
// 1) cont <= n
// 2) cont < n+1
for (cont = 0; cont <= n; cont = cont + 1) {
    // incremento è comunque fatto alla fine del corpo del for
    // corpo/blocco del for
    console.log("condizione dentro = " + (cont <= n));
    sommaNuova = sommaNuova + cont;
    console.log("sommaNuova = " + sommaNuova, "cont = " + cont);
}
console.log(sommaNuova);

// array/vettore -> gruppo di numeri
// inizieremo a contare da zero e non da uno
console.log("-- array/vettori -- ");
let vettore = [3, 2, 6, 0]; // array con 4 numeri
console.log(typeof vettore);
// posizione =  0, 1, 2, 3 --> l'ultimo valore si trova nella posizione lunghezza-1
console.log(vettore);
console.log(vettore.length); // lunghezza array = quanti valori ci sono all'interno dell'array
console.log(vettore[0]); // elemento dell'array chiamato vettore nella posizione 0
console.log(vettore[1]);
console.log(vettore[2]);
console.log(vettore[3]);
// console.log(vettore[100]) --> undefined

// calcolare la somma di tutti i valori dell'array
let sommaVettore = vettore[0] + vettore[1] + vettore[2] + vettore[3];
console.log("sommaVettore= " + sommaVettore);

// con il while
console.log("somma dell'array con while")
let i = 0;
let sommaVettoreConWhile = 0;
while (i < vettore.length) {
    // la condizione può essere o i<vettore.length oppure i<=vettore.length-1
    sommaVettoreConWhile = sommaVettoreConWhile + vettore[i];
    i++;
}
console.log("sommaVettoreConWhile= " + sommaVettoreConWhile);

/*

i=0 sommaVettoreConWhile=0
i < vettore.length ? 0 < 4 ? si
    sommaVettoreConWhile = 0 + vettore[0] = 0 + 3 = 3
    i++ -> i=1
i < vettore.length ? 1 < 4 ? si
    sommaVettoreConWhile = 3 + vettore[1] = 3 + 2 = 5
    i++ -> i=2
i < vettore.length ? 2 < 4 ? si
    sommaVettoreConWhile = 5 + vettore[2] = 5 + 6 = 11
    i++ -> i=3
i < vettore.length ? 3 < 4 ? si
    sommaVettoreConWhile = 11 + vettore[3] = 11 + 0 = 11
    i++ -> i=4
i < vettore.length ? 4 < 4? no

i=0 sommaVettoreConWhile=0
i <= vettore.length ? 0 <= 3 ? si
    sommaVettoreConWhile = 0 + vettore[0] = 0 + 3 = 3
    i++ -> i=1
i <= vettore.length ? 1 <= 3 ? si
    sommaVettoreConWhile = 3 + vettore[1] = 3 + 2 = 5
    i++ -> i=2
i <= vettore.length ? 2 <= 3 ? si
    sommaVettoreConWhile = 5 + vettore[2] = 5 + 6 = 11
    i++ -> i=3
i <= vettore.length ? 3 <= 3 ? si
    sommaVettoreConWhile = 11 + vettore[3] = 11 + 0 = 11
    i++ -> i=4
i <= vettore.length ? 4 <= 3? no

*/
console.log("somma array con for")
let sommaVettoreConFor = 0;
for (let indice = 0; indice < vettore.length; indice++) {
    sommaVettoreConFor = sommaVettoreConFor + vettore[indice];
}
// console.log(indice) --> indice qui fuori non esiste
console.log("sommaVettoreConFor= " + sommaVettoreConFor);

let vettoreStrano = [1, "ciao", true, 4];
console.log(vettoreStrano);
console.log(typeof vettoreStrano);

let sommaVettoreStrano = 0;
for (let indice = 0; indice < vettoreStrano.length; indice++) {
    if (typeof vettoreStrano[indice] == "number") {
        console.log(vettoreStrano[indice]);
        sommaVettoreStrano = sommaVettoreStrano + vettoreStrano[indice];
    }
}
// console.log(indice) --> indice qui fuori non esiste
console.log("sommaVettoreConFor= " + sommaVettoreStrano);
console.log(typeof sommaVettoreStrano);
