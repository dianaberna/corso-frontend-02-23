console.log("--INIZIO ESERCIZI ARRAY NUMERI");

/*

array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

1) Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1 
2) Stampare la somma di tutti gli elementi dell’ array → 30
3) Stampare la somma dei soli elementi positivi → 35
4) Stampare la somma dei soli elementi dispari → 12
5) Stampare la somma dei soli elementi in indice/posizione pari  → 14
6) Stampare quante volte compare il numero 2 → 2
7) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
8) Stampare il numero massimo (senza usare funzioni matematiche) → 10
9) Stampare il numero minimo → -3
10) Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
11) Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]
12) Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
13) Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2 🙂

*/ 

// ES.1: CREO UN ARRAY E STAMPO TUTTI I NUMERI
let newArray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

// con i leggo la posizione dei numeri
// con newArrai[i] leggo gli elementi nella posizione

// 

console.log("-- QUESTO è L'ARRAY INTERO --");
console.log(newArray);
console.log("-- QUESTA è LA LUNGHEZZA DEL MIO ARRAY --");
console.log(newArray.length);// ci restituisce il numero degli array
console.log("-- STAMPO TUTTI I NUMERI DEL MIO ARRAY IN MODO MANUALE --");
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

//STAMPO TUTTO IL MIO ARREY CON I CICLI.

console.log("-- ES.1: STAMPO IL MIO ARRAY CON IL CICLO WHILE --");

console.log(newArray);

let i = 0;
while(i <= newArray.length -1) {
    console.log(newArray[i]);
    i++;
}

/*console.log("-- STAMPO IL MIO ARRAY CON IL CICLO FOR --");
for(let i=0; i <= newArray.length -1; i++){
    console.log(newArray[i]);
}*/

// ES.2: STAMPO LA SOMMA I NUMERI DELL'ARRAY 
console.log("-- SOMMO I NUMERI DEL MIO ARRAY MANUALMENTE --");

let sommanewArray = newArray[0] + newArray[1] + newArray[2] + newArray[3] + newArray[4] + newArray[5] + newArray[6] + newArray[7] + newArray[8] + newArray[9];
console.log(sommanewArray);

// STAMPO LA SOMMA DEI NUMERI CON IL CICLO WHILE -> 30
console.log("-- ES.2: SOMMO I NUMERI DEL MIO ARRAY CON IL CICLO WHILE --");

while(i < newArray.length){
    sommanewArray = sommanewArray + newArray[i];
    i++;
}

console.log(sommanewArray);

// ES.3: STAMPO LA SOMMA DEI POSITIVI DELL'ARRAY -> 35
console.log("-- ES.3: SOMMO I NUMERI POSITIVI DEL MIO ARRAY --");

let sommaPositiva = 0;
for(i=0; i < newArray.length; i++){
    if(newArray[i] > 0)
        sommaPositiva = sommaPositiva + newArray[i];
} 
console.log("LA SOMMA DEGLI ELEMENTI POSITIVI E' = " + sommaPositiva);


// ES.3.1: STAMPO LA CONTA DEI NUMERI POSITIVI 
console.log("-- CONTO I NUMERI POSITIVI DEL MIO ARRAY --");

i=0;
let variabileContatore = 0;
while(i < newArray.length){
    if(newArray[i] > 0){
        variabileContatore ++;
    }
    i++;
}
console.log(" NEL MIO ARRAY CI SONO " + variabileContatore + " NUMERI POSITIVI ");

//ES.4: STAMPO LA SOMMA DEI NUMERI DISPARI DEL MIO ARRAY -> 12
console.log("-- ES.4: SOMMO I NUMERI DISPARI DEL MIO ARRAY --");

i = 0;
let numDispari = 0;
while(i < newArray.length){
    if(newArray[i] % 2 !== 0 ){ // newArray[i] % 2 == 1 ||  newArray[i] % 2 == -1
        numDispari = numDispari + newArray[i];
    }
    i++;
}
console.log(" LA SOMMA DEI NUMERI DISPARI DEL MIO ARRAY E': " + numDispari);

// ES.4.1: STAMPO LA SOMMA DEI NUMERI NEGATIVI DELL'ARRAY
console.log("-- ES.4.1: SOMMO I NUMERI NEGATIVI DEL MIO ARRAY --");

let sommaNegativa = 0;
for(i=0; i < newArray.length; i++){
    if(newArray[i] < 0)
        sommaNegativa = sommaNegativa + newArray[i];
} 
console.log("LA SOMMA DEGLI ELEMENTI NEGATIVI E' = " + sommaNegativa);


// ES.5: STAMPO LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI -> 14
console.log("-- ES.5: STAMPO LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI --");

i = 0;
let sommaPari = 0;
while(i < newArray.length){
    if(i % 2 == 0 ){ // newArray[i] % 2 == 0 
        sommaPari = sommaPari + newArray[i] ;
    }
    i++; //scorro di uno tutte le posizioni dell'array
}
console.log(" LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI: " + sommaPari);


console.log("-- ES.5.1: STAMPO LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI --");

i = 0;
let sommaPari1 = 0;
while(i < newArray.length){
    
    sommaPari1 = sommaPari1 + newArray[i] ;
    
    i= i + 2; //scorro di due le posizioni dell'array
}
console.log(" 2. LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI: " + sommaPari1);


//ES.6: STAMPO LE VOLTE CHE COMPARE IL NUMERO 2
console.log("-- ES.6: STAMPO LE VOLTE CHE COMPARE IL NUMERO 2 --");

i = 0;
let numerodue = 0;
while( i < newArray.length){
    if(newArray[i] == 2){
        numerodue++;
    }
    i++;
} 
console.log(" IL NUMERO DUE COMPARE " + numerodue + " VOLTE ");

/* CONTO QUANTI 2 E -2 INSIEME CI SONO DENTRO L'ARRAY
i = 0;
let numerodue = 0;
while( i < newArray.length){
    if(newArray[i] == 2 || newArray[i] == -2 ){
        numerodue++;
    }
    i+
} 

//CONTO QUANTI -2 E 2 SEPARATI CI SONO DENTRO L'ARRAY
i = 0;
let numerodue = 0;
let numeromenodue = 0;
while( i < newArray.length){
    if(newArray[i] == 2){
        numerodue++;
    }
    if(newArray[i] == -2 ){
        numeromenodue++;
    }
    i++;
} 
*/ 

//ES.7: STAMPARE QUANTI NUMERI POSITIVI, COMPRESO LO 0, CI SONO NELL'ARRAY -> 8
console.log("-- ES.7: STAMPO QUANTI NUMERI POSITIVI CI SONO NELL'ARRAY --");

i = 0;
let contoPari = 0;
while(i < newArray.length){
    if(newArray[i] >= 0){
        contoPari++;
    }
    i++;

}
console.log("I NUMERI POSITIVI SONO " + contoPari);

//ES.8: STAMPARE IL NUMERO MASSIMO (SENZA USARE FUNZIONI MATEMATICHE) -> 10
console.log("-- ES.8: STAMPO IL NUMERO MAX (SENZA USARE FUNZIONI MATEMATICHE) --");

i = 0;
let numeroMassimo = 0;
while(i < newArray.length){
    if(numeroMassimo > newArray[i]){ 
    } else {
        numeroMassimo = newArray[i]
    }
    i++;
}
console.log("IL NUMERO MASSIMO DENTRO L'ARRAY E': " + numeroMassimo);


//ES.9: STAMPA IL NUMERO MINIMO -> -3 
console.log("-- ES.9: STAMPO IL NUMERO MINIMO --");

i = 0;
let numeroMinimo = 0;
while(i < newArray.length){
    if(numeroMinimo < newArray[i]){
    } else {
        numeroMinimo = newArray[i]
    }
    i++;
}
console.log("IL NUMERO MINIMO DENTRO L'ARRAY E': " + numeroMinimo);

// ES.10: INSERISCI IN UN NUOVO ARRAY SOLO GLI ELEMENTI NEGATIVI -> [-2, -3]
console.log("-- ES.10: STAMPO IL NUOVO ARRAY CON GLI ELEMENTI NEGATIVI --");

i = 0;
let arrayNegativo = [];
while(i < newArray.length){
    if(newArray[i] < 0){
        arrayNegativo.push(newArray[i]);  
    }
    i++;
}
console.log("IL NUOVO ARRAY CON GLI ELEMENTI NEGATIVI: " + arrayNegativo);

// ES.11: CREA E STAMPA UN NUOVO ARRAY DOVE OGNI ELEMENTO è UGUALE AL DOPPIO DI QUELLO DATO -> 🤯 [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]
console.log("-- ES.11: STAMPO IL NUOVO ARRAY CON GLI ELEMENTI UGUALI AL DOPPIO DI QUELLO PRINCIPALE --");

i = 0;
let arrayDop = [];
while(i < newArray.length){
    arrayDop.push(newArray[i] * 2);
    i++;
}
console.log("IL NUOVO ARRAY CON GLI ELEMENTI IL DOPPIO DEL PRINCIPALE: " + arrayDop);

// ES.12: CREA E STAMPA UN NUOVO ARRAY IN CUI INSERISCO DUE VOLTE L'ARRAY ORIGINALE -> 🤯 🤯 [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log("-- ES.12: CREO E STAMPO UN ARRAY IN CUI INSERISCO DUE VOLTE L'ARRAY ORIGINALE --");
i = 0;
let dueArray = [];
while(i < newArray.length){
    dueArray.push(newArray[i]);
    i++;
}
i = 0;
while(i < newArray.length){
    dueArray.push(dueArray[i]);
    i++;
}
console.log("IL NUOVO ARRAY CON GLI ELEMENTI SCRITTI DUE VOLTE CON PUSH: " + dueArray);

// SENZA PUSH
i = 0;
let dueArray2 = [];
let conta = 0;
while(i < newArray.length){
    dueArray2[i] = newArray[i];
    dueArray2[newArray.length + i] = newArray[i];

    i++;
}
console.log("IL NUOVO ARRAY CON GLI ELEMENTI SCRITTI DUE VOLTE SENZA PUSH: " + dueArray2);

// ES.13: STAMPA AL CONTRARIO GLI ELEMENTI DELL'ARRAY -> 1, 5, 2, 0, -3, -2, 10, 9, 6, 2 🙂

console.log("-- ES.13: STAMPO IL MIO ARRAY AL CONTRARIO --");

i = newArray.length -1;
while(i >= 0) {
    console.log(newArray[i]);
    i--;
}


//ES.14: CREA UN ARRAY3 CON LA SOMMA DEGLI ELEMENTI DELL'ARREY1 E ARREY2 -> [5, 4, 4, 7, 4]

console.log("-- ES.14: CREO UN ARRAY 3 CON LA SOMMA DI ARRAY1 E ARRAY2 --")

let array1 = [1, 2, 2, 3]
let array2 = [4, 2, 2, 4, 5]
let array3 = [];

i = 0; //DINAMICA
while(i < array1.length || i < array2.length){
    array3[i] = 0;
    if(array2[i]){ 
        array3[i] = array3[i] + array2[i];
    }

    if(array1[i]){
        array3[i] = array3[i] + array1[i];
    }
i++;
}
console.log(array3);

i = 0; //DINAMICA
while(i < array1.length || i < array2.length){

    if(array1[i] && array2[i]){ 
        array3[i] = array1[i] + array2[i];
    } else {
        if(!array1[i]){
            array3[i] = array2[i];
        }else{ 
            array3[i] = array1[i];
        }
      } 
i++;
}
console.log(array3)

//SECONDA VERSIONE DELL'ESERCIZIO 14 (STATICA)
/*console.log("ES.14.1 - SECONDA VERSIONE")
while(i < array1.length){
    array3[i] = array1[i] + array2[i];
    if (array2[i] == "undefined"){ //se qualsiasi indice dell'array2 non è definito 
        array3[i] = array1[i]; //prendi l'indice dell'array1

    }
    i++;
}
console.log(array3);

//TERZA VERSIONE DELL'ESERCIZIO 14 (STATICA)
console.log("ES.14.2 - TERZA VERSIONE")
while(i < array1.length){
    array3[i] = array1[i] + array2[i];
    if(typeof array2[i] == "undefined"){
        array3[i] = array1[i];

    }
    i++;
}
console.log(array3);*/

//ES.15: CREARE UN ARRAY3 CON GLI ELEMENTI DISPARI DI ARRAY1 E GLI ELEMENTI PARI DI ARRAY2 -> 
//[1, 3, 4, 2, 2, 4] & [1, 4, 2, 2, 3, 4]

console.log("ES.15 -- CREO UN ARRAY3 CON GLI ELEMENTI DISPARI DI ARRAY1 E GLI ELEMENTI PARI DI ARRAY2 --")

array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]
array3 = [];
i = 0;

while(i < array1.length){

    if(array1[i] % 2 !== 0){
        array3.push(array1[i])
    }
i++;    
}
i = 0;
while(i < array2.length){

    if(array2[i] % 2 == 0){
        array3.push(array2[i])
    }
i++;
}
console.log(array3);

array3 = [];
i=0;
while(i < array1.length && i < array2.length){
    if(array1[i] % 2 !== 0){
        array3.push (array1[i]);
    }
    if (array2[i] % 2 == 0){
        array3.push (array2[i]);
    }
i++;
}
console.log(array3);



//ES.16: AGGIORNARE L'ARRAY2 CON GLI ELEMENTI CHE SARANNO UGUALI AL SUO VALORE / LA POSIZIONE DELL'ARRAY1 -> ARRAY2[I] = ARRAY2[I]/ARRAY1.LENGTH
console.log("-- ES.16: ARRAY2 UGUALE AL VALORE DEI SUOI ELEMNTI / LE POSIZIONI ARRAY1 --")

array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];

i = 0;
while(i < array2.length){
    array2[i] = array2[i] / array1[array1.length-1-i];
    //elemento 0 dell'array2 / la lunghezza dell'array1 - 1 - i (l'elemento presente nella prima posizione della lunghezza al contrario)
    /* quindi array2 = 4 / 4 = 1*/
i++;
}
console.log(array2);


//ES.17: VERIFICARE SE L'ARRAY1 E L'ARRAY2 DATI SONO PALINDROMI COME AD ESEMPIO "ANNA", "RADAR," "EMME", "1221", "4224"

array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]
i = 0;
/*while(i < array1.length){

    if(array1[i] == array1.length[i]){
        
        console.log("sono palindromo" + array1);

    } else if (array2[i] == array2.length[i]){
        
        console.log("sono palindromo: " + array2)
        
    } else{
        
        console.log("non sono palindromo")
    } 
i++;
}*/


// ES.16 prima versione per vedere palindromo con variabile booleana
let arrayPalindromo = true;
while (i < array1.length / 2){
    if(array1[i] !== array1[array1.length - 1 - i]){
        arrayPalindromo = false;
        break;
    } else {
        arrayPalindromo = true;
    }
i++;
}
console.log(arrayPalindromo);

while (i < array2.length / 2){
    if(array2[i] !== array2[array2.length - 1 - i]){
        arrayPalindromo = false;
        break;
    } else {
        arrayPalindromo = true;
    }
i++;
}
console.log(arrayPalindromo);

// seconda versione per vedere palindromo con una variabile contatore
let countZero = 0;
array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]

for(i = 0; i < array1.length / 2; i++){
    if(array1[i] !== array1[array1.length - 1 - i]){
        countZero ++;
    }
}

console.log(countZero);

// seconda versione per vedere palindromo con una variabile contatore con un array palindromo con lunghezza pari (4 2 2 4)
array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]

for(i = 0; i < array2.length / 2; i++){
    if(array2[i] !== array2[array2.length - 1 - i]){
        countZero ++;
    }
}
if(countZero == array1.lenght / 2){
    console.log("Palindromo");
} else {
    console.log(" Non è Palindromo");
}

//  seconda versione per vedere palindromo con una variabile contatore con un array palindromo con lunghezza dispari (4 2 2 2 4)
array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 2, 4]

for(i = 0; i < array2.length / 2; i++){
    if(array2[i] !== array2[array2.length - 1 - i]){
        countZero ++;
    }
}
if(countZero == array2.length / 2 || countZero == Math.ceil(array2.length/2)){
    console.log("Palindromo");
} else {
    console.log(" Non è Palindromo");
}

array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]

for(i = 0; i < array2.length / 2; i++){
    if(array2[i] !== array2[array2.length - 1 - i]){
        countZero ++;
    }
}
if(countZero == array2.length / 2 || countZero == Math.floor(array2.length/2)){
    console.log("Palindromo");
} else {
    console.log(" Non è Palindromo");
}

