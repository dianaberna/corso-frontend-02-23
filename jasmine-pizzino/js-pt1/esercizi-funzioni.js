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
      console.log(sommaDaUnUnicoNumero(4))
      console.log(sommaDaUnUnicoNumero(13))
      console.log(sommaDaUnUnicoNumero(600))







      
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
