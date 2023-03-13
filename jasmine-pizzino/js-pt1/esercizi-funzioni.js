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
    if (step === 0) {
      return 0;
    } else {
      return (step * 4) + 2 + numeroDiFiammiferi(step - 1);
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
      
 // 7) Trova lo sconto -
 function trovaSconto(prezzo, sconto) {
    let prezzoScontato = prezzo * (1 - sconto/100);
    return parseFloat(prezzoScontato.toFixed(2));
  }
