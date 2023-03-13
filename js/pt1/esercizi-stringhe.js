/*

*/

// 1) Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente
console.log("esercizio 1 -->");
parola = "precipitevolissimevolmente";
let contaE = 0;

for (let i = 0; i < parola.length; i++) {
    if (parola[i] === "e") {
        contaE++;
    }
}
console.log(contaE);

// 2) Scrivere un programma che verifica se due stringhe sono palindrome tra loro
console.log("esercizio 2 -->");
let stringa1 = "casa";
let stringa2 = "asac";

let sonoUgualiAlContrario = true;
for (let k = 0; k < stringa1.length; k++) {
    if (stringa1[k] !== stringa2[stringa2.length - 1 - k]) {
        sonoUgualiAlContrario = false;
    }
}

if (sonoUgualiAlContrario) {
    console.log("sono palindrome");
} else {
    console.log("non sono palindrome");
}

// con l'uso di funzioni js
// controlla se le stringhe sono uguali al contrario
if (stringa2.split("").reverse().join("") === stringa1) {
    console.log("sono palindrome");
} else {
    console.log("non sono palindrome");
}

// 3) Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti es. mare in categoria → la parola mare non esiste in categoria

console.log("esercizio 3 -->");
stringa = "piroscafo";
sottostringa = "scafo";
trovato = false;
// versione senza includes
for (let i = 0; i < stringa.length; i++) {
    // se il primo carattere della sottostringa coincide con il carattere corrente della stringa
    if (stringa[i] === sottostringa[0]) {
        // controlla se i caratteri successivi della stringa coincidono con quelli della sottostringa
        for (let j = 1; j < sottostringa.length; j++) {
            console.log(stringa[i + j], sottostringa[j]);
            if (stringa[i + j] == sottostringa[j]) {
                trovato = true;
            } else {
                trovato = false;
            }
        }
    }
}
// se la sottostringa è stata trovata
if (trovato) {
    console.log("la sottostringa è contenuta nella stringa");
} else {
    console.log("la sottostringa NON è contenuta nella stringa");
}

// versione con includes
let indice = stringa.indexOf(sottostringa);

if (indice !== -1) {
    console.log("la sottostringa è contenuta nella stringa");
} else {
    console.log("la sottostringa NON è contenuta nella stringa");
}

// versione con includes

if (stringa.includes(sottostringa)) {
    console.log("la sottostringa è contenuta nella stringa");
} else {
    console.log("la sottostringa NON è contenuta nella stringa");
}

// 4) Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.

console.log("esercizio 4 -->");
stringa = "ciao";
let nuovaStringa = "";
// scorri la stringa dal fondo verso l'inizio e concatena i caratteri
for (let i = stringa.length - 1; i >= 0; i--) {
    nuovaStringa += stringa[i];
}
console.log(stringa, nuovaStringa);

// versione con funzioni js

console.log("--");
console.log(stringa);
console.log(...stringa);
console.log([...stringa]);
console.log(Array(...stringa));
console.log([...stringa].reverse());
console.log(Array(...stringa).reverse());
nuovaStringa = [...stringa].reverse().join("");
console.log(stringa, nuovaStringa);
console.log("--");
// altra versione

console.log(String(Array(...stringa).reverse()));
nuovaStringa = String(Array(...stringa).reverse()).replaceAll(",", "");
console.log(stringa, nuovaStringa);

// 5) Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)

console.log("esercizio 5 -->");

stringa1 = "casa";
stringa2 = "pippo";
nuovaStringa = "";
// concatena la prima stringa
for (let i = 0; i < stringa1.length; i++) {
    nuovaStringa += stringa1[i];
}
// aggiungi lo spazio
nuovaStringa += " ";
// concatena la seconda stringa
for (let i = 0; i < stringa2.length; i++) {
    nuovaStringa += stringa2[i];
}

console.log(stringa1, stringa2, nuovaStringa);

// altro metodo più veloce
nuovaStringa = stringa1 + " " + stringa2;

console.log(stringa1, stringa2, nuovaStringa);

// 6) cifrario di cesare

console.log("esercizio 6 -->");

// 7) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa che contiene solo le vocali presenti nella stringa originale

console.log("esercizio 7 -->");
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

vocali = "";
trovato = false;

for (let i = 0; i < stringa.length; i++) {
    let carattere = stringa[i];
    if (
        carattere === "a" ||
        carattere === "e" ||
        carattere === "i" ||
        carattere === "o" ||
        carattere === "u"
    ) {
        trovato = false;
        for (let j = 0; j < vocali.length; j++) {
            if (vocali[j] == stringa[i]) {
                trovato = true;
            }
        }
        if (!trovato) {
            vocali += stringa[i];
        }
    }
}

console.log("senza duplicati e senza funzioni: " + vocali);

// 8) Scrivere una funzione che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri comuni alle due stringhe.

console.log("esercizio 8 -->");

str1 = "ciaossooaa";
str2 = "provaaoo";
comuni = "";

for (let i = 0; i < str1.length; i++) {
    let carattere = str1[i];
    trovato = false;
    for (let j = 0; j < str2.length; j++) {
        if (str2[j] == str1[i]) {
            trovato = true;
        }
    }

    if (trovato) {
        comuni += carattere;
    }
}

console.log("soluzione senza funzioni: " + comuni);

for (let i = 0; i < str1.length; i++) {
    let carattere = str1[i];
    if (str2.indexOf(carattere) !== -1 && comuni.indexOf(carattere) === -1) {
        comuni += carattere;
    }
}

console.log("soluzione con funzioni: " + comuni);

// 9) Scrivere una funzione che accetti un array di stringhe come input e restituisca la stringa più lunga presente nell'array

console.log("esercizio 9 -->");
let arrayStringhe = ["ciao", "prova", "palesemente", "ape"];
let stringaLunga = "";
for (let i = 0; i < arrayStringhe.length; i++) {
    if (arrayStringhe[i].length > stringaLunga.length) {
        stringaLunga = arrayStringhe[i];
    }
}

console.log(stringaLunga);
