function creoEappendo(a, b) {
  let c = document.createElement(b);
  a.appendChild(c);
  return c;
}
function creoEappendo2(a, b, txt = "") {
  let c = document.createElement(b);
  a.appendChild(c);
  if (txt.length != 0) {
    let cTesto = document.createTextNode(txt);
    c.appendChild(cTesto);
  }
  return c;
}

window.addEventListener("load", function () {

  let body = document.body;
  let calculator = creoEappendo2(body, "div");
  let input = creoEappendo(calculator, "input");
  input.setAttribute("type","text")
  let br = creoEappendo(calculator, "br");

  let pulsante_1 = creoEappendo2(calculator, "button", "1");
  let pulsante_2 = creoEappendo2(calculator, "button", "2");
  let pulsante_3 = creoEappendo2(calculator, "button", "3");
  let pulsante_somma = creoEappendo2(calculator, "button", "+");
  let br1 = creoEappendo(calculator, "br");

  let pulsante_4 = creoEappendo2(calculator, "button", "4");
  let pulsante_5 = creoEappendo2(calculator, "button", "5");
  let pulsante_6 = creoEappendo2(calculator, "button", "6");
  let pulsante_sottrazione = creoEappendo2(calculator, "button", "-");
  let br2 = creoEappendo(calculator, "br");

  let pulsante_7 = creoEappendo2(calculator, "button", "7");
  let pulsante_8 = creoEappendo2(calculator, "button", "8");
  let pulsante_9 = creoEappendo2(calculator, "button", "9");
  let pulsante_moltiplicazione = creoEappendo2(calculator, "button", "*");
  let br3 = creoEappendo(calculator, "br");

  let pulsante_0 = creoEappendo2(calculator, "button", "0");
  let pulsante_uguale = creoEappendo2(calculator, "button", "=");
  let pulsante_punto = creoEappendo2(calculator, "button", ".");
  let pulsante_divisione = creoEappendo2(calculator, "button", "/");
  let br4 = creoEappendo(calculator, "br");

  let pulsante_CLEAR = creoEappendo2(calculator, "button", "CLEAR");
  pulsante_CLEAR.setAttribute("class", "clear");

  let div3 = creoEappendo2(body, "div", "Scontrino :");
  div3.setAttribute("id", "scontrino");

  const pulsanti = document.querySelectorAll("button");

  let calcolo = [];
  let calcolo2;
  let ul = creoEappendo(div3, "ul");

  function calculate(button) {
    let valore = button.textContent;
    if (valore !== ".") {
      if (valore === "CLEAR") {
        calcolo = [];
        input.value = " ";
      } else if (valore === "=") {
        input.value = eval(calcolo2);
        calcolo = [input.value];
        let li = creoEappendo(ul, "li");
        let testo_li = document.createTextNode(calcolo2 + "=" + input.value);
        console.log(li);
        li.appendChild(testo_li);
      } else {
        calcolo.push(valore);
        calcolo2 = calcolo.join("");
        input.value = calcolo2;
      }
    } else {
      calcolo.push(".");
    }
  }
  pulsanti.forEach((button) =>
    button.addEventListener("click", () => calculate(button))
  );

  pulsante_somma.setAttribute("class", "operator");
  pulsante_sottrazione.setAttribute("class", "operator");
  pulsante_moltiplicazione.setAttribute("class", "operator");
  pulsante_divisione.setAttribute("class", "operator");

  const operators = document.querySelectorAll(".operator");


  pulsante_uguale.setAttribute("id", "uguale");
  
  input.addEventListener("change",function(e){
     input.value = eval(input.value)
    console.log(e)
        if (e.key == "Enter"){
        
        let li = creoEappendo(ul, "li");
        let testo_li = document.createTextNode(eval(input.value));
        console.log(li);
        li.appendChild(testo_li);
}
  })


  
});

// function elaborazioneRisultato (){
//   let input = document.getElementById("input")
//   let appoggio = input.value
//   input.value = eval(input.value)
//   let operazione = document.createElement("li")
//   operazione.textContent = appoggio + "=" + display.value
//   ul.appendChild(operazione)
//   input.value = ""
// }

// display.addEventListener("keyup", function (e) {
//   //se display.value contiene elementi diversi da quelli dell'arrayTasti restituisce errore
//   console.log(e.target.value)
//   console.log(e.key)
//   if (arrayTasti.includes(e.key) || e.key == "Enter" || e.key == "") {
//       console.log("carattere incluso");
//       if (e.key == "Enter") {
//           elaborazioneRisultato();
//       }
//   } else {
//       console.log("carattere NON incluso");
//       e.target.value = "";
//   }
// });