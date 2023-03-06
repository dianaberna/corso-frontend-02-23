console.log("--INIZIO ESERCIZI");

// ES.1: CREO UN ARRAY E STAMPO TUTTI I NUMERI
let newArray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

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

console.log("-- STAMPO IL MIO ARRAY CON IL CICLO WHILE --");

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

// STAMPO LA SOMMA DEI NUMERI CON IL CICLO WHILE
console.log("-- SOMMO I NUMERI DEL MIO ARRAY CON IL CICLO WHILE --");
while(i < newArray.length){
    sommanewArray = sommanewArray + newArray[i];
    i++;
}

console.log(sommanewArray);

// ES.3: STAMPO LA SOMMA DEI NUMERI DISPARI O POSITIVI DELL'ARRAY
console.log("-- SOMMO I NUMERI DISPARI O POSITIVI DEL MIO ARRAY --");
let sommaPositiva = 0;
for(i=0; i < newArray.length; i++){
    if(newArray[i] > 0)
        sommaPositiva = sommaPositiva + newArray[i];
} 
console.log(sommaPositiva);

// ES.4: STAMPO LA SOMMA DEI NUMERI DISPARI O NEGATIVI DELL'ARRAY
console.log("-- SOMMO I NUMERI DISPARI O NEGATIVI DEL MIO ARRAY --");
let sommaNegativa = 0;
for(i=0; i < newArray.length; i++){
    if(newArray[i] <= 0)
        sommaNegativa = sommaNegativa + newArray[i];
} 
console.log(sommaNegativa);

//ES.5: STAMPO LE VOLTE CHE COMPARE IL NUMERO 2
console.log("-- STAMPO LE VOLTE CHE COMPARE IL NUMERO 2 --");
let numeroDue = 0;
for(i=0; i < newArray.length; i++){
    if (newArray[i] = 2) {
        console.log(numeroDue);
    }
}
