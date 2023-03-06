/* commento 1

commento

*/

// commento 2

// varibili --> scatole che contengono valori
// var e let sono variabili
var a = 1; // dichiarazione
var d;
console.log(d) // undefined perché ancora non ha valore definito
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
    console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori)
    // var variabile  --> non possiamo dichiarare più volte la stessa variabile
    
    var variabileNuovaConVar = 2;
    let variabileNuovaConLet = 4; // esiste solo all'interno del blocco dove viene dichiarata
    console.log(variabileNuovaConVar, variabileNuovaConLet);
    // avremo uno strumento per restituire all'esterno un valore interno al blocco
}

console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori)
console.log(variabileNuovaConVar);
// console.log(variabileNuovaConLet) --> essendo una variabile in let dentro ad un blocco allora fuori dal blocco non esiste

// operazioni base

let somma = 1 + 2;

let sommaConVariabili = a + b; // somma aritmetica
console.log("a= "+a)
console.log("b= "+b)
console.log("sommaConVariabili= "+sommaConVariabili)

let differenza = 1 - 2;
let differenzaConVariabili = a - b; 
console.log("a= "+a)
console.log("b= "+b)
console.log("differenzaConVariabili= "+differenzaConVariabili)

console.log("a= "+a)
a = a + 1; // a = 4 + 1
console.log("a= "+a)
// prendo il valore di a ci aggiungo 1 e il valore risultante lo assegno alla variabile a

// a sinistra dell'uguale abbiamo la variabile dove verrà salvato il valore
// a destra dell'uguale c'è il calcolo (i valori letti dalle variabili) che verrà utilizzato per essere assegnato alla variabile a sinistra dell'uguale

let ciao = "ciao"
let mondo = "mondo"
let risultato = ciao + mondo // concatenazione tra stringhe
console.log(risultato)

// somma tra numeri e stringhe --> la stringa prevale sui numeri

let parola2 = "parola"
let stampa = a + parola2; // a = 5 , b = parola
console.log(stampa)
let numero = "3" // qualsiasi cosa è tra " " allora è una stringa/parola
let stampa2 = a + numero; // a = 5, numero = "3"
console.log(stampa2)

// javascript è debolmente e dinamicamente tipizzato
// stampa2 = a -> stampa2 sarà un numero 
// stampa2 a + numero -> in questo momento il + non è una somma aritmetica ma è una concatenazione perché numero è una stringa

// tipo di dato -> typeof
console.log(typeof stampa2) // voglio sapere il tipo di dato di stampa2