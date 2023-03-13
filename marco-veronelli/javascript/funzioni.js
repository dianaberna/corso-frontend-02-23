console.log("esercizi funzioni")
console.log("esercizio 1")
console.log("Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.")
let tot =0
function moltiplicazione (a,b) {
    let tot =a*b;
    console.log(a,b)
    console.log(tot);
    return tot;
}

moltiplicazione(3,2);
moltiplicazione(-3,-2);
moltiplicazione(7,3);

console.log("esercizio 2")
console.log("Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.")
tot=0
function anniInGiorni(a){

tot = a *365;
console.log("anni = "+ a);
console.log( "anni in giorni = "+tot);
return tot;

}

anniInGiorni(65);
anniInGiorni(0);
anniInGiorni(20);

console.log("esercizio 3")
console.log("Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.")

function minoreUgualeAZero(a) {
    console.log(a)
    if (a<=0) { 
        console.log("true")
        
    }else console.log("false")
    return;
}
minoreUgualeAZero(5);
minoreUgualeAZero(0);
minoreUgualeAZero(-2);

console.log("esercizio 4")
console.log("zampe totali")
let totaleZampe=0
function numeroZampe(polli , mucche, maiali) {
    console.log(polli+" polli,", mucche +" mucche e", maiali+" maiali.")
    totaleZampe= (polli*2)+ (mucche*4) + (maiali*4);
    console.log("Zampe totali = " + totaleZampe)
    return;
}
numeroZampe(2, 3, 5);
numeroZampe(1, 2, 3);
numeroZampe(5, 2, 8);


console.log("esercizio 5")
console.log("fiammiferi")

tot=0;
casa=6
function numeroDiFiammiferi (step) {
    
if(step>0) {
        
        tot= (casa*step)-(step-1)
        /* console.log("step "+step)   */ 
        /* console.log(tot) */   
        
    }if  ( step==0){
        tot=0
    }if  ( step<0){
        console.log("errore")

    }



    return console.log(tot);
}
    
    numeroDiFiammiferi(0);
    numeroDiFiammiferi(1);
    numeroDiFiammiferi(4);
    numeroDiFiammiferi(87);


console.log("esercizio 6")
console.log("somma")


   

function sommaDaUnUnicoNumero(a) {
    somma=0
    i=0
   
   /*  do {
        i += 1;
        somma=somma+i
      } while (i < a);
      console.log(somma) */

      for (let i = 0; i <= a; i++) {
        somma+= i
        /* console.log(somma) */
       /*  console.log(i) */
        
      }
      console.log("La somma è "+somma)
}

sommaDaUnUnicoNumero(4);
sommaDaUnUnicoNumero(13);
sommaDaUnUnicoNumero(600)

console.log("esercizio 7")
console.log("sconto")
tot=0

function trovaSconto(prezzo, sconto) {
    tot=prezzo-(prezzo*sconto)/100  
    tot=tot.toFixed(2)
    return console.log(tot);
}

trovaSconto(1500,50)
trovaSconto(89,20)
trovaSconto(100,75)

console.log("esercizio 8")
console.log("posizione nell'alfabeto")
let letter=""
function letteraInPosizione(a) {

if (a%1!=0 || a==0) { console.log("invalid")
    
}else if( a > 0 && a < 27) {
        
        letter = String.fromCharCode(a+96);
        console.log(letter)
    }
}
letteraInPosizione(1)
letteraInPosizione(26.0)
letteraInPosizione(0)
letteraInPosizione(4.5)

console.log("esercizio 9")
console.log("calcolatrice")





console.log("esercizio 10")
console.log("Fare la somma di tutti gli elementi di un array")
let a =[]
function sommaElementiArray(a) {
    tot=0
    for (let i = 0; i < a.length; i++) {
        tot+=a[i]
        
        
    }
    console.log(tot)
    return;
}
sommaElementiArray([1, 2, 4])
sommaElementiArray([4, 2, 10, 2])
sommaElementiArray([1])
    
console.log("esercizio 11")
console.log("Fare la somma di tutti gli elementi di un array")
a=[]
function quantiTrue(a) {
    somma=0
    for (let i = 0; i < a.length; i++) {

        if (a[i] === true){
            somma =somma+1
        } 
        
        
    }console.log(somma)
    return;
}



quantiTrue([true, false, false, true, false])
quantiTrue([false, false, false, false])
quantiTrue([]) 

console.log("esercizio 12")
console.log("Piegare un pezzo di carta")

function spessore(n) {
s=0.0005

 if (n==1) { 
    s= s*2
    
} if (n==2) {
    s= s*2*2

} if (n>2) {
    
    s= (s)*(2**n)
}
    

    console.log(s)
    return;
}

spessore(1)
spessore(4)
spessore(21)


