let arrayNum = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

// 1 esercizio
for (let i = 0; i < arrayNum.length; i++) {
  console.log(arrayNum[i]);
}

// // 2 esercizio
let sommaArr = 0;
for (let i = 0; i < arrayNum.length; i++) {
  sommaArr = sommaArr + arrayNum[i];
}

console.log(sommaArr);

// //2 eserczio con while
// i = 0;
// let arraySum = 0;
// while (i <= arrayNum.length - 1) {
//   arrayNum = arrayNum + arraySum[i];
// }

// console.log(sommaArr);
// console.log("Frase di prova");

//3.1 esercizio
// Stampare la somma dei soli elementi positivi -35-
let sommaPositivi = 0;
for (let i = 0; i < arrayNum.length; i++)
  if (arrayNum[i] > 0) {
    sommaPositivi = sommaPositivi + arrayNum[i];
  }
console.log(sommaPositivi);

//4 esercizio
// Stampare la somma dei soli elementi dispari -12-
let sommaDispari = 0;
for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] % 2 != 0) {
    //in questo caso non abbiamo pututo mettere ==1 perchè c'era un numero negativo
    //arrayNum[i] % 2 == 1 ||  arrayNum[i] % 2 == -1
    sommaDispari = sommaDispari + arrayNum[i];
  }
}
console.log(sommaDispari);

//5 esercizio
//Stampare la somma dei soli elementi in indice/posizione pari -14-
let sommaIndiciPari = 0;
for (let i = 0; i < arrayNum.length; i += 2) {
  sommaIndiciPari += arrayNum[i];
}

console.log(sommaIndiciPari);
//oppure:
// let sommaIndiciPari2 = 0;
sommaIndiciPari = 0;
for (let i = 0; i < arrayNum.length; i++) {
  if (i % 2 == 0) {
    sommaIndiciPari = sommaIndiciPari + arrayNum[i];
  }
}

console.log(sommaIndiciPari);

//6 esercizio
//Stampare quante volte compare il numero 2 → 2
let count = 0;
for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] === 2) {
    count += 1;
  }
}
console.log(count);

//7 esercizio
// Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array - 8 -
let countNumPositivi = 0;
for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] >= 0) {
    countNumPositivi += 1;
  }
}
console.log(countNumPositivi);

//8 esercizio
// Stampare il numero massimo (senza usare funzioni matematiche) → 10
let contenitoreNum = arrayNum[0];
for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] >= contenitoreNum) {
    contenitoreNum = arrayNum[i];
  }
}

console.log(contenitoreNum);

//9 esercizio
// Stampare il numero minimo → -3
// let arrayNum = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
let minNum = arrayNum[0];
for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] <= minNum) {
    minNum = arrayNum[i];
  }
}

console.log(minNum);

//10 esercizio
// inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
// let newArray = [];
// for (let i = 0; i < arrayNum.length; i++) {
//   if (arrayNum[i] < 0) {
//     newArray += arrayNum[i];
//   }
// }

let newArray = [];
for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] < 0) {
    newArray.push(arrayNum[i]);
  }
}

console.log(newArray);

//11 esercizio
//Creare (e stampare) un nuovo array dove ogni elemento del nuovo è
//uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]
newArray = [];
for (let i = 0; i < arrayNum.length; i++) {
  newArray.push(arrayNum[i] * 2);
}
console.log(newArray);

//12 esercizio
// Creare (e stampare) un nuovo array in cui inserisco due volte
//  (una di seguito l’altra) l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
newArray = [];
for (let i = 0; i < arrayNum.length; i++) {
  newArray.push(arrayNum[i]);
}
for (let i = 0; i < arrayNum.length; i++) {
  newArray.push(arrayNum[i]);
}

console.log(newArray);

// METODO SENZA IL PUSH
let count1 = 0;
let newArray2 = [];
for (let i = 0; i < arrayNum.length; i++) {
  newArray2[i] = arrayNum[i]; //primo array - posizione 0
  newArray2[arrayNum.length + i] = arrayNum[i]; //aggiunta secondo array - posizione -1
}
console.log(newArray2);

//ALTRO METODO FAR CONTARE LE VOLTE
newArray2 = [];
for (let volte = 0; volte < 2; volte++) {
  for (let i = 0; i < arrayNum.length; i++) {
    newArray2.push(arrayNum[i]);
  }
}
console.log(newArray2);
//13 esercizio
// Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2 🙂
for (let i = arrayNum.length - 1; i >= 0; i--) {
  console.log(arrayNum[i]);
}

//14 esercizio
// Creare un array3 con la somma degli elementi dell’array1 e dell’array2 → [5, 4, 4, 7, 4]
let array1 = [1, 2, 2, 3, 4];
let array2 = [4, 2, 2, 4];
let array3 = [];

for (let i = 0; i < array1.length || i < array2.length; i++) {
  if (array1[i] && array2[i]) {
    array3.push(array1[i] + array2[i]);
  } else if (!array1[i]) {
    array3.push(array2[i]);
  } else {
    array3.push(array1[i]);
  }
}
console.log(array3);
//14 esercizio
// SECONDO MODO CON L'AGGIUNTA DELLO 0 NELL'ARRAY3
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
array3 = [];
for (let i = 0; i < array1.length || i < array2.length; i++) {
  array3[i] = 0;
  if (array1[i]) {
    array3[i] += array1[i];
  }
  if (array2[i]) {
    array3[i] += array2[i];
  }
}
console.log(array3);
//15 esercizio
//Creare un array3 con gli elementi (non la posizione) dispari di array1 e
// gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
array3 = [];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] % 2 == 1) {
    array3.push(array1[i]);
  }
}

for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 == 0) {
    array3.push(array2[i]);
  }
}

console.log(array3);

//16 esercizio
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
array3 = [];
for (let i = 0; i < array2.length; i++) {
  array2[i] = array2[i] / [array1.length - 1 - i];
}

console.log(array2);

//17 esercizio
//Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
let arrayPalindromo = true;
for (let i = 0; i < array1.length / 2; i++) {
  if (array1[i] !== array1[array1.length - 1 - i]) {
    arrayPalindromo = false;
    break; // ignora che l'iterazione non è completata, però per il nostro controllo non serve continuare e usciamo
  } else {
    arrayPalindromo = true;
  }
}

console.log(arrayPalindromo);

//17.2
let countZero = 0;
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 2, 4];

for (let i = 0; i < array2.length / 2; i++) {
  if (array2[i] == array2[array2.length - 1 - i]) {
    countZero++;
  }
}
if (
  countZero == array2.length / 2 ||
  countZero == Math.ceil(array2.length / 2) // Math.ceil = parte intera superiore es. 2.7 = 3 / invece con Math.floor 2.7 = 2
) {
  console.log("Palindromo");
} else {
  console.log("Non è palindromo");
}
