let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

let e = 0;

while (e <= array.length) {
  //console.log(array[e]);
  e = e + 1;
}
e = 0;
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
    totaleNumeriPositivi += 1;
  }
}
/* console.log(totaleNumeriPari); */

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
