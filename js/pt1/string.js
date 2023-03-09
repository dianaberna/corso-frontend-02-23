// 1) Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 
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