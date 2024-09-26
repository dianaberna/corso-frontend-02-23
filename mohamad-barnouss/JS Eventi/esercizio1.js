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
  let textRandom = document.createTextNode(`rgb(${a},${b},${c})`);
  let titoloH3 = this.document.createElement("div");
  titoloH3.setAttribute("id", "mainTitle");
  //paragrafo dentro il div
  let paragrafo = document.createElement("p");
  paragrafo.setAttribute("id", "ptext");
  paragrafo.appendChild(textRandom);
  titoloH3.appendChild(paragrafo);
  document.body.appendChild(titoloH3); // serve il document prima del body per appenderci qualcosa

  document.getElementById("mainTitle").style.background = "white";
  document.getElementById("mainTitle").style.transform = "translateY(50vh)";
  document.getElementById("mainTitle").style.width = "10rem";
  document.getElementById("mainTitle").style.height = "2rem";
  document.getElementById("mainTitle").style.display = "flex";
  document.getElementById("mainTitle").style.alignItems = "center";
  document.getElementById("mainTitle").style.justifyContent = "center";
  document.body.style.display = "flex";
  document.body.style.alignItems = "center";
  document.body.style.justifyContent = "center";
  this.document.style.traslate;
});
