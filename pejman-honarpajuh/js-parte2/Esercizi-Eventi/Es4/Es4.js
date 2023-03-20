console.log('esercizio 4 --------')


window.addEventListener("load", function () {
   let x = 0;
   let y = 0;
   let risultato = 0;
   let array = [];
   let z= document.getElementById('display') ;
   z = '';
   let ope = 0; 

    function cancel(x , y , risultato , ope){
        x , y , risultato = 0;
        ope = 0;
        z = '';
    }

    function Add(x , ope ){
        x = z.value;
        z.value = '';
        ope = 2;

        array.push(x)
    }
    function Less(x , ope ){
        x = z.value;
        z.value = '';
        ope = 3;

        array.push(x)
    }


    function same(x , y , risultato , ope ){
        y = z.value;
        array.push(y);

        if(ope === 2){
            risultato = x + y ;

            let temp = 0;
            for(let i=0 ; i<array.length ; i++){
                temp += array[i];
            }
            risultato = temp;
            array = [];
        }
        else if(ope === 3){
            risultato = x - y ;
        }
    }

    // I numeri
    //uno = document.getElementById("button10").value;
    button10.addEventListener("click", function () {
        z += '1',
        x = parseInt(z)
     console.log(typeof x);
      
        /*  x = document.getElementById('display').value;
        document.getElementById('display').value += parseInt(uno); */
     
        //console.log( uno)
    });
    due = document.getElementById("button11").value;
    button11.addEventListener("click", function () {
        document.getElementById('display').value += parseInt(due);

    });
    tre = document.getElementById("button12").value;
    button12.addEventListener("click", function () {
        document.getElementById('display').value += tre;

    });
    quattro = document.getElementById("button6").value;
    button6.addEventListener("click", function () {
        document.getElementById('display').value += quattro;

    });
    cinque = document.getElementById("button7").value;
    button7.addEventListener("click", function () {
        document.getElementById('display').value += cinque;

    });
    sei = document.getElementById("button8").value;
    button8.addEventListener("click", function () {
        document.getElementById('display').value += sei;

    });
    sette = document.getElementById("button2").value;
    button2.addEventListener("click", function () {
        //document.getElementById('display').value += sette;

    });
    otto = document.getElementById("button3").value;
    button3.addEventListener("click", function () {
        //document.getElementById('display').value += otto;

    });
    nove = document.getElementById("button4").value;
    button4.addEventListener("click", function () {
        //document.getElementById('display').value += nove;

    });
    zero = document.getElementById("button14").value;
    button14.addEventListener("click", function () {
        //document.getElementById('display').value += zero;

    });

    punto = document.getElementById("button15").value;
    button15.addEventListener("click", function () {
        //document.getElementById('display').value += punto;

    });
    // Operatori
    divisione = document.getElementById("button5").value;
    button5.addEventListener("click", function () {
       // document.getElementById('display').value += divisione;

    });
    per = document.getElementById("button9").value;
    button9.addEventListener("click", function () {
        //document.getElementById('display').value += per;

    });
    meno = document.getElementById("button13").value;
    button13.addEventListener("click", function () {
        //document.getElementById('display').value += meno;

    });
    //piu = document.getElementById("button17").value;
    button17.addEventListener("click", function () {
      return Add();
      
        // document.getElementById('display').value += piu;
       /*  x = document.getElementById('display').innerHTML;
        console.log(x) */
       // document.getElementById('display').value = '';

    });
    // Operatore Uguale           
    //uguale = document.getElementById("button16").value;
    button16.addEventListener("click", function () {
        return same();
        //document.getElementById('display').value += uguale ;

    });

    //console.log(x)



})




/* let digit = Array();
  let i = 0;

  digit[0] = [0];
  visualizza();

  function visualizza() {
      let display = document.getElementById("display");
      display.value = "";

      for (let j = 0; j < digit.length; j++) {
          display.value = display.value + digit[j];
      }
  }

  function cifra(num) { */
      //controllo il precedente inserimento
      //deve esserci un'operazione altrimenti sovrascrivo

    /*   if (isNaN(digit[i])) {
          i++;
          digit[i] = num;
      }
      else {
          digit[i] = num;
      }

      visualizza();
  }

  function operazione(op) { */
      //controllo il precedente inserimento
      //deve esserci un numero altrimenti sovrascrivo
    /*   let totale = 0;

      if (isNaN(digit[i])) {
          digit[i] = op;
      }
      else {
          i++;
          digit[i] = op;
      }

      if (op == '=') {
          let j = 0;
          {
              if (digit[j + 1] == '+') {
                  totale += digit[j] + digit[j + 2];
              }

              if (digit[j + 1] == '-') {
                  totale += digit[j] - digit[j + 2];
              }

              if (digit[j + 1] == '*') {
                  totale += digit[j] * digit[j + 2];
              }

              if (digit[j + 1] == '/') {
                  totale += digit[j] / digit[j + 2];
              }

              //alert(totale);
              digit[j + 4] = totale;
          }
      }

      visualizza();
  }
 */



         


