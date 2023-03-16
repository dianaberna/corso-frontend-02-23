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
/* array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
array3 = [];
for (i = 0; i < array1.length; i++) {
  if (array2[i]) {
    array3[i] = array1[i] + array2[i];
  } else {
    array3[i] = array1[i];
  }
} */

array4 = [1, 2, 2, 3];
array5 = [4, 2, 2, 4, 4];
array6 = [];
for (i = 0; i < array5.length || i < array4.length; i++) {
  if (array4[i] && array5[i]) {
    array6[i] = array4[i] + array5[i];
  } else if (!array5[i]) {
    array6[i] = array4[i];
  } else {
    array6[i] = array5[i];
  }
}
console.log("esercizio 14 " + array6);
///////asercizio 14.1
/* array4 = [1, 2, 2, 3];
array5 = [4, 2, 2, 4, 4];
array6 = [];
for (i = 0; i < array5.length || i < array4.length; i++){
  array6[i]=0
  if(array4[i]){
    array6[i]= array6[i] + array1[i];
  }
  if(array5[i]){
    array6[i]=array6[i]+array5[i]
  }
} 
console.log("secondo metodo "+ array6)*/

//////////////////////////////////////////////
////es 15
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
arraySomme = [];

for (i = 0; i < array1.length || i < array2.length; i++) {
  if (array1[i] % 2 !== 0) {
    arraySomme.push(array1[i]);
  }
  if (array2[i] % 2 === 0) {
    arraySomme.push(array2[i]);
  }
}

console.log(arraySomme);
//////////////////////////////////
//es16
arrayA = [1, 2, 2, 3, 4];
arrayB = [4, 2, 2, 4];
for (i = 0; i < arrayA.length || i < arrayB.length; i++) {
  if (arrayA[i] && arrayB[i]) {
    arrayB[i] = arrayB[i] / arrayA[arrayA.length - 1 - i];
  }
}
/* console.log(arrayB); */

/////////////////////////////////////////////////
///////es17
/* arrayNonP = [1, 2, 2, 3, 4];
arrayP = [4, 2, 2, 4];
let palindromo;
for (i = 0; i < arrayNonP.length; i++) {
  if (arrayP[i] !== arrayP[arrayP.length - i - 1]) {
    palindromo = false;
  } else {
    palindromo = true;
  }
}
console.log(palindromo + arrayP); */

arrayNonP = [1, 2, 2, 3, 4];
arrayP = [4, 2, 2, 4];
let palindromo;
for (i = 0; i < arrayNonP.length; i++) {
  if (arrayP[i] !== arrayP[arrayP.length - i - 1]) {
    palindromo = false;
  } else {
    palindromo = true;
  }
  console.log(palindromo);
  if (arrayNonP[i] !== arrayNonP[arrayNonP.length - i - 1]) {
    palindromo = false;
  } else {
    palindromo = true;
  }
}
console.log(palindromo);
//17.2
let contatore = 0;
arrayNonP = [1, 2, 2, 3, 4];
arrayP = [4, 2, 2, 4];
for (let i = 0; i < arrayP.length / 2; i++) {
  if (arrayP[i] == arrayP[arrayP.length - 1 - i]) {
    contatore++;
  }
}
if (
  contatore == arrayP.length / 2 ||
  contatore == Math.ceil(arrayP.length / 2)
) {
  console.log("palindromo");
} else {
  console.log("non è palindromo");
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////es1
let stringa = "precipitevolissimevolmente";
let parola = "";
for (let i = 0; i < stringa.length; i++) {
  if (stringa[i] == "e") {
    parola++;
  }
}
console.log(parola);

///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
///es2
let stringa1 = "anna";
let palind = "";
for (let i = 0; i < stringa1.length / 2; i++) {
  if (stringa1[i] !== stringa1[stringa1.length - i - 1]) {
    palind = false;
  } else {
    palind = true;
  }
}
console.log(palind);

/////////////////////////////

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
///es3
let stringa2 = "piroscafo";
let parola1 = "scafo";
controllo = false;
let p = 0;
for (let i = 0; i < stringa2.length; i++) {
  if (stringa2[i] == parola1[0]) {
    for (p = 1; p < parola1.length; p++) {
      if (stringa2[i + p] == parola1[p]) {
        controllo = true;
      } else {
        controllo = false;
      }
    }
  }
}
if (controllo) {
  console.log("contenuto");
} else {
  console.log("non contenuto");
}

////////////////////////////////////////////////
//es3.1
parola2 = "ale";
parola3 = "alessia";
console.log(parola2);
console.log(parola3);
console.log(parola3.includes(parola2));
if (parola3.includes(parola2)) {
  console.log("inclusa");
} else {
  console.log("non inclusa");
}
//////////////////////////////////////////////////
///es.3.2
parola2 = "alec";
parola3 = "alessia";

if (parola3.indexOf(parola2) !== -1) {
  console.log("inclusa");
} else {
  console.log("non inclusa");
}
//////////////////////////////////////////////////////////////
///es.4
let stringa3 = "barca";
let stringaVuota = "";
let cont = 0;
for (let i = stringa3.length - 1; i >= 0; i--) {
  stringaVuota = stringaVuota + stringa3[i];
}
console.log(stringaVuota);

/////////////////////////////////////
///es.5
let stringaP = [];
stringaP.slice(0, 0, "ciao");
stringaP.slice(1, 0, "mondo");

console.log("ciao " + "" + "mondo");

/////////////////////////////////////////////
/// es 7
let stringa4 = "giorno";
let stringaVocali = "";
for (i = 0; i < stringa4.length; i++) {
  let lettera = stringa4[i];
  if (
    lettera === "a" ||
    lettera === "e" ||
    lettera === "i" ||
    lettera === "o" ||
    lettera === "u"
  ) {
    stringaVocali += stringa4[i];
  }
}
console.log(stringaVocali);

///////////////////////////////////////////////
/// es8
let primaStringa = "rocambolesco";
let secondaStringa = "pazzesco";
let terzaStringa = "";
for (i = 0; i < primaStringa.length || i < secondaStringa.length; i++) {
  if (terzaStringa.indexOf(primaStringa[i]) === -1) {
    if (secondaStringa.indexOf(primaStringa[i]) !== -1) {
      terzaStringa += primaStringa[i];
    }
  }
}
console.log(terzaStringa);
//////////////////////////////////////////////////////////////////////////
///es9
let lettereStringhe = ["a", "ab", "abc"];
