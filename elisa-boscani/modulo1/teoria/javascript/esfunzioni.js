/////////////////////////////////////////////////
//es1

function calcolaMoltiplicazione(a, b) {
  const somma = a * b;
  return somma;
}
const stampa = calcolaMoltiplicazione(3, 2);
console.log(stampa);
console.log(calcolaMoltiplicazione(-3, -6));
console.log(calcolaMoltiplicazione(7, 3));
////////////////////////////////////////////
///es2
function anniInGiorni(giorni) {
  let sommaGiorni = giorni * 365;
  return sommaGiorni;
}
console.log(anniInGiorni(65));
console.log(anniInGiorni(0));
console.log(anniInGiorni(20));
/////////
//es3
/* let numeri = 0;
function numeriNegativi(negativi) {
  if ((numeri = negativi <= 0)) {
    true;
  } else {
    false;
  }
  return numeri;
}
console.log(numeriNegativi(5));
console.log(numeriNegativi(0));
console.log(numeriNegativi(-2)); */
function numeriNegativi(negativi) {
  return negativi <= 0;
}
console.log(numeriNegativi(5));
console.log(numeriNegativi(0));
console.log(numeriNegativi(-2));

/////////////////////////////////////
/// es4
function sommaZampe(a, b, c) {
  let zampe = a * 2 + b * 4 + c * 4;

  return zampe;
}
console.log(sommaZampe(2, 3, 5));
console.log(sommaZampe(1, 2, 3));
console.log(sommaZampe(5, 2, 8));
//////////////////////////
//es5
function numeriDiFiammiferi(numeroCase) {
  let fiammiferi = 6;
  if (numeroCase >= 1) {
    let totFiamm = numeroCase * fiammiferi;
    return totFiamm - numeroCase + 1;
  } else Number.isInteger(numeroCase);
  return "non è un numero intero";
}

console.log(numeriDiFiammiferi(0));
console.log(numeriDiFiammiferi(1));
console.log(numeriDiFiammiferi(4));
console.log(numeriDiFiammiferi(87));
console.log(numeriDiFiammiferi(1.5));
/////////////////////////////////////////
///es4
function sommaNumeri(numero) {
  let somma = 0;

  for (i = 0; i <= numero; i++) {
    somma = somma + i;
  }
  return somma;
}
console.log(sommaNumeri(4));
console.log(sommaNumeri(13));
console.log(sommaNumeri(600));
/////////////////////////////////////////////////////
///////es5

function differenzaPercentuale(a, b) {
  let percentuale = (a / 100) * b;
  let totale = a - percentuale;
  return totale.toFixed(0);
}
console.log(differenzaPercentuale(1500, 50));
console.log(differenzaPercentuale(89, 20));
console.log(differenzaPercentuale(100, 75));
///////////////////////////////////////////////
//es7
function operazioniBase(a, operatore, b) {
  let risultato = 0;

  switch (operatore) {
    case "+":
      risultato = a + b;
      break;

    case "-":
      risultato = a - b;
      break;
    case "*":
      risultato = a * b;
      break;
    case "/":
      if (b != 0) {
        risultato = a / b;
      } else {
        return "impossibile dividere per 0";
      }
      break;
    default:
      return "errore";
  }
  return risultato;
}
console.log(operazioniBase(2, "+", 2));
console.log(operazioniBase(2, "*", 2));
console.log(operazioniBase(4, "/", 0));
///////////////////////////////////
//es6

function trovaLettere(a) {
  if (a % 1 != 0 || a == 0) {
    console.log("invalid");
  } else if (a > 0 && a < 27) {
    let lettera = String.fromCharCode(a + 96);
    console.log(lettera);
  }
}
/* trovaLettere(1);
trovaLettere(26.0);
trovaLettere(0);
trovaLettere(4.5);
 */
//////////////////////////
//es10
function sommaElementiArray(array) {
  let somma = 0;
  for (i = 0; i < array.length; i++) somma += array[i];
  return somma;
}
/* console.log(sommaElementiArray([1, 2, 4]));
console.log(sommaElementiArray([4, 2, 10, 2]));
console.log(sommaElementiArray([1])); */
/////////////////////////////
//es11
function quantiTrue(array2) {
  let sommaTrue = 0;
  for (i = 0; i < array2.length; i++)
    if (array2[i] == true) {
      sommaTrue++;
    }
  return sommaTrue;
}
/* console.log(quantiTrue([true, false, false, true, false]));
console.log(quantiTrue([false, false, false]));
console.log(quantiTrue([])); */
////////////////////////////////
//es12
function foglioPiegato(calcolo) {
  let spessore = 0.5 / 1000;
  totaleSpessore = spessore * 2 ** calcolo;
  return totaleSpessore;
}
console.log(foglioPiegato(4));
console.log(foglioPiegato(21));

////////////////////////////////////
//es13
let domini = ["gmail", "hotmail", "outlook"];
function validitaEmail(email) {
  let cont = "";
  if (email.includes("@") && email.includes(".")) {
    cont = email.indexOf("@");
    for (let i = 0; i < email.length; i++) {
      /* for (let i = 0; i < domini.length; i++) { */
      while (email[i + 1] != ".") {
        if (typeof cont[i--] == "string" && typeof cont[i++] == "stringa") {
        }
      }
      i++;
    }
  }
}

/////////////////////////////////
//es ogetti
let prova = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];
function budgetTotale(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i].budget;
  }
  return somma;
}
console.log(budgetTotale(prova));
/* function budgetTotale(array) {
  let somma = 0;
  array.forEach((element) => {
    somma += element.budget;
  });
  return somma;
} */

/*   budgetTotale([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
); */

console.log(
  budgetTotale([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
);
//////////////////////////////////
//es18
function prezzoTotaleAlimenti(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i].price * array[i].quantity;
  }
  return somma;
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
