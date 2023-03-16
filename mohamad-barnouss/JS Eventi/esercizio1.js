window.addEventListener("load", function () {
  console.log("prova prova");

  function generatoreNumeri() {
    return Math.ceil(Math.random() * 255);
  }
  let a = Number(generatoreNumeri());
  let b = Number(generatoreNumeri());
  let c = Number(generatoreNumeri());

  console.log(`valori sono a= ${a}  b=${b}  c=${c}`);
  //console.log(rgb(Number(a), Number(b), Number(c)));
  console.log("");
  document.body.style.background = `rgb(${a},${b},${c})`;

  //INSERISCO IL TESTO CENTRALE
  let paragrafo = document.createTextNode(`rgb(${a},${b},${c})`);
  let titoloH3 = this.document.createElement("h3");
  titoloH3.setAttribute("id", "mainTitle");
  titoloH3.appendChild(paragrafo);
  document.body.appendChild(titoloH3); // serve il document prima del body per appenderci qualcosa

  document.getElementById("mainTitle").style.background = "white";
  document.getElementById("mainTitle").style.margin = "45%";
  document.getElementById("mainTitle").style.width = "10rem";
  document.getElementById("mainTitle").style.height = "2rem";
});
