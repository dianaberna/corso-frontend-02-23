window.addEventListener("load", function () {
  // ----- CREAZIONE COLORI RANDOM ----- //

  const numeroRandomico1 = Math.floor(Math.random() * 255);
  const numeroRandomico2 = Math.floor(Math.random() * 255);
  const numeroRandomico3 = Math.floor(Math.random() * 255);

  // sintassi delle interpolation strings, l ho trovato su internet
  const coloreFinale = `rgb(${numeroRandomico1} ${numeroRandomico2} ${numeroRandomico3})`;

  // ---------- CREAZIONE DIV ---------- //

  const divCentrale = document.createElement("div");
  const contenutodiv = document.createTextNode(coloreFinale);
  divCentrale.appendChild(contenutodiv);
  divCentrale.className = "divCentrale";

  const body = document.body;
  body.style.backgroundColor = coloreFinale;

  body.appendChild(divCentrale);
});
