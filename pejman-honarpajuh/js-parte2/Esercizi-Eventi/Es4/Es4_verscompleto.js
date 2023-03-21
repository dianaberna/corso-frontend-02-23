console.log('versione completo calcolatrice----------')
window.addEventListener("load", function () {
    // corpo 
    // Div fondo
    let divfondo = document.createElement('div');
     divfondo.setAttribute("id","fondo");
     document.body.appendChild(divfondo);
    // Form e Div conteiner
    let form = document.createElement('form');
    form.setAttribute('id','form');
    divfondo.appendChild(form);
    let divconteiner = document.createElement('div');
    divconteiner.setAttribute('class','conteiner');
    divfondo.appendChild(divconteiner);
    //Creare due span sotto div conteiner colleando al div fondo
    let span1 = document.createElement('span');
    span1.setAttribute('id','span1');
    divfondo.appendChild(span1);
  
    let span2 = document.createElement('span');
    span2.setAttribute('id','span2');
    divfondo.appendChild(span2);
    // Input nel form
    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('id','display');
    input.setAttribute('value','');
    input.setAttribute('placeholder', '0' );
    input.setAttribute('readonly','readonly');
    form.appendChild(input); 
    // Creare Span con button dentro per cancellare
    let spancancel = document.createElement('span');
    spancancel.setAttribute('class','cancel')
    form.appendChild(spancancel);
    // Creare button delet dentro span
    let button1 = document.createElement('button');
    button1.setAttribute('id','button1');
    button1.setAttribute('class','delet');
    button1.textContent = 'C';
    spancancel.appendChild(button1);
    // Div parent sta dentro div conteiner
    let divparent = document.createElement('div');
    divparent.setAttribute('class','parent');
    divconteiner.appendChild(divparent);
    // Creare tutti bottoni collegati a div parent
    let btn7 = document.createElement('button');
    btn7.setAttribute('id','button2');
    btn7.setAttribute('class','number');
    btn7.setAttribute('value','7');
    btn7.textContent = '7';
    divparent.appendChild(btn7);
   
    let btn8 = document.createElement('button');
    btn8.setAttribute('id','button3');
    btn8.setAttribute('class','number');
    btn8.setAttribute('value','8');
    btn8.textContent = '8';
    divparent.appendChild(btn8);

    let btn9 = document.createElement('button');
   btn9.setAttribute('id','button4');
   btn9.setAttribute('class','number');
   btn9.setAttribute('value','9');
   btn9.textContent = '9';
    divparent.appendChild(btn9);
  
    let btndivid = document.createElement('button');
    btndivid.setAttribute('id','button5');
    btndivid.setAttribute('class','number');
    btndivid.setAttribute('value','/');
    btndivid.textContent = '/';
    divparent.appendChild(btndivid);

    let btn4 = document.createElement('button');
    btn4.setAttribute('id','button6');
    btn4.setAttribute('class','number');
    btn4.setAttribute('value','4');
    btn4.textContent = '4';
    divparent.appendChild(btn4);
 
    let btn5 = document.createElement('button');
    btn5.setAttribute('id','button7');
    btn5.setAttribute('class','number');
    btn5.setAttribute('value','5');
    btn5.textContent = '5';
    divparent.appendChild(btn5);
  
    let btn6 = document.createElement('button');
    btn6.setAttribute('id','button8');
    btn6.setAttribute('class','number');
    btn6.setAttribute('value','6');
    btn6.textContent = '6';
    divparent.appendChild(btn6);
   
    let btnper = document.createElement('button');
    btnper.setAttribute('id','button9');
    btnper.setAttribute('class','number');
    btnper.setAttribute('value','*');
    btnper.textContent = '*';
    divparent.appendChild(btnper);

    let btn1 = document.createElement('button');
    btn1.setAttribute('id','button10');
    btn1.setAttribute('class','number');
    btn1.setAttribute('value','1');
    btn1.textContent = '1';
    divparent.appendChild(btn1);

    let btn2 = document.createElement('button');
    btn2.setAttribute('id','button11');
    btn2.setAttribute('class','number');
    btn2.setAttribute('value','2');
    btn2.textContent = '2';
    divparent.appendChild(btn2);
   
    let btn3 = document.createElement('button');
    btn3.setAttribute('id','button12');
    btn3.setAttribute('class','number');
    btn3.setAttribute('value','3');
    btn3.textContent = '3';
    divparent.appendChild(btn3);

    let btnmeno = document.createElement('button');
    btnmeno.setAttribute('id','button13');
    btnmeno.setAttribute('class','number');
    btnmeno.setAttribute('value','-');
    btnmeno.textContent = '-';
    divparent.appendChild(btnmeno);

    let btn0 = document.createElement('button');
    btn0.setAttribute('id','button14');
    btn0.setAttribute('class','number');
    btn0.setAttribute('value','0');
    btn0.textContent = '0';
    divparent.appendChild(btn0);
 
    let btnpunto = document.createElement('button');
    btnpunto.setAttribute('id','button15');
    btnpunto.setAttribute('class','number');
    btnpunto.setAttribute('value','.');
    btnpunto.textContent = '.';
    divparent.appendChild(btnpunto);
  
    let btnuguale = document.createElement('button');
    btnuguale.setAttribute('id','button16');
    btnuguale.setAttribute('class','uguale');
    btnuguale.setAttribute('value','=');
    btnuguale.textContent = '=';
    divparent.appendChild(btnuguale);
   
    let btnpiu = document.createElement('button');
    btnpiu.setAttribute('id','button17');
    btnpiu.setAttribute('class','number');
    btnpiu.setAttribute('value','+');
    btnpiu.textContent = '+';
    divparent.appendChild(btnpiu);
//-------------Fine corpo -----------------//

        // I numeri
        let button = document.getElementsByClassName("number");

        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener("click", function (e) {

                document.getElementById('display').value += (e.target.value);
                document.getElementById('span1').textContent = document.getElementById('display').value;
            });
        }
       // Operatore uguale
       btnuguale.addEventListener("click", function () {
            x = eval(document.getElementById("display").value);
            document.getElementById('display').value = x;
            document.getElementById('span2').textContent =  ' = ' + x;
            console.log(x)
    
    
        });
        // Pulire Display
        button1.addEventListener("click",function(){
            document.getElementById('display').value = ' ';
        })


})

