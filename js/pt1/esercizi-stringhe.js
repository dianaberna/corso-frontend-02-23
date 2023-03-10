/*

*/

// 1) Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente
console.log("esercizio 1 -->");
parola = "precipitevolissimevolmente";
let contaE = 0;

for (let i = 0; i < parola.length; i++) {
    if (parola[i] === "e") {
        contaE++;
    }
}
console.log(contaE);

// 2) Scrivere un programma che verifica se due stringhe sono palindrome tra loro
console.log("esercizio 2 -->");
let stringa1 = "casa";
let stringa2 = "asac";

let sonoUgualiAlContrario = true;
for (let k = 0; k < stringa1.length; k++) {
    if (stringa1[k] !== stringa2[stringa2.length - 1 - k]) {
        sonoUgualiAlContrario = false;
    }
}

if (sonoUgualiAlContrario) {
    console.log("sono palindrome");
} else {
    console.log("non sono palindrome");
}

// con l'uso di funzioni js
// controlla se le stringhe sono uguali al contrario
if (stringa2.split("").reverse().join("") === stringa1) {
    console.log("sono palindrome");
} else {
    console.log("non sono palindrome");
}

// 3) Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti es. mare in categoria → la parola mare non esiste in categoria

console.log("esercizio 3 -->");
stringa = "piroscafo"
sottostringa = "scafo"
trovato = false;
// versione senza includes
for (let i = 0; i < stringa.length; i++) {
  // se il primo carattere della sottostringa coincide con il carattere corrente della stringa
  if (stringa[i] === sottostringa[0]) {
    // controlla se i caratteri successivi della stringa coincidono con quelli della sottostringa
    for (let j = 1; j < sottostringa.length; j++) {
      console.log(stringa[i+j], sottostringa[j])
      if (stringa[i+j] == sottostringa[j]) {
        trovato = true;
      }else{
        trovato = false;
      }
    }
    
  }
}
// se la sottostringa è stata trovata
if (trovato) {
  console.log("la sottostringa è contenuta nella stringa");
}else{
  console.log("la sottostringa NON è contenuta nella stringa");
}

// versione con includes 
let indice = stringa.indexOf(sottostringa);

if (indice !== -1) {
    console.log("la sottostringa è contenuta nella stringa");
} else {
    console.log("la sottostringa NON è contenuta nella stringa");
}

// 4) Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
// 5) Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
