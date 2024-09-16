// 1) Scrivere un programma che prenda in input un array bidimensionale di numeri e restituisca la somma di tutti i numeri presenti nell'array
let array = [[1, 2], [2, 4]];
let somma = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        somma += array[i][j];
    }
}
console.log(somma);

// 2) Scrivere un programma che prenda in input un array bidimensionale di stringhe e restituisca una stringa contenente tutte le parole presenti nell'array separate da uno spazio.
let arr = [
    ['Lorem', 'ipsum', 'dolor'],
    ['sit', 'amet']
];
let parole = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        parole.push(arr[i][j]);
    }
}
console.log(parole);

// 3) Scrivere un programma  che prenda in input un array bidimensionale di numeri e restituisca un nuovo array contenente la somma di ogni riga dell'array originale.
// let num = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// let total = [];

// for (let i = 0; i < num.length; i++) {
//     let 
// }

// 4) Scrivi un programma che prenda in input un array bidimensionale di numeri e restituisca il numero più grande presente nell'array.
let numMax = 0;
let numbers = [
    [18, 20, 30],
    [40, 50, 60],
    [75, 80, 9]
];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        if (numbers[i][j] > numMax) {
            numMax = numbers[i][j];
        }
    }
}
console.log(numMax);