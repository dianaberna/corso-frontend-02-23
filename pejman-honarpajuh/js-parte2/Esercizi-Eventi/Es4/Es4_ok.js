console.log('provaok calcolatrice----------')


window.addEventListener("load", function () {

   
    // corpo 

    // Div fondo
  /*   let divfondo = document.createElement('div');
     divfondo.setAttribute("id","fondo");
     document.body.appendChild(divfondo); */

    // Form e Div conteiner
/*     let form = document.createElement('form');
    form.setAttribute('id','form');
    divfondo.appendChild(form); */

/*     let divconteiner = document.createElement('div');
    divconteiner.setAttribute('class','conteiner');
    divfondo.appendChild(divconteiner); */

    // Input nel form
/*     let input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('id','display');
    input.setAttribute('value',' ');
    input.setAttribute('placeholder','0'); */
    //input.setAttribute('readonly');
   /*  form.appendChild(input); */

    // Div parent sta dentro div conteiner

/*     let divparent = document.createElement('div');
    divparent.setAttribute('class','parent');
    divconteiner.appendChild(divparent); */

    // Divi che base dei bottoni sta dentro divparent
/*     let div1 = document.createElement('div');
    div1.setAttribute('calss','div1');
    divparent.appendChild(div1); */
    // Creare tutti bottoni collegati a div parent
/*     let btn7 = document.createElement('button');
    btn7.setAttribute('id','button2');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','7');
    btn7.textContent = '7';
    divparent.appendChild(btn7);
   
    let btn8 = document.createElement('button');
    btn7.setAttribute('id','button3');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','8');
    btn7.textContent = '8';
    divparent.appendChild(btn8);

    let btn9 = document.createElement('button');
    btn7.setAttribute('id','button4');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','9');
    btn7.textContent = '9';
    divparent.appendChild(btn9);
  
    let btndivid = document.createElement('button');
    btn7.setAttribute('id','button5');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','/');
    btn7.textContent = '/';
    divparent.appendChild(btndivid);

    let btn4 = document.createElement('button');
    btn7.setAttribute('id','button6');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','4');
    btn7.textContent = '4';
    divparent.appendChild(btn4);
 
    let btn5 = document.createElement('button');
    btn7.setAttribute('id','button7');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','5');
    btn7.textContent = '5';
    divparent.appendChild(btn5);
  
    let btn6 = document.createElement('button');
    btn7.setAttribute('id','button8');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','6');
    btn7.textContent = '6';
    divparent.appendChild(btn6);
   
    let btnper = document.createElement('button');
    btn7.setAttribute('id','button9');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','*');
    btn7.textContent = '*';
    divparent.appendChild(btnper);

    let btn1 = document.createElement('button');
    btn7.setAttribute('id','button10');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','1');
    btn7.textContent = '1';
    divparent.appendChild(btn1);

    let btn2 = document.createElement('button');
    btn7.setAttribute('id','button11');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','2');
    btn7.textContent = '2';
    divparent.appendChild(btn2);
   
    let btn3 = document.createElement('button');
    btn7.setAttribute('id','button12');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','3');
    btn7.textContent = '3';
    divparent.appendChild(btn3);

    let btnmeno = document.createElement('button');
    btn7.setAttribute('id','button13');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','-');
    btn7.textContent = '-';
    divparent.appendChild(btnmeno);

    let btn0 = document.createElement('button');
    btn7.setAttribute('id','button14');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','0');
    btn7.textContent = '0';
    divparent.appendChild(btn0);
 
    let btnpunto = document.createElement('button');
    btn7.setAttribute('id','button15');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','.');
    btn7.textContent = '.';
    divparent.appendChild(btnpunto);
  
    let btnuguale = document.createElement('button');
    btn7.setAttribute('id','button16');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','=');
    btn7.textContent = '=';
    divparent.appendChild(btnuguale);
   
    let btnpiu = document.createElement('button');
    btn7.setAttribute('id','button17');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','+');
    btn7.textContent = '+';
    divparent.appendChild(btnpiu); */


        // I numeri
        let button = document.getElementsByClassName("number");

        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener("click", function (e) {
    
                document.getElementById('display').value += (e.target.value);
    
            });
        }
       // Operatore uguale
        button16.addEventListener("click", function () {
            x = eval(document.getElementById("display").value);
            document.getElementById('display').value = x;
            console.log(x)
    
    
        });







})

