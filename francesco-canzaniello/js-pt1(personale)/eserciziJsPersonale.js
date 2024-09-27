// es 1 e 2
let vettore1 = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
n = 0;
sommVettore = 0;
for (let index = 0; index < vettore1.length; index++) {
    console.log(vettore1[index]);
    sommVettore += vettore1[index];
}
console.log(sommVettore);

// es 3
sommaPositivi = 0;
for (i = 0; i < vettore1.length; i++) {
    if (vettore1[i] > 0) {
        sommaPositivi += vettore1[i];
    }
}
console.log(sommaPositivi);
// es 4
sommaDispari = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] % 2 != 0) {
        sommaDispari += vettore1[index];
    }
}
console.log(sommaDispari);
//es 5
sommaIndicePari = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (index % 2 == 0) {
        sommaIndicePari += vettore1[index];
    }
}
console.log(sommaIndicePari);

//es 6
let cont = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] == 2) {
        cont += 1;
    }
}
console.log("Il numero 2 compare " + cont + " volte");

//es 7
cont = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] >= 0) {
        cont += 1;
    }
}
console.log("I numeri positivi sono: " + cont);

//es 8

let max = 0;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] > max) {
        max = vettore1[index];
    }
}
console.log("Il valore massimo è: " + max);

//es 9

let min = 10000000;
for (let index = 0; index < vettore1.length; index++) {
    if (vettore1[index] < min) {
        min = vettore1[index];
    }
}
console.log("Il valore minimo è: " + min);

//es 17

array1 = [1, 2, 2, 3, 4];
array2 = [4, 2, 2, 4];
let metaArray1 = array1.length / 2;
for (let index = 0; index < metaArray1; index++) {
    if (array1[index] != array1[array1.length - index - 1]) {
        console.log("L'array1 non è palindromo");
        break;
    } else {
        console.log("Valori uguali");
    }
}

let metaArray2 = array2.length / 2;
for (let index = 0; index < metaArray2; index++) {
    if (array2[index] != array2[array2.length - index - 1]) {
        console.log("L'array2 non è palindromo");
        console.log(array2[index], array2[array2.length - index - 1]);
    } else {
        console.log(array2[index], array2[array2.length - index - 1]);
    }
}

console.log(array1.length && array2.length);

// es cifrario di cesare // ascii da 97 a 122

let stringaDaCifrare = "mare";
let spostamento = 3;
let stringaCifrata = "";
let numeroAscii;
let uscita = true;

for (let index = 0; index < stringaDaCifrare.length; index++) {
    numeroAscii = stringaDaCifrare.charCodeAt(index);
    if (numeroAscii + spostamento > 122) {
        diff = 122 - numeroAscii;
        numeroAscii = 97 + spostamento - diff - 1;
        stringaCifrata += String.fromCharCode(numeroAscii);
    } else {
        numeroAscii += spostamento;
        stringaCifrata += String.fromCharCode(numeroAscii);
    }
}
console.log(stringaCifrata);

//es 1 stringhe
let parola = "precipitevolissimevolmente";
let conteggio = 0;

for (let index = 0; index < parola.length; index++) {
    if (parola[index] == "e") {
        conteggio++;
    }
}

// es Moltiplicazione di due numeri

function moltiplicazione(num1, num2) {
    return num1 * num2;
}

console.log(moltiplicazione(3, 5));

// Convertire anni in giorni

function anniInGiorni(anni) {
    return anni * 365;
}
console.log(anniInGiorni(3));

// es minore o uguale a zero

function minoreUgualeAZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(minoreUgualeAZero(5));

// es il problema della fattoria

function numeroZampe(pollo, mucca, maiali) {
    return pollo * 2 + mucca * 4 + maiali * 4;
}
console.log(numeroZampe(2, 3, 5));

// es case di fiammiferi

function numeroDiFiammiferi(step) {
    if (step == 0) {
        return 0;
    } else if (step >= 1) {
        return 6 + (step - 1) * 5;
    } else {
        console.log("Errore!");
    }
}
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

// es somma i numeri da un unico numero

function sommaDaUnUnicoNumero(num) {
    let somma = 0;
    for (let index = 1; index <= num; index++) {
        somma += index;
    }
    return somma;
}
console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));

//es trova lo sconto

function trovaSconto(prezzo, sconto) {
    return Number.parseFloat(prezzo * (sconto / 100)).toFixed(2);
}

console.log("Il prezzo scontato è: " + trovaSconto(1500, 50));

// es lettera in posizione
function letteraInPosizione(num) {
    num += 96;
    let cont = 0;
    if (num >= 97 && num <= 122 && num % 1 == 0) {
        return String.fromCharCode(num);
    } else {
        return "Invalid";
    }
}

console.log(letteraInPosizione(4.1));
console.log(letteraInPosizione(4.0));
console.log(letteraInPosizione(4));

// es calcolatrice

function calcolatrice(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            if (b != 0) {
                return num1 / num2;
            } else {
                return "Non è possibile dividere per zero";
            }
        default:
            break;
    }
}

console.log(calcolatrice(2, "/", 3));

function sommaElementiArray(array) {
    let somma = 0;
    for (let index = 0; index < array.length; index++) {
        somma += array[index];
    }
    return somma;
}

console.log(sommaElementiArray([1, 2, 3, 4]));
