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

// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
// 3.1) contare quanti elementi positivi ci sono nell'array

i = 0;
let variabileContatore = 0;
while (i < array.length) {
    if (array[i] >= 0) {
        variabileContatore = variabileContatore + 1;
    }
    i++;
}
console.log("esercizio 3.1 = " + variabileContatore);

// esercizio 4

somma = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]%2 != 0) {
        somma = somma + array[i];
    }

}
console.log ("esecizio 4 =" + somma);

// esercizio 5

somma = 0;
for (let i = 0; i < array.length; i++) {
    if (i%2 == 0) {
        somma = somma + array[i];
    }
}
console.log ("esercizio 5 =" + somma);

// esercizio 6

let cont = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == 2) {
        cont++;
    }
}
console.log ("esercizio 6 =" + cont);

// esercizio 7

cont = 0
for (i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        cont = cont + 1;
    }
}
console.log ("esercizio 7 =" + cont);

// esercizio 8

let Max = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] > Max) {
        Max = array[i];
    }
}
console.log ("esercizio 8 =" + Max);

// esercizio 9 

let Min = 0;
Min = array[0];
for (i = 0; i < array.length; i++) {
    if (array[i] < Min) {
        Min = array[i];
    }
}
console.log ("esercizio 9 =" + Min);

// salto temporale agli esercizi delle stringheeeEEEeeeEEEeee 
// Esercizio 1 stringhe
let parola = "precipitevolissimevolmente";
cont = 0;
for (i = 0; i < parola.length; i++) {
    if (parola[i] == "e") {
        cont++;
    }
}
console.log ("Esercizio 1 =" + cont);

// Esercizio 2 stringhe

parola = "ediolognomomongoloide"
let reverse = 0;
reverse = parola.length - 1;
for (i = 0; i < parola.length; i++) {
    if (parola[i] == parola[reverse]) {
        reverse--;
    }
}

if (i = parola.length) {
    console.log ("esercizio 2 = " + parola + " è palindroma");
}
else {
    console.log ("esercizio 2 = " + parola + " non è palindroma");
}
// esercizio 2.1



//Esercizio 3 stringhe

parola = "categoria";
let parolaDue = "cat";
if (parola.includes (parolaDue) == true) {
    console.log("la stringa è presente nell'altra stringa")
}
else {
        console.log ("la stringa non è presente nell'altra stringa");
}

// Esercizio 4 stringhe

parola = "angolo bar a bologna";
let contrario ="";
for (i = parola.length-1; i >= 0; i--) {
    contrario = contrario + parola[i];
}
console.log ("Esercizio 4 = " + contrario);

// Esercizio 5 stringhe

// let StringaUno = prompt();
// let StringaDue = prompt();
// let StringaTre = "";
// StringaTre =  StringaUno + " " + StringaDue;
// console.log (StringaTre);

// Esercizio 7 stringhe

let StringaUno = prompt();
let Vocali = "";
for (i = 0; i < StringaUno.length; i++) {
    if (StringaUno[i] == "a") {
        Vocali = Vocali + StringaUno[i];
    }
    else  if (StringaUno[i] == "e") {
        Vocali = Vocali + StringaUno[i];
    }
    else  if (StringaUno[i] == "i") {
        Vocali = Vocali + StringaUno[i];
    }
    else  if (StringaUno[i] == "o") {
        Vocali = Vocali + StringaUno[i];
    }
    else  if (StringaUno[i] == "u") {
        Vocali = Vocali + StringaUno[i];
    }
}
console.log (Vocali);