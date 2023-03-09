//javascript-agnese
var a = 1;
let b = 2;
const c = 3;
console.log(a);
console.log(b);
console.log(c);

console.log("ciao");

a=b+1;
console.log(a);
console.log(a, b, c);

let parola = "ciao mondo";
console.log(parola);

console.log(parola+ " hola" + c);


var variabileNuovaConVarFuori = 6;
var variabileNuovaConLetFuori = 10;

{
    console.log("sono in un blocco");

    var variabileNuovaConVar = 2;
    console.log(variabileNuovaConVar);

    let variabileNuovaConLet = 4;
    console.log(variabileNuovaConLet);

    console.log(variabileNuovaConVar, variabileNuovaConLet);

}


console.log(variabileNuovaConVarFuori, variabileNuovaConLetFuori);

// esempi di operazioni base

let somma = 1 + 2;
let sommaConVariabili = a + b;

console. log("a= "+a)
console. log("b= "+b)
console. log ("sommaConVariabili= "+sommaConVariabili)

let differenza = 1 - 2;
let differenzaConVariabili = a - b;

console. log("a= "+a);
console. log("b= "+b);
console.log ("differenzaConVariabili= "+differenzaConVariabili)


/* differenza tra =, ==, ===

= operatore di assegnazione
 
==, === operatori di comparazione

1) doppio uguale -> a == b verifica se i valori, mi controlla se a è uguale a b 
cioè a = 4; b = "4"; mi dice che è vero sono uguali con ==, mi dice è falso
se uso ===.

2) triplo uguale -> a === b verifica se i valori sono uguali e se sono dello stesso tipo
*/

b=5
console. log(a, b)
console. log(typeof a == b)

// cicli loop e iterazioni 
// Stampare la somma dei primi 4 numeri interi (sl)
let cont = 0;
let sommaNuova = 0;
let n = 4; // i primi 4 numeri
while (cont <= n) {
cont = cont + 1;
}

 // esercizi
 console.log("-- esercizi --")

 let array = [  2, 6, 9, 10, -2, -3, 0, 2, 5, 1 ]
 
console.log(array)

//stampiamo primo elemento dell'array con posizione 0
console.log(array[0]) 


//1) Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1 


let i=0
while (i<array.length){
console.log (array[i])
i=i+1;
}

console.log("-- ripasso del 1) esercizio con while -->")
// partiamo da 0 poi andiamo a 1 e 2 etc fino alla fine della lunghezza in un ciclo while
let posizione=0
while (posizione<array.length){
console.log (array[posizione])
posizione=posizione+1;
}


console.log("-- esercizio 1) ripasso con for -->")
let posizione2=0
for (posizione2=0;posizione2<array.length;posizione2=posizione2+1) {
    console.log (array[posizione2])
}




//2)Stampare la somma di tutti gli elementi dell’ array → 30 (si può fare anche con for)
console.log("-- esercizo 2) ripasso con while-->")
i=0;
let Somma = 0
while(i <= array. length - 1) {
Somma = Somma + array[i]
// (potresi mettere) console.log("array[" + i + "] = " + array[i], "somma = " + somma);
i++;
}
console.log("Somma = "+Somma)


//3) Stampare la somma dei soli elementi positivi → 35
console.log("-- esercizo 3) ripasso con for-->")
let sommaPositivi = 0
for(let posizione=0; posizione<array.length; posizione++){
    if (array[posizione] >= 0) {
        sommaPositivi = sommaPositivi + array[posizione]
    }
}
console.log(sommaPositivi)


// 3.1) contare quanti elementi positivi ci sono nell'array
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("-- esercizo 3.1/7) ripasso con for-->")
let contoPositivi = 0
for(let posizione=0; posizione<array.length; posizione++){
    if (array[posizione] >= 0) {
        contoPositivi = contoPositivi + 1 
    }
}
console.log(contoPositivi)




// 4) ripasso, stampare la somma dei soli elementi dispari -+ 12
// Stampare la somma dei soli elementi dispari -+ 12
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

console.log("-- esercizio 4) ripasso con for-->")
i = 0;
sommaDispari = 0;
for(i=0;i<array.length;i++){
    if (array[i]% 2 !==0){
        sommaDispari= sommaDispari + array[i]
    }
}
console.log(sommaDispari)

//5 ripasso:  Stampare la somma dei soli elementi in indice/posizione pari  → 14
console.log("-- esercizio 5) ripasso con for-->")
let posizionePari = 0;
for(i=0;i<array.length; i++){
    if(i %2 == 0){
    posizionePari = posizionePari + array[i];
    }
}
console.log(posizionePari)


// 6 ripasso: Stampare quante volte compare il numero 2 → 2
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("-- esercizio 6) ripasso con for-->")

let cont2 = 0;
for(i=0;i<array.length;i++){
    if(array[i] == 2){
        cont2 = cont2 + 1
    }
}
console.log(cont2)


// 7) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
console.log("-- esercizio 7) ripasso con for-->")

let cont3 = 0;

for(i = 0; i < array.length; i++){
    if(array[i] >= 0){

        cont3 = cont3 + 1;
    }
}
console.log(cont3)

// 8) Stampare il numero massimo (senza usare funzioni matematiche) → 10
console.log("-- esercizio 8) ripasso con for-->")

let max = array[0]; 

for(let i=0; i < array.length; i++){
   if (array[i] > max){
    max = array[i]
   }
}
   console.log(max)



// 9) Stampare il numero minimo con for  → -3
console.log("-- esercizio 9) ripasso con for-->")

let min = 0;

for(let i=0; i < array.length; i++){
    if (array[i] < min){
     min = array[i]
    }
 }
    console.log(min)

// 10) Inserire in un nuovo array con solo gli elementi negativi dell'array che abbiamo 🤯 → 2
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("-- esercizio 10) ripasso-->")
i = 0;

let arraynew= []
for(i=0; i<array.length; i++){
    if(array[i]<0){
        arraynew.push(array[i]);
    }
}
console.log(arraynew)

// 10.2) Inserire in un nuovo array con solo gli elementi negativi dell'array che abbiamo 🤯 → 2 SENZA PUSH
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("-- esercizio 10.2) ripasso SENZA push -->")

arraynew= [] //variabile a parte per partire da 0 per non avere elementi vuoti nel nuovo array
inew= 0

for(i=0; i<array.length; i++){
    if(array[i]<0){
        arraynew[inew]=array[i];
        inew++;
    }
}
console.log(arraynew)


// 11) Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 
//array di partenza: [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//arrayNuovo=[4, 12, 18, 20, -4, -6, 0, 4, 10, 2] 
console.log("-- esercizio 11) ripasso -->")

i = 0
arraynew= []

for (let i=0; i<array.length; i++){
    
        arraynew.push(array[i] * 2)

}

console.log(arraynew)


// 12) Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → 
// array: [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

console.log("-- esercizio 12) ripasso -->")

array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

i = 0
let arraynuovo = []
while(i<array.length){
    arraynuovo.push(array[i])
    i++
   
}

i= 0
while(i<array.length){
    arraynuovo.push(array[i])
    i++
   
}
console.log(arraynuovo)

// 12.2) SENZA push


console.log("-- esercizio 12.1) ripasso SENZA push -->")

array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

i = 0
arraynuovo = []
while(i<array.length){
    arraynuovo[i] = array[i]
    arraynuovo[array.length +i] = array[i]
    i++
   
}
console.log(arraynuovo)



// 13) Stampare al contrario gli elementi dell’array → 
//array di partenza:  [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
//array: [1, 5, 2, 0, -3, -2, 10, 9, 6, 2] 🙂
console.log("-- esercizio 13) ripasso -->")

i = array.length - 1
while(i>=0){
    
    console.log(array[i])
    i--
    
}

// 13) (copiato dal main) Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2 🙂
console.log("esercizio 13 --> ")
// è come il primo esercizio ma scorro l'array al contrario 

i = array.length - 1;
while (i >= 0) {
    console.log(array[i]);
    i = i - 1;
}
// dalla posizione 9 alla posizione 0
// i-- --> i=i-1        i++ -> i=i+1
for(let i=array.length - 1; i>=0; i--){
    console.log(array[i]);
}

//14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
console.log("-- esercizio 14 con PUSH --> ")

i=0
let array1 = [ 1, 2, 2, 3, 4] 
let array2 = [4, 2, 2, 4]   
let array3=[]

for(i=0; i<array1.length || i<array2.length; i++){
    if(array1[i] && array2[i]){ //&& verifica l'uno e l'altro
        array3.push(array1[i]+array2[i]);
    }
    else{
        if(!array2[i]){
        array3.push(array1[i]);
         }
         else{
            array3.push(array2[i]);
         }
    }   

}

console.log(array3)

//14.2) Creare un array3 con la somma degli elementi dell’array1 e dell’array2, senza push
console.log("-- esercizio 14.2 SENZA push --> ")

i=0
array1 = [ 1, 2, 2, 3, 4] 
array2 = [4, 2, 2, 4]   
array3=[]

for(i=0; i<array1.length || i<array2.length; i++){
    array3[i]=0;
    if(array1[i]){
        array3[i]= array3[i]+array1[i]
    }

    if(array2[i]){
        array3[i]= array3[i]+ array2[i];
    }
}

console.log(array3)


// 15) Creare un array3 con gli elementi (non la posizione)
// dispari di array1 
//e gli elementi pari di array2 → 
//versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
console.log("-- esercizio 15 versione1 [1,3,4,2,2,4] --> ")


array1 = [ 1, 2, 2, 3, 4] 
 array2 = [5, 4, 4, 7, 4]   
 array3=[]

 for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 !== 0) {
      array3.push(array1[i]);
    }
  }
  
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
      array3.push(array2[i]);
    }
  }
  
  console.log(array3)




//15.2) versione 2
console.log("-- esercizio 15.2) versione2 [1,4,2,2,3,4] --> ")
  
//16
console.log("-- esercizio 16 --> ")
array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];

i=0;
while(i<array2.length){
    array2[i] = array2[i] / array1[array1.length-1-i];
    i++
}

console.log(array2)



// 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
console.log("-- esercizio 17)--> ")

i = 0;
cont = 0;
array2 = [ 1, 2, 2, 2, 1] 

while (i < array2.length / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - 1 - i]) {
        cont++
    }
    i++;
}

if (cont == array2.length / 2 || cont == Math.ceil(array2.length / 2)) {
    console.log("è palindromo");
} else{
    console.log("non è palindromo");
}

