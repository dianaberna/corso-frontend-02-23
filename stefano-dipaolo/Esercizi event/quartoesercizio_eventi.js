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
    let divCalcolatrice = creoEappendo(body,"div")
    let zero = creoEappendo2 (divCalcolatrice,"button","0")
    let uno = creoEappendo2 (divCalcolatrice,"button","1")
    let due = creoEappendo2 (divCalcolatrice,"button","2")
    let tre = creoEappendo2 (divCalcolatrice,"button","3")
    let quattro = creoEappendo2 (divCalcolatrice,"button","4")
    let cinque = creoEappendo2 (divCalcolatrice,"button","5")
    let sei = creoEappendo2 (divCalcolatrice,"button","6")
    let sette = creoEappendo2 (divCalcolatrice,"button","7")
    let otto = creoEappendo2 (divCalcolatrice,"button","8")
    let nove = creoEappendo2 (divCalcolatrice,"button","9")
    let più = creoEappendo2 (divCalcolatrice,"button","+")
    let meno = creoEappendo2 (divCalcolatrice,"button","-")
    let per = creoEappendo2 (divCalcolatrice,"button","*")
    let diviso = creoEappendo2 (divCalcolatrice,"button","/")
    let uguale = creoEappendo2 (divCalcolatrice,"button","=")









})