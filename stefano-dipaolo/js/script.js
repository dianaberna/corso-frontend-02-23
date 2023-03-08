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


/*let pippo= array[5]%2
console.log(array[5])
console.log(pippo)
if (pippo == 0 ) {
    console.log ("numero pari")
    
} else console.log("numero dispari")*/


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
console.log ("ESERCIZIO 9 PICCOLA POSTILLA")
i=0
let array2 = []
while (i<array.length) {
    if (array[i]<0) {
        array2[i]=array[i]

        
    } 
    i++
}
i=0
while (i<array2.length){
    console.log (array2[i])
    i++
}
console.log (array2)

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
console.log ("ESERCIZIO 11 DA RISOLVERE")
i=0
let arraylungo = []
let contatore = 11
let w=0
while (i<array.length){
    arraylungo[i]=array[i]
    i++
                if (contatore=array.lengt*2)
                {
            console.log(arraylungo)
            } else  (w<array.lenght)
            {
        arraylungo[contatore]=array[w]
        w++
        contatore++
            }
}
console.log(arraylungo)

//Esercizio 12
//Stampare al contrario gli elementi dell’array
console.log ("ESERCIZIO 12 PICCOLA POSTILLA")
i=9
contatore=0
let arraycontrario = []
while (contatore < array.length){
    arraycontrario[contatore]=array[i]
    i--
    contatore++
}
console.log(arraycontrario)