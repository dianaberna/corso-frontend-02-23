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
  console.log("versione con if else")
    //Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
    array3=[]
    array2 = [ 1, 2, 2, 3, 4] 
    array1 = [ 4, 2, 2, 4]  


if (array1.length>= array2.length) {
    

    for (let i = 0; i < array1.length; i++) {
        
            if (array2[i]) {

                array3[i]=array1[i]+array2[i]
                
            } else  {
                array3[i]=array1[i]
            }
                    
    }
} else{
    for (let i = 0; i < array2.length; i++) {
        
        if (array1[i]) {

            array3[i]=array1[i]+array2[i]
            
        } else  {
            array3[i]=array2[i]
        }               
}
}
console.log(array3)

console.log("esercizio 14")
console.log("versione con if else Diana")
  //Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
  array3=[]
  array2 = [ 1, 2, 2, 3, 4] 
  array1 = [ 4, 2, 2, 4]  

for (let i = 0; i < array1.length || i< array2.length; i++) {

    if (array2[i] && array1[i]) {

        array3[i]=array1[i]+array2[i]

    }else if (!array2[i]) {

        array3=array1[i]

    }else array3[i]=array2[i]
              
}

console.log(array3)

console.log("esercizio 14")
console.log("versione con if else Diana 2")
  //Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
  array3=[]
  array2 = [ 1, 2, 2, 3, 4] 
  array1 = [ 4, 2, 2, 4]  

for (let i = 0; i < array1.length || i< array2.length; i++) {

    array3[i]=0

    if (array1[i]) { 
        array3[i]=array1[i]}

    if (array2[i]) {
        array3[i]=array3[i]+array2[i]
        
   
    }
              
}

console.log(array3)
console.log("esercizio 15")
/* 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 
 */
array3=[] // versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
array1 = [ 1, 2, 2, 3, 4] 
array2 = [ 4, 2, 2, 4]  
for (let i = 0; i < array1.length; i++) {
    if (array1[i]%2 !=0) {
        array3.push(array1[i])
        
    }
    
}

for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !=1) {
        array3.push(array2[i]) 
    }
    
}
console.log (array3)

console.log("esercizio 15/2")
/* 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 
 */
array3=[] // versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
array1 = [ 1, 2, 2, 3, 4] 
array2 = [ 4, 2, 2, 4]  
for (let i = 0; i < array1.length; i++) {
   
   if (array1[i]%2 !=0) {
        array3.push(array1[i])
    }

if(array2[i]){
    if (array2[i] % 2 !=1) {
       array3.push(array[i])
    }
}  
    
}
/* for (let i = 0; i < array2.length; i++) {
    
if (array2[i] % 2 !=1) {
    array3.push(array2[i] )
}
}
 */
console.log (array3)


//16) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
//array2[i] = array2[i] / array1[lunghezza-1-i]

/* array1 = [ 1, 2, 2, 3, 4] 
array2 = [ 4, 2, 2, 4] 
array3=[] 
for (let i = 0; i < array2.length; i++) {
    array2[i].push(array2[i] / array1[array1.length-1-i])
    
}
console.log(array2) */
console.log("esercizio17")
//17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
array1 = [ 1, 2, 2, 3, 1] 
array2 = [ 4, 2, 2, 4] 
let meta=0

/* for (let i = 0; i < array1.length; i++) {
    if (array1.length %2 !=1) {
        
    }else console.log("Array1 non è palindromo")
} */

for (let i = 0; i < array2.length; i++) {
    if(array2.lenght %2 !=1){
        /* array2[0]==array2[array2.length-1]
        array2[1]==array2[array2.length-2] */
        meta=array2.length/2
        /* console.log("Array2 è palindromo") */

    }else console.log("Array2 non è palindromo")
    
    
}
lung=array2.length-1
for (let i = 0; i < meta; i++) {
      
    if( array2[i]==array2[lung]) {
        
        lung--
        

    }else console.log("non è palindromo")
    
    console.log("ok")
    console.log(lung--)
}
console.log(" è palindromo")

console.log("esercizio17")
//17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
array1 = [ 1, 2, 2, 3, 1] 
array2 = [ 4, 4, 2, 2, 1, 2, 4, 4 ] 
array3=[]
array4=[]
console.log("array1")


if (array1.length % 2 !=0) {console.log("array1 non è palindromo")
    
}else{ for (let i = 0; i < array2.length/2; i++) {
    array3[i]=array2[i]
    
     }  console.log("array3"+array3)

      for (i = array2.length-1 ; i >=(array2.length)/2; i--) {
        
        array4.push(array2[i])
   
} console.log("array4"+array4) 
       
    for (let i = 0; i < array3.length; i++) {
        
        if (array3[i]==array4[i]){
            
            console.log("array2 è palindromo")
            
        }else console.log("array2 non è palindromo")
    }
} 

console.log("array2")

if (array2.length %2 !=0) {console.log("array2 non è palindromo")
    
}else{ for (let i = 0; i < array2.length/2; i++) {
        array3[i]=array2[i]
        
         }  console.log("array3"+array3)

          for (i = array2.length-1 ; i >=(array2.length)/2; i--) {
            
            array4.push(array2[i])
       
    } console.log("array4"+array4) 
           
        for (let i = 0; i < array3.length; i++) {
            
            if (array3[i]==array4[i]){
                
                console.log("array2 è palindromo")
                
            }else console.log("array2 non è palindromo")
        }
    } 


        


