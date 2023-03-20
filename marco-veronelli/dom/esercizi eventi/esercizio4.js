window.addEventListener("load", function () {
  console.log("il body è stato caricato");
  let body = document.getElementsByTagName("body")[0];
  let calcolatrice = document.createElement("div");
  body.appendChild(calcolatrice);
  let input = document.createElement("input");
  input.setAttribute("id", "i");
  input.setAttribute("value", "");
  calcolatrice.appendChild(input);
  input.style.width = "100%";
  calcolatrice.style.display = "flex;";
  calcolatrice.style.width = "50%";
  calcolatrice.style.margin = "3.125rem";

  function calc(nometag, text = "", id = "", classe = "") {
    let tasto = document.createElement(nometag);
    let numero = document.createTextNode(text);
    console.log(numero);
    tasto.appendChild(numero);
    tasto.setAttribute("id", id);
    tasto.setAttribute("class", classe);
    calcolatrice.appendChild(tasto);
    tasto.style.width = "100px";
    tasto.style.height = "30px";
    tasto.style.margin = "10px";
    return tasto;
  }

  /* let prova= calc (nometag="button", text="sette",id="7") */

  let tasti = [
    { nometag: "button", text: "7", id: "7", classe: "but" },
    { nometag: "button", text: "8", id: "8", classe: "but" },
    { nometag: "button", text: "9", id: "9", classe: "but" },
    { nometag: "button", text: "/", id: "diviso", classe: "but" },
    { nometag: "button", text: "4", id: "4", classe: "but" },
    { nometag: "button", text: "5", id: "5", classe: "but" },
    { nometag: "button", text: "6", id: "6", classe: "but" },
    { nometag: "button", text: "*", id: "per", classe: "but" },
    { nometag: "button", text: "1", id: "1", classe: "but" },
    { nometag: "button", text: "2", id: "2", classe: "but" },
    { nometag: "button", text: "3", id: "3", classe: "but" },
    { nometag: "button", text: "-", id: "meno", classe: "but" },
    { nometag: "button", text: "0", id: "0", classe: "but" },
    { nometag: "button", text: ".", id: "punto", classe: "but" },
    { nometag: "button", text: "=", id: "uguale", classe: "but" },
    { nometag: "button", text: "+", id: "piu", classe: "but" },
    { nometag: "button", text: "cancella", id: "cancella", classe: "but" },
  ];

  for (let i = 0; i < tasti.length; i++) {
    let tasto = calc(
      tasti[i].nometag,
      tasti[i].text,
      tasti[i].id,
      tasti[i].classe
    );
    tasto.addEventListener("click", function (e) {
      let a = [];
      let totale = [];
      let ta = [];
      let b = [];
      let bi = [];
      tb = [];
      tbb = [];
      taa = [];
      if (e.target.firstChild.nodeValue === "cancella") {
        input.value = "";
      } else {
        car = e.target.firstChild.nodeValue;
        ;
        input.value += car;
        console.log(input.value)
        if (car === "=") {
          for (let i = 0; i < input.value.length - 1; i++) {
            a.push(input.value[i]);
          }
          for (let i = 0; i < a.length; i++) {
            if (a[i] !== "*" || a[i] !== "/" || a[i] !== "-" || a[i] !== "+") {
              ta.push(a[i]);
            }

            if (a[i] === "*" || a[i] === "/" || a[i] === "-" || a[i] === "+") {
              b = a[i];
              bi = i;
            }
            
          }
          for (let j = bi + 1; j < a.length; j++) {
            if (a[j] !== "*" || a[j] !== "/" || a[j] !== "-" || a[j] !== "+") {
              tb.push(a[j]);
            }
          }




          //RISULTATI
          ta.pop();
          console.log("tb" + tb);
          tbb = Number(tb.join(""));
          taa = Number(ta.join(""));
          console.log("taa" + taa);
          console.log("tbb" + tbb);

          if (b === "*") {
            totale = taa * tbb;
            console.log(totale);
          }
          if (b === "/") {
            totale = taa / tbb;
            console.log("totale" + totale);
          }
          if (b === "-") {
            totale = taa - tbb;
            console.log(totale);
          }
          if (b === "+") {
            totale = taa + tbb;
            console.log(totale);
          }
          input.value = totale;
        }
      }
    });
  }
});
