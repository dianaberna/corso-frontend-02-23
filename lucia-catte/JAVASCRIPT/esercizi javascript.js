console.log("--INIZIO ESERCIZI");

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

// STAMPO LA SOMMA DEI NUMERI CON IL CICLO WHILE -> 30
console.log("-- SOMMO I NUMERI DEL MIO ARRAY CON IL CICLO WHILE --");

while(i < newArray.length){
    sommanewArray = sommanewArray + newArray[i];
    i++;
}

console.log(sommanewArray);

// ES.3: STAMPO LA SOMMA DEI POSITIVI DELL'ARRAY -> 35
console.log("-- SOMMO I NUMERI POSITIVI DEL MIO ARRAY --");

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
console.log("-- SOMMO I NUMERI DISPARI DEL MIO ARRAY --");

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
console.log("-- SOMMO I NUMERI NEGATIVI DEL MIO ARRAY --");

let sommaNegativa = 0;
for(i=0; i < newArray.length; i++){
    if(newArray[i] < 0)
        sommaNegativa = sommaNegativa + newArray[i];
} 
console.log("LA SOMMA DEGLI ELEMENTI NEGATIVI E' = " + sommaNegativa);


// ES.5: STAMPO LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI -> 14
console.log("-- STAMPO LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI --");

i = 0;
let sommaPari = 0;
while(i < newArray.length){
    if(i % 2 == 0 ){ // newArray[i] % 2 == 0 
        sommaPari = sommaPari + newArray[i] ;
    }
    i++; //scorro di uno tutte le posizioni dell'array
}
console.log(" LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI: " + sommaPari);


console.log("-- 2. STAMPO LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI --");

i = 0;
let sommaPari1 = 0;
while(i < newArray.length){
    
    sommaPari1 = sommaPari1 + newArray[i] ;
    
    i= i + 2; //scorro di due le posizioni dell'array
}
console.log(" 2. LA SOMMA DEI NUMERI PRESENTI NEGLI INDICI PARI: " + sommaPari1);


//ES.6: STAMPO LE VOLTE CHE COMPARE IL NUMERO 2
console.log("-- STAMPO LE VOLTE CHE COMPARE IL NUMERO 2 --");

i = 0;
let numerodue = 0;
while( i < newArray.length){
    if(newArray[i] == 2){
        numerodue++;
    }
    i++;
} 
console.log(" IL NUMERO DUE COMPARE " + numerodue + " VOLTE ");

//ES.7: STAMPARE QUANTI NUMERI POSITIVI, COMPRESO LO 0, CI SONO NELL'ARRAY -> 8
console.log("-- STAMPO QUANTI NUMERI POSITIVI CI SONO NELL'ARRAY --");

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
console.log("-- STAMPO IL NUMERO MAX (SENZA USARE FUNZIONI MATEMATICHE) --");

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
console.log("-- STAMPO IL NUMERO MINIMO --");

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
console.log("-- STAMPO IL NUOVO ARRAY CON GLI ELEMENTI NEGATIVI --");

i = 0;
let arrayNegativo = [0];

while(i <newArray.length){
    if(newArray[i] < 0){
        arrayNegativo = newArray[i];
        arrayNegativo++;
    }
    i++;
}
console.log("IL NUOVO ARRAY CON GLI ELEMENTI NEGATIVI: " + arrayNegativo);
