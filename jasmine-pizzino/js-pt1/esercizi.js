let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//           0  1  2                       9  10

console.log("esercizi");

// 1 - Stampare tutti gli elementi dell’array -> scorrere tutto l'array -> while/for
console.log("1");

/*
variabile per la condizione
while(condizione){
    ...
    aggiornamento della variabile per la condizione
}
*/

console.log("con while");

// condizione falsa è quando "usciamo" dall'array

// strumento che mi aiuta a scorrere da 0 a 4 -> while
let i = 0;
while (i < array.length) {
    console.log(array[i]); // --> [] ci permette di accedere all'elemento in posizione i dell'array numeriBari
    i = i + 1;
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 2) Stampare la somma di tutti gli elementi dell’ array
// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//              0  1  2   3   4

i = 0;
let somma = 0;
let lunghezza = array.length;
while (i <= lunghezza - 1) {
    somma = somma + array[i];
    // console.log("array[" + i + "] = " + array[i], "somma = " + somma);
    i++;
}
console.log("somma = " + somma);

/*
    i=0 arraySum=0
    0 <= 9 ? si
        arraySum = 0 + 2 = 2
        i=0+1=1
    1 <= 9 ? si
        arraySum = 2 + 6 = 8
    
        ...
    10 <= 9 ? no

*/

// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
// 3) Stampare la somma dei soli elementi positivi → 35
// array[i] -> elemento dell'array chiamato array nella posizione i
let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sommaPositivi = sommaPositivi + array[i];
    }
}
console.log("sommaPositivi = " + sommaPositivi);









//let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sommaDispari = 0;
for 





const numbers = [3, 4, 6, 1, 5, 2, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) { // verifica se l'elemento è dispari
    sum += numbers[i]; // aggiungi l'elemento dispari alla somma
  }
}

console.log(sum); // stampa la somma dei soli elementi dispari (12)



