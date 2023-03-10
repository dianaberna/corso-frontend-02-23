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

// 9
