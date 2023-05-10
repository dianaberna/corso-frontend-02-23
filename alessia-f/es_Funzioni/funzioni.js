
//1. Moltiplicazione di due numeri

function moltiplicazione (a,b){
    let molt = a*b;
    return molt;

}

let molt = moltiplicazione (3,2)
console.log ("funz_1 = " + molt)
molt= moltiplicazione(-3,-6)
console.log ("funz_1_2 = " + molt)
molt= moltiplicazione(7,3)
console.log ("funz_1_3 = " + molt)



//2. Convertire anni in giorni

function anni_in_giorni(giorni){
    let annigiorni= giorni + 365;
    return annigiorni;

}

annigiorni= anni_in_giorni(65);
console.log (anni_in_giorni(65))
console.log (typeof annigiorni)
console.log (typeof anni_in_giorni(65))


//3 Minore o uguale a zero

function minoreUgualeAZero (a){
    let verifica = a <= 0;
    return verifica;
}


let verifica = minoreUgualeAZero(5)
console.log("fun_3 =" + verifica);
verifica = minoreUgualeAZero(0)
console.log("fun_3_1 =" + verifica);
verifica = minoreUgualeAZero(-2)
console.log("fun_3_2 =" + verifica);


//4 Il problema della fattoria

function numeroZampe(a,b,c){
    return (a*2)+(b*4)+(c*4);
}


let conteggio = numeroZampe(2, 3, 5)
console.log("fun_4 =" + conteggio);
conteggio = numeroZampe(1, 2, 3) 
console.log("fun_4_1 =" + conteggio);
conteggio = numeroZampe(5, 2, 8) 
console.log("fun_4_2 =" + conteggio);


//5 Casa di fiammiferi

function numeroDiFiammiferi (step){
   let conto = (6*step)-(step-1)
    return conto;

}


let conto = numeroDiFiammiferi(1) 
console.log("fun_5 =" + conto);
conto = numeroDiFiammiferi(4) 
console.log("fun_5_1 =" + conto);
conto = numeroDiFiammiferi(87)
console.log("fun_5_2 =" + conto);


//6 Somma i numeri da un unico numero

function sommaDaUnUnicoNumero(numero){
    let somma1 =0;
    for(let i = 1; i<= numero; i++){
        somma1 += i; //abbreviazione di somma1 = somma1+1
    }
    return somma1;

}


let risultato = sommaDaUnUnicoNumero(4)
console.log("fun_6 =" + risultato);
somma1 = sommaDaUnUnicoNumero(13) 
console.log("fun_6_1 =" + somma1);
somma1 = sommaDaUnUnicoNumero(600) 
console.log("fun_6_2 =" + somma1);



//7 Trova lo sconto

function trovaSconto(a,b){
    prezzofinale = a - (a / 100) * b
    return prezzofinale;
}


trovaSconto(1500, 50)
console.log("fun_7 =" + prezzofinale)
trovaSconto(89, 20)
console.log("fun_7_1 =" + prezzofinale)
trovaSconto(100, 75)
console.log("fun_7_2 =" + prezzofinale)



//8 Posizione nell’alfabeto

function letteraInPosizione(numero){
   let variabilesomma=0
   if(numero>=1 && numero<=26){ 
        variabilesomma = numero + 96;
        variabilesomma = Number.parseFloat(variabilesomma).toFixed(0);
        return String.fromCharCode(variabilesomma)
   }
   return "invalid"
}

risultato = letteraInPosizione(1)
console.log("funz_8="+ risultato);

console.log("funz_8_1="+ letteraInPosizione(26.0) );

console.log("funz_8_2="+ letteraInPosizione(0));

console.log("funz_8_3="+ letteraInPosizione(4.5));


//9 Calcolatrice di base

function calcolatrice(numero1,operatore,numero2){
    switch(operatore){
        case "+":
        calcolo= numero1 + numero2;
        console.log("es_9=" + calcolo);
        break;

        case "*":
        calcolo= numero1 * numero2;
        console.log("es_9_1=" + calcolo);
        break;

        case "/":
        calcolo= numero1 / numero2;
        console.log("es_9_2=" + calcolo);
        break;

    }
 return calcolo;
}


calcolo=calcolatrice(2, "+", 2) // +,*,/ sono stringhe
console.log("es_9=" + calcolo);
calcolo=calcolatrice(2, "*", 2) 
console.log("es_9_1=" + calcolo);
calcolo=calcolatrice(4, "/", 2) 
console.log("es_9_2=" + calcolo);



//10 Fare la somma di tutti gli elementi di un array

function sommaElementiArray(array) { 
  
    let somma = 0;
    for (i=0; i<array.length ; i++){
        somma= somma + array[i];  
    }

    return somma;
}


somma= sommaElementiArray([1, 2, 4])
console.log("es_10=" + somma);
somma= sommaElementiArray([4, 2, 10, 2])
console.log("es_10_1=" + somma);
somma= sommaElementiArray([1])
console.log("es_10_2=" + somma);



//11 Quante volte è vero

function quantiTrue(array){
   let contatore = 0
    for(i=0; i<array.length; i++){
        if (array[i]){
        contatore++;
        }
    }

return contatore;
}


contatore = quantiTrue([true, false, false, true, false]); //array con valore boleano
console.log("es_11="+contatore);
contatore = quantiTrue([false, false, false, false]);
console.log("es_11_1="+ contatore); 
contatore = quantiTrue([]);
console.log("es_11_2="+contatore);



//12 Piegare un pezzo di carta

function spessore(piega){
    spessoreiniziale = 0.0005; // moltiplicato ( numero di pieghe x2)
    spessorefinale= spessoreiniziale*(2**piega);
    return spessorefinale;
}


spessorefinale= spessore(1); // ➞ "0.001m"  carta piegata una volta = 1mm (0.001m=0,5*1000*2) 
console.log("es_12="+spessorefinale);
spessorefinale= spessore(4); //➞ "0.008m"  carta piegata 4 volte = 8mm (cioè 0.008m)
console.log("es_12_1="+spessorefinale);
spessorefinale= spessore(21); //➞ "1048.576m" carta piegata 21 volte = 1048576mm (cioè 1048.576m)
console.log("es_12_2="+spessorefinale);

//13 Validare un’e-mail



//15






/*La stringa deve contenere un carattere @.
La stringa deve contenere un . carattere.
La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.
*/







//17 Ottieni la somma del budget delle persone

function budgetTotale(array){
    let somma = 0;
    for (i=0; i<array.length;i++){
        somma += array[i].budget;
    }
    return somma;
}




console.log(
    budgetTotale([
        {name: "John", age:21, budget: 29000},
        {name: "Steve", age: 32, budget: 32000},
        {name: "Martin", age: 16, budget: 1600},
    ])
)

console.log(
    budgetTotale([
        {name: "John", age:21, budget: 23000},
        {name: "Steve", age: 32, budget: 40000},
        {name: "Martin", age: 16, budget: 2700},
    ])
)



