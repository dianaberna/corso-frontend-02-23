let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

let e = 0;

while (e <= array.length) {
  //console.log(array[e]);
  e = e + 1;
}
/* console.log(array[e]); */
///////////////////////////////////////
let decrescente = array.length;
for (let i = decrescente - 1; i >= 0; i--) {
  console.log(array[i]);
}

sommaVettoreNumeri = 0;
while (e < array.length) {
  sommaVettoreNumeri = sommaVettoreNumeri + array[e];
  e++;
}
//console.log("sommaVettoreNumeri =" + sommaVettoreNumeri);

let sommaPositivi = 0;
for (let e = 0; e < array.length; e++) {
  if (array[e] >= 0) {
    sommaPositivi = sommaPositivi + array[e];
  }
}
/* console.log("sommaPositivi =" + sommaPositivi);
 */

////////////////////////////////////////////////////

// ----- es. 4 ----- //
console.log("array", array);

let sommaDispari = 0;

for (let i = 0; i < array.length; i++) {
  array[i];
  if (array[i] % 2 !== 0) {
    //console.log("num. dispari", array[i]);
    sommaDispari = sommaDispari + array[i];
  }
}
console.log("sommaDispari =", sommaDispari);

////////////////////////////////////////////////////

// es. 5

let sommaIndicePari = 0;
for (let indice = 0; indice < array.length; indice++) {
  if (indice % 2 === 0) {
    array[indice];
    /* console.log(array[indice]); */
    sommaIndicePari = sommaIndicePari + array[indice];
  }
}
console.log("sommaIndicePari=", sommaIndicePari);

/////////////////////////////////////////
// es.6

let trovareNuomeriDue = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] == 2) {
    trovareNuomeriDue++;
  }
}
console.log("trovareNumeroDue=" + trovareNuomeriDue);
///////////////////////////////////
// es.7
let totaleNumeriPositivi = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    totaleNumeriPositivi++;
  }
}
console.log(totaleNumeriPositivi);

///////////
//es8
let numeroGrande = array[0];
for (let i = 0; i < array.length; i++) {
  if (numeroGrande <= array[i]) {
    numeroGrande = array[i];
  }
}
console.log(numeroGrande);

//es9
let numeroMinimo = array[0];
for (let i = 0; i < array.length; i++) {
  if (numeroMinimo > array[i]) {
    numeroMinimo = array[i];
  }
}
console.log(numeroMinimo);
//////////////////////////////////////
//es10
let arrayNuovo = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    arrayNuovo.push(array[i]);
  }
}
console.log(arrayNuovo);
//////////////////////////////////
//es11
let arrayNuovo2 = [];
for (let i = 0; i < array.length; i++) {
  arrayNuovo2.push(array[i] * 2);
}
console.log("nuovoarray = " + arrayNuovo2);
///////////////////////////////////
//es12
let arrayPiu = [];
for (let i = 0; i < array.length; i++) {
  arrayPiu.push(array[i]);
}
for (let i = 0; i < array.length; i++) {
  arrayPiu.push(array[i]);
}
console.log("risultato=" + arrayPiu);
let cont1 = 0;
let arrayTre = [];
for (let i = 0; i < array.length; i++) {
  arrayTre[i] = array[i];
  arrayTre[array.length + i] = array[i];
}
console.log(arrayTre);
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//es.13
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
array3 = [];
for (i = 0; i < array1.length; i++) {
  if (array2[i]) {
    array3[i] = array1[i] + array2[i];
  } else {
    array3[i] = array1[i];
  }
}
console.log(array3);
