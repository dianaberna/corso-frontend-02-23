// 1 esercizio
let parola = "precipitevolissimevolmente";
let countLettere = 0;
for (let i = 0; i < parola.length; i++) {
  if (parola[i] === "e") {
    countLettere += 1;
  }
}
console.log(countLettere);

// 2 esercizio
// Scrivere un programma che verifica  se due stringhe sono palindrome
let stringaUno = "Otto";
let stringaDue = "Otto";
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

stringaUno = "mente";
stringaDue = "palesemente";

for (let i = 0; i < stringaUno.length && i < stringaDue.length; i++) {
  if (stringaUno[i] == stringaDue[i]) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
