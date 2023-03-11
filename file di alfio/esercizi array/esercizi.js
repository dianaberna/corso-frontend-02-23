let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]


for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

}
//somma
let somma = 0;
for (let i = 0; i < array.length; i++) {
    somma += array[i]
}
console.log("la somma è " + somma);

//stampa numeri dispari

//3-let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
let dispari = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        dispari += array[i];
    }
}
console.log("n dispari = " + dispari)

//4-stampa somma indici pari
let pari = 0;

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {

        pari += array[i];
    }
}
console.log("somma indici pari " + pari)


//5-quante volte compare il n2
let due = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == 2 || array[i] == -2) {
        due++;

    }
} console.log("hai " + due + " volte numeri 2")


//6-stampare numeri positivi
let positivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) { positivi++; }
}
console.log(positivi)


//7-stampare il numero massimo
let numeroMassimo = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > numeroMassimo) {
        numeroMassimo = array[i];
    }

}
console.log("il numero massimo è " + numeroMassimo)

//8-stampare il numero minimo
let numeroMinimo = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < numeroMinimo) {
        numeroMinimo = array[i];
    }

}
console.log("il numero minimo è " + numeroMinimo)

//9 crea un altro array con solo i numeri negativi
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

let n = 0;
let array2 = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        array2[n] = array[i];
        n++;
    }

}
console.log(array2)


//11 Creare(e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 →[4, 12, 18, 20, -4, -6, 0, 4, 10, 2]



for (let i = 0; i < array.length; i++) {
    array2[i] = array[i] * 2;


}
console.log(array2);




//Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato
//🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯🤯

//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
//let array2 = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1,     2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

let arrayDoppio = []
let c = 0;                 //contatore del secondo array

while (c < array.length * 2) {

    for (let i = 0; i < array.length; i++) {
        arrayDoppio[c] = array[i];
        c++
    }
}

console.log(arrayDoppio);

//Stampare al contrario gli elementi dell’array
let pippo = array.length; //10

for (i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);

}


//esercizio14 
//array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4]   
//14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
//→ [5, 4, 4, 7, 4]    


let Array1 = [1, 2, 2, 3, 4];
let Array2 = [4, 2, 2, 4];
let Array3 = [];

//metodo piu corto
for (i = 0; i < Array1.length || i < Array2.length; i++) {

    if (Array2[i] && Array1[i]) {
        Array3.push(Array1[i] + Array2[i])

    } else if (!Array2[i]) {
        Array3.push(Array1[i])
    } else {
        Array3.push(Array2[i])
    }
} console.log(Array3 + "eccolo");
//******************************** */
//metodo semplice diana
for (i = 0; i < Array1.length || i < Array2.length; i++) {
    Array3[i] = 0;

    if (Array1[i]) {
        Array3[i] = Array3[i] + Array1[i]
    }

    if (Array2[i]) {
        Array3[i] = Array3[i] + Array2[i]
    }


} console.log(Array3 + "eccolo2");



// //metodo 1(troppo lungo)
// if (Array1.length > Array2.length) {
//     for (i = 0; i < Array1.length; i++) {

//         if (Array2[i]) {
//             Array3[i] = Array1[i] + Array2[i];

//         } else {
//             Array3[i] = Array1[i]
//         }
//     }
// } else {
//     for (i = 0; i < Array2.length; i++) {

//         if (Array1[i]) {
//             Array3[i] = Array1[i] + Array2[i];

//         } else {
//             Array3[i] = Array2[i]
//         }
//     }

// }


//15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e 
//gli elementi pari di array2 → versione1 [1,3,4,2,2,4]let dispari = 0;
Array3 = [];
let cont = 0;
for (let i = 0; i < Array1.length; i++) {

    if (Array1[i] % 2 == 1) {
        Array3[cont] = Array1[i];
        cont++;
    }

}
for (let i = 0; i < Array2.length; i++) {

    if (Array2[i] % 2 == 0) {
        Array3[cont] = Array2[i];
        cont++;
    }

}

console.log(Array3);
//16


//17) Verificare se array1 e array2 dati sono palindromi
Array1 = [1, 2, 2, 3, 4];
Array2 = [4, 2, 2, 4];

let flag = 0;
let cont1 = Array2.length - 1;
for (let i = 0; i < Array2.length; i++) {

    if (Array2[i] !== Array2[cont1]) {
        flag = 1;
    }
    cont1--;

}
if (flag == 1) {
    console.log("non sono palindromi")

} else {
    console.log("sono palindromi")

}


//1 Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente
let a = "precipitevolissimevolmente"
let conta = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] == "e") {
        conta++;
    }
}
console.log("in questa parola ci sono " + conta + " e")

//2 Scrivere un programma che verifica  se due stringhe sono palindrome 

a = "anna";
b = "";

for (let i = a.length - 1; i >= 0; i--) {
    b += a[i];
}
if (a == b) {
    console.log("esercizio 2 " + "sono palindromo")
} else {
    console.log("esercizio 2 " + "non sono palindromo")
}





//3 Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, 
//scafo in piroscafo, mente in palesemente → esempi corretti
a = "sono";
b = "ciao sono alfio ";
controllo = false;

for (let i = 0; i < b.length; i++) {

    if (b[i] == a[0]) {
        for (j = 1; j < a.length; j++) {
            if (b[i + j] == a[j]) {
                controllo = true;
            } else { controllo = false }
        }

    }
}
if (controllo == true) {
    console.log("esiste")

} else {
    console.log("non esiste")

}


//4 Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.

a = "sono";
b = "";
cont = a.length - 1;
for (let i = 0; i < a.length; i++) {
    b += a[cont];
    cont--

}
a = b;
console.log(a)

//5 Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione
// delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
a = "ciao";
b = "sono alfio";
c = "";

for (let i = 0; i < a.length; i++) {
    c += (a[i])

} c += (" ")
for (let i = 0; i < b.length; i++) {
    c += (b[i])
}

console.log(c)

// ----------------------ave cesare


let stringa = "ciao";
console.log(stringa.charCodeAt(0))

b = "";
let codifica = "";

for (let i = 0; i < stringa.length; i++) {
    codifica += (String.fromCharCode(stringa.charCodeAt(i) + 4))

}
console.log(codifica)
//---------------------------------------
//7.strighe) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa che contiene solo le vocali 
//presenti nella stringa originale

stringa = "ciao sono il genio della lampada";
b = "";
for (let i = 0; i < stringa.length; i++) {
    switch (stringa[i]) {
        case "a":
            b += "a"
            break;
        case "e":
            b += "e"
            break;
        case "i":
            b += "i"
            break;
        case "o":
            b += "o"
            break;
        case "u":
            b += "u"
            break;
    }

}
console.log("esercizio 7  " + b)

//8.3) Scrivere una funzione che accetti due stringhe come input e restituisca una nuova stringa che contiene solo 
 //    i caratteri comuni alle due stringhe.
stringa = "ciao come stai";
b = "ciao,bene grazie, e tu come va";
c = ""

for (i = 0; i < b.length; i++) {
    if (stringa.includes(b[i])) {
        //controllo se esiste gia quel carattere
        if (!c.includes(b[i])) {
            c += (b[i])

        }
    }
}
console.log(c)

//9) Scrivere una funzione che accetti un array di stringhe come input e restituisca la stringa più lunga presente nell'

array = ["che", "bellissima", "giornata", "oggi", "spettacolare", "davvero"];
c = array[0];

for (i = 1; i < array.length; i++) {
    if (array[i].length > c.length) {
        c = array[i];
    }
}
console.log(c)

//10) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa 
//    in cui le vocali sono sostituite da un carattere speciale, ad esempio "*", e le consonanti sono convertite in lettere maiuscole

stringa = "eppure";


function prova(a) {
    let vocali = ["A", "E", "I", "O", "U"]
    a = a.toUpperCase();
    for (i = 0; i < vocali.length; i++) {
        a = a.replaceAll(vocali[i], "*");

    }
    console.log(a)
    return a;
}

b = prova(stringa)
console.log(b)



//11) Scrivi programma che accetti una stringa come input e restituisca una nuova stringa in cui
//    ogni parola è invertita al contrario, mantenendo l'ordine delle parole. Ad esempio, "ciao mondo" diventa "oaic odnom"
stringa = "ciao mondo"
b = [...stringa]


console.log(b.reverse().join(""))//unisce 

//12) Scrivere programma che accetti una stringa come input e restituisca una nuova stringa in cui i caratteri sono 
//    ordinati in ordine crescente secondo il loro codice ASCII

stringa = "ciao mondo"
b=[];



for (i = 0; i < stringa.length; i++) {
    b.push(stringa.charCodeAt(i));
    b.sort()
   
}

console.log(b);

//////////////////////////////      funzioni ///////////////////////////
console.log("///////////////esercizi funzioni///////////////");



//Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.

 
function moltiplicazione(a,b){
     moltiplicazione=a*b;
     return moltiplicazione;

}

console.log(moltiplicazione(5,2))

//Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.

function eta(a){
    a=a*365
    return a;
}
console.log(eta(20))

//Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.

function confronta(a){
    if(a>0)
    console.log("false")
    else{
        console.log("true")
    }
    
}
confronta(-2)

// In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali.
//  L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
// L'agricoltore ha contato i suoi animali e ti dà un subtotale per ogni specie. Devi implementare una funzione che
//  restituisca il numero totale di zampe di tutti gli animali. 
// Esempi:
// numeroZampe(2, 3, 5) ➞ 36
// numeroZampe(1, 2, 3) ➞ 22
// numeroZampe(5, 2, 8) ➞ 50

function zampe(a,b,c){
    a=a*2
    b=b*4
    c=c*4
    console.log( a+b+c)
}

zampe(5,2,8)

//fiammiferi


//Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.
// Esempi:
// sommaDaUnUnicoNumero(4) ➞ 10
// sommaDaUnUnicoNumero(13) ➞ 91
// sommaDaUnUnicoNumero(600) ➞ 180300

function sommaDaUnUnicoNumero(a){
    for(let i=a-1;i>0;i--){
        a=a+i;
    }
    console.log(a)
    return a;
}

sommaDaUnUnicoNumero(600)









