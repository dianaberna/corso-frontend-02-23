let inputContainer = document.querySelector(".inputs-container");

let arrayEventi = [
  "default",
  "hover",
  "focus",
  "keydown",
  "change",
  "disabled",
  "error",
  "confirmed",
];

// ----- CREAZIONE INPUT ----- //
for (let index = 0; index < arrayEventi.length; index++) {
  let contenitore = document.createElement("div");
  contenitore.className = "contenitore";
  inputContainer.appendChild(contenitore);

  // CREAZIONE TITOLO //
  let etichetta = document.createElement("p");
  etichetta.innerHTML = arrayEventi[index];
  contenitore.appendChild(etichetta);

  let input = document.createElement("input");
  input.type = "text";
  input.className = arrayEventi[index];

  contenitore.appendChild(input);

  if (input.className === "keydown") {
    input.addEventListener("keydown", function () {
      input.style.border = "4px solid darkorchid";
      console.log("evento:", arrayEventi[index]);
    });
  } else if (input.className === "change") {
    input.value = "Scrivi qualcosa...";
    input.addEventListener("change", function () {
      input.id = "onChange";
      console.log("evento:", arrayEventi[index]);
    });
  } else if (input.className === "disabled") {
    input.disabled = true;
  } else if (input.className === "error") {
    input.placeholder = "Oops...";
    input.addEventListener("input", function (event) {
      // se metto un carattere diverso da a, b o c andrà in errore
      var regex = new RegExp("[^abc]");
      let inputValue = event.target.value;
      if (regex.test(inputValue)) {
        input.className = "errore";
      }
    });
  } else if (input.className === "confirmed") {
    input.addEventListener("input", function (event) {
      // la parola corretta è Elisa!
      var password = "Elisa";
      let inputValue = event.target.value;
      if (inputValue === password) {
        input.className = "corretto";
      }
    });
  } else {
    input.addEventListener(arrayEventi[index], function () {
      console.log("evento:", arrayEventi[index]);
    });
  }
}
