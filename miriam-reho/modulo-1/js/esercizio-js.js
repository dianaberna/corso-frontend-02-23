let array = [2,6,9,10,-2,-3,0,2,5,1]


console.log("-- Esercizio 1 : stampa tutti gli elementi --")
let i = 0
while (i < array.length){
    console.log("Array n[" + i + "]= " + array[i]);
    i= i+1;
} 

console.log("-- Esercizio 2 : stampa la somma --")
/* 
    0 < 10? si -> somma = 0 + 2 = 2
    i2 0 +1 = 1

    Voglio che il risultato sia la somma + i finchè è < 10
 */
let i2 = 0
let sommaArray = 0
while (i2 < array.length){
    sommaArray = sommaArray + array[i2];
    i2++;
} console.log("La somma degli array è "+ sommaArray)


console.log("-- Esercizio 3 : somma degli elementi positivi --")

/* 
    Se i > 0 e < length -> sommali
    quindi:
    finchè i > 10, prendilo e sommalo

    !! if(array[i]) e NON i perchè i sarà sempre positivo, dato che partiamo da 0
*/
let i3 = 0
let sommaPositivi = 0 
while (i3 < array.length){
    if (array[i3] > 0) { 
        sommaPositivi = sommaPositivi + array[i3];
    }
    i3++;
} console.log(sommaPositivi)


console.log("-- Esercizio 4 : somma degli elementi dispari --")

/* 
    se i è dispari, prendilo e sommalo
*/

let i4 = 0
let dispari = 0
while (i4 < array.length) {
    if (array[i4] %2 !== 0) { //%2 non è percentuale ma modulo. quindi fai una divisione e prendi il resto, non il risultato e voglio che sia diverso da 0, ma = +1 -1
        dispari = dispari + array[i4];
    }
    i4++;
} console.log("La somma degli elementi dispari è = " + dispari)


console.log("-- Esercizio 5 : somma degli elementi in posizione pari --")

/* 
    se i è in posizione (0,1,2,etc) pari, prendilo e sommalo
*/

let i5 = 0
let posEven = 0
while (i5 < array.length) {
    if (i5 %2 == 0) {
        posEven = posEven + array[i5];
    }
    i5 = i5 + 2;
} console.log("La somma degli elementi in posizione pari è = "+ posEven)


console.log("-- Esercizio 6 : quante volte compare il n2 --")
let i6 = 0
let volte = 0
while (i6 < array.length) {
    if (array[i6] == 2) { //l'elemento dell'array in posizione i ==2
        volte = volte + 1;
    }
    i6++;
} console.log("2 compare " + [volte] + " volte");


console.log("-- Esercizio 7 : quanti Plus (0 compreso) --")
let i7 = 0
let voltePlus = 0
while (i7 < array.length) {
    if (array[i7] >= 0) {
        voltePlus = voltePlus + 1;
    }
    i7++;
} console.log("ci sono " + voltePlus + " positivi")


console.log("-- Esercizio 8 : chi è il più grande --")

let i8 = 0
let max = array[0]
while (i8 < array.lenght) {
    if (max < array[i8]) {
        max = array[i8];
    }
    i8++
} console.log(max)


/* esercizio 9
min = array[0] */


console.log("Esercizio 10: un nuovo array con i negativi di array")
let i10 = 0
let arrayNuovo = []
while (i10 < array.length) {
    if (array[i10] < 0) {
        arrayNuovo.push(array[i10]);
    }
    i10++
} console.log(arrayNuovo)

