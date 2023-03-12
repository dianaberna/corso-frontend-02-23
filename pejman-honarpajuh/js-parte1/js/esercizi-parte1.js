let newArray = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
let i = 0;
let dispari = 0;

//esercizio 1 Stampare tutti gli elementi dell’array → 2, 6, 9, 10, -2, -3, 0, 2, 5, 1

console.log(newArray);

//esercizio 2 Stampare la somma di tutti gli elementi dell’ array → 30
let totale = 0;
for (let i = 0; i < newArray.length; i++) {

    totale = newArray[i] + totale;

} console.log("totale è:" + totale)

//esercizio 3 Stampare la somma dei soli elementi positivi → 35
let somma = 0;
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > 0) {
        somma = newArray[i] + somma;
    }
} console.log("somma dei numeri è:" + somma)

//esercizio 4 Stampare la somma dei soli elementi dispari 

for (let i = 0; i < newArray.length; i++) {

    if (newArray[i] % 2 !== 0) {                // newArray[i] % 2 == 1 ||  newArray[i] % 2 == -1
        dispari = dispari + newArray[i];
    }
}
console.log(" La somma dei numeri dispari è:" + dispari)


//esercizio 5 Stampare la somma dei soli elementi in indice/posizione pari

let pari = 0;

for (let i = 0; i < newArray.length; i = i + 2) {


    pari = pari + newArray[i];

}
console.log(" La somma dei numeri pari è:" + pari)

// esercizio 6 Stampare quante volte compare il numero 2
let cont = 0;
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == 2) {
        cont = cont + 1;
    }
}
console.log(" di 2 ci sono:" + cont + " " + "in queasta lista")

//esercizio 7 Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array → 8
let positivo = 0;
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] >= 0) {
        positivo = positivo + 1;
    }

}
console.log(" ci sono:" + positivo + " " + "in queasta lista")

//esercizio 8 Stampare il numero massimo (senza usare funzioni matematiche) → 10
let Max = newArray[0];
for (let i = 0; i < newArray.length; i++) {

    if (Max <= newArray[i]) {
        Max = newArray[i];
    }

}
console.log(" il numero massimo è:" + Max)
//esercizio 9 Stampare il numero minimo → -3
let Min = newArray[0];
for (let i = 0; i < newArray.length; i++) {

    if (Min >= newArray[i]) {
        Min = newArray[i];
    }

}
console.log(" il numero minimo è:" + Min)

//esercizio 10  Inserire in un nuovo array solo gli elementi negativi 🤯 → [-2, -3]
let myArray = [];

for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] < 0) {
        myArray.push(newArray[i]);
    }

}
console.log(myArray)

//esercizio 11 Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]

let arreydoppio = [];

for (let i = 0; i < newArray.length; i++) {

    arreydoppio.push(newArray[i] * 2);

}
console.log(arreydoppio)

//esercizio 12 Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log('----esercizio 12 metodo mio')
let array1 = [];
let array2 = [];
for (let i = 0; i < newArray.length; i++) {

    array1.push(newArray[i]);
    array2 = newArray.concat(array1);

}
console.log(array2)
console.log('----esercizio 12 metodo 1')
let arraycont = [];
for (let j = 0; j <= 1; j++) {
    for (let i = 0; i < newArray.length; i++) {
        arraycont.push(newArray[i])

    }
} console.log(arraycont)


console.log('----esercizio 13 ')
//esercizio 13 Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2

for (let i = newArray.length - 1; i >= 0; i--) {
    console.log(newArray[i]);
}

// // array1 = [ 1, 2, 2, 3, 4] array2 = [4, 2, 2, 4]   
// 13) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 
// → [5, 4, 4, 7, 4]     

//esercizio 14  Creare un array3 con la somma degli elementi dell’array1 e dell’array2
let arrayone = [1, 2, 2, 3, 4];
let arraytwo = [4, 2, 2, 4];
let arraysomma = [];
// if(arrayone.length > arraytwo.length){
//     for(let i=0 ; i < arrayone.length ; i++){
//         if(arraytwo[i]){
//             arraysomma[i] = arrayone[i] + arraytwo[i];
//         }else{
//             arraysomma[i] = arrayone[i];
//         }
//     }
// }
// console.log(arraysomma)
console.log("metodo con push")
// for(let i=0 ; i < arrayone.length || i < arraytwo.length ; i++){
//     if(arraytwo[i] && arrayone[i]){
//         arraysomma.push(arrayone[i]+arraytwo[i])
//     }else if(!arraytwo[i]){
//         arraysomma.push(arrayone[i]);
//     }
//     else{
//         arraysomma.push(arraytwo[i]);
//        }
// }console.log(arraysomma)

console.log("metodo con if solo")
for (let i = 0; i < arrayone.length || i < arraytwo.length; i++) {
    arraysomma[i] = 0;
    if (arraytwo[i]) {
        arraysomma[i] = arraysomma[i] + arraytwo[i];
    }
    if (arrayone[i]) {
        arraysomma[i] = arraysomma[i] + arrayone[i];
    }
} console.log(arraysomma)


//esercizio 15 Creare un array3 con gli elementi (non la posizione) dispari di array1 e 
//gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4] 
console.log("prova 1 esercizio 15")
let arraymix = [];
for (let i = 0; i < arrayone.length; i++) {
    if (arrayone[i] % 2 == 1) {
        arraymix.push(arrayone[i]);
    }
}
for (let i = 0; i < arraytwo.length; i++) {
    if (arraytwo[i] % 2 == 0) {
        arraymix.push(arraytwo[i]);
    }
} console.log(arraymix)
//prova2
console.log("prova 2 esercizio 15")
let arraymisto = [];
for (let i = 0; i < arraytwo.length && i < arrayone.length; i++) {
    if (arrayone[i] % 2 == 1) {
        arraymisto.push(arrayone[i]);
    }
    if (arraytwo[i] % 2 == 0) {
        arraymisto.push(arraytwo[i]);
    }
} console.log(arraymisto)

//esercizio 16 Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1
// array2[i] = array2[i] / array1[lunghezza-i]
console.log("esercizio 16");
for (i = 0; i < arraytwo.length; i++) {
    arraytwo[i] = arraytwo[i] / arrayone[arrayone.length - 1 - i]
} console.log(arraytwo)

/*
[]= 4 / A[5-1-0] --> 4/A[4]--> 4/4 --> 1
[]= 2 / A[5-1-1] --> 4/A[3]--> 2/3 --> 0,6666
[]= 2 / A[5-1-2] --> 4/A[2]--> 2/2 --> 1
[]= 4 / A[5-1-3] --> 4/A[1]--> 4/2 --> 2
*/


//esercizio 17 Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
// // arrayone = [ 1, 2, 2, 3, 4] arraytwo = [4, 2, 2, 4]
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [4, 2, 2, 4];

console.log("Array2")
let flag = 0;
for (let i = 0; i < arr2.length / 2; i++) {
    if (arr2[i] !== arr2[arr2.length - i - 1]) {
        flag = 1;
        break
    }
}
if (flag == 1) {
    console.log("non palindrome");
}
else {
    console.log(" palindrome");
}
console.log("Array1")
for (let i = 0; i < arr1.length / 2; i++) {
    if (arr1[i] !== arr1[arr1.length - i - 1]) {
        flag = 1;
        break
    }
}
if (flag == 1) {
    console.log("non palindrome");
}
else {
    console.log(" palindrome");
}

//        /* ********/ Esercizi Nuovi********/ */

// esercizio 1 Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 
console.log("Esercizio 1 stringhe")
let parola = "precipitevolissimevolmente";
let conta = 0;
for (i = 0; i < parola.length; i++) {
    if (parola[i] == "e") {
        conta++;
    }
} console.log(conta)


console.log("metodo1 esercizio 2")
// esercizio 2 Scrivere un programma che verifica  se due stringhe sono palindrome 
let parola1 = "anlna";
let parola2 = "anlna";

let bool = 0;
for (i = 0; i < parola1.length / 2; i++) {
    if (parola1[i] !== parola1[parola1.length - i - 1]) {
        bool = 1;
        break;
    }
}
if (bool == 1) {

    console.log("non è palindrome");
}
else {
    console.log(" palindrome");
}


console.log("metodo2 Esercizio 2")
let carattere;
let parolaInversa = '';
for (let i = parola2.length - 1; i >= 0; i--) {
    carattere = parola2[i];
    console.log(carattere);
    parolaInversa += carattere;
    // console.log(carattere);
    console.log(parolaInversa);
}

// console.log(parolaInversa);
// console.log(typeof parolaInversa);

if (parola2 == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}
console.log("Esercizio 2 ---- paragone tra due stringhe")
for (let i = 0; i < parola1.length; i++) {
    if (parola1.length != parola2.length) {
        bool = 1;
        break;
    }
    if (parola1[i] != parola2[parola2.length - i - 1]) {
        bool = 1;
        break
    }

} if (bool == 1) {
    console.log('Le due stringhe non sono palindrome');
} else {
    console.log('Le due stringhe sono palindrome');
}

//




console.log("esercizio 3")
// esercizio 3 Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti
//es. mare in categoria → la parola mare non esiste in categoria
let p1 = "piroscafo";
let p2 = "scafo";
control = false;
for (let i = 0; i < p1.length; i++) {
    if (p1[i] == p2[0]) {
        for (let j = 0; j < p2.length; j++) {
            if (p1[i + j] == p2[j]) {
                control = true;
            } else {
                control = false;
            }
        }
    }
} if (control) {
    console.log("é compreso");
} else {
    console.log("non é compreso");
}

console.log("esercizio 3----metodo 2")

console.log(p1.includes(p2));



// } console.log(conparole)


console.log("metodo1 esercizio 4")
// esercizio 4 Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
let parola3 = "ciao";
let parolainverso = [];
let n = 0;
for (i = parola3.length - 1; i >= 0; i--) {
    parolainverso[n] = parola3[i];
    n++;

} console.log(String(parolainverso))
//metodo 2
console.log("metodo2 esercizio 4")
let p3 = "ciao";
let p3reverse = "";
for (i = p3.length - 1; i >= 0; i--) {
    p3reverse = p3reverse + p3[i];
} console.log(p3reverse)
//metodo 3
console.log("metodo3 esercizio 4")
p3reverse = [...p3];
console.log(p3reverse)
p3reverse.reverse()
console.log(String(p3reverse))



console.log("------------ esercizio 5")
// esercizio 5 Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è
// la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
// //risultato = [];
// for (let i = 0; i < array.length; i++) {
//     risultato[i] = array[i]; //primo array - posizione 0
//     risultato[array.length + i] = array[i]; //aggiunta secondo array - posizione
// }
// console.log("metodo senza il push e un for");
// console.log(risultato);

str1 = "sono";
str2 = "io";
let input = "";
for (let i = 0; i < str1.length && i < str2.length; i++) {
    input = str1 + " " + str2;
} console.log(input)
console.log("------------ esercizio 5---metodo 2")
input = str1.concat(str2);
console.log(input);
console.log("------------ esercizio 5---metodo 3")
let input2 = "";
input2 = [...str1, ...str2];
// let input1 = input2.joine("");
console.log(input2);


console.log("------------ esercizio 6-----cifrario di Cesare ")
//esercizio 6 Scrivere un programma che sviluppi il cifrario di Cesare 🤯 🤯 
function codicAsci(a){
    let cont = ""
    for(let i=0; i<a.length ; i++){
        cont += (String.fromCharCode(a.charCodeAt(i)+5))
}
return cont
}
console.log(codicAsci('ciao'))


console.log("------------ esercizio 7---metodo 1")
//7) Scrivere una funzione che accetti una stringa come input e restituisca una nuova 
//stringa che contiene solo le vocali presenti nella stringa originale
//  const a = "a";
//  const e = "e";
//  const letterai = "i";
//  const o = "o";
//  const u = "u";
let word = "miracolosamente";
let wordvocal = " ";
// let vocali = ["a","e","i","o","u"]
// for(let i=0 ; i<word.length ; i++){
//    if(word[i] == vocali[i] ){
//     wordvocal += (word[i]);
//    }
// }console.log(wordvocal)
console.log("------------ esercizio 7---metodo 2")
flga = true
flge = true
flgi = true
flgo = true
flgu = true
for (i = 0; i < word.length; i++) {
    /* if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
        wordvocal += (word[i]);
    } */


    if (word[i] == "a" && flga) {
        wordvocal += (word[i]);
        flga = false
    }
    if (word[i] == "e" && flge) {
        wordvocal += (word[i]);
        flge = false
    }
    if (word[i] == "i" && flgi) {
        wordvocal += (word[i]);
        flgi = false
    }
    if (word[i] == "o" && flgo) {
        wordvocal += (word[i]);
        flgo = false
    }
    if (word[i] == "u" && flgu) {
        wordvocal += (word[i]);
        flgu = false
    }

} console.log(wordvocal)
console.log("------------ esercizio 7---metodo 3")
// let wordvocal1 = " ";
// for (i = 0; i < word.length; i++) {
//     if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
//         wordvocal1 += (word[i]);
//         // wordvocal1.includes("a")
//         wordvocal1.includes("a","e","i","o","u")
//         console.log(wordvocal1)
//     }

// } console.log(wordvocal1)

//  for(i=0 ; i<word.length ; i++){
//         if(word[i]== "a"){
//            wordvocal =  "a";
//            console.log(wordvocal)
//         }
//         if(word[i]== "e"){
//             wordvocal =  "e"
//             console.log(wordvocal)
//          }
//         if(word[i]== "i"){
//             wordvocal =  "i"
//             console.log(wordvocal)
//          }
//         if(word[i]== "o"){
//             wordvocal =  "o"
//             console.log(wordvocal)
//          }
//         if(word[i]== "u"){
//             wordvocal =  "u"
//             console.log(wordvocal)
//          }
//  }

//8) Scrivere una funzione che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri
//comuni alle due stringhe.
console.log("------------ esercizio 8---metodo 1")
//  function Caratteriuguali(){
let st1 = "palese";
let st2 = "ese";
let st3 = "";
for (let i = 0; i < st1.length; i++) {
    if (st2.includes(st1[i])) {
        st3 += st1[i]
    }
} console.log(st3);


//  }

//9) Scrivere una funzione che accetti un array di stringhe come input e restituisca la stringa più lunga presente nell'array
console.log("------------ esercizio 9---metodo 1")
let arrstring = ['ciao', 'bello', 'graziella']
let maymax = 0;
let res = "";
for (let i = 0; i < arrstring.length; i++) {

    if (arrstring[i].length > maymax) {
        maymax = arrstring[i].length;
        res = arrstring[i];
    }
} console.log(res)

//10) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa in cui le vocali sono sostituite
//da un carattere speciale, ad esempio "*", e le consonanti sono convertite in lettere maiuscole
console.log("------------ esercizio 10---metodo 1")
let mystring = "organizzazione"
let parolaspeciale = "";

for (i = 0; i < mystring.length; i++) {
    if (mystring[i] == "a") {
        parolaspeciale = (mystring.replaceAll("a", "*"));
        mystring = parolaspeciale;
        //  console.log(parolaspeciale)
    }
    if (mystring[i] == "e") {
        parolaspeciale = (mystring.replaceAll("e", "*"));
        mystring = parolaspeciale;
    }
    if (mystring[i] == "i") {
        parolaspeciale = (mystring.replaceAll("i", "*"));
        mystring = parolaspeciale;
    }
    if (mystring[i] == "o") {
        parolaspeciale = (mystring.replaceAll("o", "*"));
        mystring = parolaspeciale;
    }
    if (mystring[i] == "u") {
        parolaspeciale = (mystring.replaceAll("u", "*"));
        mystring = parolaspeciale;
    }
} console.log(parolaspeciale.toUpperCase())
console.log("------------ esercizio 10---metodo 2")

function caratterispeciali(mystring1) {
    let parolaspeciale = "";
    mystring1 = mystring1.toUpperCase();
    for (i = 0; i < mystring1.length; i++) {
        if (mystring1[i] == "A") {
            parolaspeciale = (mystring1.replaceAll("A", "*"));
            mystring1 = parolaspeciale;

        }
        if (mystring1[i] == "E") {
            parolaspeciale = (mystring1.replaceAll("E", "*"));
            mystring1 = parolaspeciale;
        }
        if (mystring1[i] == "I") {
            parolaspeciale = (mystring1.replaceAll("I", "*"));
            mystring1 = parolaspeciale;
        }
        if (mystring1[i] == "O") {
            parolaspeciale = (mystring1.replaceAll("O", "*"));
            mystring1 = parolaspeciale;
        }
        if (mystring1[i] == "U") {
            parolaspeciale = (mystring1.replaceAll("U", "*"));
            mystring1 = parolaspeciale;
        }
    }
    return mystring1;
} console.log(caratterispeciali("oddiomio"))
console.log("------------ esercizio 10---metodo 3")

function cartspeciali(x) {
    let vocali = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < vocali.length; i++) {
        x = x.replaceAll(vocali[i], "*")
    }
    x = x.toUpperCase();

    return x;

} console.log(cartspeciali("miodio"))


//11) Scrivi una funzione che accetti una stringa come input e restituisca una nuova stringa in cui ogni parola è invertita al contrario,
// mantenendo l'ordine delle parole. Ad esempio, "ciao mondo" diventa "oaic odnom"
console.log("------------ esercizio 11---metodo 1")
let frase = "ciao mondo bello";
let box = "";
let contrario = frase.split(" ");
console.log(contrario)

for (let i = 0; i < contrario.length; i++) {
    let temp = contrario[i]
    
    for (let j = temp.length - 1; j >= 0; j--) {
        box += temp[j]

    };
    //  let z = [...temp]
    //  box += z.reverse().join("")

    box += " "


} console.log(box)


//12) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa in cui i caratteri sono ordinati in ordine
//crescente secondo il loro codice ASCII
console.log("------------ esercizio 12---")
let parolax = "BORGO"
let contlist = [];
asciList = [
    { text: "A", value: 97 },
    { text: "B", value: 98 },
    { text: "C", value: 99 },
    { text: "D", value: 100 },
    { text: "E", value: 101 },
    { text: "F", value: 102 },
    { text: "G", value: 103 },
    { text: "H", value: 104 },
    { text: "I", value: 105 },
    { text: "J", value: 106 },
    { text: "K", value: 107 },
    { text: "L", value: 108 },
    { text: "M", value: 109 },
    { text: "N", value: 110 },
    { text: "O", value: 111 },
    { text: "P", value: 112 },
    { text: "Q", value: 113 },
    { text: "R", value: 114 },
    { text: "S", value: 115 },
    { text: "T", value: 116 },
    { text: "U", value: 117 },
    { text: "V", value: 118 },
    { text: "W", value: 119 },
    { text: "X", value: 120 },
    { text: "Y", value: 121 },
    { text: "Z", value: 122 },
]

for (let i = 0; i < parolax.length; i++) {

    let x = asciList.find(x => x.text == parolax[i])
    let y = x.text
   
    contlist.push(y)
    
   
} 

console.log(contlist.sort())


console.log("------------ esercizio 12---metodo2")

// function ordinAsci(a){
//     let cont = '';
//     for(let i=0; i<a.length ; i++){
//            cont += (a.charCodeAt([i]));
        
        
// }

// return cont
// }
// console.log(ordinAsci('ciao'))

