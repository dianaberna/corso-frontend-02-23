// 1 esercizio
let parola = "precipitevolissimevolmente";
let countLettere = 0;
for (let i = 0; i < parola.length; i++) {
  if (parola[i] === "e") {
    countLettere++;
  }
}
console.log(countLettere);

// 2 esercizio
// Scrivere un programma che verifica  se due stringhe sono palindrome
let stringaUno = "otto"; //se cambio stringaUno con la parola "casa" il risultato sarà false"
let stringaDue = "otto";
let arrayPalindromo = true;
for (let i = 0; i < stringaUno.length / 2; i++) {
  if (stringaUno[i] !== stringaDue[stringaDue.length - 1 - i]) {
    arrayPalindromo = false;
    break;
  } else {
    arrayPalindromo = true;
  }
}

console.log(arrayPalindromo);

//3
// Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa
// es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti

stringaUno = "palesemente";
stringaDue = "mente";
controllo = false;

for (let i = 0; i < stringaUno.length; i++) {
  if (stringaUno[i] == stringaDue[0]) {
    for (let j = 1; j < stringaDue.length; j++) {
      if (stringaUno[i + j] == stringaDue[j]) {
        controllo = true;
      } else {
        controllo = false;
      }
    }
  }
}
if (controllo) {
  console.log("E' contenuto");
} else {
  console.log("no");
}

//4 esercizio
// Scrivere un programma che prenda una stringa come input e restituisca
//  la stessa stringa con i caratteri in ordine inverso.
let stringa = "casa";
let stringaVuota = [];
count = 0;

for (let i = stringa.length - 1; i >= 0; i--) {
  stringaVuota[count] = stringa[i];
  count++;
}
console.log(stringaVuota);

//5 esercizio
// Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa
// che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
let stringaOne = "Buon";
let stringaTwo = "giorno";
let newString = "";
let stringaSpazio = " ";

for (let i = 0; i < stringaOne.length; i++) {
  newString += stringaOne[i];
}
newString += stringaSpazio;
for (let i = 0; i < stringaTwo.length; i++) {
  newString += stringaTwo[i];
}

console.log(newString);

//6 esercizio

//7 esercizio
// Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa
// che contiene solo le vocali presenti nella stringa originale
let str = "albero";
let x = "";
for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    x += str[i];
  }
}
console.log(x);

//8 esercizio
// Scrivere una funzione che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri
// comuni alle due stringhe. (versione 1: senza escludere i duplicati, versione 2: escludendo i duplicati)

let stringA = "casa";
let stringB = "cane";
let stringaCaratteriComuni = "";
for (let i = 0; i < stringA.length && i < stringB.length; i++) {
  if (stringA[i] == stringB[i]) {
    stringaCaratteriComuni += stringA[i];
  }
}

console.log(stringaCaratteriComuni);

//9 esercizio
// Scrivere programma che accetti un array di stringhe come input e
// restituisca la stringa più lunga presente nell'array
let arrayStringhe = [
  "casa",
  "auto",
  "libri",
  "supercalifragilistichespiralidoso",
];
let stringaLung = arrayStringhe[0];

for (let i = 0; i < arrayStringhe.length; i++) {
  if (arrayStringhe[i].length > stringaLung.length) {
    stringaLung = arrayStringhe[i];
  }
}
console.log(stringaLung);

//10 esercizio
//Scrivere programma che accetti una stringa come input e restituisca una nuova stringa
// in cui le vocali sono sostituite da un carattere speciale, ad esempio "*",
// e le consonanti sono convertite in lettere maiuscole
let stringaX = "Hello world";
let cont = "";

cont = stringaX
  .replaceAll("a", "*")
  .replaceAll("e", "*")
  .replaceAll("i", "*")
  .replaceAll("o", "*")
  .replaceAll("u", "*");

cont = cont.toUpperCase();

console.log(cont);

//11 esercizio
// Scrivi programma che accetti una stringa come input e restituisca una nuova stringa
// in cui ogni parola è invertita al contrario,
// mantenendo l'ordine delle parole. Ad esempio, "ciao mondo" diventa "oaic odnom"

stringaX = "Hello world";
//ho trasformato la stringa in array

contatore = stringaX.split("").reverse().toString("").replaceAll(",", "");

console.log(contatore);

//12 esercizio
// Scrivere programma che accetti una stringa come input e restituisca una nuova stringa
//  in cui i caratteri sono ordinati in ordine crescente secondo il loro codice ASCII

//  ARRAY BIDIMENSIONALI
// Scrivere un programma che prenda in input un array bidimensionale di numeri e restituisca
// la somma di tutti i numeri presenti nell'array

let arr = [
  [1, 4, 2],
  [2, 4],
];
let containerVuoto = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    containerVuoto += arr[i][j]; // riga i colonna j
  }
}
console.log(containerVuoto);
