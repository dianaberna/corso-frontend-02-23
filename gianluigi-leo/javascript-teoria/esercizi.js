

let n_array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
let lenghtArray = n_array.length;
let contPos;

// Numeri positivi
console.log("----- Positivi -----");
contPos = 0;
for(let i = 0; i < lenghtArray; i++){
    if(n_array[i] > 0){
        contPos++;
    }
}
console.log(contPos);

// Numeri negativi
contPos = 0;
console.log("----- Negativi -----");
for(let i = 0; i < lenghtArray; i++){
    if(n_array[i] < 0){
        contPos++;
    }
}
console.log(contPos);




//Pari
console.log("----- Pari -----");
let somma = 0;
for(let i = 0; i < lenghtArray; i++){
    if( i % 2 == 0 ) 
        somma = somma + n_array[i];
          
}
console.log(somma);




// Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
console.log("----- Inserire in un nuovo array solo gli elementi negativi  -----");
let newArray = [];
for(let i = 0; i < lenghtArray; i++){
    if(n_array[i] < 0){
        newArray.push(n_array[i]);
    }
}
//Stampa i valori
for(let i = 0; i < newArray.length; i++)
    console.log(newArray[i])






// Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]
console.log("----- Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato  -----");
let arrayDoppio = [];
for(let i = 0; i < lenghtArray; i++){
    arrayDoppio.push(n_array[i] * 2);
    console.log(arrayDoppio[i])
}

    



// Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log("----- Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato -----");
let nuovoArray2 = [];
let n = 2;
for(let a = 0; a < n; a++) {
    for(let i= 0; i < lenghtArray; i++)
        nuovoArray2.push(n_array[i]);
} 
console.log(nuovoArray2); 

   
//contrario
console.log("----- Contrario -----");
for(let i = lenghtArray - 1; i >= 0; i--)
    console.log(n_array[i]);





//---------- NUOVI ESERCIZI -----------------
let es_array1 = [1, 2, 2, 3, 4];
let es_array2 = [4, 2, 2, 4];


// 14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
console.log("-----14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 -----");

let es_array3 = [];
for(let i = 0; i < es_array1.length; i++){
    if(es_array2[i]){
        es_array3.push(es_array1[i] + es_array2[i]);
    }
    else {
        es_array3.push(es_array1[i]);
    }
    
}
console.log(es_array3);



// 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
console.log("-----15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 -----");

let new_arrey3 = [];

for(let i = 0; i < es_array1.length; i++){
    if(es_array1[i] % 2 == 1){
        new_arrey3.push(es_array1[i]);
    }
    if(es_array2[i] % 2 == 0) {
        new_arrey3.push(es_array2[i]);
    }
}
console.log(new_arrey3);





// // 16
// console.log("------- 16) --------------");
// for(let i = 0; i < es_array2.length; i++){
//     es_array2[i] = es_array2[i] / es_array1[es_array1.length -1 -i];
// }
// console.log(es_array2);


// 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
console.log("-------- 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224” -------------");

let flag = true;

for(let i = 0; i < es_array1.length / 2; i++){
    if(es_array1[i] !== es_array1[es_array1.length -1 - i]) {
        flag = false;
    }
}

if(flag == true){
    console.log("Array1 è palindromo");
}
else{
    console.log("Array1 non è palindromo");
}








// let es_array1 = [1, 2, 2, 3, 4];
// let es_array2 = [4, 2, 2, 4];



//Nuovi
console.log("-------- 14.3) -------------");
let new_array = 0;

for(let i = 0; i < es_array1.length || i < es_array2.length; i++){
    if(es_array1[i]){
        new_array = new_array + es_array1[i];
        console.log(new_array);
    }
    if(es_array2[i]){
        new_array = new_array + es_array2[i];
        console.log(new_array);
    }
}
