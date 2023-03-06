var a = 1;
let b = 2;
const c = 3;
console.log(a);
console.log(b);
console.log(c);

console.log("ciao");

a=b+1;
console.log(a);
console.log(a, b, c);

let parola = "ciao mondo";
console.log(parola);

console.log(parola+ " hola" + c);


var variabileNuovaConVarFuori = 6;
var variabileNuovaConLetFuori = 10;

{
    console.log("sono in un blocco");

    var variabileNuovaConVar = 2;
    console.log(variabileNuovaConVar);

    let variabileNuovaConLet = 4;
    console.log(variabileNuovaConLet);

    console.log(variabileNuovaConVar, variabileNuovaConLet);

}


console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);

// esempi di operazioni base

let somma = 1 + 2;
let sommaConVariabili = a + b;

console. log("a= "+a)
console. log("b= "+b)
console. log ("sommaConVariabili= "+sommaConVariabili)

let differenza = 1 - 2;
let differenzaConVariabili = a - b;

console. log("a= "+a);
console. log("b= "+b);
console.log ("differenzaConVariabili= "+differenzaConVariabili)


/* differenza tra =, ==, ===

= operatore di assegnazione
 
==, === operatori di comparazione

1) doppio uguale -> a == b verifica se i valori, mi controlla se a è uguale a b 
cioè a = 4; b = "4"; mi dice che è vero sono uguali con ==, mi dice è falso
se uso ===.

2) triplo uguale -> a === b verifica se i valori sono uguali e se sono dello stesso tipo
*/

b=5
console. log(a, b)
console. log(typeof a == b)

// cicli loop e iterazioni 
// Stampare la somma dei primi 4 numeri interi (sl)
let cont = 0;
let sommaNuova = 0;
let n = 4; // i primi 4 numeri
while (cont <= n) {

}

 // esercizi
 console.log("-- esercizi --")

//1) Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1 
let elenco = [  2, 6, 9, 10, -2, -3, 0, 2, 5, 1 ]
console.log(elenco)
console.log

//2)Stampare la somma di tutti gli elementi dell’ array → 30
var sum = add(elenco);
console.log(sum)