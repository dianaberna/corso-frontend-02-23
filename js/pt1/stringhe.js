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


// ci torniamo  

/*
    0,0     0,1
    1,0     1,1
*/
// 1, 2
// 3, 4 
// matrice/array multidimensionali/array bidimensionali --> riga 1 con elementi nella colonna 1 = 1 nella colonna 2 = 2
// nella riga 2 ho gli elementi nella colonna 1 = 3 nella colonna 2 = 4

// Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 
// Scrivere un programma che verifica  se due stringhe sono palindrome 
// Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti es. mare in categoria → la parola mare non esiste in categoria
// Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
// Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
