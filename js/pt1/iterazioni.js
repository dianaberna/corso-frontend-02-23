let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1 ]

// 1) Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1 
let i = 0;
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 2) Stampare la somma di tutti gli elementi dell’ array → 30
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum)

// 3) Stampare la somma dei soli elementi positivi → 35
let positivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        positivi += array[i];
    };
}
console.log(positivi);

// 4) Stampare la somma dei soli elementi dispari → 12
let dispari = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        dispari += array[i];
    }
}
console.log(dispari)

// 5) Stampare la somma dei soli elementi in indice/posizione pari  → 14
let posizionePari = 0;
for (let i = 0; i < array.length; i += 2) {
    posizionePari += array[i];
}
console.log(posizionePari);

// 6) Stampare quante volte compare il numero 2 → 2
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 2) {
        count++
    }
}
console.log(count);

// 7) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
let countPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        countPositivi++;
    }
}
console.log(countPositivi);

// 8) Stampare il numero massimo (senza usare funzioni matematiche) → 10
let max = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);

// 9) Stampare il numero minimo → -3
let min = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log(min);

// 10) Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        newArray.push(array[i]);
    }
}
console.log(newArray);

// 11) Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → arrayNuovo=[4, 12, 18, 20, -4, -6, 0, 4, 10, 2] 
let arrayNew = [4, 12, 18, 20, -4, -6, 0, 4, 10, 2];
let arr = [];

for (let i = 0; i < arrayNew.length; i++) {
    let duplicato = arrayNew[i] * 2;
    arr.push(duplicato);
}
console.log(arr);

// 12) Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
const originalArray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
const newOriginalArray = [...originalArray, ...originalArray];
console.log(newOriginalArray);

// 13) Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2
const num = [1, 5, 2, 0, -3, -2, 10, 9, 6, 2];

for (let i = num.length - 1; i >= 0; i--) {
  console.log(num[i]);
}

// 14.1 Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
let array1_a = [ 1, 2, 2, 3, 4] 
let array2_a = [4, 2, 2, 4]   
let array3_a = []

for (let i = 0; i < array1_a.length || i < array2_a.length; i++) {
    if (array1_a[i] && array2_a[i]) {
        array3_a.push(array1_a[i] + array2_a);
    } 
    
    else {
        if (!array2_a[i]) {
            array3_a.push(array1_a[i]);
        } else {
            array3_a.push(array2_a[i]);
        }
    }
}
console.log(array3_a);

// 14.2 Metodo senza l'uso del 'push'
let array1_b =  [1, 2, 2, 3, 4]   
let array2_b = [4, 2, 2, 4]
let array3_b = [];

i = 0;
for (i = 0; i < array1_b.length || i < array2_b.length; i++) {
    array3_b[i] = 0;
    if (array1_b[i]){
        array3_b[i] = array3_b[i] + array1_b[i];
    }
    if (array2_b[i]) {
        array3_b[i] = array3_b[i] + array2_b[i];
    }
}
console.log(array3_b);

// let array1_a = [ 1, 2, 2, 3, 4] 
// let array2_a = [4, 2, 2, 4]   
// let array3_a = []

// for (i = 0; i < array1_a.length || i < array2_a.length; i++) {
//     if (array1_a[i] && array2_a[i]) {
//         array3_a.push(array1_a[i] + array2_a[i])
//     } else if (!array2_a[i]) {
//         array3_a.push(array1_a[i])
//     } else {
//         array3_a.push(array2_a[i])
//     }
// }
console.log(array3_b);

// 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
const versione1 = [1, 3, 4, 2, 2, 4];
const versione2 = [1, 4, 2, 2, 3, 4];
const versione3 = [];

for (let i = 0; i < versione1.length; i++) {
    if (versione1[i] % 2 !== 0) {
        versione3.push(versione1[i]);
    }
    if (versione2[i] % 2 === 0) {
        versione3.push(versione2[i])
    }
}
console.log(versione3);

// 16) Aggiornare l’array2 con elemento uguale il suo valore diviso il valore nella posizione( lunghezza-1-posizione) dell’array1
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [4, 2, 2, 4];

i = 0;
while (i < arr2.length) {
    arr2[i] = arr2[i] / arr1[arr1.length-1-i];
    i++;
}
console.log(arr2);

// 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”