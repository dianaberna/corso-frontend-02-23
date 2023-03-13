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

for (let i = 0; i < array1.length ||i < array2.length ; i++) {

    

    if(array1[i]){

    if (array1[i]%2 !=0) {
        array3.push(array1[i])
        
    }
    
}
    if(array2[i]){

        if (array2[i] % 2 !=1) {
            array3.push(array2[i])
         }
    }
    

}



console.log (array3)
console.log("--------------------------")
console.log("esercizio 16")

//16) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
//array2[i] = array2[i] / array1[lunghezza-1-i]

array1 = [ 1, 2, 2, 3, 4] 
array2 = [ 4, 2, 2, 4] // 4/4 2/3 2/2 4/1
let b=0

for (let i = 0; i < array2.length; i++) {
    b=array1.length-1-i
    
    array2[i]=array2[i] / array1[b]
    
}
console.log(array2)


console.log("--------------------------")
console.log("esercizio17 prima versione")
//17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
array1 = [ 1, 2, 2, 3, 1] 
array2 = [ 4, 2, 2, 4] 

if (array1.length % 2 !=0) {
    console.log("non è palindromo")
    
}else {  
    for (let i = 0; i < array1.length; i++) {
        if (array1[0]==array1[array1.length-1] && array1[1]==array1[array1.length-2]) {
            console.log("è palindromo")
        }else console.log("non è palindromo")
        
    }

}
console.log("--------------------------")
console.log("esercizio 17 seconda versione")
//17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
array1 = [ 1, 2, 2, 3, 1] 
array2 = [ 4, 4, 2, 2, 2, 2, 4, 4 ] 
array3=[]
array4=[]
console.log("array2")

 for (let i = 0; i < array2.length/2; i++) {
        array3[i]=array2[i]
        
         }  /* console.log("array3"+array3) */

          for (i = array2.length-1 ; i >=(array2.length)/2; i--) {
            
            array4.push(array2[i])
       
    } /* console.log("array4"+array4)  */
           
        for (let i = 0; i < array3.length; i++) {
            
            if (array3[i]==array4[i]){
                
                console.log("array2 è palindromo")
                
            }else console.log("array2 non è palindromo")
        }
   

    console.log("esercizio17 terza versione")
//17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
array2= [ 1, 2, 2, 3, 1] 
array1 = [4, 2, 2, 2, 4 ] 
somma=0


for (let i = 0; i < array1.length/2; i++) {

    if (array1[i]==array1[array1.length-1-i]) {
        somma++  
        console.log("array1[i] "+array1[i]) 
         
        console.log("somma "+somma)
    }
        
}
console.log(somma, array1.length/2)
if (somma==array1.length/2 || somma==Math.ceil (array1.length/2)) { console.log("è palindromo")
    
}else console.log("non è palindromo")



console.log("esercizio17 quarta versione")
//17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
array2= [ 1, 2, 2, 3, 1] 
array1 = [4, 2,2, 2, 4, ] 
somma=0
/* cont=array1.length-1 */


for (let i = 0; i < array1.length; i++) {

    if (array1[i]==array1[array1.length-1-i]) {
        somma++  
        /* console.log("array1[i] "+array1[i]) 
        console.log("array1[cont] "+array1[cont]) 
        console.log("somma "+somma) */
    }
    /* console.log("cont "+cont) */
    /* cont-- */
    
}
console.log(somma, array1.length/2)
if (somma/2==array1.length/2 ) { console.log("è palindromo")
    
}else console.log("non è palindromo")

//Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 

    console.log("--------------------------")
console.log("esercizio 1 stringhe")
let parola= "precipitevolissimevolmente"
sommae=0
for (let i = 0; i < parola.length; i++) {
    if (parola[i] == "e") {
        sommae++
    }
    
}console.log(sommae)


//Scrivere un programma che verifica  se due stringhe sono palindrome 

console.log("--------------------------")
console.log("esercizio 2 stringhe")

p="aasna" 
somma=0

for (let i = 0; i < p.length/2; i++) {

    if (p[i]==p[p.length-1-i]) {
        somma++  
        
    }
    
}
if (somma==p.length/2 || somma==Math.ceil (p.length/2)) { console.log("è palindromo")
    
}else console.log("non è palindromo")


console.log("--------------------------")
console.log("esercizio 3 stringhe")
/* Scrivere un programma che verifica se esiste una stringa 
all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, 
mente in palesemente → esempi corretti
es. mare in categoria → la parola mare non esiste in categoria
 */
p="cat"
p1="cegoriacat"
c=false
for (let i = 0; i < p1.length; i++) {

   if(p1[i]==p[0]){

    for (let b = 1; b < p.length; b++) {

         if(p1[i+b]==p[b]){
         c=true
        }else c= false
     }
  
    }
}
if (c) {console.log("ce")
    
}else console.log("non ce")


console.log("--------------------------")
console.log("esercizio 4 stringhe")
/* Scrivere un programma che prenda una stringa come input e 
restituisca la stessa stringa con i caratteri in ordine inverso.

 */
p="frontend"
let inv=""

for (let i = p.length-1; i >=0; i--) {
    
   inv+=p[i]
    /* console.log(inv[i]) */
    

}console.log(inv)

console.log("--------------------------")
console.log("esercizio 5 stringhe")


/* Scrivere un programma che prenda due stringhe come input e 
restituisca una nuova stringa che è la concatenazione delle due stringhe, 
separate da uno spazio. (simile all’esercizio 12)

 */
p="cat"
p1="egoria"
let p3=""
    
    p3+=p+p1
    
console.log(p3)

console.log("--------------------------")
console.log("esercizio 6 stringhe")

/*Scrivere un programma che sviluppi il cifrario di Cesare 🤯 🤯 
Il cifrario di cesare è un algoritmo di cifratura semplice ma efficace, 
in pratica abbiamo bisogno di una stringa (quella che vogliamo criptare) 
e di un numero. Il numero rappresenta quante posizioni nell’alfabeto (non tradizionale
ma codificato ASCII) dover spostare ogni lettera.*/

p="amortecesare"
p1=[]
p3=""
b=0
for (let i = 0; i < p.length; i++) {
    p1[i]=p[i].charCodeAt(0)
    /* p3+=p1.fromCharCode(index) */
    /* p3+=p1[i].fromCharCode(index) */
}console.log(p1)
/* console.log(p3.fromCharCode(p1[i])) */


/* Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa
 che contiene solo le vocali presenti nella stringa originale
 */    
    
 console.log("--------------------------")
 console.log("esercizio 7 stringhe")

 p="miasorelula"
 p1="aeiou"
p2=""
b=0
for (let i = 0; i< p.length; i++) {
 for (let i = 0; i< p.length; i++) {
    
    if (p[i]==p1[b]) {

        p2+=p[i]
 
    }
} b++
    
 }console.log(p2)

/*  Scrivere una funzione che accetti due stringhe come input e restituisca 
una nuova stringa che contiene solo i caratteri comuni alle due stringhe. 
(versione 1: senza escludere i duplicati, versione 2: escludendo i duplicati) */
console.log("--------------------------")
 console.log("esercizio 8 stringhe c")

 p="stringoaaaaa"
 p1="ssstruinga"
 p2=""
 p3=""
 b=0
for (let i = 0; i < p.length; i++) {
    p2 = p[i]

    for (let j = 0; j < p1.length; j++) {

        if (p2 === p1[j]) {

            p3 += p2

        }
    }

} console.log(p3)


    console.log("--------------------------")
 console.log("esercizio 8 stringhe v2")
 p="stringoaaaaa"
 p1="ssstruinga"
 p2=""
 b=0
 


/*     9) Scrivere programma che accetti un array di stringhe come input e 
restituisca la stringa più lunga presente nell'array
 */
console.log("--------------------------")
 console.log("esercizio 9 stringhe ")

 array=["annalisa","marco", "laura", "giacomo", "filipp","ciceronez"]
 b=0
 let l=0
for (let i = 0; i < array.length; i++) {
     
    if (b<array[i].length) {

        b=array[i].length
        l=i

        console.log(array[i].length)     
    }
    
    
}console.log(array[l])


/* 10) Scrivere programma che accetti una stringa come input e restituisca 
una nuova stringa in cui le vocali sono 
sostituite da un carattere speciale, ad esempio "*", 
e le consonanti sono convertite in lettere maiuscole
 */
console.log("--------------------------")
 console.log("esercizio 10 stringhe ")

 p="casae"
 p1="aeiou"
 p2=""
 p3=""
 p4=""
 p5=""

 for (let i = 0; i < p.length; i++) {
   

           p2+=c
    
       } b++
  
       
    console.log(p2);

    console.log("--------------------------");
    console.log("esercizio 8 stringhe");

    p="cat"
    p1="cegoriacat"
    c=false
    p3=""
    for (let i = 0; i < p1.length; i++) {
    
       if(p1[i]==p[0]){
        p3+=p[0]
    
        for (let b = 1; b < p.length; b++) {
    
             if(p1[i+b]==p[b]){

             p3+=p[b]
            }
         }
      
        }
    }
     console.log(p3)
        
    

    p2=p[i]


    for (let q = 0; q < p1.length; q++) {
        
        if (p2==p1[q]) {

            p3+=p2
         
        }
       
    }
         
 console.log(p3)

 for (let i = 0; i < p.length; i++) {
    p4 = p[i]

    for (let j = 0; j < p1.length; j++) {

        if (p4 != p1[j]) {

            p5 += p4

        }
    }

} console.log(p5)



