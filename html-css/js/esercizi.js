// Esercizi

// 1) Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1

let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
console.log(array[10]); // undefined

// oppure

console.log(array);

//  while ?

// oppure

for (let indice = 0; indice <= array.lenght; indice++) {
  console.log(array[indice]);
}

//  2) Stampare la somma di tutti gli elementi dell’ array → 30

// oppure, soluzione altrettanto valida con FOR

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

// 3) Stampare la somma dei soli elementi positivi → 35
// array[i] -> elemento dell'array chiamato array nella posizione
/* let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    console.log("sì");
    arraySum = arraySum + array[1];
  } else {
    console.log("no");
  }
}
console.log("sommaPositivi = " + sommaPositivi); */

// 3) Stampare la somma dei soli elementi in posizione pari --> 14

ind = 0;
let sommaPari = 0;

while (ind < array.length) {
  if (ind % 2 == 0) {
    sommaPari = sommaPari + array[ind];
  }
  ind++;
}

console.log(sommaPari);

// 4) Stampare la somma dei soli elementi dispari → 12

// 5) Stampare la somma dei soli elementi in indice/posizione pari  → 14

/* 6) Stampare quante volte compare il numero 2 -> 2
i = 0;
cont = 0;
while (i < array.length) {
  if (array[1] == 2) {
    cont++;
  }
  i++;
}
*/

// 7) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8

// 8) Stampare il numero massimo (senza usare funzioni matematiche) → 10

// 9) Stampare il numero minimo -> -3

let minNum = array[0];
for (let i = 0; i < array.length; i++) {
  if (minNum < array[i]) {
    minNum = array[i];
  }
}

console.log(minNum);

/* push -> push() → permette di inserire un nuovo elemento nell’array (in coda) 
es. animali.push(“tartaruga”) */

console.log(array);

arrayNuovo = [];
arrayNuovo.push[array[i]];
arrayNuovo = [-2];
arrayNuovo = [-2, -3];

console.log(arrayNuovo);

// esercizio

/* 
14) Creare un array3 con la somma degli elementi dell'array1 e dell'array2 -> [5, 4, 4, 7, 4]
  array1= [1,2,2,3,4]
  array2= [4,2,2,4]
  array3= 3[5,4,4,7,4]
*/

// selezionare la prima lettera della prima parola dell'array.
let arrayParole = ["ciao", "pippo", "mondo"];
console.log(arrayParole[0][0]); // stampa la prima lettera della parola "ciao".

/* 
ESERCIZI

array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4]   
array1=[4,2,3 ] array2=[2,3,3,3,3,2]
14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
→ [5, 4, 4, 7, 4]     

CONTROLLARE SOLUZIONE

let array1 = [1, 2, 2, 3];
let array2 = [4, 2, 2, 4, 5];
let array3 = [];

i = 0;
while(i < array1.length || i < array2.length) {
  array3[i] = 0;
  if(array2[i]) {
    array3[i] = array3[i] + array1[i];
  }
  i++;
}
console.log(array3);

while(i < array1.length || i < array2.length){
  array3[i] = 0;
  if(array1[i] && array2[i]){
    array3[i] = array1[i] + array2[i];
  } else {

  }
}

15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
16) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
array2[i] = array2[i] / array1[lunghezza-i-1] 
→ array2[0] = array2[0] / array1[5-0-1] = 4 / 4 = 1
17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
*/

/* 1) array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4]   
array1=[4,2,3 ] array2=[2,3,3,3,3,2]
14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
→ [5, 4, 4, 7, 4]     */

// 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
a;

/* 16) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
array2[i] = array2[i] / array1[lunghezza-i-1] 
→ array2[0] = array2[0] / array1[5-0-1] = 4 / 4 = 1 */

// 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224” DA VERIFICARE

let arrayNames = ["radar", "emme", 1221];
i = 0;

for (var i = 0; i < arrayNames.length; i++) {
  if (arrayNames[0] === arrayNames[1] || arrayNames[2]) {
    console.log("false");
    break;
  } else {
    console.log("true");
    break;
  }
}

// ESERCIVI NUOVI 1) Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente

let arrayParola = "precipitevolissimevolmente";
i = 0;
cont = 0;
while (i < arrayParola.length) {
  if (arrayParola[i] == "e") {
    cont++;
  }
  i++;
}

console.log(cont);

// 2) Scrivere un programma che verifica  se due stringhe sono palindrome
let str1 = "categoria";
let str2 = "cat";

for (let i = 0; i < str1.length; i++);
if (str1[i] === str2[i]) {
  for (let a = 0; a < str2.length; a++) {
    if (str1[i + a] !== str2[a]) {
      console.log("la parola non esiste");
    }
  }
}

// 4)Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
let input = "mare";
let reverseInput = "";

for (let i = input.length - 1; i >= 0; i--) {
  reverseInput - reverseInput + input[i];
}
console.log(reverseInput);

// 5) Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12) //
let input1 = "prova";
let input2 = "concatenazione";

let str3 = input1 + " " + input2;
console.log(str3);
