/*TEORIA
    JAVASCRIPT */
    //PRIME PROVE
    var a=1; //crea una variabile con valore variabili. Facciamo una dichiarazione
    let b=2; //crea una variabile con valore variabili
    const C=3;//crea una variabile con valore constante
    //Non possiamo dichiarare più volte la stessa variabile

    //let let=1; Non è consentito usare 'let' come nome in dichiarazioni 'let' o 'const'.
    console.log("ciao");
    console.log(a);
    console.log(b);
    console.log(C);
//console.log (a,b,C)
    a=5;
    console.log(a)
    b=3;
    a=b+1;
    console.log(a);
    console.log(b);
    let parola="ciao mondo"
    console.log(parola)
    console.log(parola + "benvenuti")

//c=6 errore, non puoi modificare una costante

//le variabili var sono globali
//le variabili let/const se create all'interno di un blocco non sono accessibili fuori di esso
var variabileNuovaConVarFuori=6;
let variabileNuovaConLetFuori=10;

{
    //blocco di codice
    console.log("sono in un blocco");
    console.log(variabileNuovaConLetFuori);
    console.log(variabileNuovaConVarFuori);
    var variabileNuovaConVarDentro=20; //esiste solo all'interno del blocco dove viene dichiarata
    let variabileNuovaConLetDentro=30;
    console.log(variabileNuovaConVarDentro);
    console.log(variabileNuovaConLetDentro);
}

//console.log(variabileNuovaConLetDentro); errore perchè dichiarata con let dentro a un blocco
console.log(variabileNuovaConVarDentro); //visualizzabile perchè anche se dichiarata dentro un blocco, è visualizzabile grazie a var

z=10; //dichiarat come un var; esisterà globalmente in tutto il file (sia fuori che dentro i blocchi)
console.log(z);

//se si stampa una variabile numero insieme una variabile stringa, stamperà entrambi ma sotto forma di stringa
var word= "questa è una stringa"
console.log(typeof z) //voglio sapere il tipo di dato di z
console.log(typeof word)

let modulo = a % b //a/b -> il modulo non è il risultato ma il resto della divisone
let pari = a % 2
console.log(a)
console.log(modulo) //resto di a(4) diviso b (3)
console.log(pari)  //resto di a(4) diviso 2

/*differenza tra =, ==, ===
= ->operatore di assegnazione
==, === -> operatore di comporazione
se a == b ? -> mi controlla se a è uguale a b //stampa un boolean (true or false)
se a ===b = -> mi controlla se a è uguale a b, ma anche se sono delle stesso tipo
*/
let numeroNuovo =2
let numeroNuovoStringa = String (numeroNuovo) //conversione in stringa
console.log (typeof numeroNuovo)
console.log (typeof numeroNuovoStringa)
console.log (numeroNuovoStringa+1) //stampa 21 in stringa

let stringaNumero = "5"
let numeroNuovo2 = Number(stringaNumero)
console.log (numeroNuovo2+2) //stampa 7

