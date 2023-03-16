// 1) Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente
let parola = 'precipitevolissimevolmente';
let count = 0;

for (let i = 0; i < parola.length; i++) {
    if (parola[i] === "e") {
        count++;
    }
}
console.log(count);

// 2) Scrivere un programma che verifica  se due stringhe sono palindrome
let parola1 = "categoria";
let parola2 = "cat";

if (parola1.includes(parola2)) {
  console.log(`La parola '${parola2}' è presente nella parola '${parola1}'.`);
} else {
  console.log(`La parola '${parola2}' non è presente nella parola '${parola1}'.`);
}

// 3) Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti
// es. mare in categoria → la parola mare non esiste in categoria
let string__1 = "categoria";
let string__2 = "cat";

for (let i = 0; i < string__1.length; i++) {
  if (string__1[i] === string__2[0]) {
    for (let j = 0; j < string__2.length; j++) {
      if(string__1[i + j] !== string__2[j]) {
        console.log("Non esiste la parola");
      }
    } // 24
  } // 28 - 34
} // 27 - 35

// 4) Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso
let string = "esempio";
let parolaInvertita = "";

for (let i = string.length - 1; i >= 0; i--) {
  parolaInvertita = parolaInvertita + string[i];
}

console.log(parolaInvertita);

// 5) Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
let string1 = 'Hello';
let string2 = 'World';
let string3 = string1 + ' ' + string2;
console.log(string3);

// 6) Scrivere un programma che sviluppi il cifrario di Cesare.
// Il cifrario di Cesare è un algoritmo di cifratura semplice ma efficace, in pratica abbiamo bisogno di una stringa (quella che vogliamo criptare) e di un numero. Il numero rappresenta quante posizioni nell’alfabeto (non tradizionale ma codificato ASCII) dover spostare ogni lettera.

// 7) Scrivere programma che accetti una stringa come input e restituisca una nuova stringa che contiene solo le vocali presenti nella stringa originale.

// 8) Scrivere programma che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri comuni alle due stringhe. (versione 1: senza escludere i duplicati, versione 2: escludendo i duplicati).
function commonCharacters(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      result += str1[i];
    }
  }
  return result;
}
console.log(commonCharacters("Sofia", "Giulia", "Alice", "Ginevra", "Emma"));;

// 9) Scrivere programma che accetti un array di stringhe come input e restituisca la stringa più lunga presente nell'array.

