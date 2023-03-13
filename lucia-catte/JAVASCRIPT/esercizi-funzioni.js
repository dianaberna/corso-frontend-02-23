
/*
DICHIARAZIONE FUNZIONE

parametri di default --> valori che la funzione utilizzerà se dall'esterno non viene assegnato un valore a quel parametro 
function nomeFunzione(parametro1, parametro2, etc){
    blocco/corpo della funzione

    return valoreLettoFuori --> la funzione terminerà 
}

RICHIAMO/INVOCO LA FUNZIONE
nomeFunzione(parametro1, parametro2, etc)
*/

console.log("-- ESERCIZI CON LE FUNZIONI --")

//ES.1: CREA UNA FUNZIONE CHE ACCETTA DUE NUMERI COME ARGOMENTI E NE RESTITUISCE LA MOLTIPLICAZIONE.
console.log("-- ES. 1: MOLTIPLICAZIONE --")


function calcoloMoltiplicazione (a, b){
    let moltiplicazione  = a * b;
    return moltiplicazione;
} 
console.log(calcoloMoltiplicazione(5,3)) // 5 * 3 = 15

//ES.2: CREARE UNA FUNZIONE CHE PRENDA L'ETA' IN ANNI E LA RESTITUISCA IN GIORNI.
console.log("-- ES. 2: CALCOLO ETA' --")


function calcoloEtà (a){
    let etàGiorni = a * 365;
    return etàGiorni;
}
console.log(calcoloEtà(18)) // 18 anni * 365 giorni = 6570 giorni

//ES.3: CREARE UNA FUNZIONE CHE ACCETTA UN NUMERO COME UNICO ARGOMENTO E RESTITUISCE TRUE SE
        //E' <= 0, ALTRIMENTI FALSO.
console.log("-- ES. 3: VERO O FALSO --")


function veroFalso (a){
    if(a <= 0){
        bool = true;
    }else{
        bool = false;
    }
    return bool;
    
} 
console.log(veroFalso(8)) // 8 è > di 0 e quindi è falso.

//ES. 4: In questa sfida, un contadino ti chiede di dirgli quante zampe si possono contare tra tutti i suoi animali. 
//       L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
console.log("-- ES. 4: AGRICOLTORE CONTA LE ZAMPE --")

function specie (polli, mucche, maiali){
    if ( polli >= 0 && mucche >= 0 && maiali >= 0 ){
     zampe = polli * 2 + mucche * 4 + maiali * 4;
    }   
    return zampe;
}
console.log(specie (4,2,3))


//ES. 5: Crea una funzione che prenda un numero come argomento e restituisca il numero di fiammiferi in quell argomento.
console.log("-- ES. 5: FIAMMIFERI NECESSARI PER DISEGNARE UNA CASA --")

function numFiammiferi (casa){
    if(casa <= 0){ //se casa = 0 () se casa < 0 () se casa > 0 ()
        return "errore";
    } else {
        return (casa * 6) - (casa - 1); 
    }
}
console.log(numFiammiferi(1)) //6 -> ci voglio sei fiammiferi per disegnare una casa

//ES. 6:Crea una funzione che accetta un numero come argomento. Somma tutti i numeri 
    //da 1 al numero passato alla funzione. Ad esempio, se l'input è 4, la tua funzione 
    //dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10. 
console.log("-- ES. 6: SOMMA I NUMERI DA 1 AL NUMERO PASSATO ALLA FUNZIONE  --")

function sommaPassato (a){
    
}