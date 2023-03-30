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
  let input = document.createElement("input");

  form.appendChild(input);
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
  input.type = tipo;
  input.className = arrayInput[index];
  if (input.className === "Nome" || input.className === "Cognome") {
    input.addEventListener("input", function (event) {
      var regName = /^[A-Za-z]+$/;
      let inputValue = event.target.value;

      if (!regName.test(inputValue)) {
        /*  input.className = "Cognome";
        input.className = "Nome"; */
        input.className = "Nome2";
        console.log("sbagliato");
      } else {
        input.className = "Nome1";
        console.log("giusto");
      }
    });
  }

  let domini = ["gmail", "hotmail", "outlook"];
  function validitaEmail(email) {
    let cont = "";
    if (email.includes("@") && email.includes(".")) {
      cont = email.indexOf("@");
      for (let i = 0; i < email.length; i++) {
        /* for (let i = 0; i < domini.length; i++) { */
        while (email[i + 1] != ".") {
          if (typeof cont[i--] == "string" && typeof cont[i++] == "stringa") {
          }
        }
        i++;
      }
    }
  }
}
