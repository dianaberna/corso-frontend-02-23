
//Funzione Moltiplicazione
function Moltiplicazione(a, b){
    let result = a * b;
    return result;
}

console.log(Moltiplicazione(2, 8));


//Funzione anni in giorni
function YearToDay(anni){
    let giorni = anni * 365;
    return giorni;
}

console.log(YearToDay(65));



//Minore Uguale
function minoreUguale(a){
    if(a <= 0)
        return true;
    else
        return false;
}

console.log(minoreUguale(-1));



//Fattoria
function Factory(a, b, c){
    let result = a + b + c;
    return result;
}

console.log(Factory(4, 2, 3));


//Fiammifei
function Fiammiferi(a) {
    let CasaFiammiferi = 6;
    let result = CasaFiammiferi * a - (a -1);
    return result;
}

console.log(Fiammiferi(87));


//ES. Somma i numeri da un unico numero
function sommaUnico(a){
    let result;
    let cont = 0;
    for(let i = 1; i <= a; i++){
        result = i + cont;
        cont = result;
    }
    return result;
}
console.log(sommaUnico(4));
