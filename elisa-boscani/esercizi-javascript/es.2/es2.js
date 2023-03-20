window.addEventListener("load", function () {
  // ----- CREAZIONE DIV CONTENITORE ----- //
  let divContenitore = document.createElement("div");
  divContenitore.className = "contenitore";
  document.body.appendChild(divContenitore);

  // ----- CREAZIONE INPUT ----- //
  let input = document.createElement("input");
  let inputValue =
    "margin: 2rem; width: 400px; height: 400px; background-color: yellow;";
  input.setAttribute("value", inputValue);
  divContenitore.appendChild(input);

  // ----- CREAZIONE BUTTON ----- //
  let button = document.createElement("button");
  let buttonTesto = document.createTextNode("Aggiungi Stile");
  button.appendChild(buttonTesto);
  divContenitore.appendChild(button);

  // ------- CREAZIONE DIV QUADRATO ------- //
  let quadrato = document.createElement("div");
  quadrato.className = "quadrato";
  document.body.appendChild(quadrato);

  // ----- MANIPOLAZIONE STRINGA ----- //

  function cambiaStile() {
    let inputValue = input.value;
    let inputValueArray = inputValue.split(" ");

    let margin;
    let width;
    let height;
    let bgColor;

    inputValueArray.forEach((value, index) => {
      switch (index) {
        case 1:
          margin = value.replace(";", "");
          break;
        case 3:
          width = value.replace(";", "");
          break;
        case 5:
          height = value.replace(";", "");
          break;
        case 7:
          bgColor = value.replace(";", "");
          break;
        default:
          return "errore!";
      }
    });

    quadrato.style.margin = margin;
    quadrato.style.width = width;
    quadrato.style.height = height;
    quadrato.style.backgroundColor = bgColor;
  }

  // ----- CREAZIONE ADD EVENT LISTENER ----- //
  /* button.addEventListener("click", function () {
  cambiaStile();
}); */

  button.addEventListener("click", function () {
    cambiaStile();
  });
});
