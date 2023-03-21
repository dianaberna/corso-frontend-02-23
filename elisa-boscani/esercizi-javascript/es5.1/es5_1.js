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

let datiCorretti = {
  nome: "Elisa",
  cognome: "Boscani",
};

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

  form.addEventListener("submit", function () {
    let nome = input.type === "Nome" ? input.type : null;
    let cognome = input.type === "Cognome" ? input.type : null;

    if (nome === datiCorretti.nome && cognome === datiCorretti.cognome) {
      document.forms["myForm"].submit();
    } else {
      alert("Per favore inserisci i dati corretti!");
    }
  });
}
