array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]


/*Esercizio 1= Stampare tutti gli elementi dell’array */

let i = 0;
while (i < array.length) {
    console.log("esercizio1="+array[i]); 
    i = i + 1;
}




/*Esercizio 2= Stampare la somma di tutti gli elementi dell’ array*/

i=0
somma=0
while (i<array.length){
    somma=somma+array[i];
    i=i+1;
}
console.log("esercizio 2="+ somma);


/*Esercizio 3= Stampare la somma dei soli elementi positivi*/

i=0
let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sommaPositivi = sommaPositivi + array[i];
    }
}
console.log("esercizio 3 con for = " + sommaPositivi);

i=0
sommaPositivi=0
while (i<array.length){
    if(array[i]>0){
        sommaPositivi=sommaPositivi+array[i];
    }
    i++;
}
console.log("esercizio 3 con while = " + sommaPositivi);


//4 Stampare la somma dei soli elementi dispari

i=0
numeridispari=0
while(i<array.length){
    if (array[i] % 2 == 1 | array[i] %2 == -1) {
        numeridispari= numeridispari+array[i];
    }
    i++;
}
console.log("esercizio 4 = "+ numeridispari);


//5 Stampare la somma dei soli elementi in indice/posizione pari
i=0
somma=0
while (i<array.length){
    if(i % 2 ==0)
     somma=somma + array[i];
    
i++;
}
console.log("esercizio 5 = "+ somma);


//6 Stampare quante volte compare il numero 2

i=0
let variabileContatore=0
while (i<array.length){
    if(array[i]==2){
    variabileContatore ++;
    }

i++
}
console.log("esercizio 6="+ variabileContatore);

//7 Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array
i = 0;
variabileContatore = 0;
while (i < array.length) {
    if (array[i] >= 0) {
        variabileContatore = variabileContatore + 1;
    }
    i++;
}
console.log("esercizio 7 = " + variabileContatore);


//8 Stampare il numero massimo (senza usare funzioni matematiche)
i=0
max=0
for (i=0; i<array.length; i++)
    if(max<array[i]){
        max=array[i];
    }
    console.log("esercizio 8 ="+ max);


//9 stampa il minimo

i=0
min=0
for (i=0; i<array.length; i++){
    if (min>=array[i]){
        min=array[i];
    }
}
console.log("esercizio 9="+min);

//10 Inserire in un nuovo array solo gli elementi negativi 

i=0
arraynuovo=[]
while(i<array.length){
    if (array[i]<0){
    arraynuovo.push(array[i]);
    }
i++
}
console.log("esercizio 10  =" + arraynuovo);


//11 Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯
i=0
arraydoppio=[]
for (i=0; i<array.length; i++){
    arraydoppio.push(array[i]*2);
}
console.log("esercizio 11="+arraydoppio);


//12 Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 
 arrayseguito=[]
 for(i=0; i<array.length; i++){
 arrayseguito.push(array[i]);
 }
 for(i=0; i<array.length; i++){
 arrayseguito.push(array[i]);
 }

 console.log("esercizio 12="+ arrayseguito);




//13 Stampare al contrario gli elementi dell’array

for(i=array.length-1; i>=0; i--){
console.log("esercizio 13="+array[i]);
}

