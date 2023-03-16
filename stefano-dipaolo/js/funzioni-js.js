//Esercizio 1
console.log("Esercizio 1: Moltiplicazione di due numeri");
function moltiplicazione(a, b) {
  const prodotto = a * b;
  //console.log(prodotto)
  return prodotto;
}

console.log(moltiplicazione(2, 3));
moltiplicazione(3, 3);
moltiplicazione(4, 3);
moltiplicazione(5, 3);

//Esercizio 2
console.log("Esercizio 2 : Convertire anni in giorni");

function anniInGiorni(a) {
  const conversione = a * 365;
  console.log(conversione);
  return;
}

anniInGiorni(65);
anniInGiorni(0);
anniInGiorni(20);
//Esercizio 3
console.log("Esercizio 3 : minore o uguale a zero");

function minoreUgualeAZero(a) {
  /* let r
    if (a>= 0){r =true}
    else r=false*/
  return console.log(a <= 0);
}

minoreUgualeAZero(2);
minoreUgualeAZero(0);
minoreUgualeAZero(-2);

//Esercizio 4
console.log("Esercizio 4 : il problema della fattoria");

function numeroZampe(a, b, c) {
  a = a * 2;
  b = b * 4;
  c = c * 4;
  let zampe = a + b + c;
  console.log(zampe);
  return;
}

numeroZampe(2, 3, 5);
numeroZampe(1, 2, 3);
numeroZampe(5, 2, 8);

//Esercizio 5
console.log("Esercizio 5 : case di fiammiferi");

function numeroDiFiammiferi(step) {
  let fiammiferi = 6 * step;
  if (step < 0) {
    console.log("invalid");
  } else if (step > 0) {
    fiammiferi = 6 * step - (step - 1);
    console.log(fiammiferi);
  } else if (step == 0) {
    fiammiferi = 6 * step;
    console.log(fiammiferi);
  }
  return fiammiferi;
}

numeroDiFiammiferi(1);
numeroDiFiammiferi(2);
numeroDiFiammiferi(4);
numeroDiFiammiferi(87);
numeroDiFiammiferi(0);
numeroDiFiammiferi(-1);

//Esercizio 6
console.log("Esercizio 6 : somma i i numeri da un unico numero");

function sommaDaUnUnicoNumero(a) {
  let c = 0;
  for (let i = a; i > 0; i--) {
    // c = c+i
    c += i;
  }
  console.log(c);
  return;
}
sommaDaUnUnicoNumero(4);
sommaDaUnUnicoNumero(13);
sommaDaUnUnicoNumero(600);

//Esercizio 7
console.log("Esercizio 7 : trova lo sconto");

function trovaSconto(a, b) {
  prezzoScontato = a - (a / 100) * b;
  if (prezzoScontato % 1 == 0) console.log(prezzoScontato);
  else console.log(prezzoScontato.toFixed(2));
  return;
}
trovaSconto(1500, 50);
trovaSconto(89, 22.67);
trovaSconto(100, 75);

//Esercizio 8
console.log("Esercizio 8 : posizione nell'alfabeto");

function letteraInPosizione(a) {
  if (a > 0 && a < 27 && a % 1 == 0) {
    a = a + 96; //alt 97 = a
    console.log(String.fromCharCode(a));
  } else {
    console.log("invalid");
  }
}
letteraInPosizione(0);
letteraInPosizione(2.5);
letteraInPosizione(1);
letteraInPosizione(26);

/*a = 1
 if (a.constructor === Number){console.log(a)}*/

//Esercizio 9
console.log("Esercizio 9 : calcolatrice di base");

/*function calcolatrice(a,b,c) {
    let risultato = 0
    if (a.constructor === Number && c.constructor === Number){
        switch (b) {
            case "+":
                console.log(risultato=a+c)
            break;
            case "-":
                console.log(risultato=a-c)
            break;
            case "*":
                console.log(risultato=a*c)
            break;
            case "/":
                if (c==0){console.log("Impossibile dividere per 0")}
                    else
                console.log(risultato=a/c)
            break;
    }
}
else (console.log("input non valido"))
return
}*/
function calcolatrice(a, b, c) {
  let risultato = 0;
  if (typeof a === "number" && typeof c === "number") {
    switch (b) {
      case "+":
        console.log((risultato = a + c));
        break;
      case "-":
        console.log((risultato = a - c));
        break;
      case "*":
        console.log((risultato = a * c));
        break;
      case "/":
        if (c == 0) {
          console.log("Impossibile dividere per 0");
        } else console.log((risultato = a / c));
        break;
    }
  } else console.log("input non valido");
  return;
}

calcolatrice(2, "+", 2);
calcolatrice(2, "-", 2);
calcolatrice(2, "*", 2);
calcolatrice(2, "/", 0);
calcolatrice("ciao", "/", 0);

//Esercizio 10
//Crea una funzione che restituisce la somma di tutti i valori di un array
console.log("Esercizio 10");

function sommaElementiArray(a) {
  let sommaArray = 0;
  for (let i = 0; i < a.length; i++) {
    sommaArray += a[i];
  }
  console.log(sommaArray);

  return;
}

sommaElementiArray([1, 2, 4]);
sommaElementiArray([4, 2, 10, 2]);
sommaElementiArray([1]);

//Esercizio 11
//Crea una funzione che restituisce il numero di valori uguali a true presenti in un array
console.log("Esercizio 11");

function quantiTrue(a) {
  let cont = 0;
  for (let i = 0; i < a.length; i++) {
    //if (a[i].includes("true")) cont++ 
    if (a[i] ==="true") cont++
  }
  console.log(cont);
}

quantiTrue(["true", "true", "true", "false", "true"]);
quantiTrue(["false", "false", "false", " false"]);
quantiTrue([]);

//Esercizio 12
//Creare una funzione che restituisca lo spessore (in metri) di un foglio di carta dopo averlo piegato n numero di volte. La carta inizia con uno spessore di 0,5 mm.
console.log("Esercizio 12");
//prendo lo spessore e lo raddoppio
//il risultato lo raddoppio di nuovo
//n volte
function piegare(a) {
  let spessore = 0.5;
  let i = 0;
  while (i < a) {
    spessore = spessore * 2;
    i++;
  }
  spessore = spessore / 1000;
  console.log(spessore + "metri");
  return;
}
piegare(0);
piegare(1);
piegare(4);
piegare(21);



console.log("-------------------------------");
//Esercizio 13
//Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, a seconda della valutazione.
console.log("Esercizio 13");

function validateEmail(email) {
  if (typeof email === "string") {
    //contine @
    if (!email.includes("@")) {
      console.log("deve includere @ ");
    }
    //contiene .
    if (!email.includes(".")) {
      console.log("deve includere .");
    }
    //prima di @ ci vuole un carattere
    for (let i = 0; i < email.length; i++) {
      if (email[i].includes("@")) {
        if (typeof email[i - 1] !== "string") {
          console.log("Prima di @ ci vuole un carattere");
        }
      }
    }

    //prima di . ci vuole un carattere
    for (let i = 0; i < email.length; i++) {
      if (email[i].includes(".")) {
        if (typeof email[i - 1] !== "string" || email[i-1] == "@") {
          console.log("Prima di . ci vuole un carattere");
        }
      }
    }
    for (let i = 0; i < email.length; i++) {
        if (email[i].includes(".")) {
          if (typeof email[i+1] !== "string") {
            console.log("Dopo di . ci vuole un carattere");
          }
        }
      }
      

  } else console.log("FORMATO NON CORRETTO");

  return;
}
console.log("----------")
validateEmail("ciao@gmail.com")
console.log("----------")
validateEmail("asdds@asdda.")


console.log("-------------------------------");

a = "w@";
b = a.split("");
console.log(b);
if (b[1].includes("@")) {
  console.log(b[1]);
}
//Esercizio 14
//Crea una funzione che accetta due stringhe (p1 e p2 ⁠— che rappresentano i giocatori 1 e 2) come argomenti e restituisce una stringa che indica il vincitore in una partita a Sasso, Carta, Forbici.

console.log("Esercizio 14");

function rps(p1, p2) {
  if (p1 == "sasso" || p1 == "forbici" || p1 == "carta") {
    if (p2 == "sasso" || p2 == "forbici" || p2 == "carta") {
      if (p1 == p2) {
        console.log("pareggio");
      }
      if (p1 == "sasso" && p2 == "forbici") {
        console.log("vince il giocatore 1");
      }
      if (p1 == "carta" && p2 == "sasso") {
        console.log("vince il giocatore 1");
      }
      if (p1 == "forbici" && p2 == "carta") {
        console.log("vince il giocatore 1");
      }
      if (p1 == "sasso" && p2 == "carta") {
        console.log("vince il giocatore 2");
      }
      if (p1 == "carta" && p2 == "forbici") {
        console.log("vince il giocatore 2");
      }
      if (p1 == "forbici" && p2 == "sasso") {
        console.log("vince il giocatore 2");
      }
    } else console.log("errore");
  } else console.log("errore");
  return;
}
rps("sasso", "sasso");
rps("carta", "carta");
rps("forbici", "forbici");
rps("sasso", "forbici");
rps("sasso", "carta");
rps("forbici", "sasso");
rps("carta", "sasso");

//Esercizio 15
//Crea una funzione che accetta un array di elementi, rimuove tutti gli elementi duplicati e restituisce un nuovo array nello stesso ordine sequenziale del vecchio array (meno i duplicati).
let animali=["gatto", "cane", "coniglio"]
console.log(animali)
animali.splice(1, 1)
console.log(animali)

console.log("Esercizio 15");
function removeDups(array) {
    let array2 = []
    for (let i = 0; i < array.length; i++) {  //scorro l'array
      let controllo = false;

      for (let j = 0; j < i; j++) {            //scorro l'array e lo confronto
          if (array[i] === array[j]) {
              controllo = true;               // se l'uguaglianza è true --> c'è il duplicato e non faccio l'inserimento
              break;
          }
      }

      if (!controllo) {                    // altrimenti  push nel secondo array
          array2.push(array[i]);
      }
  }
      console.log(array2)
  return ;
}

removeDups(["ciao", "ciao","ciao","1"]);
removeDups([1, 0, 1, 0, 0,1,0,1,0,0,0,1,1,3,2]);
removeDups(["The", "big", "cat"]);
removeDups(["John", "Taylor", "John"]);




/*function removeDups(a) {
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        a.splice(j, i);
      }
    }
  }
  console.log(a);*/
//Esercizio 16
//Crea una funzione che accetta due date e restituisce il numero di giorni tra la prima e la seconda data
console.log("Esercizio 16")

function quantiGiorni (data1,data2) {
    const giorno = 24 * 60 * 60 * 1000  //un giorno in millesecondi
   console.log( (diffDays = Math.round(Math.abs((data1-data2) / giorno ))))
   return

}


quantiGiorni(new Date("June 14, 2019"), new Date("June 20, 2019"))
quantiGiorni(new Date("December 29, 2017"), new Date("January 1, 2019"))
quantiGiorni(new Date("July 20, 2019"), new Date("July 30, 2019"))



//Esercizio 17
//Crea la funzione che accetta un array con oggetti e restituisce la somma dei budget delle persone.
console.log("Esercizio 17")

function budgetTotale (array){
    let somma = 0
    for (let i = 0; i < array.length; i++) {
        somma += array[i].budget
    }
    console.log(somma)
    return
}

    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
;


    budgetTotale([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])

//Esercizio 18
//Crea una funzione che prenda un array di oggetti (alimentari) che calcoli il prezzo totale e lo restituisca come un numero. Un oggetto alimentare ha un prodotto, una quantità e un prezzo, ad esempio
console.log("Esercizio 18")

function prezzoTotaleAlimenti(array){
    let somma= 0
    for (let i = 0; i < array.length; i++) {
        somma += array[i].price * array[i].quantity
    }
    console.log(somma.toFixed(1))
    return
    }
    
        prezzoTotaleAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
    
    
        prezzoTotaleAlimenti([
            { product: "milk", quantity: 1, price: 1.5 },
            { product: "cereals", quantity: 1, price: 2.5 },
        ])
    
   
        prezzoTotaleAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
   
    
        prezzoTotaleAlimenti([
            { product: "milk", quantity: 1, price: 1.5 },
            { product: "eggs", quantity: 12, price: 0.10 },
            { product: "bread", quantity: 2, price: 1.6 },
            { product: "cheese", quantity: 1, price: 4.5 },
        ])
   
    
        prezzoTotaleAlimenti([
            { product: "chocolate", quantity: 1, price: 0.10 },
            { product: "lollipop", quantity: 1, price: 0.20 },
        ])
 
    