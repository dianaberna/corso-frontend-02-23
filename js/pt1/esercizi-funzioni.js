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

