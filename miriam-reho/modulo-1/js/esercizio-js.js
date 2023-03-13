let array = [2,6,9,10,-2,-3,0,2,5,1]


console.log("-- Esercizio 1 : stampa tutti gli elementi con while --")
let i = 0
while (i < array.length){
    console.log("Array n[" + i + "]= " + array[i]);
    i= i+1;
} 
console.log("-- Esercizio 1 : stampa tutti gli elementi con for --")
for (let i= 0; i < array.length; i++) {
    console.log("Array n[" + i + "]= " + array[i]);
}

// ------------------------------------------- 

console.log("-- Esercizio 2 : stampa la somma --")
/* 
    0 < 10? si -> somma = 0 + 2 = 2
    i2 0 +1 = 1

    Voglio che il risultato sia la somma + i finchè è < 10
 */
let i2 = 0
let sommaArray = 0
while (i2 < array.length){
    sommaArray = sommaArray + array[i2];
    i2++;
} 
console.log("La somma degli array è "+ sommaArray)

// ------------------------------------------- 

console.log("-- Esercizio 3 : somma degli elementi positivi --")

/* 
    Se i > 0 e < length -> sommali
    quindi:
    finchè i > 10, prendilo e sommalo

    !! if(array[i]) e NON i perchè i sarà sempre positivo, dato che partiamo da 0
*/
let i3 = 0
let sommaPositivi = 0 
while (i3 < array.length){
    if (array[i3] > 0) { 
        sommaPositivi = sommaPositivi + array[i3];
    }
    i3++;
} 
console.log(sommaPositivi)

// ------------------------------------------- 

console.log("-- Esercizio 4 : somma degli elementi dispari --")

// se i è dispari, prendilo e sommalo

let i4 = 0
let dispari = 0
while (i4 < array.length) {
    if (array[i4] %2 !== 0) { //%2 non è percentuale ma modulo. quindi fai una divisione e prendi il resto, non il risultato e voglio che sia diverso da 0, ma = +1 -1
        dispari = dispari + array[i4];
    }
    i4++;
} 
console.log("La somma degli elementi dispari è = " + dispari)

// ------------------------------------------- 

console.log("-- Esercizio 5 : somma degli elementi in posizione pari --")

/* 
    se i è in posizione (0,1,2,etc) pari, prendilo e sommalo
*/

let i5 = 0
let posEven = 0
while (i5 < array.length) {
    if (i5 %2 == 0) {
        posEven = posEven + array[i5];
    }
    i5 = i5 + 2;
} 
console.log("La somma degli elementi in posizione pari è = "+ posEven)

// ------------------------------------------- 

console.log("-- Esercizio 6 : quante volte compare il n2 --")
let i6 = 0
let volte = 0
while (i6 < array.length) {
    if (array[i6] == 2) { //l'elemento dell'array in posizione i ==2
        volte = volte + 1;
    }
    i6++;
} 
console.log("2 compare " + [volte] + " volte");

// ------------------------------------------- 

console.log("-- Esercizio 7 : quanti Plus (0 compreso) --")
let i7 = 0
let voltePlus = 0
while (i7 < array.length) {
    if (array[i7] >= 0) {
        voltePlus = voltePlus + 1;
    }
    i7++;
} 
console.log("ci sono " + voltePlus + " positivi")

// ------------------------------------------- 

console.log("-- Esercizio 8 : chi è il più grande --")

let i8 = 0
let max = array[0]
while (i8 < array.length) {
    if (max < array[i8]) {
        max = array[i8]
    }
    i8++
} 
console.log(max)

// ------------------------------------------- 

console.log("-- Esercizio 9 : chi è il più piccolo --")
let i9=0
let min = array[0]
while (i9 < array.length) {
    if (min > array[i9]) {
        min = array[i9]
    }
    i9++
} 
console.log(min)

// ------------------------------------------- 

console.log("--  Esercizio 10: un nuovo array con i negativi di array --")
let i10 = 0
let arrayNuovo = []
while (i10 < array.length) {
    if (array[i10] < 0) {
        arrayNuovo.push(array[i10]);
    }
    i10++
} 
console.log(arrayNuovo)

// ------------------------------------------- 

console.log("-- Esercizio 11: stampare un nuovo array con i doppi --")
i11 = 0
doubleArray = []
while (i11 < array.length) {
    doubleArray.push(array[i11]*2)
    i11++
} 
console.log(doubleArray)

// ------------------------------------------- 

console.log("-- Esercizio 12: stampare un nuovo array con arrey 2 volte --")
i12 = 0
dueArray = []
while (i12 < array.length) {
    dueArray.push(array[i12])
    i12++
} 
i12 = 0
while (i12 < array.length) {
    dueArray.push(array[i12]) //non sovrascrive ma aggiunge
    i12++
} 
console.log(dueArray) 

// ------------------------------------------- 

console.log("-- Esercizio 13: stampare al contrario l'array --")
i13 = array.length - 1
while (i13 >= 0) {
    console.log("Array n[" + i + "]= " + array[i13])
    i13--
} 

// --------------------- ARRAY1 & ARRAY2 ----------------------

let array1 = [1, 2, 2, 3, 4]
let array2 = [4, 2, 2, 4]


console.log("-- Esercizio 14: Crea array3 sommando gli elementi array1 e array2 --")
i = 0
let array3 = []
while (i < array1.length) {
    if (array2[i]) {
        array3[i] = array1[i] + array2[i];        
    } else {
        array3[i] = array1[i] // se arrey2[i] esiste, allora somma, altrimenti prendi solo array1
    }
    i++
} 
console.log(array3) // non c'è bisogno di pushare perchè già li sto inserendo con if e else

console.log("-- Esercizio 14.2: Crea array3 che array1 sia più grande o no torna lo stesso--")
let array1b = [4, 2, 2, 4]
let array2b = [1, 2, 2, 3, 4]
i = 0
let array3b = []
while (i < array2b.length || i < array2.length){
    array3b[i] = 0
    if (array1b[i]) {
        array3b[i] = array3b[i] + array1b[i]
    } 
    if (array2b[i]) {
        array3b[i] = array3b[i] + array2b[i]
    } 
    i++
} 
console.log(array3b)


// ------------------------------------------- 


console.log("-- Esercizio 15: Crea array3 con gli elementi dispari di array1 e pari di array2 --")
array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4] // risultato array3 = [1, 3, 4, 2, 2, 4]

i=0
array3 = []
while (i < array1.length) {
   if (array1[i] % 2 !== 0) {
       array3.push(array1[i])
   } 
   i++
} 
i = 0 //bisogna resettare la i, altrimenti risulta "sporca" dal precedente while
while (i < array2.length) {
    if (array2[i] %2 ==0) {
        array3.push(array2[i])
    } 
    i++
} 
console.log(array3)

console.log("-- Esercizio 15.2: Crea array3 con gli elementi dispari di array1 e pari di array2 --")
console.log("Il risultato dovrà essere array3 [1,4,2,2,3,4]")

array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]
array3 = []
for (i = 0; i < array1.length && i < array2.length; i++){
    if (array1[i] %2 !== 0) {
       array3.push(array1[i])
    } 
    if (array2[i] %2 ==0) {
        array3.push(array2[i])
    }
} 
console.log(array3)


// ------------------------------------------- 

console.log("-- Esercizio 16: aggiornare l'array2 con array2[i]=array2[i]/array1[length-1-i) --")

for (let i = 0; i < array2.length; i++) {
    array2[i] = array2[i] / array1[array1.length - 1 - i]
} 
console.log(array2)

// ------------------------------------------- 
// soluzione prima della lezione
console.log("-- Esercizio 17: array1 e array2 sono palindromi?--")
array1 = [1, 2, 2, 3, 4]
array2 = [4, 2, 2, 4]

let revArray1 = []
for (let i = array1.length - 1; i >= 0; i--) {
    revArray1.push(array1[i])
} 

for (let i = 0; i < array1.length; i++) {
   if (array1[i] === revArray1[i]) {
        console.log("Array1 è palindromo")
        break
    } else {
        console.log("Array1 NON è palindromo")
    } break
}

let revArray2 = []
for (let i = array2.length - 1; i >= 0; i--) {
    revArray2.push(array2[i])
} 

for (let i = 0; i < array2.length; i++) {
   if (array2[i] === revArray2[i]) {
        console.log("Array2 è palindromo")
        break
    } else {
        console.log("Array2 NON è palindromo")
    } break
}

console.log("-- Esercizio 17.2: array1 e array2 sono palindromi?--")

let pal = 0
for (let i = 0; i < array1.length / 2; i++) {
    if (array1[i] == array1[array1.length - 1 - i]) {
        pal++
    } 
}
if (pal == array1.length /2 || pal == Math.ceil(array1.length /2)) { // math ceil = prendi solo l'unità e non i decimali se dividi
    console.log("Array1 è palindromo")
} else {
    console.log("Array1 NON è palindromo")
}

pal = 0
for (let i = 0; i < array2.length / 2; i++) {
    if (array2[i] == array2[array2.length - 1 - i]) {
        pal++
    } 
}
if (pal == array2.length /2 || pal == Math.ceil(array2.length /2)) { // math ceil = prendi solo l'unità e non i decimali se dividi
    console.log("Array2 è palindromo")
} else {
    console.log("Array2 NON è palindromo")
}



// --------------------- STRINGHE ---------------------- 

console.log("Stringhe 1 - conta quante lettere e in stringa")

let parola = "precivitevolissimevolmente"
volte = 0

for (i = 0; i < parola.length; i++) {
    if (parola[i] == "e") {
        volte++
    }
} 
console.log("La lettera si ripete " + volte + " volte")

// ------------------------------------------- 

console.log("Stringhe 2 - Verifica se due stringhe sono palindrome")

let parola1 = "ciao"
let parola2 = "radar"
let palin = 0

for (let i = 0; i < parola1.length / 2; i++) {
    if (parola1[i] == parola1[parola1.length - 1 - i]) {
        palin++
    } 
}
if (palin == parola1.length /2 || palin == Math.ceil(parola1.length /2)) { // math ceil = prendi solo l'unità e non i decimali se dividi
    console.log("ciao è palindromo")
} else {
    console.log("ciao NON è palindromo")
}
palin = 0
for (let i = 0; i < parola2.length / 2; i++) {
    if (parola2[i] == parola2[parola2.length - 1 - i]) {
        palin++
    } 
}
if (palin == parola2.length /2 || palin == Math.ceil(parola2.length /2)) { // math ceil = prendi solo l'unità e non i decimali se dividi
    console.log("radar è palindromo")
} else {
    console.log("radar NON è palindromo")
}


console.log("Stringhe 2.1 - Verifica se due stringhe sono palindrome tra di loro")

parola1 = "ciao"
parola2 = "pallavolo"
pal = 0

// prima di questo avrei potuto controllare se p1 e p2 sono della stessa lunghezza, se non lo sono inutile fare il resto
for (let i = 0; i < parola2.length / 2 ; i++) {
    if (parola1[i] == parola2[parola2.length -1 -i]){
        pal++
    }
}
if (pal == parola2.length /2 || pal == Math.ceil(parola2.length /2)){
    console.log(parola1 + " e " + parola2 + " sono palindrome tra loro")
} else {
    console.log(parola1 + " e " + parola2 + " NON sono palindrome tra loro")
}

parola1 = "ciao"
parola2 = "oaic"
pal = 0

for (let i = 0; i < parola2.length / 2 ; i++) {
    if (parola1[i] == parola2[parola2.length -1 -i]){
        pal++
    }
}
if (pal == parola2.length /2 || pal == Math.ceil(parola2.length /2)){
    console.log(parola1 + " e " + parola2 + " sono palindrome tra loro")
} else {
    console.log(parola1 + " e " + parola2 + " NON sono palindrome tra loro")
}

// ------------------------------------------- 

console.log("Stringhe 3 - Scrivere un programma che verifica se esiste una stringa all'interno di un altra")

let s1 = "categoria"
let s2 = "cat"
controllo = false

for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[0]) {
        for (let l = 1; l < s2.length ; l++){
            if (s1[i+l] == s2[l]) {
                controllo = true
            } else {
                controllo = false
            }
        }
        break;
    }
} 
if (controllo) {
    console.log("È contenuto")
} else {
        console.log("Non è contenuto")
}

console.log("Stringhe 3.2 - Scrivere un programma che verifica se esiste una stringa all'interno di un altra")

s1 = "categoria"
s2 = "cat"

if(s1.includes(s2)){ // Come risutati dà true o false
    console.log(s2 + " è contenuto in " + s1)
} else {
    console.log(s2 + " NON è contenuto in " + s1)
}
console.log("Stringhe 3.2 - versione con indexOf")
if(s1.indexOf(s2) !== -1){ // Come risutati -1 se NON c'è mai, altrimenti darà l'indice di posizione della prima lettera (0 ad esempio per c)
    console.log(s2 + " è contenuto in " + s1)
} else {
    console.log(s2 + " NON è contenuto in " + s1)
}

// ------------------------------------------- 

console.log("Stringhe 4 - Restituire una stringa al contrario")

s1 = "ciao"
let rev1 = ""
console.log(s1)

for(let i = s1.length -1; i >= 0 ; i--){
    rev1 += s1[i] // significa rev1=rev1+s1[i]
} 
console.log(rev1)

// ------------------------------------------- 

console.log("Stringhe 5 - Concatenazione di due stringhe separate da uno spazio")

s1 = "ciao"
s2 = "mondo"
let s3 = "ciaomondo"

console.log(s1 + " " + s2)

// ------------------------------------------- 

console.log("Stringhe 6 - Cifrario")

// ------------------------------------------- 

console.log("Stringhe 7 - Scrivi una stringa che contiene solo le vocali di una originale")

let vocali = ""
s1 = "provavocali"

for (let i = 0; i < s1.length; i++) {
    let carattere = s1[i];
    if (
        carattere === "a" ||
        carattere === "e" ||
        carattere === "i" ||
        carattere === "o" ||
        carattere === "u"
    ) {
        vocali += s1[i];
    }
}
console.log("con duplicati: " + vocali);

vocali = "";

for (let i = 0; i < s1.length; i++) {
    let carattere = s1[i];
    if (
        carattere === "a" ||
        carattere === "e" ||
        carattere === "i" ||
        carattere === "o" ||
        carattere === "u"
    ) {
        if (!vocali.includes(s1[i])) vocali += s1[i];
    }
}

console.log("senza duplicati: " + vocali);

// ------------------ FUNZIONI ------------------------- 

console.log("------- ESEMPIO FUNZIONI ------")

//tutto ciò che è nella funzione è isolato, generico
function calcoloSomma(a, b) {
    console.log(a, b);
    // let somma = 1+4 = 5
    const somma = a + b;
    console.log(somma);
    return somma; // 5
} 
const stampa = calcoloSomma(1, 5);
console.log(stampa);
// console.log(somma) --> qui la variabile somma non esiste
// console.log(a, b) --> qui le variabili a e b non esistono

console.log("------- FUNZIONI Es1: Moltiplicazione di due numeri")

function moltiplicazione(a, b) {
    console.log(a,b);
    let mult = a*b;
    return mult;
} 

let mult = moltiplicazione(3,2)
console.log(mult)
mult = moltiplicazione(-3,-6)
console.log(mult)
mult = moltiplicazione(7,3)
console.log(mult)

console.log("------- FUNZIONI Es2: Anni in giorni")

function anniInGiorni(giorni) {
    console.log(giorni);
    let anniGiorni= giorni*365;
    return anniGiorni;    
}
let anniGiorni = anniInGiorni(65)
console.log(anniInGiorni(65))
console.log(typeof anniGiorni)
console.log(typeof anniInGiorni(65)) // essendo la variabile = funzione, senza usare più memoria, richiama nel log direttamente la funzione

anniGiorni = anniInGiorni(0)
console.log(anniInGiorni(0))
anniGiorni = anniInGiorni(20)
console.log(anniInGiorni(20))

console.log("------- FUNZIONI Es2: Anni in giorni con return vuoto")
function anniInGiorni2(giorni) {
    console.log(giorni);
    let anniGiorni= giorni*365;
    console.log(anniGiorni)
    return;    
} 
anniInGiorni2(65)


console.log("------- FUNZIONI Es3: <= 0")

function minoreUgualeAZero(numero) {
    console.log(numero);
    let minoreUguale = true;
    if (numero <= 0) {
        minoreUguale = true;
    } else {
        minoreUguale = false;
    }
    return minoreUguale;
    
} 
console.log(minoreUgualeAZero(5))
console.log(minoreUgualeAZero(0))
console.log(minoreUgualeAZero(-2))


console.log("------- FUNZIONI Es4: la fattoria")

function numeroZampe(polli, mucche, maiali) {
    let zampe = polli*2 + mucche*4 + maiali*4;
    return zampe;
}
console.log(numeroZampe(2,3,5))
console.log(numeroZampe(1,2,3))
console.log(numeroZampe(5,2,8))


console.log("------- FUNZIONI Es5: case di fiammiferi")

function numeroFiammiferi(casette) {
    let fiammiferi = 0
    if (casette < 0) {
        return "errore";
    } else if (casette > 0) {
        fiammiferi = casette * 6 - (casette - 1);
    } else {
        return 0
    }
    return fiammiferi;
}
console.log(numeroFiammiferi(-3))
console.log(numeroFiammiferi(0))
console.log(numeroFiammiferi(1))
console.log(numeroFiammiferi(4))
console.log(numeroFiammiferi(87))


console.log("------- FUNZIONI Es6: somma i numeri da un unico numero")

function sommaUnicoNumero(volte) {
    let risultato = 0
    for (let i= 0; i <= volte; i++ ) {
        risultato = risultato + i;
    }
    return risultato
}
console.log(sommaUnicoNumero(4))
console.log(sommaUnicoNumero(13))
console.log(sommaUnicoNumero(600))


console.log("------- FUNZIONI Es7: trova lo sconto")

function trovaSconto(prezzo,percentuale) {
    let sconto = (prezzo * percentuale) /100;
    let prezzoFinale = prezzo - sconto;
    return prezzoFinale;
}
console.log(trovaSconto(1500,50))
console.log(trovaSconto(89,20))
console.log(trovaSconto(100,75))


console.log("------- FUNZIONI Es8: Posizione nell'alfabeto")

/* function letteraInPosizione(lettera) {
    for ()
    
} */