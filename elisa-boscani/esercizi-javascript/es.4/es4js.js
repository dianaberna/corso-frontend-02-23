window.addEventListener("load", function () {
  // ----- CREAZIONE CONTAINER GENERALE (contiene tutto) ----- //
  let mainContainer = document.createElement("div");
  mainContainer.className = "mainContainer";
  document.body.appendChild(mainContainer);

  // ----- CREAZIONE INPUT (dove visualizzo i numeri) ----- //
  let input = document.createElement("input");
  mainContainer.appendChild(input);

  // ----- CREAZIONE CONTENITORE NUMERI ----- //
  let tastiera = document.createElement("div");
  tastiera.className = "tastiera";
  mainContainer.appendChild(tastiera);
  // ----- REGISTRO CASSA ----- //
  let registratoreCassa = document.createElement("div");
  document.body.appendChild(registratoreCassa);
  registratoreCassa.className = "cassa";
  let divCassa = document.createElement("div");
  registratoreCassa.appendChild(divCassa);
  //----NOME CASSA----///
  let titoloCassa = document.createElement("h1");
  let nomeCassa = document.createTextNode("Registratore di Cassa");
  titoloCassa.appendChild(nomeCassa);
  divCassa.appendChild(titoloCassa);

  let divCalcoli = document.createElement("div");
  registratoreCassa.appendChild(divCalcoli);
  // ----- GENERO DINAMICAMENTE I NUMERI ----- //
  let tasti = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"];

  for (let index = 0; index < tasti.length; index++) {
    let button = document.createElement("button");
    button.innerHTML = tasti[index];
    tastiera.appendChild(button);

    switch (index) {
      case 14:
        button.addEventListener("click", function () {
          risolviEspressione();
        });
        break;
      case 0:
      case 1:
      case 2:
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
      case 12:
        button.addEventListener("click", function () {
          scriviOperatore(tasti[index]);
        });
        break;
      case 3:
      case 7:
      case 11:
      case 15:
        button.addEventListener("click", function () {
          scriviSegno(tasti[index]);
        });
        break;
      case 13:
        button.addEventListener("click", function () {
          scriviVirgola(tasti[i]);
        });

      default:
        break;
    }
  }

  function scriviOperatore(valore) {
    input.value += valore;
  }

  function scriviSegno(valore) {
    input.value = input.value + " " + valore + " ";
  }

  function scriviVirgola(valore) {
    input.value = input.value + valore;
  }
  //---Operazione con tasto---//
  input.addEventListener("change", function () {
    input.value = eval(input.value);
  });
  let registroNumeri = [];
  function risolviEspressione() {
    if (input.value !== "") {
      let espressione = input.value;
      let risultato = eval(espressione).toFixed(2);

      let espressioneIntero = `${espressione} = ${risultato}`;
      registroNumeri.push(espressioneIntero);
      divCalcoli.innerHTML = "";

      for (let index = 0; index < registroNumeri.length; index++) {
        let espr = registroNumeri[index];
        let transazione = document.createElement("p");
        transazione.innerHTML = espr;
        divCalcoli.appendChild(transazione);
      }
      input.value = risultato;
    }
  }
});

/* display.addEventListener("keyup", function (e) {
  //se display.value contiene elementi diversi da quelli dell'arrayTasti restituisce errore
  console.log(e.target.value)
  console.log(e.key)
  if (arrayTasti.includes(e.key) || e.key == "Enter" || e.key == "") {
      console.log("carattere incluso");
      if (e.key == "Enter") {
          elaborazioneRisultato();
      }
  } else {
      console.log("carattere NON incluso");
      e.target.value = "";
  }
}); */
