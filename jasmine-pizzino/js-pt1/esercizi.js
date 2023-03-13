let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//           0  1  2                       9  10

console.log("esercizi");

// 1 - Stampare tutti gli elementi dell’array -> scorrere tutto l'array -> while/for
console.log("1");

/*
variabile per la condizione
while(condizione){
    ...
    aggiornamento della variabile per la condizione
}
*/

console.log("con while");

// condizione falsa è quando "usciamo" dall'array

// strumento che mi aiuta a scorrere da 0 a 4 -> while
let i = 0;
while (i < array.length) {
    console.log(array[i]); // --> [] ci permette di accedere all'elemento in posizione i dell'array numeriBari
    i = i + 1;
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 2) Stampare la somma di tutti gli elementi dell’ array
// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
//              0  1  2   3   4

i = 0;
let somma = 0;
let lunghezza = array.length;
while (i <= lunghezza - 1) {
    somma = somma + array[i];
    // console.log("array[" + i + "] = " + array[i], "somma = " + somma);
    i++;
}
console.log("somma = " + somma);

/*
    i=0 arraySum=0
    0 <= 9 ? si
        arraySum = 0 + 2 = 2
        i=0+1=1
    1 <= 9 ? si
        arraySum = 2 + 6 = 8
    
        ...
    10 <= 9 ? no

*/

// let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
// 3) Stampare la somma dei soli elementi positivi → 35
// array[i] -> elemento dell'array chiamato array nella posizione i
let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sommaPositivi = sommaPositivi + array[i];
    }
}
console.log("sommaPositivi = " + sommaPositivi);



//esercizio 14

let array1 = [1, 2, 2, 3]
console.log(array1)







let stringa = "casa";
let stringaVuota = [];
count = 0;

fot (let i= stringa.length - 1; i>= 0; i--){
    stringaVuota[count] = stringa [i];
    count ++;
}
 console.log(stringaVuota);






//let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sommaDispari = 0;
for 


// if (cont == array2.length / 2 || cont == Math.ceil(array2.length / 2)) 


console.log("prove elementi fuori dall'array")
if(array[12]){
    console.log("l'elemento esiste")
}
else{
    console.log("l'elemento non esiste")
}


let tipoDiDato = typeof array [12]
let tipoDelTipoDiDato = typeof tipoDiDato
console.log(tipoDiDato, tipoDelTipoDiDato)
if(TipoDiDato !== "undefined"){
    console.log("l'elemento esiste")
}









array3 = [1];
i=0
while (1< arrai1.length && i < array2.length){
    if(array1[i] % 2 ! == 0){
    array3.push (arrayi[i])
}

if(array2[i] % == 0){
    array3.push (array2[i])
}
i++;
}

console.log(array3)




const numbers = [3, 4, 6, 1, 5, 2, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) { // verifica se l'elemento è dispari
    sum += numbers[i]; // aggiungi l'elemento dispari alla somma
  }
}

console.log(sum); // stampa la somma dei soli elementi dispari (12)





esericizi funzioni ultimi che non capisco

  // 8) Posizione nell'alfabeto
  function letteraInPosizione(n) {
    if (!Number.isInteger(n) || n < 1 || n > 26) {
      return "invalid";
    }
    return String.fromCharCode(n + 96);
  }
  letteraInPosizione(1) // "a"
  letteraInPosizione(26.0) // "z"
  letteraInPosizione(0) // "invalid"
  letteraInPosizione(4.5) // "invalid"

  
  // 9) Calcolatrice di base
  function calcolatrice(num1, operatore, num2) {
    let risultato;
    switch (operatore) {
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
        if (num2 === 0) {
          return "Impossibile dividere per 0!";
        }
        risultato = num1 / num2;
        break;
      default:
        return "Operatore non valido!";
    }
    return risultato;
  }
  console.log(calcolatrice(2, "+", 2)); // 4
  console.log(calcolatrice(2, "*", 2)); // 4
  console.log(calcolatrice(4, "/", 2)); // 2
  console.log(calcolatrice(4, "/", 0)); // "Impossibile dividere per 0!"
  console.log(calcolatrice(5, "%", 3)); // "Operatore non valido!"


  // 10) Fare la somma di tutti gli elementi di un array 
  function sommaElementiArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sommaElementiArray([1, 2, 4])); // output: 7
  console.log(sommaElementiArray([4, 2, 10, 2])); // output: 18
  console.log(sommaElementiArray([1])); // output: 1


  // 11) Quante volte è vero?
  function quantiTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        count++;
      }
    }
    return count;
  }

  

  // 12) Piegare un pezzo di carta
  function spessore(n) {
    const spessoreIniziale = 0.5; // spessore iniziale in millimetri
    const fattoreDiPiega = 2; // ogni piega raddoppia lo spessore
    const millimetriInMetro = 1000; // costante di conversione millimetri/metro
  
    // Calcola lo spessore finale in millimetri
    const spessoreFinale = spessoreIniziale * Math.pow(fattoreDiPiega, n);
  
    // Converti lo spessore finale da millimetri a metri e formatta il risultato come stringa
    const spessoreFinaleInMetri = (spessoreFinale / millimetriInMetro).toFixed(3) + "m";
  
    return spessoreFinaleInMetri;
  }

  
  

  


    

// 13) Validare un'e-mail
function isEmailValid(email) {
    // Controlla se la stringa contiene un solo carattere @
    const atSignIndex = email.indexOf("@");
    if (atSignIndex === -1 || email.indexOf("@", atSignIndex + 1) !== -1) {
      return false;
    }
  
    // Controlla se la stringa contiene almeno un carattere prima della @
    if (atSignIndex === 0) {
      return false;
    }
  
    // Controlla se la stringa contiene almeno un . dopo la @
    const dotIndex = email.lastIndexOf(".");
    if (dotIndex === -1 || dotIndex < atSignIndex + 2) {
      return false;
    }
  
    // Controlla se l'ultimo carattere della stringa non è un .
    if (dotIndex === email.length - 1) {
      return false;
    }
  
    // La stringa supera tutti i test ed è considerata un indirizzo email valido
    return true;
  }

  

  // 14) Sasso, carta, forbici
  function sassoCartaForbici(p1, p2) {
    if (p1 === p2) {
      return "È un pareggio";
    } else if (
      (p1 === "Sasso" && p2 === "Forbici") ||
      (p1 === "Forbici" && p2 === "Carta") ||
      (p1 === "Carta" && p2 === "Sasso")
    ) {
      return "Il vincitore è p1";
    } else {
      return "Il vincitore è p2";
    }
  }

  // 15) Rimuovere i duplicati da un array
  function removeDups(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }

//   // 16) Quanti giorni tra due date
//   function getDays(date1, date2) {
//     const 
//   }
  


// 17) Ottieni la somma del budget delle persone







// // 18)Calcola il prezzo totale dei generi alimentari
// function calculateTotalPrice(foodArray) {
//     let totalPrice = 0;
//     for (let i = 0; i < foodArray.length; i++) {
//       totalPrice += foodArray[i].quantity * foodArray[i].price;
//     }
//     return totalPrice;
//   }
//   const food = [
//     {
//       "product": "Milk",
//       "quantity": 1,
//       "price": 1.50
//     },
//     {
//       "product": "Bread",
//       "quantity": 2,
//       "price": 0.80
//     },
//     {
//       "product": "Cheese",
//       "quantity": 3,
//       "price": 2.50
//     }
//   ];

  
//   8.9
