var a = 1;
let b = 2;

const COSTANTE = 3;
console.log("ciao");
console.log(a, b, COSTANTE);

a = 5;
b = 3;
a = b + 1;
console.log(a);
console.log(b);

let parola = "ciao mondo";
console.log(parola);
console.log(parola + " holaa ");

let variabile = COSTANTE;
variabile = variabile + 1;
console.log("variabile =" + variabile);

var variabileNuovaConVarFuori = 6;
let variabileNuovaConLetFuori = 10;

{
  console.log("sono in un blocco");
  console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
  var variabileNuovaConVar = 2;
  let variabileNuovaConLet = 4;
  console.log(variabileNuovaConVar, variabileNuovaConLet);
}
console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);
/* console.log(variabileNuovaConVar, variabileNuovaConLet); */

let somma = 1 + 2;
let sommaConVariabili = a + b;
console.log("a= " + a);
console.log("b= " + b);
console.log("sommaConVariabili=" + sommaConVariabili);

let differenza = 1 - 2;
let differenzaConVariabili = a - b;
console.log("a= " + a);
console.log("b= " + b);
console.log("differenzaConVariabili=" + differenzaConVariabili);

console.log("a= " + a);
a = a + 1;
console.log("a= " + a);

let parola2 = "parola";
let stampa = a + parola2;
console.log(stampa);
let numero = "3";
let stampa2 = a + numero;
console.log(stampa2);

let moltiplicazione = a * b;
let divisione = a / b;
console.log(moltiplicazione, divisione);

let modulo = a % b;
let pari = a % 2;
console.log(pari);

a = 10;
console.log(a > 0);

if (a > 0) {
  console.log("a è maggiore di zero");
}

if (a > 0) {
  console.log("a è maggiore di zero");
} else {
  console.log("a non e maggiore di zero");
}

if (a > 0) {
  if (a < 10) {
    console.log("a è maggiore di 0 e minore di 10");
  }
}

if (a > 0) {
  console.log(a > -40);
} else if (a > -40) {
  console.log("a è minore di 0 e maggiore di -40");
}

console.log("//////////////////////////////////////////////////////");

let cont = 0;
let sommaNuova = 0;
let n = 4;
console.log("condizione fuori = " + (cont <= n));

while (cont <= n) {
  console.log("condizione dentro = " + (cont <= n));
  sommaNuova = sommaNuova + cont;
  cont = cont + 1;
  console.log("sommaNuova = " + sommaNuova, "cont = " + cont);
}
console.log(sommaNuova);
console.log("//////////////////////////////////////////////////////");
sommaNuova = 0;
for (cont = 0; cont <= n; cont = cont + 1) {
  console.log("condizione dentro = " + (cont <= n));
  sommaNuova = sommaNuova + cont;
  console.log("sommaNuova = " + sommaNuova, "cont = " + cont);
}
console.log(sommaNuova);

//arrey-vettori

let vettore = [3, 2, 6, 0]; //array
console.log(vettore);
console.log(vettore.length); // ti manda in console il totale degli arrey
console.log(vettore[0]);

let i = 0;
sommaVettoreConWhile = 0;
while (i < vettore.length) {
  sommaVettoreConWhile = sommaVettoreConWhile + vettore[i];
  i++;
}
console.log("sommaVettoreConWhile= " + sommaVettoreConWhile);

let sommaVettoreConFor = 0;
for (let i = 0; i < vettore.length; i++) {
  sommaVettoreConFor = sommaVettoreConFor + vettore[i];
}
console.log("sommaVettoreConFor= " + sommaVettoreConFor);

console.log("iao mammina");
