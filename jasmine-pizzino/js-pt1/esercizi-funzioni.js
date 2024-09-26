// 1) Moltiplicazione di due numeri - Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.
function moltiplicazione(num1, num2) {
    return num1 * num2;
  }
  console.log(moltiplicazione(3, 2));    // 6
  console.log(moltiplicazione(-3, -6));  // 18
  console.log(moltiplicazione(7, 3));    // 21





  // 2) Convertire anni in giorni - Creare una funzione che prenda l'età in anni e restituisca l'età in giorni.
  function anniInGiorni(anni) {
    return anni * 365;
  }
  console.log(anniInGiorni(65));  // 23725
  console.log(anniInGiorni(0));   // 0
  console.log(anniInGiorni(20));  // 7300






  // 3) Minore o uguale a zero - Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.
  function minoreUgualeAZero(numero) {
    return numero <= 0;
  }
  console.log(minoreUgualeAZero(5));  // false
  console.log(minoreUgualeAZero(0));  // true
  console.log(minoreUgualeAZero(-2)); // true
    





  // 4) Il problema della fattoria - 
  function numeroZampe(polli, mucche, maiali) {
    return (polli * 2) + (mucche * 4) + (maiali * 4);
  }
  console.log(numeroZampe(2, 3, 5)); // 36
  console.log(numeroZampe(1, 2, 3)); // 22
  console.log(numeroZampe(5, 2, 8)); // 50







  
  // 5) Case di fiammiferi
  function numeroDiFiammiferi(step) {
    if (step < 0){
    return "errore"
   }
   else if (step > 0){
    return (step * 6)- (step - 1);
   }
   else{
    return 0;
   }
  }
  console.log(numeroDiFiammiferi(1)); // 6
  console.log(numeroDiFiammiferi(4)); // 21
  console.log(numeroDiFiammiferi(87)); // 436








  // 6) Somma i numeri da un unico numero 
    function sommaDaUnUnicoNumero(num) {
        let somma = 0;
        for (let i = 1; i <= num; i++) {
          somma += i;
        }
        return somma;
      }
      console.log(sommaDaUnUnicoNumero(4));
      console.log(sommaDaUnUnicoNumero(13));
      console.log(sommaDaUnUnicoNumero(600));







      
// 7) Trova lo sconto
function trovaSconto(prezzoOriginale, percentualeSconto) {
  var sconto = prezzoOriginale * percentualeSconto / 100;
  var prezzoFinale = prezzoOriginale - sconto;
  return parseFloat(prezzoFinale.toFixed(2));
}
console.log(trovaSconto(1500, 50)); // 750
console.log(trovaSconto(89, 20)); // 71.20
console.log(trovaSconto(100, 75)); // 25.00






 // 8) Posizione nell'alfabeto
function letteraInPosizione(posizione) {
  if (Number.isInteger(posizione) && posizione >= 1 && posizione <= 26) {
    return String.fromCharCode(posizione + 96);
  } else {
    return "invalid";
  }
}

console.log(letteraInPosizione(1)); // "a"
console.log(letteraInPosizione(26.0)); // "z"
console.log(letteraInPosizione(0)); // "invalid"
console.log(letteraInPosizione(4.5)); // "invalid"






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
  console.log(sommaElementiArray([1, 2, 4])); // 7
  console.log(sommaElementiArray([4, 2, 10, 2])); // 18
  console.log(sommaElementiArray([1])); // 1







// 11) quante volte è vero
console.log("11) quante volte è vero");
function quantiTrue(array) {
    let contatore = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            contatore++;
        }
    }
    return contatore;
}
console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([false, false, false, false]));
console.log(quantiTrue([]));






// 12) piegare un pezzo di carta
console.log("12) piegare un pezzo di carta");
function spessore(numero) {
    return 0.0005 * 2 ** numero;
}
console.log(spessore(1));
console.log(spessore(4));
console.log(spessore(21));





// 13) validare un'e-mail
console.log("13) validare un'e-mail");
function validareEmail(email) {
    if (
        email.indexOf("@") < 1 ||
        email.indexOf(".") < 0 ||
        email.indexOf("@") > email.lastIndexOf(".")
    )
        return false;
    return true;
}

console.log(validareEmail("@gmail.com"));
console.log(validareEmail("hello.gmail@com"));
console.log(validareEmail("mario.rossi@gmail.com"));
console.log(validareEmail("gmail"));
console.log(validareEmail("hello@gmail"));
console.log(validareEmail("hello@edabit.com"));






// 14) sasso carta forbici
console.log("14) sasso carta forbici");
function sassoCartaForbici(p1, p2) {
    return p1 == p2
        ? `It's a draw`
        : p1 == `Rock` && p2 == "Scissors"
        ? `The winner is p1`
        : p1 == `Rock`
        ? `The winner is p2`
        : p1 == `Paper` && p2 == `Scissors`
        ? `The winner is p2`
        : p1 == `Paper` && p2 == `Rock`
        ? `The winner is p1`
        : p1 == `Scissors` && p2 == `Paper`
        ? `The winner is p1`
        : `The winner is p2`;
}

console.log(sassoCartaForbici("Rock", "Paper"));
console.log(sassoCartaForbici("Scissors", "Paper"));
console.log(sassoCartaForbici("Paper", "Paper"));

function sassoCartaForbici2(p1, p2) {
    let w = {
        Rock: "Scissors",
        Scissors: "Paper",
        Paper: "Rock",
    };
    if (p1 === p2) return "It's a draw";
    console.log("-------" + w[p1]);
    return `The winner is ${w[p1] === p2 ? "p1" : "p2"}`;
}

console.log(sassoCartaForbici("Rock", "Paper"));
console.log(sassoCartaForbici("Scissors", "Paper"));
console.log(sassoCartaForbici("Paper", "Paper"));






// 15) quanti giorni tra due date
console.log("15) quanti giorni tra due date");
function quantiGiorni(primaData, secondaData) {
    const unGiorno = 24 * 60 * 60 * 1000;
    return (diffDays = Math.round(
        Math.abs((primaData - secondaData) / unGiorno)
    ));
}

console.log(quantiGiorni(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(
    quantiGiorni(new Date("December 29, 2018"), new Date("January 1, 2019"))
);
console.log(quantiGiorni(new Date("July 20, 2019"), new Date("July 30, 2019")));






// 16) rimuovere i duplicati di un array
console.log("16) rimuovere i duplicati di un array");

function rimuoviDuplicati(array) {
    const arrayNuovo = [];

    for (let i = 0; i < array.length; i++) {
        let duplicato = false;

        for (let j = 0; j < i; j++) {
            if (array[i] === array[j]) {
                duplicato = true;
                break;
            }
        }

        if (!duplicato) {
            arrayNuovo.push(array[i]);
        }
    }

    return arrayNuovo;
}
console.log(rimuoviDuplicati([1, 0, 1, 0]));
console.log(rimuoviDuplicati(["The", "big", "cat"]));
console.log(rimuoviDuplicati(["John", "Taylor", "John"]));






// 17) budget totale
console.log("17) budget totale");
function budgetTotale(oggetto) {
    let totale = 0;
    for (let i = 0; i < oggetto.length; i++) {
        totale = totale + oggetto[i].budget;
    }

    return totale;
}

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
);

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
);







// 18) prezzo totale alimenti
console.log("18) prezzo totale alimenti");
function prezzoTotaleAlimenti(alimenti) {
    let totale = 0;
    for (let i = 0; i < alimenti.length; i++) {
        totale = totale + alimenti[i].price * alimenti[i].quantity;
    }

    return totale.toFixed(2);
}
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
        { product: "eggs", quantity: 12, price: 0.1 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "chocolate", quantity: 1, price: 0.1 },
        { product: "lollipop", quantity: 1, price: 0.2 },
    ])
);







// 19) Generatore di password
console.log("19) Generatore di password");

function generaPasswordCasuale(lungezza) {
    let password = "";
    for (let i = 0; i < lungezza; i++) {
        password =
            password +
            String.fromCharCode(Math.floor(Math.random() * 100) + 32);
    }
    return password;
}
console.log(generaPasswordCasuale(8));






// 20) Array multidimensionali e stringhe
console.log("20) Array multidimensionali e stringhe");
let parole = [
    ["ciao", "come", "stai"],
    ["sono", "contento", "di vederti"],
    ["alla", "prossima", "volta"],
];

let concatenazione = "";
for (let i = 0; i < parole.length; i++) {
    for (let j = 0; j < parole[i].length; j++) {
        concatenazione += parole[i][j] + " ";
    }
}
console.log(concatenazione);






// 21) Array multidimensionali e oggetti
console.log("20) Array multidimensionali e oggetti");
let persone = [
    { nome: "Mario", cognome: "Rossi", eta: 40 },
    { nome: "Luigi", cognome: "Verdi", eta: 25 },
    { nome: "Anna", cognome: "Bianchi", eta: 35 },
];

for (let i = 0; i < persone.length; i++) {
    if (persone[i].eta > 30) {
        console.log(persone[i].nome + " " + persone[i].cognome);
    }
}






// 22)
// con il tipo di dato Date
function convertitoreDate(dateString, isShortFormat) {
    const parte = dateString.split("/");
    const mese = parseInt(parte[0]);
    const giorno = parseInt(parte[1]);
    const anno = parseInt(parte[2]);

    const data = new Date(anno, mese - 1, giorno);

    const opzioni = isShortFormat
        ? { giorno: "2-digit", mese: "2-digit", anno: "2-digit" }
        : { giorno: "2-digit", mese: "2-digit", anno: "numeric" };
    const dataFormattata = data.toLocaleDateString("it-IT", opzioni);

    return dataFormattata;
}

// senza il tipo di dato Date
function convertitoreDate(dateString, isShortFormat) {
    const parte = dateString.split("/");
    const mese = parseInt(parte[0]);
    const giorno = parseInt(parte[1]);
    const anno = parseInt(parte[2]);

    const annoFormattato = isShortFormat
        ? anno.toString().slice(-2)
        : anno.toString();
    const dataFormattata = `${giorno.toString().padStart(2, "0")}/${mese
        .toString()
        .padStart(2, "0")}/${annoFormattato}`;

    return dataFormattata;
}