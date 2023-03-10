/*

*/

// Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 
// Scrivere un programma che verifica  se due stringhe sono palindrome 
// Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti es. mare in categoria → la parola mare non esiste in categoria

let stringa = "palesemente"
let sottostringa = "mente"
let indice = stringa.indexOf(sottostringa);

if (indice !== -1){
  console.log("la sottostringa è contenuta nella stringa")
}else{
    console.log("la sottostringa NON è contenuta nella stringa")
}

// Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
// Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
