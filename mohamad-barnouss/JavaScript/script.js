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
let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let v = [];
for (j = 0; j < array1.length; j++) {
  if (j < array2.length) {
    v.push(array1[j] + array2[j]);
  } else v.push(array1[j]);
}
console.log(v);

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
let parola = [prompt("inserisci una parola")];

console.log(parola);
console.log(parola.length);
let inverso = [];
for (i = parola[0].length; i >= 0; i--) {
  inverso.push(parola[i]);
}

console.log(inverso);
*/
