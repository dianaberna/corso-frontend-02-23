let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//           0  1  2                    9  10

console.log("esercizi.js");

// 1) Stampare tutti gli elementi dell’array →  2, 6, 9, 10, -2, -3, 0, 2, 5, 1

/*
variabile per la condizione
while(condizione){
    ...
    aggiornamento della variabile per la condizione
}
*/

console.log("esercizio 1 - con while");

// condizione falsa è quando "usciamo" dall'array
// while/for -> strumenti che mi aiutano a scorrere da 0 a 4
// array[i] -> elemento dell'array chiamato array nella posizione i

let i = 0;
while (i < array.length) {
    console.log(array[i]); // --> [] in questo caso ci permette di accedere all'elemento in posizione i dell'array numeriBari
    i = i + 1;
}

console.log("esercizio 1 - con for");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 2) Stampare la somma di tutti gli elementi dell’ array → 30
// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//              0  1  2   3   4

i = 0;
let somma = 0;
let lunghezza = array.length;
while (i <= lunghezza - 1) {
    somma = somma + array[i];
    //console.log("array[" + i + "] = " + array[i], "somma = " + somma);
    i++;
}
console.log("esercizio 2 = " + somma);

// 3) Stampare la somma dei soli elementi positivi → 35

let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sommaPositivi = sommaPositivi + array[i];
    }
}
console.log("esercizio 3 = " + sommaPositivi);

// 4) Stampare la somma dei soli elementi dispari → 12
i = 0;
somma = 0;
while (i < array.length) {
    // elemento dell'array in posizione i dispari
    if (array[i] % 2 !== 0) {
        // if( array[i] % 2 == -1 || array[i] % 2 == 1 )
        somma = somma + array[i];
    }
    i++;
}
console.log("esercizio 4 -> somma = " + somma);

// 5) Stampare la somma dei soli elementi in indice/posizione pari  → 14
i = 0;
somma = 0;
while (i < array.length) {
    if (i % 2 == 0) {
        // posizione i pari
        somma = somma + array[i];
    }
    i++;
}
console.log("esercizio 5 -> somma = " + somma);

// 6) Stampare quante volte compare il numero 2 → 2
i = 0;
let cont = 0;
while (i < array.length) {
    if (array[i] == 2) {
        cont++;
    }
    i++;
}
console.log("esercizio 6 --> cont = " + cont);

// 6.1) contare quanti 2 e -2 ci sono nell'array -> conto tutto insieme
i = 0;
cont = 0;
while (i < array.length) {
    if (array[i] == 2 || array[i] == -2) {
        // and && -> array[i] == 2 e array[i] == -2 -> mai vero
        cont++;
    }
    i++;
}

console.log("esercizio 6.1 --> cont = " + cont);

// 6.2) contare quanti 2 e -2 ci sono nell'array -> conto in due variabili separate
i = 0;
let cont1 = 0;
let cont2 = 0;
while (i < array.length) {
    if (array[i] == 2) {
        cont1++;
    }
    if (array[i] == -2) {
        cont2++;
    }
    i++;
}
console.log(
    "esercizio 6.2 --> ci sono " +
        cont1 +
        " numeri 2 e ci sono " +
        cont2 +
        " numeri -2"
);

// 7) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
// quanti numeri => cont
// positivi (compreso lo zero) =>  array[i] >= 0 -> if
// ci sono nell’array => array -> while
i = 0;
cont = 0;
while (i < array.length) {
    if (array[i] >= 0) {
        cont++;
    }
    i++;
}

console.log("esercizio 7 --> cont = " + cont);
cont = 0;
i = 0; // non è necessario azzerare prima la i se andiamo ad utilizzare un for in cui mettiamo let i = 0
// console.log("stampo i prima del for -> "+i)
for (let i = 0; i < array.length; i++) {
    // console.log("stampo i all'inizio del for -> "+i)
    if (array[i] >= 0) {
        cont++;
    }
    // console.log("stampo i alla fine del for -> "+i)
    // l'incremento viene eseguito alla fine del corpo del for
}
//console.log("stampo i dopo il for -> "+i)
console.log("esercizio 7, cont = " + cont);

// 8) Stampare il numero massimo (senza usare funzioni matematiche) → 10

let max = array[0];
i = 0;
while (i < array.length) {
    // i=0 2 >= 2 ? si -> max = 2
    // i=1 6 >= 2 ? si -> max = 6
    if (array[i] >= max) {
        // if(max <= array[i])
        max = array[i];
    }
    i++;
}

console.log("esercizio 8 --> massimo = " + max);

// 9) Stampare il numero minimo → -3

let min = array[0];
i = 0;
while (i < array.length) {
    // i=0 2 >= 2 ? si -> max = 2
    // i=1 6 >= 2 ? si -> max = 6
    if (array[i] <= min) {
        // if(max <= array[i])
        min = array[i];
    }
    i++;
}
console.log("esercizio 9 --> minimo = " + min);

// 10) Inserire in un nuovo array solo gli elementi negativi dell'array che abbiamo 🤯 → 2
// Inserire in un nuovo array -> ?
// solo gli elementi negativi -> while su tutto il mio array -> if array[i]<0

console.log("esercizio 10 --> ");
let arrayNuovo = [];
for (let i = 0; i < array.length; i++) {
    console.log("posizione i = " + i + " elemento = " + array[i]);
    if (array[i] < 0) {
        arrayNuovo.push(array[i]);
        console.log("arrayNuovo = " + arrayNuovo);
    }
}
console.log(arrayNuovo); // arrayNuovo = [-2, -3]
// senza il push
console.log("senza push");
arrayNuovo = [];
indiceNuovo = 0;
for (let i = 0; i < array.length; i++) {
    console.log("posizione i = " + i + " elemento = " + array[i]);
    if (array[i] < 0) {
        arrayNuovo[indiceNuovo] = array[i];
        indiceNuovo++;
        console.log("arrayNuovo = " + arrayNuovo);
    }
}
console.log(arrayNuovo);

// senza push e con il while
console.log("senza push e con while");
arrayNuovo = [];
indiceNuovo = 0;
i = 0;
while (i < array.length) {
    /* console.log("posizione i = " + i + " elemento = " + array[i]); */
    if (array[i] < 0) {
        arrayNuovo[indiceNuovo] = array[i];
        indiceNuovo++;
/*         console.log("arrayNuovo = " + arrayNuovo); */
    }
    i++;
}
console.log(arrayNuovo);

// 11) Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]

console.log("esercizio 11 --> ");
let arrayDoppio = [];
for (let i = 0; i < array.length; i++) {
    arrayDoppio.push(array[i] * 2);
    // array[i] = array[i] * 2 --> errore! stiamo "sporcando" l'array di partenza
}
console.log(array);
console.log(arrayDoppio);

// 12) Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 →
// [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

console.log("esercizio 12 --> ");
// Metodo con il push
let risultato = [];
for (let i = 0; i < array.length; i++) {
    risultato.push(array[i]);
}
for (let i = 0; i < array.length; i++) {
    risultato.push(array[i]);
}
console.log("metodo con il push");
console.log(risultato);

risultato = [];
for (let volte = 0; volte <= 1; volte++) {
    // volte < 2 --> volte voglio che sia 0 e 1 perché ho bisogno di due copie
    for (let i = 0; i < array.length; i++) {
        risultato.push(array[i]);
    }
}
console.log("metodo con il push e due for");
console.log(risultato);

// Metodo senza il push
// let array     = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
// let risultato = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
//                  |                                |

risultato = [];
for (let i = 0; i < array.length; i++) {
    risultato[i] = array[i]; //primo array - posizione 0
    risultato[array.length + i] = array[i]; //aggiunta secondo array - posizione
}
console.log("metodo senza il push e un for");
console.log(risultato);

//metodo con spread operator 
console.log("metodo con lo spread operator");
risultato = [...array, ...array]
console.log(risultato)

console.log("spread operator")
console.log(array)
console.log(...array)


// 13) Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2 🙂
console.log("esercizio 13 --> ");
// è come il primo esercizio ma scorro l'array al contrario

i = array.length - 1;
while (i >= 0) {
    console.log(array[i]);
    i = i - 1;
}
// dalla posizione 9 alla posizione 0
// i-- --> i=i-1        i++ -> i=i+1
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

// array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4]
let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let array3 = [];

// 14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 → [5, 4, 4, 7, 4]
console.log("esercizio 14 -->");

// primo metodo
for (let i = 0; i < array1.length || i < array2.length; i++) {
    if (array1[i] && array2[i]) {
        array3.push(array1[i] + array2[i]);
    } else {
        if (!array2[i]) {
            array3.push(array1[i]);
        } else {
            array3.push(array2[i]);
        }
    }
}
console.log(array3);

// secondo metodo
for (let i = 0; i < array1.length || i < array2.length; i++) {
    array3[i] = 0;
    if (array1[i]) {
        array3[i] = array3[i] + array1[i];
    }
    if (array2[i]) {
        array3[i] = array3[i] + array2[i];
    }
}
console.log(array3);

// secondo metodo con funzione isNaN
// isNaN = isNotaNumber è una funzione che restituisce true se non è un numero altrimenti false se lo è
for (let i = 0; i < array1.length || i < array2.length; i++) {
    array3[i] = 0;
    if (!isNaN(array1[i])) {
        array3[i] = array3[i] + array1[i];
    }
    if (array2[i]) {
        array3[i] = array3[i] + array2[i];
    }
}
console.log(array3);

// 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
// versione 1 con while
console.log("esercizio 15 --> ");
array1 = [ 1, 2, 2, 3, 4] 
array2 = [4, 2, 2, 4]   
array3 = []
i=0
while (i < array1.length) {
    if (array1[i] % 2 !== 0) {
        array3.push(array1[i]);
    }
    i++;
}
i = 0;
while (i < array2.length) {
    if (array2[i] % 2 == 0) {
        array3.push(array2[i]);
    }
    i++;
}
console.log("versione 1 : " + array3);

array3=[]
for(let i = 0; i<array1.length || i<array2.length; i++){
    if(array1[i] && array1[i]%2 != 0){
        array3.push(array1[i])
    }
    if(array2[i] && array2[i]%2 == 0){
        array3.push(array2[i])
    }
}
console.log("versione 2 : " + array3);
// 16) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
// array2[i] = array2[i] / array1[lunghezza-i]

i = 0;
while (i < array2.length) {
    array2[i] = array2[i] / array1[array2.length - i - 1];

    i++;
}
console.log("esercizio 16 --> " + array2);

// 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”

console.log("esercizio 17 --> ");
i = 0;
cont = 0;
while (i < array2.length / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - 1 - i]) {
        cont++;
    }
    i++;
}

if (cont == array2.length / 2 || cont == Math.ceil(array2.length / 2)) {
    console.log("è palindromo");
} else {
    console.log("non è palindromo");
}

// ceil e floor
console.log("cont=" + cont);
console.log(array2.length / 2);
console.log("ceil: " + Math.ceil(array2.length / 2));
console.log("floor: " + Math.floor(array2.length / 2));


