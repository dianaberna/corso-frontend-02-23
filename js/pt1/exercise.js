let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1 ]

// Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1 
let i = 0;
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Stampare la somma di tutti gli elementi dell’ array → 30
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum)

// Stampare la somma dei soli elementi positivi → 35
let positivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positivi += array[i];
    };
}
console.log(positivi);

// Stampare la somma dei soli elementi dispari → 12
let dispari = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        dispari += array[i];
    }
}
console.log(dispari)

// Stampare la somma dei soli elementi in indice/posizione pari  → 14
let posizionePari = 0;
for (let i = 0; i < array.length; i += 2) {
    posizionePari += array[i];
}
console.log(posizionePari);

// Stampare quante volte compare il numero 2 → 2
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 2) {
        count++
    }
}
console.log(count);

// Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
let countPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        countPositivi++;
    }
}
console.log(countPositivi);

// Stampare il numero massimo (senza usare funzioni matematiche) → 10
let max = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);

// Stampare il numero minimo → -3
let min = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log(min);

// Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        newArray.push(array[i]);
    }
}
console.log(newArray);

// Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → arrayNuovo=[4, 12, 18, 20, -4, -6, 0, 4, 10, 2] 
let arrayNew = [4, 12, 18, 20, -4, -6, 0, 4, 10, 2];
let arr = [];

for (let i = 0; i < arrayNew.length; i++) {
    let duplicato = arrayNew[i] * 2;
    arr.push(duplicato);
}
console.log(arr);

// Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
const originalArray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
const newOriginalArray = [...originalArray, ...originalArray];
console.log(newOriginalArray);

// Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2
const num = [1, 5, 2, 0, -3, -2, 10, 9, 6, 2];

for (let i = num.length - 1; i >= 0; i--) {
  console.log(num[i]);
}