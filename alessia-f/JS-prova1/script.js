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


//3 con while
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



//10.2 come esercizio 10 ma senza la push. scrive in arraynew solo i numeri negativi (senza inew++ lascia lo spazio vuoto con la , al posto dei numeri positivi)
i=0
arraynew=[]
inew=0

for(i=0;i<array.length; i++){
    if(array[i]<0){
        arraynew[inew]=array[i];
        inew++;
    }

}
console.log("esercizio10.2="+arraynew)



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

for(i=array.length-1; i>=0; i--)
console.log("esercizio 13="+array[i]);


//14 Creare un array3 con la somma degli elementi dell’array1 e dell’array2 --> array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4]   array3=[]

i=0
array1 = [ 1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4,]  
array3=[]

for(i=0; i<array1.length || i<array2.length; i++){
    if(array1[i] && array2[i]){ //&& verifica se esiste sia uno che l'altro
        array3.push(array1[i]+array2[i]); //se esiste,fai la somma
    }

    else{
        if(!array2[i]){ //se non esiste il numero in array2, 
        array3.push(array1[i]);//stampa quello nella stessa posizione in array1
        }
        else{  //se esiste,
            array3.push(array2[i]);//stampa quello dell'array2
        }
    }

}
console.log("esercizio 14="+array3);



//14.2 metodo senza push
i=0
array1 = [ 1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4,]  
array3 = []

for(i=0; i<array1.length || i<array2.length; i++){
    array3[i]=0;
    if (array1[i]){
        array3[i]= array3[i]+ array1[i];
    }

    if(array2[i]){
        array3[i]= array3[i]+ array2[i];
    }
}
console.log("esercizio 14.2="+array3);



//15 Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2
i=0
array1 = [ 1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4,]
array3= []

for (i=0; i<array1.length || i<array2.length;i++){
    if(array1[i]){
        if(array1[i]%2==1){
            array3.push(array1[i]);
        }
    }
    if(array2[i]){
        if(array2[i]%2==0){
            array3.push(array2[i]);
        }
    }
}
console.log("esercizio 15="+array3);




//15.2 versione2 [1,4,2,2,3,4]
i=0
array1 = [ 1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4,]
array3= []


for (i=0; i<array1.length || i<array2.length;i++){
    if(array1[i]% 2==1){
        array3.push(array1[i]);
    }
    
    if(array2[i]%2 ==0){
        array3.push(array2[i]); 
    }
}  
console.log("esercizio 15.2="+array3);


//16 Aggiornare l’array2 con elemento uguale il suo valore diviso il valore nella posizione( lunghezza-1-posizione) dell’array1
i=0
array1 = [ 1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4,]

for(i=0; i<array2.length;i++){
    array2[i]= array2[i] / array1[array1.length-1-i];
}
console.log("esercizio 16="+array2);



//17 Verificare se array1 e array2 dati sono palindromi

i=0
array1 = [ 1, 2, 2, 3, 4] 
array2 = [4, 2, 2, 4]
contatore = 0 


for (i=0; i<array2.length / 2 ;i++){
    if(array2[i] == array2[array2.length-1-i]){ //...quando questo if è vero
        contatore++
    }
}   
    
if (contatore== array2.length / 2 || contatore==Math.ceil(array2.length/2)){ //se la lunghezza è dispari prende il numero decimale senza la ,
    console.log(" es 17_a2=palindromo"); // funziona solo se la lunghezza è pari 
}

else{
    console.log("es 17_a2=non_palindromo");
}




for (i=0; i<array1.length / 2 ;i++){
    if(array1[i] == array1[array1.length-1-i]){ //...quando questo if è vero
        contatore++
    }
}   
    
if (contatore== contatore==Math.ceil(array1.length/2)){ //se la lunghezza è dispari prende il numero decimale senza la ,
    console.log(" es 17_a1=palindromo"); // funziona solo se la lunghezza è pari 
}

else{
    console.log("es 17_a1=non_palindromo");
}



//1 Scrivere un programma che conta quante lettere “e” ci sono nella parola "precipitevolissimevolmente"

i=0
contatore=0
nome= "precipitevolissimevolmente"

for(i=0; i<nome.length;i++){
    if(nome[i]=="e"){
        contatore++;
    }
}
console.log("esercizio 1=" + contatore + "e");



//2 Scrivere un programma che verifica  se una stringa è palindroma / Scrivere un programma che verifica  se due stringhe sono palindrome tra loro
i=0
parola1="grifondoro"
parola2= "osso"
contatore= 0


for(i=0; i<parola1/2; i++);{
    if(parola1[i]= parola1[parola1.length-1-i]){
        contatore++;
    }
    if (contatore== parola1.length / 2 || contatore==Math.ceil(parola2.length/2)){ 
        console.log("es_1=palindromo");
    }
    
    else{
        console.log("es_1=non_palindromo");
    }
}

for(i=0; i<parola2/2; i++);{
    if(parola2[i]= parola2[parola2.length-1-i]){
        contatore++;
    }
    if (contatore== parola2.length / 2 || contatore==Math.ceil(parola2.length/2)){ 
        console.log("es_1=palindromo");
    }
    
    else{
        console.log("es_1=non_palindromo");
    }
}



//3 Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti

i=0
parola= "ALE"
parola1= "ALESSIA"
controllo= false;


for(i=0; i< parola1.length; i++){
    if(parola1[i]==parola[0]){
        for(j=1;j>parola.length;j++){//gli sto dicendo non partire da 0, dato che hai trovato la a, ma parti dalla posizione 1(L)
            if(parola1[i+j]==parola[j]){
                controllo=true;
            }
            else{
                controllo=false;
            }
        }

    }
}

if(controllo){
    console.log("è contenuto")
}

else{
    console.log ("non è contenuto");
}
