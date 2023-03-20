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

function risolviEspressione() {
  let espressione = input.value;
  let arrayEspressione = espressione.split(" ");
  let risultato = 5 + "+" + 5;
  console.log("risultato:", risultato);

  /*   for (let index = 0; index < arrayEspressione.length; index++) {
    switch (arrayEspressione[index]) {
      case "+":

        break;
      case "-":
        break;
      case "/":
        break;
      case "*":
        break;

      default:
        break;
    }
  } */
}

/* function operazioniBase(a, operatore, b) {
  let risultato = 0;

  switch (operatore) {
    case "+":
      risultato = a + b;
      break;

    case "-":
      risultato = a - b;
      break;
    case "*":
      risultato = a * b;
      break;
    case "/":
      if (b != 0) {
        risultato = a / b;
      } else {
        return "impossibile dividere per 0";
      }
      break;
    default:
      return "errore";
  }
  return risultato;
} */
