// 1) 
let parola = 'precipitevolissimevolmente';
let count = 0;

for (let i = 0; i < parola.length; i++) {
    if (parola[i] === "e") {
        count++;
    }
}
console.log(count);

// 2)
let parola1 = "categoria";
let parola2 = "cat";

if (parola1.includes(parola2)) {
  console.log(`La parola '${parola2}' è presente nella parola '${parola1}'.`);
} else {
  console.log(`La parola '${parola2}' non è presente nella parola '${parola1}'.`);
}

// 3)

// 4)
let string = "esempio";
let parolaInvertita = "";

for (let i = string.length - 1; i >= 0; i--) {
  parolaInvertita += string[i];
}

console.log(`La parola invertita è: ${parolaInvertita}`);

// 5)
let string1 = 'Hello';
let string2 = 'World';
let newString = concatenaStringhe(string1, string2);
console.log(newString); // output: "Ciao mondo"

function concatenaStringhe(string1, string2) {
  let newString = string1 + ' ' + string2;
  return newString;
}

// 6)
function cifrarioCesare(stringa, numero) {
  let nuovaStringa = "";

  for (let i = 0; i < stringa.length; i++) {
    // Converte la lettera corrente in codice ASCII
    let codiceCarattere = stringa.charCodeAt(i);

    // Controlla se il carattere corrente è una lettera dell'alfabeto
    if (codiceCarattere >= 65 && codiceCarattere <= 90) {
      // Calcola il nuovo codice ASCII spostando il carattere di "numero" posizioni
      codiceCarattere = ((codiceCarattere - 65 + numero) % 26) + 65;
    } else if (codiceCarattere >= 97 && codiceCarattere <= 122) {
      codiceCarattere = ((codiceCarattere - 97 + numero) % 26) + 97;
    }

    // Converte il nuovo codice ASCII in lettera e lo aggiunge alla nuova stringa
    nuovaStringa += String.fromCharCode(codiceCarattere);
  }

  return nuovaStringa;
}

// Esempio di utilizzo
let stringaDaCifrare = "Ciao, come va?";
let numeroSpostamento = 5;
let stringaCifrata = cifrarioCesare(stringaDaCifrare, numeroSpostamento);
console.log(stringaCifrata); // output: "Hntf, htaj af?"

// 8
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
