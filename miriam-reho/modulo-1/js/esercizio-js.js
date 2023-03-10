let array = [2,6,9,10,-2,-3,0,2,5,1]


console.log("-- Esercizio 1 : stampa tutti gli elementi con while --")
let i = 0
while (i < array.length){
    console.log("Array n[" + i + "]= " + array[i]);
    i= i+1;
} 
console.log("-- Esercizio 1 : stampa tutti gli elementi con for --")
for (let i= 0; i < array.length; i++) {
    console.log("Array n[" + i + "]= " + array[i]);
}

// ------------------------------------------- 

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

// ------------------------------------------- 

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

// ------------------------------------------- 

console.log("-- Esercizio 4 : somma degli elementi dispari --")

// se i è dispari, prendilo e sommalo

let i4 = 0
let dispari = 0
while (i4 < array.length) {
    if (array[i4] %2 !== 0) { //%2 non è percentuale ma modulo. quindi fai una divisione e prendi il resto, non il risultato e voglio che sia diverso da 0, ma = +1 -1
        dispari = dispari + array[i4];
    }
    i4++;
} console.log("La somma degli elementi dispari è = " + dispari)

// ------------------------------------------- 

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

// ------------------------------------------- 

console.log("-- Esercizio 6 : quante volte compare il n2 --")
let i6 = 0
let volte = 0
while (i6 < array.length) {
    if (array[i6] == 2) { //l'elemento dell'array in posizione i ==2
        volte = volte + 1;
    }
    i6++;
} console.log("2 compare " + [volte] + " volte");

// ------------------------------------------- 

console.log("-- Esercizio 7 : quanti Plus (0 compreso) --")
let i7 = 0
let voltePlus = 0
while (i7 < array.length) {
    if (array[i7] >= 0) {
        voltePlus = voltePlus + 1;
    }
    i7++;
} console.log("ci sono " + voltePlus + " positivi")

// ------------------------------------------- 

console.log("-- Esercizio 8 : chi è il più grande --")

let i8 = 0
let max = array[0]
while (i8 < array.length) {
    if (max < array[i8]) {
        max = array[i8]
    }
    i8++
} console.log(max)

// ------------------------------------------- 

console.log("-- Esercizio 9 : chi è il più piccolo --")
let i9=0
let min = array[0]
while (i9 < array.length) {
    if (min > array[i9]) {
        min = array[i9]
    }
    i9++
} console.log(min)

// ------------------------------------------- 

console.log("--  Esercizio 10: un nuovo array con i negativi di array --")
let i10 = 0
let arrayNuovo = []
while (i10 < array.length) {
    if (array[i10] < 0) {
        arrayNuovo.push(array[i10]);
    }
    i10++
} console.log(arrayNuovo)

// ------------------------------------------- 

console.log("-- Esercizio 11: stampare un nuovo array con i doppi --")
i11 = 0
doubleArray = []
while (i11 < array.length) {
    doubleArray.push(array[i11]*2)
    i11++
} console.log(doubleArray)

// ------------------------------------------- 

console.log("-- Esercizio 12: stampare un nuovo array con arrey 2 volte --")
i12 = 0
dueArray = []
while (i12 < array.length) {
    dueArray.push(array[i12])
    i12++
} 
i12 = 0
while (i12 < array.length) {
    dueArray.push(array[i12]) //non sovrascrive ma aggiunge
    i12++
} console.log(dueArray) 

// ------------------------------------------- 

console.log("-- Esercizio 13: stampare al contrario l'array --")
i13 = array.length - 1
while (i13 >= 0) {
    console.log("Array n[" + i + "]= " + array[i13])
    i13--
} 

// --------------------- ARRAY1 & ARRAY2 ----------------------

let array1 = [1, 2, 2, 3, 4]
let array2 = [4, 2, 2, 4]


console.log("-- Esercizio 14: Crea array3 sommando gli elementi array1 e array2 --")
i = 0
let array3 = []
while (i < array1.length) {
    if (array2[i]) {
        array3[i] = array1[i] + array2[i];        
    } else {
        array3[i] = array1[i] // se arrey2[i] esiste, allora somma, altrimenti prendi solo array1
    }
    i++
} console.log(array3) // non c'è bisogno di pushare perchè già li sto inserendo con if e else

console.log("-- Esercizio 14.2: Crea array3 che array1 sia più grande o no torna lo stesso--")
let array1b = [4, 2, 2, 4]
let array2b = [1, 2, 2, 3, 4]
i = 0
let array3b = []
while (i < array2b.length || i < array2.length){
    array3b[i] = 0
    if (array1b[i]) {
        array3b[i] = array3b[i] + array1b[i]
    } 
    if (array2b[i]) {
        array3b[i] = array3b[i] + array2b[i]
    } 
    i++
} console.log(array3b)


// ------------------------------------------- 


console.log("-- Esercizio 15: Crea array3 con gli elementi dispari di array1 e pari di array2 --")
array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4] // risultato array3 = [1, 3, 4, 2, 2, 4]

i=0
array3 = []
while (i < array1.length) {
   if (array1[i] % 2 !== 0) {
       array3.push(array1[i])
   } 
   i++
} 
i = 0 //bisogna resettare la i, altrimenti risulta "sporca" dal precedente while
while (i < array2.length) {
    if (array2[i] %2 ==0) {
        array3.push(array2[i])
    } 
    i++
} console.log(array3)

console.log("-- Esercizio 15.2: Crea array3 con gli elementi dispari di array1 e pari di array2 --")
console.log("Il risultato dovrà essere array3 [1,4,2,2,3,4]")

array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]
array3 = []
for (i = 0; i < array1.length && i < array2.length; i++){
    if (array1[i] %2 !== 0) {
       array3.push(array1[i])
    } 
    if (array2[i] %2 ==0) {
        array3.push(array2[i])
    }
} console.log(array3)


// ------------------------------------------- 

console.log("-- Esercizio 16: aggiornare l'array2 con array2[i]=array2[i]/array1[length-1-i) --")

for (let i = 0; i < array2.length; i++) {
    array2[i] = array2[i] / array1[array1.length - 1 - i]
} console.log(array2)

// ------------------------------------------- 
// soluzione prima della lezione
console.log("-- Esercizio 17: array1 e array2 sono palindromi?--")
array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]

let revArray1 = []
for (let i = array1.length - 1; i >= 0; i--) {
    revArray1.push(array1[i])
} 

for (let i = 0; i < array1.length; i++) {
   if (array1[i] === revArray1[i]) {
        console.log("Array1 è palindromo")
        break
    } else {
        console.log("Array1 NON è palindromo")
    } break
}

let revArray2 = []
for (let i = array2.length - 1; i >= 0; i--) {
    revArray2.push(array2[i])
} 

for (let i = 0; i < array2.length; i++) {
   if (array2[i] === revArray2[i]) {
        console.log("Array2 è palindromo")
        break
    } else {
        console.log("Array2 NON è palindromo")
    } break
}

console.log("-- Esercizio 17.2: array1 e array2 sono palindromi?--")

/* let pal = 0
for (let i = 0; i < array1.length / 2; i++) {
    if (array1[i] === array1.length / 2 || array2[i] == Math.ceil(array1.length /2)) {
        pal++
    } else {
        console.log("array1 NON è palindromo")
        break
    }
}

for (let i = 0; i < array2.length / 2; i++) {
    if (array2[i] === array2.length / 2 || array2[i] == Math.ceil(array2.length /2)) {
        pal++
    } else {
        console.log("array2 non è palindromo")
        break
    }
} */


// --------------------- STRINGHE ---------------------- 

console.log("Stringhe 1 - conta quante lettere e in stringa")

let parola = "precivitevolissimevolmente"
volte = 0
i = 0
for (i = 0; i < parola.length; i++) {
    if (parola[i] == "e") {
        volte++
    }
} console.log("La lettera si ripete " + volte + " volte")

// ------------------------------------------- 

console.log("Stringhe 2 - Verifica se due stringhe sono palindrome")

let parola1 = "ciao"
let parola2 = "radar"



console.log("Stringhe 2.1 - Verifica se due stringhe sono palindrome tra di loro")


// ------------------------------------------- 

console.log("Stringhe 3 - Scrivere un programma che verifica se esiste una stringa all'interno di un altra")

s1 = "categoria"
s2 = "cat"
controllo = false

for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[0]) {
        for (let l = 1; l < s2.length ; l++){
            if (s1[i+l] == s2[l]) {
                controllo = true
            } else {
                controllo = false
            }
        }
    }
} 
if (controllo) {
    console.log("È contenuto")
} else {
        console.log("Non è contenuto")
}

console.log("Stringhe 3.2 - Scrivere un programma che verifica se esiste una stringa all'interno di un altra")

s1 = "categoria"
s2 = "cat"

