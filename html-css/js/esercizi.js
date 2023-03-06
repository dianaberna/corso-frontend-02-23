// Esercizi

// 1) Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1

let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
console.log(array[10]); // undefined

// oppure

console.log(array);

//  while ?

// oppure

for (let indice = 0; indice <= array.lenght; indice++) {
  console.log(array[indice]);
}

//  2) Stampare la somma di tutti gli elementi dell’ array → 30

// oppure, soluzione altrettanto valida con FOR

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);

// 3) Stampare la somma dei soli elementi positivi → 35
// array[i] -> elemento dell'array chiamato array nella posizione
let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    console.log("sì");
    arraySum = arraySum + array[1];
  } else {
    console.log("no");
  }
}
console.log("sommaPositivi = " + sommaPositivi);
