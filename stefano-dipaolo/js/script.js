/*TEORIA
    JAVASCRIPT */
    //PRIME PROVE
    var a=1; //crea una variabile con valore variabili. Facciamo una dichiarazione
    let b=2; //crea una variabile con valore variabili
    const C=3;//crea una variabile con valore constante
    //Non possiamo dichiarare più volte la stessa variabile

    //let let=1; Non è consentito usare 'let' come nome in dichiarazioni 'let' o 'const'.
    console.log("ciao");
    console.log(a);
    console.log(b);
    console.log(C);
//console.log (a,b,C)
    a=5;
    console.log(a)
    b=3;
    a=b+1;
    console.log(a);
    console.log(b);
    let parola="ciao mondo"
    console.log(parola)
    console.log(parola + "benvenuti")

//c=6 errore, non puoi modificare una costante

//le variabili var sono globali
//le variabili let/const se create all'interno di un blocco non sono accessibili fuori di esso
var variabileNuovaConVarFuori=6;
let variabileNuovaConLetFuori=10;

{
    //blocco di codice
    console.log("sono in un blocco");
    console.log(variabileNuovaConLetFuori);
    console.log(variabileNuovaConVarFuori);
    var variabileNuovaConVarDentro=20; //esiste solo all'interno del blocco dove viene dichiarata
    let variabileNuovaConLetDentro=30;
    console.log(variabileNuovaConVarDentro);
    console.log(variabileNuovaConLetDentro);
}

//console.log(variabileNuovaConLetDentro); errore perchè dichiarata con let dentro a un blocco
console.log(variabileNuovaConVarDentro); //visualizzabile perchè anche se dichiarata dentro un blocco, è visualizzabile grazie a var

z=10; //dichiarat come un var; esisterà globalmente in tutto il file (sia fuori che dentro i blocchi)
console.log(z);

//se si stampa una variabile numero insieme una variabile stringa, stamperà entrambi ma sotto forma di stringa
var word= "questa è una stringa"
console.log(typeof z) //voglio sapere il tipo di dato di z
console.log(typeof word)

let modulo = a % b //a/b -> il modulo non è il risultato ma il resto della divisone
let pari = a % 2
console.log(a)
console.log(modulo) //resto di a(4) diviso b (3)
console.log(pari)  //resto di a(4) diviso 2

/*differenza tra =, ==, ===
= ->operatore di assegnazione
==, === -> operatore di comporazione
se a == b ? -> mi controlla se a è uguale a b //stampa un boolean (true or false)
se a ===b = -> mi controlla se a è uguale a b, ma anche se sono delle stesso tipo
*/
let numeroNuovo =2
let numeroNuovoStringa = String (numeroNuovo) //conversione in stringa
console.log (typeof numeroNuovo)
console.log (typeof numeroNuovoStringa)
console.log (numeroNuovoStringa+1) //stampa 21 in stringa

let stringaNumero = "5"
let numeroNuovo2 = Number(stringaNumero)
console.log (numeroNuovo2+2) //stampa 7

console.log ("INIZIO ESERCIZI")
//Esercizio 1
//Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1
console.log ("ESERCIZIO 1")
let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
let i=0
while (i<array.length){
    console.log (array[i])
    i++
}
console.log (array)

//Esercizio 2
//Stampare la somma di tutti gli elementi dell’ array → 30
console.log ("ESERCIZIO 2")
i=0
let sommaArray=0
while (i<array.length){
    sommaArray= sommaArray + array[i]
    i++
}
console.log ("Somma elementi Array:", sommaArray)


//Esercizio 3
//Stampare la somma dei soli elementi dispari → 12
console.log ("ESERCIZIO 3")
i=0
let sommaDispariArray=0
while (i<array.length) {
    let resto = array[i]%2
    if (resto == 0){
        
    } else sommaDispariArray= sommaDispariArray + array[i]
    i++
}
console.log("Somma elementi Dispari Array", sommaDispariArray)

//Esercizio 4
//Stampare la somma dei soli elementi in posizione pari
console.log ("ESERCIZIO 4")
i=0
let sommaElementiPosizionePari=0
while (i<array.length){
    let resto2 = i%2
    if (resto2 == 0 ){
        sommaElementiPosizionePari= sommaElementiPosizionePari + array[i]
    }
    i++
}
console.log ("Somma elementi in posizione pari", sommaElementiPosizionePari)

//Esercizio 5
//Stampare quante volte compare il numero 2
console.log ("ESERCIZIO 5")
i=0
let numerodue = 0;
while (i<array.length){
    let controllo= array[i]
    if (controllo==2){
        numerodue= numerodue + 1
    }
    i++
}
console.log ("Il numero due compare",numerodue, "volte")

//Esercizio 6
//Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array
console.log ("ESERCIZIO 6")
i=0
let numeripositivi = 0
while (i<array.length) {
    if (array[i]>= 0){
        numeripositivi=numeripositivi+1
    }
    i++
}
console.log ("il numero di numeri positivi è", numeripositivi)

//Esercizio 7
//Stampare il numero massimo (senza usare funzioni matematiche)
console.log ("ESERCIZIO 7")
i=0;
let max=0
for (i=0; i<=array.length; i++){
    if (array[i]>max){
        max=array[i]
    }
}

console.log ("Il numero più grande è", max)

//Esercizio 8
//Stampare il numero minimo

console.log ("ESERCIZIO 8")
i=0;
let min=0
for (i=0; i<=array.length; i++){
    if (array[i]<min){
        min=array[i]
    }
}

console.log ("Il numero più piccolo è", min)

//Esercizio 9
//Inserire in un nuovo array solo gli elementi negativi
console.log ("ESERCIZIO 9")
i=0
let array2 = []
while(i<array.length){
    if (array[i]<0){
        array2.push(array[i])
    }
    i++
}
console.log("Gli elementi negativi sono " + array2)
//Esercizio 10
//Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al
//doppio di quello dato
console.log ("ESERCIZIO 10")
i=0
let nuovoarray = []
while (i<array.length){
    nuovoarray[i] = array[i]*2
    i++
}
console.log (nuovoarray)

//Esercizio 11 
//Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito
//l’altra) l’array dato
console.log ("ESERCIZIO 11")
let arraylungo = []

for (let i=0; i< array.length; i++){
    arraylungo[i]=array[i]
    arraylungo[array.length + i] = array[i]
}
console.log("Ecco il nuovo array",arraylungo)

console.log ("ESERCIZIO 11 con il push")
arraylungo = [];
for (let i = 0; i < array.length; i++) {
    arraylungo.push(array[i]);
}
for (let i = 0; i < array.length; i++) {
    arraylungo.push(array[i]);
}
console.log("Ecco il nuovo array",arraylungo);

console.log ("ESERCIZIO 11 con spread operator")
arraylungo = [...array,...array]
console.log(arraylungo)

//Esercizio 12
//Stampare al contrario gli elementi dell’array
console.log ("ESERCIZIO 12")
i= array.length - 1
contatore = 0
let arraycontrario = []
while (i >= 0) {
    arraycontrario[contatore]=array[i]
    i--
    contatore ++
}
console.log(arraycontrario)

console.log ("ESERCIZIO 12")
console.log(array)
array.reverse()
console.log(array)
// array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4]  
let arrayA = [1, 2, 2, 3, 4]
let arrayB = [4, 2, 2, 4]
//Esercizio 14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 → [5, 4, 4, 7, 4]

console.log("Primo array",arrayA)
console.log("Secondo array",arrayB)
console.log ("ESERCIZIO 14")
//USIAMO IL WHILE
let arrayC = []
i = 0
while (i<arrayA.length || i<arrayB.length){
    arrayC[i] = 0
  if (arrayB[i]) { //Se vero che esiste
    arrayC[i] = arrayC[i] + arrayB[i]
}
if( arrayA[i]){
    arrayC[i]= arrayC[i] + arrayA[i]
}
i++
}
console.log("Somma dei due array",arrayC)


// array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4] 
// 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
console.log("Esercizio 15 con il push")
arrayC=[]
for (i=0; i<arrayA.length;i++){
    if(arrayA[i]%2 == 1){
        arrayC.push(arrayA[i])
    }
    if(arrayB[i]%2 ==0){
        arrayC.push(arrayB[i])
    }
}
console.log(arrayC)
console.log("Esercizio 15 senza il push")
arrayC= []
cont=0
for (i=0; i<arrayA.length;i++){

    if(arrayA[i]%2 == 1){
        arrayC[cont] = arrayA[i]
        cont++;
    }
}
for (i=0; i<arrayB.length;i++){
        if(arrayB[i]%2 == 0){
            arrayC[cont] = arrayB[i]
        cont++;
    }
}

console.log(arrayC)



// 16) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
// arrayB[i] = arrayB[i] / arrayA[lunghezza-1-i]
console.log("Esercizio 16")
i=0
arrayA = [1, 2, 2, 3, 4]
arrayB = [4, 2, 2, 4]  
while (i < arrayB.length){
    arrayB[i] = arrayB[i] / arrayA[arrayA.length-1-i]
    i++}
/*
[]= 4 / A[5-1-0] -> 4/A[4] ->4/4->1
[]= 2 / A[5-1-1] -> 2/A[3] ->2/3->0,6666
[]= 2 / A[5-1-2] -> 2/A[2] ->2/2->1
[]= 4 / A[5-1-3] -> 4/A[1] ->4/2->2
*/
console.log(arrayB)




// 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
console.log("Esercizio 17")
i=0
arrayB = [4, 2,2, 4]
let palindromo = true
for (let i=0; i<arrayB.length/2;i++) {
    if (arrayB[i] !== arrayB[arrayB.length-i-1]){
        palindromo = false
    }
    
}
console.log(palindromo)

// arrayA = [ 1, 2, 2, 3, 4]
palindromo = "l'array è palindromo"
for (let i=0; i<arrayA.length/2;i++) {
    if (arrayA[i] !== arrayA[arrayA.length-i-1]){
        palindromo = "l'array non è palindromo"
    }
    
}
console.log(palindromo)

/*if (cont == array2.length / 2 || cont == Math.ceil(array2.length / 2)) */