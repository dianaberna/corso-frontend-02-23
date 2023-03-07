let newArray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
let i=0 ; 
let dispari=0 ;

//esercizio 1 Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1

console.log(newArray);

//esercizio 2 Stampare la somma di tutti gli elementi dell’ array → 30
let totale=0;
for(let i=0 ; i<newArray.length ; i++){
    
    totale = newArray[i] + totale;
    
}console.log("totale è:" + totale)

//esercizio 3 Stampare la somma dei soli elementi positivi → 35
let somma = 0;
for(let i=0 ; i<newArray.length ; i++){
    if(newArray[i] > 0){
        somma = newArray[i] + somma;
    }
}console.log("somma dei numeri è:" + somma)

//esercizio 4 Stampare la somma dei soli elementi dispari 

for(let i=0 ;i < newArray.length ; i++){

  if(newArray[i] %2 !==0 ){                // newArray[i] % 2 == 1 ||  newArray[i] % 2 == -1
   dispari = dispari + newArray[i];
  }
}
console.log(" La somma dei numeri dispari è:" + dispari)


//esercizio 5 Stampare la somma dei soli elementi in indice/posizione pari

let pari=0 ;

for(let i=0 ;i < newArray.length ;i = i+2){

    
     pari = pari + newArray[i];

  }
  console.log(" La somma dei numeri pari è:" + pari)

  // esercizio 6 Stampare quante volte compare il numero 2
  let cont=0;
  for(let i=0 ;i < newArray.length ;i++){
    if(newArray[i] == 2) {
        cont = cont + 1; 
    }    
 }
 console.log(" di 2 ci sono:" + cont +" " + "in queasta lista")

 //esercizio 7 Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
 let positivo=0;
 for(let i=0 ;i < newArray.length ;i++){
   if(newArray[i] >= 0) {
       positivo = positivo + 1; 
   }  

}
console.log(" ci sono:" + positivo +" " + "in queasta lista")

//esercizio 8 Stampare il numero massimo (senza usare funzioni matematiche) → 10
let Max=newArray[0];
for (let i=0 ;i < newArray.length ;i++){
    
    if(Max <= newArray[i]){
        Max = newArray[i];
    }

}
console.log(" il numero massimo è:" + Max )
//esercizio 9 Stampare il numero minimo → -3
let Min=newArray[0];
for (let i=0 ;i < newArray.length ;i++){
    
    if(Min >= newArray[i]){
        Min = newArray[i];
    }

}
console.log(" il numero minimo è:" + Min )

//esercizio 10  Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
let myArray = [];

for (let i=0 ;i < newArray.length ;i++){
    if(newArray[i] < 0){
     myArray.push(newArray[i]);
    }

}
console.log(myArray)

//esercizio 11 Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]

let arreydoppio = [];

for (let i=0 ;i < newArray.length ;i++){
    
    arreydoppio.push(newArray[i]*2);
  
}
console.log(arreydoppio)




//esercizio 12 Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

let array1 = [];
let array2 = [];
for (let i=0 ;i < newArray.length ;i++){
    
    array1.push(newArray[i]) ;
    array2 = newArray.concat(array1);
    
}
console.log(array2)

//esercizio 13 Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2

for (let i = newArray.length -1 ; i >= 0 ; i--){
    console.log(newArray[i]);
}

// // array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4]   
// 13) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
// → [5, 4, 4, 7, 4]     

//esercizio 14  Creare un array3 con la somma degli elementi dell’array1 e dell’array2
let arrayone = [1, 2, 2, 3, 4];
let arraytwo = [4, 2, 2, 4];
let arraysomma = [];
if(arrayone.length > arraytwo.length){
    for(let i=0 ; i < arrayone.length ; i++){
        if(arraytwo[i]){
            arraysomma[i] = arrayone[i] + arraytwo[i];
        }else{
            arraysomma[i] = arrayone[i];
        }
    }
}
console.log(arraysomma)
    
  //esercizio 15 Creare un array3 con gli elementi (non la posizione) dispari di array1 e 
  //gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4] 
  let arraymix = [];
  for(let i=0 ; i<arrayone.length ; i++){
    if(arrayone[i] %2 ==1 ){
        arraymix.push(arrayone[i]);
    }
}
  for(let i=0 ; i<arraytwo.length ; i++ ){
    if(arraytwo[i] %2 ==0 ){
        arraymix.push(arraytwo[i]);
    }
}console.log(arraymix)

 //esercizio 16 Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
 // array2[i] = array2[i] / array1[lunghezza-i]

  