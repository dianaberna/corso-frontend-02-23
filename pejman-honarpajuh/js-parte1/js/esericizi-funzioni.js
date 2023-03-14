console.log("---------------------- funzioni ----------------------");

/* -------Esercizi Funzioni--------*/

// Esercizio 1) Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.

function multiplicazione(a, b) {
    const somma = a * b;
    return somma;
}

console.log(multiplicazione(5, 2));

// Esercizio 2) Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
console.log('Esercizio 2 ');

function eta(a) {
    let day = a * 365
    return day;
}
console.log(eta(65));

// Esercizio 3)Crea una funzione che accetta un numero come unico
//             argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false. 
console.log('Esercizio 3 ');

function calc(a) {
    if (a <= 0) {
        return true;
    } else {
        return false
    }
} console.log(calc(2));
console.log(calc(0));
console.log(calc(-2));
// Esercizio 4) zampa
console.log('Esercizio 4 ');

function zampe(a, b, c) {
    let po = a * 2;
    let mu = b * 4;
    let ma = c * 4;
    let somma = po + mu + ma;
    return somma;

} console.log(zampe(2, 3, 5));
console.log(zampe(1, 2, 3));
// Esercizio 5)Crea una funzione che prenda un numero (step) 
//come argomento e restituisca il numero di fiammiferi in quello step. Vedere i passaggi 1, 2 e 3 nell'immagine. 
console.log('Esercizio 5 ');

function fiammiferi(a) {
    if (a === 0) {
        somma = 0;
        return somma;
    }
    if(a < 0){
       somma ='inserire numero intero positivo';
       return somma;
    }
    if (a > 0) {
        somma = (a * 6) - (a - 1);
        return somma;
    }
} console.log('i fiammiferi sono: ' + fiammiferi(87));

// Esercizio 6) somma di tutti numeri
console.log('Esercizio 6 ');

function conta(a){
let rest = 0;
// for (let i=1 ; i<=a ; i++){
//     rest+= i;
// }
for(let i=a ; i>=1 ; i--){
    //rest += i;
    rest = rest +i
}
return rest;
}console.log(conta(4));

// Esercizio 7) Crea una funzione che accetta due argomenti: il prezzo originale e la percentuale di sconto come
// // numeri interi e restituisce il prezzo finale dopo lo sconto.
console.log('Esercizio 7 ');
function calcsconto(a,b){
    let prezzo = a - ((a*b)/100)
   // return Number.parseFloat(prezzo).toFixed(2);
    return prezzo;
}console.log(calcsconto(89,20));

//Esercizio 8)
console.log('Esercizio 8 ');
function trovaposizione(a){
    let  index = '';
    const alfabeto = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let x = a.toString()
    if(x.includes(".")){
        let y = x.split(".")
        if(y[1] != "0"){
            a = "Invalid"
            return a;
        }else{
            index = (alfabeto.charAt(a))
            return index;
        }
    }else{
        if(a<=0 ){
            a = "Invalid"
            return a;
        }else{
            index = (alfabeto.charAt(a))
            return index;
        }
    }
    
}console.log(trovaposizione(5.0));

//Esercizio 9) Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà
// un calcolo con i numeri indicati.
// function calcolatrice( somma , detra , mult , divi){
    console.log('Esercizio 9--------------- ');

// function somma(){
    
//     return a + b;
// }
// function calocat(a,b){
  
// }
// console.log(calocat(2,5))

 








// let expr = divis;
// let a= 4
// let b= 3
//  switch (expr){
//     case somma :
//          console.log(a + b) ;
//         break;
//         case detra:
//             console.log(a - b) ;
//         //  return a - b;
//         break;
//         case multi:
//             console.log(a * b) ;
//         //  return a * b;
//         break;
//         case divis:
//             console.log(a / b) ;
//         //  return a / b;
//         break;
//         default:
//             console.log(`Sorry, we are out of ${expr}.`)
//   }





//Esercizio 10) Crea una funzione che restituisce la somma di tutti i valori di un array.
console.log('Esercizio 10 ');
// let a = [2,3,4]
function somArry(a){

    let somma = 0;
    for(let i=0; i<a.length ; i++ ){
        somma +=a[i]
    }
    return somma;
}console.log(somArry([2,3,4]))

//Esercizio 11) Crea una funzione che restituisce il numero di valori uguali a true presenti in un array.
console.log('Esercizio 11 ');
function flag(a){
    let cont = 0;
    for(let i=0; i<a.length ; i++ ){
        if(a[i] == "true"){
            cont++
        }
    } 
    return cont;
}console.log(flag(['true','true','false','false']))


//Esercizio 12) Creare una funzione che restituisca lo spessore (in metri) di un foglio di
// carta dopo averlo piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.
console.log('Esercizio 12 ');

function carta(a){
    let x = 0.5;
    for(let i=0; i<a ; i++){
        x = (x + x);
         misura = x / 1000
        
    }
    return misura;

    
}console.log('La carta è di spessore :' ,carta(21) ,'m')

//Esercizio 13)Crea una funzione che accetta una stringa, controlla se è un indirizzo
// email valido e restituisce true o false, a seconda della valutazione.
console.log('Esercizio 13 ');
function contemail(a){
    let flag = true
    for(let i=0 ; i<a.length ; i++){
        if(a.includes('@')&& a.includes('.')){
           flag = true;
        }else{
            flag = false;
        }
    }
    return flag
    

}console.log(contemail('pejman@libero.it'))

//Esercizio 14)Crea una funzione che accetta due stringhe (p1 e p2 ⁠— che rappresentano i giocatori 1 e 2) 
//come argomenti e restituisce una stringa che indica il vincitore in una partita a Sasso, Carta, Forbici.
console.log('Esercizio 14 ');
function gicosasso(p1,p2){
    let risultato = '';
  if (p2 == p1) {
    risultato = 'parità'
    } else if ((p1 == 's' && p2 == 'f') || (p1 == 'f' && p2 == 'c') || (p1 == 'c' && p2 == 's')) {
     risultato = 'Hai vinto'
   } else {
    risultato = 'Hai perso'
   }
   return risultato
}console.log(gicosasso('f','s'))

//Esercizio 15)Crea una funzione che accetta un array di elementi, rimuove tutti gli elementi duplicati e restituisce 
//un nuovo array nello stesso ordine sequenziale del vecchio array (meno i duplicati).
// console.log('Esercizio 15 ');
function arrydupilcato(a){
    let arrnuovo = [];
    for(let i=0 ; i<a.length ; i++){
        
            if(a[i] === a[i+2]){
            arrnuovo.push(a[i])
        }//else{
        //     arrnuovo += a[i]
        // }
    }return arrnuovo;
}console.log(arrydupilcato([1,2,1,2,3]))

//Esercizio 16) Crea una funzione che accetta due date e restituisce il numero di giorni tra la prima e 
//la seconda data.
// console.log('Esercizio 16 ');
// function calcgiorni(a,b){

// }

//Esercizio 17)Crea la funzione che accetta un array con oggetti e restituisce la somma dei budget delle persone.
//  console.log('Esercizio 17 ');

// function budget(a){

   
    

// }
// budgetTotale=[
//     { name: "John",   age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700  },
// ]