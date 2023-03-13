// 1) moltiplicazione di due numeri
console.log("1) moltiplicazione di due numeri");
function moltiplicazione(a, b) {
    if (b) {
        console.log("b inserito");
    } else {
        console.log("b NON inserito");
        return;
    }
    return a * b;
}

console.log(moltiplicazione(3));
console.log(moltiplicazione(-3, -6));
console.log(moltiplicazione(7, 3));

// 2) convertire anni in giorni
console.log("2) convertire anni in giorni");
function anniInGiorni(anni) {
    return anni * 365;
}
console.log(anniInGiorni(65));
console.log(anniInGiorni(0));
console.log(anniInGiorni(20));

// 3) minore o uguale a zero
console.log("3) minore o uguale a zero");
function minoreUgaleAZero(a) {
    if (a <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(minoreUgaleAZero(5));
console.log(minoreUgaleAZero(0));
console.log(minoreUgaleAZero(-2));

// 4) problema della fattoria
console.log("4) problema della fattoria");
function numeroZampe(polli, mucche, maiali) {
    return polli * 2 + (mucche + maiali) * 4;
}
console.log(numeroZampe(2, 3, 5));
console.log(numeroZampe(1, 2, 3));
console.log(numeroZampe(5, 2, 8));

// 5) casa di fiammiferi
// 1 casa = 6 fiammiferi (1*5 + 1 = 6)
// 2 case = 11 fiammiferi (2*5 + 1 = 11)
// 3 case = 16 fiammiferi (3*5 + 1 = 16)

console.log("5) casa di fiammiferi");
function numeroDiFiammiferi(step) {
    return step == 0 ? 0 : step * 5 + 1;
}
console.log(numeroDiFiammiferi(0)); // se step=0 restituisce 0
console.log(numeroDiFiammiferi(1));
console.log(numeroDiFiammiferi(4));
console.log(numeroDiFiammiferi(87));

// 6) somma i numeri da un unico numero
console.log("6) somma i numeri da un unico numero");
function sommaDaUnUnicoNumero(numero) {
    let somma = 0;
    for (let i = numero; i > 0; i--) {
        somma += i;
    }
    return somma;
}
console.log(sommaDaUnUnicoNumero(4));
console.log(sommaDaUnUnicoNumero(13));
console.log(sommaDaUnUnicoNumero(600));

// 7) trova lo sconto
console.log("7) trova lo sconto");
function trovaSconto(prezzo, sconto) {
    return prezzo - (prezzo * sconto) / 100;
}

console.log(trovaSconto(1500, 50));
console.log(trovaSconto(89, 20));
console.log(trovaSconto(100, 75));

// 8) posizione nell'alfabeto
console.log("8) posizione nell'alfabeto ");
function letteraInPosizione(posizione) {
    if (posizione >= 1 && posizione <= 26 && posizione % 1 == 0) {
        return String.fromCharCode(posizione + 96);
    } else {
        return "invalid";
    }
}

console.log(letteraInPosizione(1));
console.log(26.0);
console.log(letteraInPosizione(26.0));
console.log(letteraInPosizione(0));
console.log(letteraInPosizione(4.5));

// 9) calcolatrice di base
console.log("9) calcolatrice di base");
function calcolatrice(a, operazione, b) {
    switch (operazione) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
        case "x":
            return a * b;
        case "/": {
            return b == 0 ? "Impossibile dividere per 0!" : a / b;
        }
    }
}

console.log(calcolatrice(2, "/", 0));
console.log(calcolatrice(2, "+", 2));
console.log(calcolatrice(2, "*", 2));
console.log(calcolatrice(2, "x", 2));
console.log(calcolatrice(4, "/", 2));

// somma di n numeri
console.log("10) somma di elementi array ");
function sommaElementiArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma = somma + array[i];
    }
    return somma;
}

console.log(sommaElementiArray([1, 2, 4]));
console.log(sommaElementiArray([4, 2, 10, 2]));
console.log(sommaElementiArray([1]));

// quante volte è vero
console.log("11) quante volte è vero");
function quantiTrue(array) {
    let contatore = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            contatore++;
        }
    }
    return contatore;
}
console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([false, false, false, false]));
console.log(quantiTrue([]));

// piegare un pezzo di carta
console.log("12) piegare un pezzo di carta");
function spessore(numero) {
    return 0.0005 * 2 ** numero;
}
console.log(spessore(1));
console.log(spessore(4));
console.log(spessore(21));

// validare un'e-mail
console.log("13) validare un'e-mail");
function validareEmail(email) {
    if (
        email.indexOf("@") < 1 ||
        email.indexOf(".") < 0 ||
        email.indexOf("@") > email.lastIndexOf(".")
    )
        return false;
    return true;
}

console.log(validareEmail("@gmail.com"));
console.log(validareEmail("hello.gmail@com"));
console.log(validareEmail("mario.rossi@gmail.com"));
console.log(validareEmail("gmail"));
console.log(validareEmail("hello@gmail"));
console.log(validareEmail("hello@edabit.com"));

// sasso carta forbici
console.log("14) sasso carta forbici");
function sassoCartaForbici(p1, p2) {
    return p1 == p2
        ? `It's a draw`
        : p1 == `Rock` && p2 == "Scissors"
        ? `The winner is p1`
        : p1 == `Rock`
        ? `The winner is p2`
        : p1 == `Paper` && p2 == `Scissors`
        ? `The winner is p2`
        : p1 == `Paper` && p2 == `Rock`
        ? `The winner is p1`
        : p1 == `Scissors` && p2 == `Paper`
        ? `The winner is p1`
        : `The winner is p2`;
}

console.log(sassoCartaForbici("Rock", "Paper"));
console.log(sassoCartaForbici("Scissors", "Paper"));
console.log(sassoCartaForbici("Paper", "Paper"));

// quanti giorni tra due date
console.log("15) quanti giorni tra due date");
function quantiGiorni(primaData, secondaData) {
    const unGiorno = 24 * 60 * 60 * 1000;
    return (diffDays = Math.round(
        Math.abs((primaData - secondaData) / unGiorno)
    ));
}

console.log(quantiGiorni(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(
    quantiGiorni(new Date("December 29, 2018"), new Date("January 1, 2019"))
);
console.log(quantiGiorni(new Date("July 20, 2019"), new Date("July 30, 2019")));

// rimuovere i duplicati di un array
console.log("16) rimuovere i duplicati di un array");

function rimuoviDuplicati(array) {
    const arrayNuovo = [];

    for (let i = 0; i < array.length; i++) {
        let duplicato = false;

        for (let j = 0; j < i; j++) {
            if (array[i] === array[j]) {
                duplicato = true;
                break;
            }
        }

        if (!duplicato) {
            arrayNuovo.push(array[i]);
        }
    }

    return arrayNuovo;
}
console.log(rimuoviDuplicati([1, 0, 1, 0]));
console.log(rimuoviDuplicati(["The", "big", "cat"]));
console.log(rimuoviDuplicati(["John", "Taylor", "John"]));
