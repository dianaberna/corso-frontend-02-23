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

function letteraInPosizione(a) {
/* console.log(a%1) */
if (a%1!=0 || a==0) { console.log("invalid")
    
}else if( a > 0 && a < 27) {
        
       let letter = String.fromCharCode(a+96);
        console.log(letter)
    }
}
letteraInPosizione(1)
letteraInPosizione(26.0)
letteraInPosizione(0)
letteraInPosizione(4.5)

console.log("esercizio 9")
console.log("calcolatrice")

function calcolatrice(a,c,b) {
    tot=0
    switch(c) {

        case "+":  tot=a+b
        console.log(tot)
          break;
      
        case "-":  tot=a-b
        console.log(tot)
          break;

          case "/": if(b===0) {
            console.log("Error")
            break;
          } else tot=a/b
          console.log(tot)
          break;

          case "*":  tot=a*b
          console.log(tot)
          break;

          default:
            console.log("Error")
            break;
          
      }
      
}
calcolatrice(2, "+", 2);
calcolatrice(2, "*", 2);
calcolatrice(4, "/", 2);
calcolatrice(4, "/", 0);




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

function quantiTrue(a) {
    
    let somma=0
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
let s=0.5/1000

if (n>=1) { 
    s= (s)*(2**n)
}
    console.log(s)
    return;
}

spessore(1)
spessore(4)
spessore(21)

console.log("esercizio 13")
console.log("Validare e-mail")

/* function validateEmail(mail) {
  let v = false;
  let c = false;
  let sn = 0;
  let sn2 = "";

  for (let i = 0; i < mail.length; i++) {
    if (mail[i] == "@") {
      sn++;
      if (sn > 1 || sn < 1) {
        v = false;
      } else if (mail[i] == "@" && i > 0) v = true;
    }
  }
  c = true;
  for (let j = 0; j < mail.length; j++) {
    if (mail[j] == "." && j == mail.length - 1) {
      c = false;
    }
  }
  for (let p = 0; p < mail.length; p++) {
    if (mail[p] === "@" || mail[p] === ".") {
      sn2 += mail[p];
    }
  }
  if (sn2 === ".@" || sn2 === "@") {
    c = false;
  }
  if (sn2 == ".@.") {
    c = true;
  }
  if (v && c == true) {
    console.log("email valida");
  } else console.log("email non valida");
}
 */
/* function validate(mail){
    let cont=""
    if (mail.includes("@") && mail.includes(".")) {
        cont=mail.indexof("@");
        for (let i = 0; i < mail.length; i++) {
           for (let i = 0; i < domini.length; i++) { 
                if (typeof cont[--i]=="string"&& typeof cont[i++]=="string") {
                    
                }
                
                
            }
            
                
            }
            
        }
        
    }
    
} */
/* validateEmail("@gmail.com") 
validateEmail("hello@gmailcom")
validateEmail("gmail") 
validateEmail("marco@gmail.com") */


console.log("esercizio 14")
console.log("sasso, carta, forbice")
let r="rock"
let p="paper"
let s="scissors"

function rps(p1,p2) {

    if (p1===p2) {console.log("pareggio")
        
    }
    if (p1==r && p2==p ) {
        console.log("winner is p2 ")
        
    }
    if (p1==r && p2==s ) {
        console.log("winner is p1")
        
    }
    if (p1==p && p2==r ) {
        console.log("winner is p1")
        
    }
    if (p1==p && p2==s ) {
        console.log("winner is p2")
        
    }
    if (p1==s && p2==p ) {
        console.log("winner is p1")
        
    }
    if (p1==s && p2==r ) {
        console.log("winner is p2")
        
    }
    
    
    
}
rps(r,p);
rps(s,p);
rps(p,p);
rps(p,s);

console.log("esercizio 15")
console.log("rimuovere i duplicati")
function removeDups(a) {
  aa = [];

  for (let i = 0; i < a.length; i++) {
    t = false;
    if (aa.length == 0) {
      7;

      aa.push(a[i]);
    } else {
      for (let j = 0; j < aa.length; j++) {
        if (aa[j] == a[i]) {
          t = true;
        }
      }
      if (!t) {
        aa.push(a[i])
        
      }
    }
  }
  console.log(aa)
}
removeDups([1, 0, 1, 0]) 
removeDups(["The", "big", "cat"])
removeDups(["John", "Taylor", "John"])


console.log("esercizio 18")
console.log("Quanti giorni tra due date")

/* console.log(quantiGiorni(new Date("June 14, 2019"), new Date("June 20, 2019")));

console.log(quantiGiorni(new Date("December 29, 2018"), new Date("January 1, 2019")));

console.log(quantiGiorni(new Date("July 20, 2019"), new Date("July 30, 2019")));
 */





console.log("esercizio 17")
console.log("budget")


    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])



    budgetTotale([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])


function budgetTotale(array) {
    somma=0
    for (let i = 0; i < array.length; i++) {4
        somma+=array[i].budget

    }
    console.log(somma)
}


console.log("esercizio 18")
console.log("prezzo")
console.log(
prezzoTotaleAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "cereals", quantity: 1, price: 2.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "eggs", quantity: 12, price: 0.10 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "chocolate", quantity: 1, price: 0.10 },
        { product: "lollipop", quantity: 1, price: 0.20 },
    ])
);
function prezzoTotaleAlimenti(array) {
    for (let i = 0; i < array.length; i++) {
        somma+= array[i].price*array[i].quantity
        
    }
    console.log(somma)
}
