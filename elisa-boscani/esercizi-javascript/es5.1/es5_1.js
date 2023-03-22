// --- CREAZIONE TITOLO --- //
let titolo = document.createElement("h1");
let testo = document.createTextNode("Form");
titolo.appendChild(testo);
document.body.appendChild(titolo);

// --- CREAZIONE FORM --- //
let form = document.createElement("form");
form.name = "myForm";
document.body.appendChild(form);

// --- CREAZIONE INPUT DINAMICAMENTE --- //
let arrayInput = [
  "Nome",
  "Cognome",
  "Email",
  "Password",
  "Conferma Password",
  "Submit",
];

for (let index = 0; index < arrayInput.length; index++) {
  // CREO TITOLINO //
  let titolo = document.createElement("label");
  titolo.innerHTML = arrayInput[index];
  form.appendChild(titolo);
  // CREO INPUT //
  let tipo;
  switch (arrayInput[index]) {
    case "Submit":
      tipo = "submit";

      break;
    case "Email":
      tipo = "email";
      break;
    case "Password":
    case "Conferma Password":
      tipo = "password";
      break;
    default:
      tipo = "text";
      break;
  }

  let input = document.createElement("input");
  input.type = tipo;

  form.appendChild(input);

  /* input.addEventListener("change", function () {
    controlloNome(input.value);
  }); */

  /* function controlloNome(valore) {
  let arrayValore = valore.split("");
  console.log("arrayValore:", arrayValore);
  let condizione = arrayValore.find((carattere) => {
    console.log("carattere", carattere);

    if (carattere === "!" /* || carattere === "*" || carattere === "?" */ /* ) {
      return true;
    } else {
      return false;
    }
  });

  console.log("condizione", condizione);
  if (condizione !== true) {
    console.log("corretto");
  } else {
    console.log("sbagliato");
  }  */
  function checkForm(frm) {
    form.addEventListener("submit", function (event) {
      /* event.preventDefault();
      var nameValue = "text"; */
      /* var nameField = form.elements["text"]; */
      /* var nameValue = nameField.value; */
      var regex =
        /^([a-zA-Z\xE0\xE8\xE9\xF9\xF2\xEC\x27]\s?)+$/; /* new RegExp */ /* \/^[a-zA-Z\\s]*$\/ */
      if (!checkPatternChars("text", frm.text.value, regex)) {
        console.log("il nome è sbagliato");
      } else {
        console.log("il nome è giusto");
        console.log("il nome è giusto");
        frm.name.focus();
        return false;
      }
    });
  }
}
