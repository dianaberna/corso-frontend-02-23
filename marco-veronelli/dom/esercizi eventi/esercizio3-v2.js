window.addEventListener("load", function () {
  console.log("il body è stato caricato");

  let body = document.getElementsByTagName("body")[0];

  // input
  let input = document.createElement("input");
  body.appendChild(input);
  input.setAttribute("id", "input");
  input.setAttribute("value", "");
  //pulsante
  let pulsante = document.createElement("button");
  body.appendChild(pulsante);
  let txtp = document.createTextNode("aggiungi");
  pulsante.appendChild(txtp);
  //ul/li
  let ul = document.createElement("ul");
  body.appendChild(ul);
  let cestino = document.createElement("div");
  body.appendChild(cestino);
  body.insertAdjacentElement("afterend", cestino);
  let bc = document.createElement("button");
  cestino.appendChild(bc);
  let tc = document.createTextNode("Cestina");
  bc.appendChild(tc);
  cestino.setAttribute("class", "cestino");

  cestino.style =
//AGGIUNGI BUTTON 
    pulsante.addEventListener("click", function () {
      let value = document.getElementById("input").value;

      if (value != "") {
        let li = document.createElement("li");
        ul.appendChild(li);
        let t = document.createTextNode(value);
        li.appendChild(t);
        let x = document.createElement("button");
        li.appendChild(x);
        let txtx = document.createTextNode("X");
        x.appendChild(txtx);
        x.style.margin = "0.3rem";
        document.getElementById("input").value = "";

//ELIMINA BUTTON

        x.addEventListener("click", function () {
          cestino.appendChild(li);
          li.setAttribute("class", "cestinato");
          x.remove();
          li.appendChild(rip);
        });
        let ript = document.createTextNode("Ripristina");
        let rip = document.createElement("button");
        rip.setAttribute("id", "rip");
        rip.appendChild(ript);
        rip.style.margin = "0.3rem";
//RIP BUTTON

        rip.addEventListener("click", function () {
          li.removeAttribute("class");
          ul.appendChild(li);
          rip.remove();
          let x = document.createElement("button");
          li.appendChild(x);
          let txtx = document.createTextNode("X");
          x.appendChild(txtx);
          x.style.margin = "0.3rem";
         
        });
//SVUOTA CESTINO

        bc.addEventListener("click", function () {
          console.log("clicked cestino");
          let ecanc = document.getElementsByClassName("cestinato");
          for (let i = ecanc.length - 1; i >= 0; i--) {
            ecanc[i].remove();
          }
        });
      }
    });
});
