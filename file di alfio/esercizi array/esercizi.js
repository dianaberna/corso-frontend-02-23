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
stringa = "ciao mondo come va"
// b = "";
// c = "";
// cont = stringa.length-1;
let cont2 = 0;
array = [];
array[cont2] = "";
b = "";
for (i = stringa.length - 1; i >= 0; i--) {

    if (stringa[i] == " ") {

        cont2++;
        array[cont2] = "";

    } else {
        array[cont2] += (stringa[i])
    }
}
console.log(array)
array = String(array)
array = array.replaceAll(",", " "); //bisogna fare questa sostituzione se no non te lo da !important

console.log(array)

// for(let i=0;i<array.length;i++){ 
//     b+=array[i]+=" ";


// }
// console.log(b+" senza metodi")



// for (i = stringa.length-1; i >= 0; i--) {

//     if (stringa[i] == " ") {
//         break;
//     } else {
//         b += stringa[i];
//         cont--
//     }
// }
// for (i = cont-1; i>=0; i--) {
//     c += stringa[i];
//     cont--
// }


// let insieme=c+" "+b;
// console.log(insieme);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

b = [...stringa]


console.log(b.reverse().join(""))//unisce 








//12) Scrivere programma che accetti una stringa come input e restituisca una nuova stringa in cui i caratteri sono 
//    ordinati in ordine crescente secondo il loro codice ASCII

stringa = "ciao mondo"
b = [];



for (i = 0; i < stringa.length; i++) {
    b[i] = (stringa.charCodeAt(i));
    b.sort(function (a, b) {

        return a - b
    })

    console.log("prima del sort" + b[i]);
}

console.log(b);








//////////////////////////////      funzioni ///////////////////////////
console.log("///////////////esercizi funzioni///////////////");



//Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.


function moltiplicazione(a, b) {
    moltiplicazione = a * b;
    return moltiplicazione;

}

console.log(moltiplicazione(5, 2))

//Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.

function eta(a) {
    a = a * 365
    return a;
}
console.log(eta(20))

//Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.

function confronta(a) {
    if (a > 0)
        console.log("false")
    else {
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

function zampe(polli, mucche, maiali) {
    polli = polli * 2
    mucche = mucche * 4
    maiali = maiali * 4
    console.log(polli + mucche + maiali)
}

zampe(5, 2, 8)

//fiammiferi
// numeroDiFiammiferi(1) ➞ 6
// numeroDiFiammiferi(4) ➞ 21
// numeroDiFiammiferi(87) ➞ 436

function fiammiferi(a) {
    if (a <= 0) {
        console.log(0 + " fiammiferi")

    }
    if (a == 1) {
        console.log(a * 6 + " fiammiferi")

    }
    if (a > 1) {
        console.log(a * 5 + 1 + " fiammiferi")

    }
}
fiammiferi(2)



//Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato
// alla funzione. Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.
// Esempi:
// sommaDaUnUnicoNumero(4) ➞ 10
// sommaDaUnUnicoNumero(13) ➞ 91
// sommaDaUnUnicoNumero(600) ➞ 180300

function sommaDaUnUnicoNumero(a) {
    for (let i = a - 1; i > 0; i--) {
        a = a + i;
    }
    console.log(a)
    return a;
}

sommaDaUnUnicoNumero(600)

//Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto
// come numeri interi e restituisce il prezzo finale dopo lo sconto.
// trovaSconto(1500, 50) ➞ 750
// trovaSconto(89, 20) ➞ 71.2
// trovaSconto(100, 75) ➞ 25

function sconto(prezzo, sconto) {
    sconto = prezzo * sconto / 100;
    console.log(prezzo - sconto)
}


sconto(100, 75)


//Dato un numero compreso tra 1 e 26 (vedere codice ASCII), restituisci quale lettera si trova in quella posizione dell'alfabeto. 
//Restituisce "non valido" se il numero fornito non rientra in tale intervallo o non è un numero intero.


function asci(numero) {

    if (numero < 1 || numero > 26  /*   ||usa modulo%   */) {
        console.log("il numero inserito non è valido")

    } else {
        console.log("questo numero corrisponde alla lettera " + String.fromCharCode(numero + 96))

    }
}
asci(25.1)

//Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà un calcolo con i numeri indicati.
// calcolatrice(2, "+", 2) ➞ 4
// calcolatrice(2, "*", 2) ➞ 4
// calcolatrice(4, "/", 2) ➞ 2

function calcolatrice(numero, operatore, numero2) {

    switch (operatore) {
        case "+":

            console.log(numero + numero2)
            break;
        case "-":
            console.log(numero - numero2)
            break;
        case "*":
            console.log(numero * numero2)
            break;
        case "/":
            if (numero2 == 0) {
                console.log("Impossibile dividere per 0!")
                break;
            } else {
                console.log(numero / numero2)
                break;
            }
    }
}

calcolatrice(6, "/", 2)


//Crea una funzione che restituisce la somma di tutti i valori di un array.
array = [4, 2, 10, 2]

function valoriArray(oggetto) {
    tot = 0;
    for (let i = 0; i < oggetto.length; i++) {
        tot += oggetto[i];

    }
    console.log("somma valori array = " + tot)
}
valoriArray(array)

//Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
array = [true, false, true, false, true]

function veroFalso(oggetto) {
    tot = 0;
    for (let i = 0; i < oggetto.length; i++) {
        if (array[i] == true)
            tot++

    }
    console.log("i valori true nell'array sono = " + tot)
}
veroFalso(array)

// Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta dopo averlo piegato n numero di volte.
//  La carta inizia con uno spessore di 0,5 mm.
// spessore(1) ➞ "0.001m" // carta piegata una volta = 1mm (0.001m=0,5*1000*2) 
// spessore(4) ➞ "0.008m"  // carta piegata 4 volte = 8mm (cioè 0.008m)
// spessore(21) ➞ "1048.576m" // carta piegata 21 volte = 1048576mm (cioè 1048.576m)

function carta(oggetto) {
    let spessore = 0.5

    //let calcolo = spessore   *      Math.pow(2, oggetto)
    let calcolo = spessore *2** oggetto 

    //            0.5       *oggetto al quadrato
    console.log(calcolo / 1000)
}
carta(21)

//ogetto**2   metodo al quadrato




//Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, a seconda della valutazione.
// La stringa deve contenere un carattere @.
// La stringa deve contenere un . carattere.
// La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
// Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.


function email(a) {
    cont = 0;
    cont2 = 0;
    array["@gmail","@hotmail"]
    for (let i = 1; i < a.length; i++) {

        switch (a[i]) {
            case "@":
                cont++;
                break;
            case ".":
                cont2++;
                break;
        }
    }

    if (cont == 1 && cont2 >= 1) {
        console.log("email valida")
        for (let i = 1; i < a.length; i++){}



    } else {
        console.log("email non valida")
    }

}

email("battiato3@gmail.com")










//Crea la funzione che accetta un array con oggetti e restituisce la somma dei budget delle persone.
console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
);

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
);

function budgetTotale(array) {
    let somma = 0;
    array.forEach(element => {
        somma += element.budget

    });
    return somma;
}

//Crea una funzione che prenda un array di oggetti (alimentari) che calcoli il prezzo totale e lo restituisca
// come un numero. Un oggetto alimentare ha un prodotto, una quantità e un prezzo, ad esempio:

console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "cereals", quantity: 1, price: 2.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "eggs", quantity: 12, price: 0.10 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "chocolate", quantity: 1, price: 0.10 },
        { product: "lollipop", quantity: 1, price: 0.20 },
    ])
);

function prezzoTotaleAlimenti(array) {
    let somma = 0;
    array.forEach(element => {
        somma += element.quantity*element.price

    });
    return somma.toFixed(2);
}
