//1) Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 

/*// stesso meccanismo di es. 6) ripasso del file script-agnese.js: Stampare quante volte compare il numero 2 → 2
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("-- esercizio 6) ripasso con for-->")

let cont2 = 0;
for(i=0;i<array.length;i++){
    if(array[i] == 2){
        cont2 = cont2 + 1
    }
}
console.log(cont2) */
console.log("-- 1) esercizio STRINGHE -->")

let cont2 = 0;
let array = "precipitevolissimevolmente"

for(i=0; i<array.length;i++){
    if(array[i] == "e" ) {
        cont2 = cont2 + 1
    }
}

console.log(cont2)



//2) Scrivere un programma che verifica  se due stringhe sono palindrome 

/*   // 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
console.log("-- esercizio 17)--> ")

i = 0;
cont = 0;
array2 = [ 1, 2, 2, 2, 1] 

while (i < array2.length / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - 1 - i]) {
        cont++
    }
    i++;
}

if (cont == array2.length / 2 || cont == Math.ceil(array2.length / 2)) {
    console.log("è palindromo");
} else{
    console.log("non è palindromo");
}

*/


console.log("-- 2) esercizio STRINGHE --> ")


i = 0;
cont2 = 0;
array2 = "anna"

while (i < array2.length / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - 1 - i]) {
        cont2++
    }
    i++;
}

if (cont2 == array2.length / 2 || cont2 == Math.ceil(array2.length / 2)) {
    console.log("è palindromo");
} else{
    console.log("non è palindromo");
}

//2 versione con due con due stringhe palindrome

console.log("-- 2).1) esercizio con due STRINGHE (palindrome) --> ")

wordone = "casa";
wordtwo = "asac";
i = 0;
cont3 = 0;

for (let i=0; i < wordtwo.length / 2; i++) {
    if (wordone[i] == wordtwo [wordtwo.length -1 -i]) {
        cont3++
    }
}
if (cont3 == wordtwo.length / 2 || cont3 == Math.ceil(wordtwo.length / 2)) {
    console.log("è palindromo");
} else{
    console.log("non è palindromo");
}


//3 sol) Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti
//es. mare in categoria → la parola mare non esiste in categoria
console.log("-- 3) esercizio STRINGHE --> ")

let stringa = "palesemente"
let sottostringa = "mente"
let indice = stringa.indexOf(sottostringa);

if (indice !== -1){
  console.log("la sottostringa è contenuta nella stringa")
}else{
    console.log("la sottostringa NON è contenuta nella stringa")
}


//4) Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
console.log("-- 4) esercizio STRINGHE --> ")
array = "scafo"
nuova = ""

for(let i=array.length - 1; i>=0; i--){
   nuova = nuova + array[i]

}
console.log(nuova)



//5) Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
console.log("-- 5) esercizio STRINGHE --> ")


let cibo = [];

cibo.splice(0, 0, "penne");
cibo.splice(1, 0, "panna");
cibo.concat();

console.log("penne" + " " + "panna")


// 6) Cifrario di Cesare
console.log("-- 6) esercizio di Cesare STRINGHE --> ")

// 7) Scrivere programma che accetti una stringa come input e restituisca una nuova stringa che contiene solo le vocali presenti nella stringa originale
console.log("-- 7) esercizio STRINGHE --> ")

function vocaliStringa(colore) {
  const vocali = ["a", "e", "i", "o", "u"];
  let risultato = "";
  for (let i = 0; i < colore.length; i++) {
    if (vocali.includes(colore[i])) {
      risultato += colore[i];
    }
  }
  return risultato;
}

const colore = "colore";
const vocaliColore = vocaliStringa(colore);
console.log(vocaliColore);




// 8) Scrivere programma che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri comuni alle due stringhe. 
//(versione 1: senza escludere i duplicati, versione 2: escludendo i duplicati)
console.log("-- 8) esercizio STRINGHE versione 1: senza escludere i duplicati --> ")

stringa="ciiaaoo"
arrayvocali = ["a","e","i","o","u"];
trovato = false;
let stringanuova=""
for (let i = 0; i < stringa.length; i++) {
    
        trovato = false
        trovato2=false
        for(let j = 0; j<arrayvocali.length; j++){
            if(arrayvocali[j] == stringa[i]){
                trovato = true
                /* console.log(stringa[i]) */
            }
        
        }
        if(trovato){ /* console.log(stringa[i]) */
        console.log(stringanuova)
        if(stringanuova.length==0){stringanuova+=stringa[i]}else{

            for (let z = 0; z < stringanuova.length; z++) {
                if (stringanuova[z]== stringa[i]) {
                    trovato2=true;
                    console.log(stringanuova[z])
    
                }              
                
            }
            if (!trovato2) {stringanuova += stringa[i]
                
                
            }
        }
            
     }

    
}

console.log("senza duplicati e senza funzioni: " + stringanuova);


// 9) Scrivere programma che accetti un array di stringhe come input e restituisca la stringa più lunga presente nell'array
// 10) Scrivere programma che accetti una stringa come input e restituisca una nuova stringa in cui le vocali sono sostituite da un carattere speciale, ad esempio "*", e le consonanti sono convertite in lettere maiuscole
// 11) Scrivi programma che accetti una stringa come input e restituisca una nuova stringa in cui ogni parola è invertita al contrario, mantenendo l'ordine delle parole. Ad esempio, "ciao mondo" diventa "oaic odnom"
// 12) Scrivere programma che accetti una stringa come input e restituisca una nuova stringa in cui i caratteri sono ordinati in ordine crescente secondo il loro codice ASCII




// 0. Crea una funzione che accetta due numeri come argomenti e ne restituisce la somma.
console.log(" 0. Esercizio somma FUNZIONI (risultato: 5)  --> ")

function calcoloSomma (a, b) {
    console.log (a, b);
    // let somma = 3+2 = 6
    const somma = a + b;
    console.log(somma);
    return somma; // 5
}
const stampa = calcoloSomma(3, 2);


// 1.1. Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
console.log(" 1.1. Esercizio moltiplicazione FUNZIONI (risultato: 6) --> ")

function calcoloMoltiplicazione(a, b) {
    console.log (a, b);
    const prodotto = a * b;
    console.log(prodotto);
    return prodotto;
    }
    
    const risultato = calcoloMoltiplicazione (3, 2);
   // console.log(risultato);


 // 1.2. Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
    console.log(" 1.2. Esercizio moltiplicazione FUNZIONI (risultato -18) --> ")

    function calcoloMoltiplicazione(a, b) {
        console.log (a, b);
        const prodotto = a * b;
        console.log(prodotto);
        return prodotto;
        }
        
        const finale = calcoloMoltiplicazione (-3, -6);
 //       console.log(finale);

    
// 1.3.  Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
    console.log(" 1.3. Esercizio moltiplicazione FUNZIONI (risultato 21) --> ")

    function calcoloMoltiplicazione(a, b) {
        console.log (a, b);
        const prodotto = a * b;
        console.log(prodotto);
        return prodotto;
        }
        
        const molt = calcoloMoltiplicazione (7, 3);
 //      console.log(molt);

// 2.1.  Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
console.log(" 2.1. Esercizio che prenda l'età in anni e restituisca l'età in giorni FUNZIONI (anniInGiorni(65) ➞ 23725) --> ")

function anniInGiorni(anni) {
    const giorniTotali = anni * 365;
    return giorniTotali;
  }
  
  console.log(anniInGiorni(65)); 


// 2.2.  Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
console.log("2.2 Esercizio che prenda l'età in anni e restituisca l'età in giorni FUNZIONI (anniInGiorni(0) ➞ 0) --> ")

function anniInGiorni(anni) {
    const giorniTotali = anni * 365;
    return giorniTotali;
  }
  
  console.log(anniInGiorni(0));
 
//   2.3.  Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
console.log(" 2.3 Esercizio che prenda l'età in anni e restituisca l'età in giorni FUNZIONI (anniInGiorni(20) ➞ 7300 --> ")

function anniInGiorni(anni) {
    const giorniTotali = anni * 365;
    return giorniTotali;
  }
  
  console.log(anniInGiorni(20)); 

  // 3.1.   Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
  // valore booleano di true o false
  console.log(" Esercizio 3.1. FUNZIONI minoreUgualeAZero(5) ➞ false --> ")
  
  function minoreUgualeAZero(numero) {
    return numero <= 0;
  }
  
  console.log(minoreUgualeAZero(5));

  // 3.2.  Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
  console.log(" Esercizio 3.2. FUNZIONI minoreUgualeAZero(0) ➞ true --> ")
  
  function minoreUgualeAZero(numero) {
    return numero <= 0;
  }
  
  console.log(minoreUgualeAZero(0));

  // 3.3.  Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
  console.log(" Esercizio 3.3.  FUNZIONI minoreUgualeAZero(-2) ➞ true --> ")
  
  function minoreUgualeAZero(numero) {
    return numero <= 0;
  }
  
  console.log(minoreUgualeAZero(-2));


//  4.1.  Quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
//  Hai un subtotale per ogni specie. Devi implementare una funzione che restituisca il numero totale di zampe di tutti gli animali. 
console.log(" 4.1. Esercizio fattoria FUNZIONI, numeroZampe(2, 3, 5) ➞ 36 ")

function numeroZampe(zampePolli, zampeMucche, zampeMaiali) {
    const totaleZampe = (2 * zampePolli) + (4 * zampeMucche) + (4 * zampeMaiali); // numero totale di zampe per ogni specie 
    return totaleZampe;
  }
  
  const totale = numeroZampe(2, 3, 5);
  console.log(totale); 


  // 4.2. Quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
  console.log(" 4.2. Esercizio fattoria FUNZIONI, numeroZampe(1, 2, 3) ➞ 22 ")

  function numeroZampe(zampePolli, zampeMucche, zampeMaiali) {
    const totaleZampe = (2 * zampePolli) + (4 * zampeMucche) + (4 * zampeMaiali); // numero totale di zampe per ogni specie 
    return totaleZampe;
  }
  
  const totale2 = numeroZampe(1, 2, 3);
  console.log(totale2); 

    // 4.3. Quante zampe si possono contare tra tutti i suoi animali. L'agricoltore alleva tre specie: polli = 2 zampe, mucche = 4 zampe, maiali = 4 zampe
    console.log("4.3. Esercizio fattoria FUNZIONI, numeroZampe(5, 2, 8) ➞ 50 ")


  function numeroZampe( zampePolli, zampeMucche, zampeMaiali) {
    const totaleZampe = (2 * zampePolli) + (4 * zampeMucche) + (4 * zampeMaiali); // numero totale di zampe per ogni specie 
    return totaleZampe;
  }
  
  const totale3 = numeroZampe(5, 2, 8);
  console.log(totale3); 


// 5.1. fiammiferi 1. 
// Funzione che prenda un numero (step) come argomento e restituisca il numero di fiammiferi in quello step.
// PS. (1) Lo step 0 restituisce 0 fiammiferi. (2) L'input (cioè lo step) sarà sempre un numero intero non negativo. (3) Pensa all'input (cioè allo step) come al numero totale di case che sono state collegate tra loro.

  console.log(" 5.1. Esercizio fiammiferi FUNZIONI numeroDiFiammiferi(1) ➞ 6 ")

  function numeroDiFiammiferi(step) {
    if (step <= 0) {
      return console.log("error");
    } else {
      return (6 * step) - (step - 1); // se non è <= fai questo calcolo
    }
  }
  console.log(numeroDiFiammiferi(1)); //  numeri di fiammiferi per costruire una(1) casa è 6 fiammiferi


// 5.2. fiammiferi 2.
  console.log(" 5.2. Esercizio fiammiferi FUNZIONI numeroDiFiammiferi((4) ➞ 21 ")

  function numeroDiFiammiferi(step) {
    if (step <= 0) {
      return console.log("error");
    } else {
      return (6 * step) - (step - 1); // numero totale di fiammiferi per uno step - fiammifero in comune
    }
  }
  console.log(numeroDiFiammiferi(4)); //  numeri di fiammiferi per costruire quattro(4) case è 21 fiammiferi
  



  // 5.3. fiammiferi 3.
  console.log(" 5.3. Esercizio fiammiferi FUNZIONI numeroDiFiammiferi((87) ➞ 436 ")

  function numeroDiFiammiferi(step) {
    if (step <= 0) {
      return console.log("error");
    } else {
      return (6 * step) - (step - 1); // numero totale di fiammiferi per uno step
    }
  }
  console.log(numeroDiFiammiferi(87)); //  numeri di fiammiferi per costruire ottantasette(87) case è 436 fiammiferi


// 6.1. Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. 
// Ad esempio, se l'input è 4, la tua funzione dovrebbe restituire 10 perché 1 + 2 + 3 + 4 = 10.

console.log(" 6.1.  Esercizio Somma FUNZIONI i numeri da un unico numero, sommaDaUnUnicoNumero(4) ➞ 10")

function sommaDaUnUnicoNumero(n) { // n -> numero fino al quale si sommano tutti i numeri da 1
    let somma = 0;
    for (let i = 1; i <= n; i++) { // ciclo for che parte da 1 fino a "n"
      somma += i;
    }
    return somma;
  }
  

console.log(sommaDaUnUnicoNumero(4));


// 6.2. Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. 

console.log("6.2. Esercizio Somma FUNZIONI i numeri da un unico numero, sommaDaUnUnicoNumero(13) ➞ 91")

function sommaDaUnUnicoNumero(n) { // n -> numero fino al quale si sommano tutti i numeri da 1
    let somma = 0;
    for (let i = 1; i <= n; i++) { // ciclo for che parte da 1 fino a "n"
      somma += i;
    }
    return somma;
  }
  

console.log(sommaDaUnUnicoNumero(13));

// 6.3. Crea una funzione che accetta un numero come argomento. Somma tutti i numeri da 1 al numero passato alla funzione. 

console.log(" 6.3. Esercizio Somma FUNZIONI i numeri da un unico numero, sommaDaUnUnicoNumero(600) ➞ 180300")

function sommaDaUnUnicoNumero(n) { // n -> numero fino al quale si sommano tutti i numeri da 1
    let somma = 0;
    for (let i = 1; i <= n; i++) { // ciclo for che parte da 1 fino a "n"
      somma += i;
    }
    return somma;
  }
  

console.log(sommaDaUnUnicoNumero(600));


// 7.1. Crea una funzione che accetta due argomenti: 
// il prezzo originale e la percentuale di sconto come numeri interi e restituisce il prezzo finale dopo lo sconto.
// trovaSconto(1500, 50) ➞ 750

console.log(" 7.1. Esercizio Sconto FUNZIONI, trovaSconto(1500, 50) ➞ 750")

function trovaSconto (originalPrice, discountPercentage) {
  const calculateDiscount = originalPrice - ( originalPrice / 100 ) * discountPercentage;
  console.log(calculateDiscount);
  return
}

trovaSconto (1500, 50);

// 7.2. Crea una funzione che accetta due argomenti: 
// trovaSconto(89, 20) ➞ 71.2

console.log(" 7.2. Esercizio Sconto FUNZIONI, trovaSconto(89, 20) ➞ 71.2")

function trovaSconto (originalPrice, discountPercentage) {
  const calculateDiscount = originalPrice - ( originalPrice / 100 ) * discountPercentage;
  console.log(calculateDiscount);
  return 
}

trovaSconto (89, 20);


// 7.3. Crea una funzione che accetta due argomenti: 
// trovaSconto(100, 75) ➞ 25

console.log(" 7.3. Esercizio Sconto FUNZIONI, trovaSconto(100, 75) ➞ 25")

function trovaSconto (originalPrice, discountPercentage) {
  const calculateDiscount = originalPrice - ( originalPrice / 100 ) * discountPercentage;
  console.log(calculateDiscount);
  return 
}

trovaSconto (100, 75);


// 8.1. Posizione nell’alfabeto, letteraInPosizione(1) ➞ "a"
console.log(" 8.1. Esercizio Posizione nell’alfabeto FUNZIONI letteraInPosizione(1) ➞ a")


function letteraInPosizione(a) {
  // console.log(a%1)
  if (a%1!=0 || a==0) { console.log("invalid")

  } else if (a > 0 && a < 27) {
    
   let letter = String.fromCharCode(a+96);
    console.log(letter)
  }
}

letteraInPosizione(1)

// 8.2. Posizione nell’alfabeto, letteraInPosizione(26.0) ➞ "z"
console.log(" 8.2. Esercizio Posizione nell’alfabeto FUNZIONI letteraInPosizione(26.0) ➞ z")
letteraInPosizione(26.0)

// 8.3. Posizione nell’alfabeto, letteraInPosizione(0) ➞ "invalid"
console.log(" 8.3. Esercizio Posizione nell’alfabeto FUNZIONI letteraInPosizione(0) ➞ invalid")
letteraInPosizione(0)

// 8.4. Posizione nell’alfabeto, etteraInPosizione(4.5) ➞ "invalid"
console.log(" 8.4. Esercizio Posizione nell’alfabeto FUNZIONI letteraInPosizione(4.5) ➞ invalid")
letteraInPosizione(4.5)


// 9.1. Calcolatrice di base
// Crea una funzione che accetta due numeri e un operatore matematico + - / * ed eseguirà un calcolo con i numeri indicati.
// calcolatrice(2, "+", 2) ➞ 4
//Se l'input tenta di dividere per 0, restituisce: "Impossibile dividere per 0!"
// provare a utilizzare lo switch 

console.log(" 9.1. Calcolatrice di base, calcolatrice(2, +, 2) ➞ 4")
function calcolatrice(num1, operatore, num2) {
  var risultato;
  switch(operatore) {
    case "+":
      risultato = num1 + num2;
      break;
    case "-":
      risultato = num1 - num2;
      break;
    case "*":
      risultato = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        risultato = num1 / num2;
      } else {
        risultato = "Impossibile dividere per 0!";
      }
      break;
    default:
      risultato = "Operatore non valido!";
  }
  console.log(risultato);
}

calcolatrice(2, "+", 2);

// 9.2. Calcolatrice di base
console.log(" 9.2. Calcolatrice di base, calcolatrice(2, *, 2) ➞ 4")
calcolatrice(2, "*", 2);



// 9.3. Calcolatrice di base
console.log(" 9.3. Calcolatrice di base, calcolatrice(2, /, 2) ➞ 4")
calcolatrice(4, "/", 2);


// 9.4. Impossibile dividere per 0!
console.log(" 9.4. Impossibile dividere per 0!")

calcolatrice(4, "/", 0);


// 10.1. Calcolatrice di base
