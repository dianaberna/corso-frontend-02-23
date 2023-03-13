let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log("ciao mondo")
// 1

let i = 0;
while(i <= array.length){
    console.log(array [+i]);
    i++
}

//2

i= 0;
let arraySum = 0;
while(i<= array.length -1){
    arraySum= arraySum + array[i];
    i++
}
console.log("arraySum="+arraySum)
//3 Stampare la somma dei soli elementi positivi

let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sommaPositivi = sommaPositivi + array[i];
    }
}
console.log("sommaPositivi = " + sommaPositivi);


//4 Stampare la somma dei soli elementi dispari
let sommaDispari = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]%2 != 0){
    sommaDispari= sommaDispari  += array[i];
    }

}
console.log("sommaDispari= " + sommaDispari)

//5 Stampare la somma dei soli elementi i pari 

 let sommaPari = 0;
 for (let i = 0; i < array.length; i++ ){
     if(array[i]%2 == 0){
          sommaPari= sommaPari + array[i];      //  <--        serve per sommare tutti i numeri
     }                                                   
 }
 console.log("sommaPari= " + sommaPari)
// 5.1 indice pari
i = 0;
somma = 0;
while (i < array.length) {
    if (i % 2 == 0) {     
        somma = somma + array[i];
    }
    i++;
}
console.log("somma="+somma)


//6 Stampare quante volte compare il numero 2
let compare = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === 2) {
        compare++;
    }
}

console.log("compare= " + compare);

//7 Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array


let Positivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        Positivi++;
    }
}
console.log("Positivi=" + Positivi)

//8 Stampare il numero massimo (senza usare funzioni matematiche) 

let numeroMax = array [0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > numeroMax){
        numeroMax=array[i];
    }
    
}
console.log(+numeroMax)

//9 Stampare il numero minimo 

let numeroMin = array [0];

for (let i = 0; i < array.length; i++) {
    if (array[i] < numeroMin) {
        numeroMin=array[i]
        
    }
    
}
console.log(+numeroMin)

// 10 Inserire in un nuovo array solo gli elementi negativi dell'array che abbiamo
i=0;
let arrayNuovo =[]
while (i < array.length) {
    if (array[i] < 0) {
        arrayNuovo.push(array[i]);
    }  
i++  
}
console.log("arrayNuovo=" + arrayNuovo)

//11 Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]


arrayNuovo= []
for (let i= 0; i < array.length; i++) {
//    arrayNuovo[i] = array[i]*2;       sporchiamo array principale 
      arrayNuovo.push(array[i]*2)
}
console.log(array)
console.log (arrayNuovo)

//12


arrayNuovo=[];
for (let i = 0; i < array.length; i++) {
    arrayNuovo.push(array[i])
    
}
for (let i = 0; i < array.length; i++) {
    arrayNuovo.push(array[i])
    
}
console.log(arrayNuovo)



//13 Stampare al contrario gli elementi dell’array 
let pippo= array.length

for (let i = pippo-1; i >= 0; i--){
    console.log (+array[i])
  
}

//14Creare un array3 con la somma degli elementi dell’array1 e dell’array2 

 let array1 = [ 1, 2, 2, 3, 4] ;
 let array2 = [4, 2, 2, 4];
 let array3=[];
 i=0;
for(i=0; i< array1.length || i < array2.length;i++){
    if (array2[i] && array1[i]) {
        array3.push(array1[i] + array2[i])
        
    } else if (!array2[i]){
        array3.push(array1[i])

    }else{
        array3.push(array2[i])
    }
}
console.log(array3 + "array3");




//  while (i< array1.length) {
//      if (array2[i]  array1) {
//          array3[i]=array2[i] + array1[i];
//      } else{
//         array3= array1[i];
        
//      } 

    
//      i++
//  }
//  console.log(array3)

//15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
array1 = [ 1, 2, 2, 3, 4] ;
array2 = [4, 2, 2, 4];
let array4=[];

for (let i = 0; i < array1.length; i++) {
    if(array1[i] % 2 ==1){
        array4.push(array1[i]);
    }
    if(array2[i] % 2 ==0){
        array4.push(array2[i]);
    }
}
console.log(array4)

//16  Aggiornare l’array2 con elemento uguale il suo valore diviso il valore nella posizione( lunghezza-1-posizione) dell’array1

array1 = [ 1, 2, 2, 3, 4] ;
array2 = [4, 2, 2, 4];
i=0;
while (i<array2.length) {
    array2[i] = array2[i]/ array1[array1.length-1-i];
    i++
}
console.log(array2)


//17 Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224

i=0;
array1 = [ 1, 2, 2, 3, 4] ;
array2 = [4, 2, 2, 4];
let palindromo= true;
palindromo="no palindromo"
for (let i = 0; i < array1.length/2; i++) {
    if (array1[i] !==array1[array1.length - i -1]) {
        palindromo= "fake"
        
    }

}
console.log("array1="+palindromo)

//true
palindromo= true;
for (let i = 0; i < array2.length/2; i++) {
    if (array2[i] !== array2[array2.length - i -1]) {
        palindromo= fake;
        
    }

}
console.log("array2="+palindromo)


//1 nuovo Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 

console.log("esercizio 1")

let parola= "precipitevolissimevolmente";
let conteggio = 0;
i= 0;
for (let i = 0; i < parola.length; i++) {
    if (parola[i] === "e") {
        conteggio++;
    }
}

console.log("Il numero di lettere= " + conteggio ,"e")

//2 nuovo Scrivere un programma che verifica  se due stringhe sono palindrome

console.log("esercizio 2")

let par1 = "anna";
let par2 = "radar";

let boh = 0;
for(i=0 ; i<par1.length/2 ; i++){
    if(par1[i] !== par1[par1.length-i-1]){
        bool = 1;
        break;
    }
}
if(boh == 1){

    console.log("non è palindrome");
}
else {
    console.log("palindrome");
}



//3  Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa 

console.log("esercizio 3")

let p1 = "coraggio";
let p2 = "raggio";
let conparole = false;
i=0;
let j=1;

for  ( let  i  =  0 ;  i  <  p2.length ;  i ++ )  {
    if  ( p1 [ i ]  ===  p2[ 0] )  {
        for (let j = 1; j < p2.length; j++) {
            if  ( p1[ i+j ] === p2[j] ) {
            conparole = true ;
            }
        }
    }

}
if  ( conparole )  {
    console.log ( "esiste" )

}  else  {
    console.log ( "non esiste" )

}




// 4 Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.

console.log("esercizio 4")

p1 = "coraggio";
let inverso= [];
let count = 0;

for (let i = p1.length - 1; i >=0; i--) {
    inverso[count] = p1[i];
    count++
}
console.log(inverso)


// 5 Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. 

console.log("esercizio 5")

p1 = "coraggio";
p2 = "raggio";
let p4=[];
for (let i = 0; i < p1.length; i++) {
    p4.push(p1[i])
    
}p4.push("")
for (let i = 0; i < p2.length; i++) {
    p4.push(p2[i])
    
}p4.push("")
p4=String(p4)
console.log(p4)


// 6 crivere un programma che sviluppi il cifrario di Cesare 🤯 🤯
// match https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

console.log("esercizio 6")

let stringaCifrata = "";
let stringa = "mare";
let spostamento = 3;
let lettera = 0;
let nuovaLettera = 0;
let codiceAscii = 0;
let nuovoCodiceAscii = 0;

function cifrarioDiCesare(stringa, spostamento) {
    
    for (let i = 0; i < stringa.length; i++) {
      lettera = stringa[i];
      if (lettera.match(/[a-z]/i)) {
         codiceAscii = lettera.charCodeAt(0);
         nuovoCodiceAscii = (codiceAscii - 97 + spostamento) % 26 + 97;
         nuovaLettera = String.fromCharCode(nuovoCodiceAscii);
         stringaCifrata += nuovaLettera;
      } else {
        stringaCifrata += lettera;
      }
    }
    return stringaCifrata;
  }
  stringaCifrata = cifrarioDiCesare(stringa, spostamento);
 console.log(stringaCifrata); 

 //7 Scrivere programma che accetti una stringa come input e restituisca una nuova stringa che contiene solo le vocali presenti nella stringa originale

 console.log("esercizio 7")

 let vocali = "";
stringa = "palesemente";
for (let i = 0; i < stringa.length; i++) {
    let carattere = stringa[i];
    if (
        carattere === "a" ||
        carattere === "e" ||
        carattere === "i" ||
        carattere === "o" ||
        carattere === "u"
    ) {
        vocali += stringa[i];
    }
}
console.log("con duplicati: " + vocali);

vocali = "";

for (let i = 0; i < stringa.length; i++) {
    let carattere = stringa[i];
    if (
        carattere === "a" ||
        carattere === "e" ||
        carattere === "i" ||
        carattere === "o" ||
        carattere === "u"
    ) {
        if (!vocali.includes(stringa[i])) vocali += stringa[i];
    }
}

console.log("senza duplicati: " + vocali);


// 8) Scrivere programma che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri comuni alle due stringhe.

console.log("esercizio 8")

p1 = "coraggio";
p2 = "raggio";
i=0;
let caratteriComuniStringhe = caratteriComuni(p1, p2);

console.log("senza duplicati")

function caratteriComuni(p1, p2) {
    let risultato = "";
    for (let i = 0; i < p1.length; i++) {
      if (p2.includes(p1[i]) && !risultato.includes(p1[i])) {
        risultato += p1[i];
      }
    }
    return risultato;
  }
  console.log(caratteriComuniStringhe)

  console.log("con i duplicati")
let caratteriduplicatiStringhe = caratteriduplicati(p1, p2)
function caratteriduplicati(p1, p2) {
    let risultato = "";
    for (let i = 0; i < p1.length; i++) {
        if (p2.includes(p1[i])) {
            risultato += p1[i];
          }
        }
        return risultato;
      }
      console.log(caratteriduplicatiStringhe);


// 9   Scrivere programma che accetti un array di stringhe come input e restituisca la stringa più lunga presente nell'array

console.log("esercizio 9")

let array5= ["ciao", "mondo", "coraggio", "javascript"];
let lunga= stringalunga(array5);

function stringalunga(array5) {
    let lunga = "";
    for (let i = 0; i < array5.length; i++) {
      if (array5[i].length > lunga.length) {
        lunga = array5[i];
      }
    }
    return lunga;
  }
  console.log(lunga);

//10 Scrivere programma che accetti una stringa come input e restituisca una nuova stringa in cui le vocali sono sostituite da un carattere speciale, ad esempio "*", e le consonanti sono convertite in lettere maiuscole

console.log("esercizio 10")

p1 = "coraggio";


function restituisca(a) {
   
    a = a.toUpperCase()
    a = a.replaceAll("A", "*")
    a = a.replaceAll("E", "*")
    a = a.replaceAll("I", "*")
    a = a.replaceAll("O", "*")
    a = a.replaceAll("U", "*")
console.log(a)
}
b=restituisca(p1)

//11 Scrivi programma che accetti una stringa come input e restituisca una nuova stringa in cui ogni parola è invertita al contrario, mantenendo l'ordine delle parole. Ad esempio, "ciao mondo" diventa "oaic odnom"

console.log("esercizio 11")

//12 Scrivere programma che accetti una stringa come input e restituisca una nuova stringa in cui i caratteri sono ordinati in ordine crescente secondo il loro codice ASCII

console.log("esercizio 12")

//1.2 Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.

console.log("esercizio 1.2")

let numeri=3;
let numeri2=2;
let somma1= moltiplicaNumeri(numeri,numeri2)
function moltiplicaNumeri(numeri, numeri2) {
    const somma1= numeri*numeri2;
    console.log(somma1)
    return somma1;
  }
 
//2.2 Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.

console.log("esercizio 2.2")

let anno=365.25;
let anni= 18;
let giorni= calcoloanni(anni, anno)

function calcoloanni(anni, anno) {
    const giorni=anno*anni;
    console.log(giorni)
    return giorni;
    
}

//3.2 Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.

console.log("esercizio 3.2")

let minore1=5;
let minore2=0;
let minore3=-2;
let veroofalso1= zero(minore1,);
let veroofalso2= zero(minore2);
let veroofalso3= zero(minore3);
function zero (minore){
    
    if (minore <= 0){
     return true;
    } else{
        return false;
    }
} 
console.log(veroofalso1)
console.log(veroofalso2)
console.log(veroofalso3)

//4.2 In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
 
console.log("esercizio 4.2")


function animali (polli, mucche, maiali) {
    if (polli >=0 && mucche>=0 && maiali>=0) {
        zampe = polli *2 + mucche *4 + maiali *4;
    } 
    return zampe;
  } 

console.log("il totale delle zampe=" + animali (2,3,5))//36

//5.2 Crea una funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step. Vedere i passaggi 1, 2 e 3 nell'immagine.

console.log("esercizio 5.2")

let somma3=0;
 function numeroDiFiammiferi(step) {
 if (step === 0) {
    
    return somma3;
   }
   if(step < 0){
        console.log('inserire numero intero positivo');
    } 
    if (step > 0) {
        somma3 = (step * 6) - (step - 1);
        return somma3;
    }

 } 
 console.log('i fiammiferi sono: ' + numeroDiFiammiferi(1)); //6
 console.log('i fiammiferi sono: ' + numeroDiFiammiferi(4));//21
 console.log('i fiammiferi sono: ' + numeroDiFiammiferi(87));//436

//6.2 Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.

console.log("esercizio 6.2")

function fino(numero) {
    let somma2 = 0;
    for (let i = 1; i <= numero; i++) {
      somma2 += i;
    }
    return somma2;
  }
console.log(fino(4)) //10
console.log(fino(13)) //91
console.log(fino(600)) //180300

//7 Trova lo sconto

console.log("esercizio 7.2")

function applicasconto(prezzo, percentualeSconto) {
    const sconto = prezzo * percentualeSconto / 100;
    const prezzoFinale = prezzo - sconto;
    return parseFloat(prezzoFinale.toFixed(2));
  }

console.log(applicasconto(1500, 50)); //  750
console.log(applicasconto(89, 20)); //  71.20
console.log(applicasconto(100, 75)); //  25.00

//8 Posizione nell’alfabeto

console.log("esercizio 8.2")

function letteraInPosizione(numero) {
    if (Number.isInteger(numero) && numero >= 1 && numero <= 26) {
      return String.fromCharCode(numero + 96); 
    } else {
      return "invalid";
    }
  }
console.log(letteraInPosizione(1)); //  "a"
console.log(letteraInPosizione(12)); //  "l"
console.log(letteraInPosizione(26.0)); //  "z"
console.log(letteraInPosizione(0)); //  "invalid"
console.log(letteraInPosizione(4.5)); //  "invalid"
console.log(letteraInPosizione(-1));  //  "invalid"


//9 Calcolatrice di base

console.log("esercizio 9.2")

function calcolatrice(num1, operatore, num2) {
    switch (operatore) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Impossibile dividere per 0!";
        } else {
          return num1 / num2;
        }
      default:
        return "Operatore non valido";
    }
  }
  console.log(calcolatrice=2+2) //4
  console.log(calcolatrice=2*2) //4
  console.log(calcolatrice=4/2) //2
  console.log(calcolatrice=0/0) // nan


//10.2  Fare la somma di tutti gli elementi di un array
