/* let l = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
cont=0;


// 1
for(cont=0; cont<=l.length; cont=cont++){
console.log(l[cont]);

}; */
let serie = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
let i=0;
let sommaSerie=0;
/* console.log(serie);
let i=0;

while (i<serie.length) {

    console.log(serie[i]);
    i++;
} */

// STAMPARE SOMMA ARRAY

/*  i=0
 sommaSerie=0;
while (i < serie.length) { 
    sommaSerie= sommaSerie + serie[i];
    i++;
}
console.log(sommaSerie); */

//STAMPARE SOMMA NUMERI POSITIVI
/* i=0;
sommaSerie=0;
while (i < serie.length) { 
      
    if (serie[i] > 0) {
        sommaSerie=sommaSerie + serie[i]
        
    }
    
    i=i+1;
}
console.log(sommaSerie); */

 i=0;
 sommaSerie=0;
while (i < serie.length) {
    if (serie[i] > 0) {
        sommaSerie= sommaSerie + serie[i]
        
    }
    i++
}
console.log(sommaSerie);


//SOMMA NUMERI POSIZIONE PARI

/*  i=0;
 sommaSerie=0;
while (i < serie.length) { 
    console.log(serie[i])
    sommaSerie= sommaSerie + serie[i];
    i=i+2;
}
console.log(sommaSerie); */

//SOMMA NUMERI DISPARI

/* let i=0;
let sommaSerie=0;
while (i < serie.length) { 
    console.log(serie[i])  
    if (serie[i] % 2 != 0) {
        sommaSerie=sommaSerie + serie[i]
        console.log(serie[i])
    }
    
    i=i+1;
}
console.log(sommaSerie);
 */

//QUANTE VOLTE COMPARE 2

/* let i=0;
let sommaSerie=0;
while (i<serie.length) {
    if (serie[i] == 2) {

        sommaSerie= sommaSerie + 1
        
    }

    i++
}
console.log(sommaSerie); */

//

// STAMPARE QUANTI NUMERI POSITIVI CI SONO NELL'ARRAY

/* let i=0;
let sommaSerie=0;
while (i<serie.length) { 
    if (serie[i] >= 0) {
    
        sommaSerie= sommaSerie + 1
    }

    i++
}
console.log(sommaSerie); */

//STAMPARE IL NUMERO MASSIMO
/* sommaSerie=0;
for (let i = 0; i < serie.length; i++) {
    if (serie[i]>sommaSerie) {
             sommaSerie =serie[i];
    }
    
}
console.log(sommaSerie); */

//STAMPARE IL NUMERO MINIMO
/* sommaSerie=0
for (let i = 0; i < serie.length; i++) {
    if (serie[i]< sommaSerie) {
        sommaSerie=serie[i]
    
    }
    
}
console.log(sommaSerie) */

//Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]

let array=[]

for (let i = 0; i < serie.length; i++) {
    if (serie[i] < 0) {
        array.push( serie[i])

        
    }
    
}
console.log(array)
console.log("esercizio 11")
//Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]
array =[]
for( let i=0; i< serie.length; i++){
   /* serie[i] = serie[i]*2 */
    array.push(serie[i]*2)
}
console.log(array)

console.log("esercizio 12 ")
//Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 
serie = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
array=[]
for(let i=0; i<serie.length; i++){
    
    array.push(serie[i])

    
}
console.log(array)
console.log("esercizio 12 ")

serie = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
array=[]
for (let i = 0; i < serie.length; i++) {
    array[i]=serie[i];
    array[serie.length + i]=serie[i];
    
}
console.log(array)

console.log("esercizio 12 versione Federica ")
serie = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
array = [];
for (let i = 0; i < serie.length; i++) {
  array[i] = serie[i]; //primo array - posizione 0
  array[serie.length + i] = serie[i]; //aggiunta secondo array - posizione -1
}
console.log(array);



//Stampare al contrario gli elementi dell’array
/* console.log("esercizio 13 ")
array=[]
serie = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log(serie.length)
for ( let i = serie.length - 1; i >= 0; i--) {
array.push(serie[i])
}
console.log(serie) */

console.log("esercizio 13 ")
serie = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
 
array = [];
 
 
    for (i = serie.length -1 ; i >= 0; i--) {
        console.log(serie[i]);
        /* array.push(serie[i]); */
    }
/*     serie= []
 for (let i = 0; i < array.length; i++) {
    serie.push(array[i])
    
 }
    
    console.log(serie);
     */
    
  console.log("esercizio 14")
    //Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
    array3=[]
    array1 = [ 1, 2, 2, 3, 4] 
    array2 = [4, 2, 2, 4]  

    /* if (array1.length != array2.length) { 
        array2.push(0)} */
   

    console.log(array2)

    for (let i = 0; i < array1.length; i++) {
        
        for (let i = 0; i <= array2.length; i++) {
        
            if (array2[i]) {
                
                array3[i]=array1[i]+array2[i]

        }else array3[i]=array1[i]        
            /* console.log(array2[i]) */
        }
    }
        
    
   
console.log(array3)

/* 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → 4
versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4] */