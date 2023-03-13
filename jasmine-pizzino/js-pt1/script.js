//commento su una riga
/* commento su più righe */
//var e let sono variabili

var a = 1;
let b = 2;

//let let = 1; --> Non è consentito usare 'let' come nome in dichiarazione'let' o 'const'
// const è una costante
const c = 3;
console.log("ciao");
console.log(a);
console.log(b);
console.log(c);

a = 5;
b = 3;
a = b + 1; // 3+1=4
console.log(a);
console.log(b);

let parola = "ciao mondo";
console.log(parola);
console.log(parola + "holaaa");

let variabile = COSTANTE;
variabile = variabile + 1;
console.log("variabile = " + variabile);

d = 8; // assegnazione

// scope = contesto
var variabileNuovaConVarFuori = 6; // esiste globalmente --> scope globale
let variabileNuovaConVarFuori = 10; // esiste all'interno di un blocco --> scope locale

e = 10; // --> automaticamente è come se fosse dichiarato come un var -> esisterà globalmente in tutto il file (sia fuori che dentro i blocchi)

{
  // un blocco di codice
  console.log("sono in un blocco");
  console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
  // var variabile --> non posso dichiarare più volte la stessa variabile

  var variabileNuovaConVar = 2;
  let variabileNuovaConLet = 4; // esisto solo all'interno del blocco dove viene dichiarata
  console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
  // avremo uno strumento per restituire all'esterno un valore interno al blocco
}

console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
console.log(variabileNuovaConVar);
// console.log(variabileNuovaConLet) --> essendo una variabile in let dentro ad un blocco allora fuori dal blocco non eisste

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

a = a + 1;
// prendo il valore di a ci aggiungo 1 e il valore risultante lo assegno alla variabile

// a sinistra dell'uguale abbiamo la variabile dove verrà salvato il valore
//a destra dell'uguale c'è il calcolo (i valori letti delle variabili che verrà utilizzato per essere asssegnato alla variabile a sinistra dell'uguale

let parola2 = "parola2";
let stampa = a + parola2; // a = 5 , b = parola2
console.log(stampa);
let numero = "3"; // qualsiasi cosa è tra " " allora è una stringa/parola
let stampa2 = a + numero; // a = 5 , numero = "3"
console.log(stampa2);

//javascript è debolmente e dinimicamente tipizzato
// stampa 2 = a -> stampa2 sarà un numero
// stampa 2 a + numero -> in questo momento il + non è una somma aritmetica ma è una concatenazione perchè numero è una stringa

// tipo di date --> typeof
console.log(typeof stampa2); // voglio sapere il tipo di dato di stampa2

// operazioni matematiche varie
let moltiplicazione = a * b;
let divisione = a / b;
console.log(moltiplicazione, divisione);
console.log(a / 0);
let modulo = a % b; // a/b -> il modulo non è il risultato ma il resto della divisione
let dispari = 5 % 2; // a/2 = 5/2 -> resto = 1
let pari = 6 % 2; // 6/2 -> resto =
console.log(a);
console.log(pari);
