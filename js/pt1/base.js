/* commento 1

commento

*/

// commento 2

// varibili --> scatole che contengono valori
// var e let sono variabili
console.log("-- variabili --");
var a = 1; // dichiarazione
var d;
console.log(d); // undefined perché ancora non ha valore definito
let b = 2;
// let let = 1; --> Non è consentito usare 'let' come nome in dichiarazioni 'let' o 'const'
// const è una costante --> è una scatola che non può essere più cambiata dopo la sua dichiarazione
const COSTANTE = 3; // siamo obbligati a dichiarare e assegnare in un unico istante
console.log("ciao");
console.log(a, b, COSTANTE);

a = 5;
console.log("a = " + a);
b = 3;
a = b + 1; // 3 + 1 = 4
console.log(a, b);

let parola = "ciao mondo";
console.log(parola);
console.log(parola + " holaaa");

let variabile = COSTANTE;
variabile = variabile + 1;
console.log("variabile = " + variabile);

d = 8; // assegnazione

// scope = contesto
var variabileNuovaConVarFuori = 6; // esiste globalmente --> scope globale
let variabileNuovaConLetFuori = 10; // esiste all'interno di un blocco --> scope locale

e = 10; // --> automaticamente è come se fosse dichiarato come un var -> esiterà globalmente in tutto il file (sia fuori che dentro i blocchi)

{
    // un blocco di codice
    console.log("sono in un blocco");
    console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
    // var variabile  --> non possiamo dichiarare più volte la stessa variabile

    var variabileNuovaConVar = 2;
    let variabileNuovaConLet = 4; // esiste solo all'interno del blocco dove viene dichiarata
    console.log(variabileNuovaConVar, variabileNuovaConLet);
    // avremo uno strumento per restituire all'esterno un valore interno al blocco
}

console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
console.log(variabileNuovaConVar);
// console.log(variabileNuovaConLet) --> essendo una variabile in let dentro ad un blocco allora fuori dal blocco non esiste

// operazioni base

let somma = 1 + 2;

let sommaConVariabili = a + b; // somma aritmetica
console.log("a= " + a);
console.log("b= " + b);
console.log("sommaConVariabili= " + sommaConVariabili);

let differenza = 1 - 2;
let differenzaConVariabili = a - b;
console.log("a= " + a);
console.log("b= " + b);
console.log("differenzaConVariabili= " + differenzaConVariabili);

console.log("a= " + a);
a = a + 1; // a = 4 + 1
console.log("a= " + a);
// prendo il valore di a ci aggiungo 1 e il valore risultante lo assegno alla variabile a

// a sinistra dell'uguale abbiamo la variabile dove verrà salvato il valore
// a destra dell'uguale c'è il calcolo (i valori letti dalle variabili) che verrà utilizzato per essere assegnato alla variabile a sinistra dell'uguale

let ciao = "ciao";
let mondo = "mondo";
let risultato = ciao + mondo; // concatenazione tra stringhe
console.log(risultato);

/*
    numero + numero --> numero
    stringa + numero --> stringa
    numero + stringa --> stringa
    stringa + stringa --> stringa
*/

// somma tra numeri e stringhe --> la stringa prevale sui numeri

let parola2 = "parola";
let stampa = a + parola2; // a = 5 , b = parola
console.log(stampa);
let numero = "3"; // qualsiasi cosa è tra " " allora è una stringa/parola
let stampa2 = a + numero; // a = 5, numero = "3"
console.log(stampa2);

// javascript è debolmente e dinamicamente tipizzato
// stampa2 = a -> stampa2 sarà un numero
// stampa2 a + numero -> in questo momento il + non è una somma aritmetica ma è una concatenazione perché numero è una stringa

// tipo di dato -> typeof
console.log(typeof stampa2); // voglio sapere il tipo di dato di stampa2

// operazioni matematiche varie
let moltiplicazione = a * b;
let divisione = a / b;
console.log(moltiplicazione, divisione);
console.log(a / 0);
let modulo = a % b; // a/b-> il modulo non è il risultato ma il resto della divisione
let dispari = 5 % 2; // 5/2 -> resto = 1
let pari = 6 % 2; // 6/2 -> resto = 0
console.log(dispari, pari);

// differenza tra =, ==, ===
// = -> operatore di assegnazione
// == , === -> operatore di comporazione
// se a == b ? -> mi controlla se a è uguale a b
// se a === b ? -> mi controlla se a è uguale a b, ma anche se sono dello stesso tipo
// a = 4, b = "4" --> se lo verifico con == mi da che è vero, se lo verifico con === mi da falso

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

console.log("-- Operatori di assegnamento -- ");
a = 1;
a = a + 4; // a = 1 + 4
console.log(a);
a += 4; // a = a + 4 = 1 + 4
console.log(a);

a++; // a = a + 1
console.log(a);
// gruppo di numeri, questo gruppo lo andremo a scorrere

// verificare se maggiorenne
// se età > 18 e età < 120

//console.log(b+4++) // (b+5) oppure (b+4)++
console.log("---");
console.log(a);
a++; // a = a + 1
// legge a
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

// Stampare la somma dei primi 4 numeri interi (slide problem solving)
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

// Spread operator
let array = [1, 2, 3]
console.log("metodo con lo spread operator");
risultato = [...array, ...array];
/* risultato = [array, array]   --> in questo caso otteniamo un array di due elementi, ogni elemento è un array*/
console.log(risultato);

console.log("spread operator");
console.log(array);
console.log(...array);

// Notazione ad oggetti

let esempio = {
    browsers: {
        firefox: {
            name: "Firefox",
            pref_url: "about:config",
            releases: {
                1: {
                    release_date: "2004-11-09",
                    status: "retired",
                    engine: "Gecko",
                    engine_version: "1.7",
                },
            },
        },
    },
};


console.log(esempio)
console.log(esempio["browsers"])
console.log(esempio.browsers)
console.log(esempio["browsers"]["firefox"]["name"])
console.log(esempio.browsers.firefox.name)

let esempio2 = {
    nome: "Pippo",
    animali: ["cane", "gatto", 2, 4]
}

console.log(esempio2.nome)
console.log(esempio2.animali[0])
console.log("--" + esempio2[0])
console.log(typeof esempio2)
console.log(typeof esempio2.nome)
console.log(typeof esempio2.animali)

esempio = {0: "nome", 1: "cognome", 2: "età"}
console.log(esempio[0])


// programmazione ad oggetti 
// oggetto -> variabile che può avere sia altre variabili (proprietà) ma anche delle funzioni (metodi)


// 
