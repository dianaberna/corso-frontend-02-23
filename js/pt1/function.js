// 1) Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
function moltiplica(num1, num2) {
    return num1 * num2;
}
console.log(moltiplica(3, 2));
console.log(moltiplica(-3, -6));
console.log(moltiplica(7, 3));

// 2) Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
function convertireAnniInGiorni() {
    const giorniInUnAnno = 365.25;
    const etaInGiorni = etaInAnni * giorniInUnAnno;
    return etaInGiorni;
}

const etaInAnni = 65;
const etaInGiorni = convertireAnniInGiorni(etaInAnni);
console.log(etaInGiorni);

// 3) Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
function controllaNumero(numero) {
    if (numero <= 0) {
        return true;
    } else {
        return false
    }
}
console.log(controllaNumero(5));
console.log(controllaNumero(0));
console.log(controllaNumero(-2));

