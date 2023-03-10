// stringa --> array
// frase --> stringa separata da spazi ma sempre tra le stesse virgolette
// gruppo di più stringhe --> array di stringhe

let parola = "ciao"
console.log(parola[0]) // --> c
console.log(parola.length)

let frase = "ciao mondo sono diana!"
console.log(frase[11]) // --> s
console.log(frase.length)

let arrayParole = ["ciao", "pippo", "mondo"]
let arrayNumeri = [ 4, 3, 7]
console.log(arrayParole)
console.log(arrayParole[0]) // ciao
console.log(arrayNumeri[0]) // 4

// prima lettera del primo elemento dell'array arrayParole
let nuovaParola = arrayParole[1]
console.log(nuovaParola[1]) // pippo

console.log(arrayParole[1][0])  // stampa la prima p della parola pippo

console.log("prova = "+nuovaParola)

let stringa = "ciao"
let nuovaStringa = "ciao" + "ciao"

nuovaStringa = nuovaStringa + "ciao"
nuovaStringa += "ciao"

console.log(nuovaStringa)

// ci torniamo  

/*
    0,0     0,1
    1,0     1,1
*/
// 1, 2
// 3, 4 
// matrice/array multidimensionali/array bidimensionali --> riga 1 con elementi nella colonna 1 = 1 nella colonna 2 = 2
// nella riga 2 ho gli elementi nella colonna 1 = 3 nella colonna 2 = 4

console.log("--- funzioni stringhe ---")

let animali = ["gatto", "cane", "coniglio"]
console.log(animali)

console.log(animali.indexOf("cane"))

animali.sort()
console.log(animali)

animali.push("criceto") // inserisce il nuovo elemento in coda / alla fine
console.log(animali)

animali.pop() // elimina l'ultimo elemento presente nell'array
console.log(animali)

animali.reverse()
console.log(animali)

console.log(animali.slice(0 , 2))  
// (0, 2) --> 0 =  è la posizione nell'array, 2 = quanti elementi selezionare
console.log(animali)

animali[1] = "pappagallo"
console.log(animali)

animali.splice(1, 0, "criceto") // criceto viene aggiunto in posizione 1 spostando in posizione 2 pappagallo
// (1, 0, "criceto") --> 1 = posizione nell'array dove inserire il nuovo elemento, 0 = quanti elementi eliminare, "criceto" = il nuovo elemento
console.log(animali)

let animaliInStringa = animali.toString()
console.log(animaliInStringa)
console.log(animali)
let animaliInStringa2 = String(animali)
console.log(animaliInStringa2)
console.log(animali)

let salvo = animali.join(" ")
console.log(salvo)


let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);

console.log(array3);

array1 = [1, 2, 3];
array2 = [4, 5, 6];
array3Nuovo = []

for (let i = 0; i < array1.length; i++) {
    array3Nuovo.push(array1[i]);
}
for (let i = 0; i < array2.length; i++) {
    array3Nuovo.push(array2[i]);
}

array3 = array1.concat(array2);

console.log(array3);
console.log(array3Nuovo);