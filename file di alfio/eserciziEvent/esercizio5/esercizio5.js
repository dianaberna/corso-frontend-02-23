// Realizzare una pagina web dove è presente un input testuale in cui è gestito ogni sua versione o stato,
// cioè default, evento hover, evento focus, evento keydown, evento change, stato disabilitato, stato errore, stato corretto. 


//pare 1

let form = document.querySelector(".form")

function creaInput(testo, id, type) {
    let label = document.createElement("label")
    label.setAttribute("for", id)
    label.appendChild(document.createTextNode(testo))
    form.appendChild(label);

    let input = document.createElement("input");
    form.appendChild(input);
    input.setAttribute("type", type)
    input.setAttribute("id", id)
    input.setAttribute("name", id)
    return input

}

let nome = creaInput("nome", "nome", "text")
let cognome = creaInput("cognome", "cognome", "text")
let email = creaInput("email", "email", "text")
let password = creaInput("Password", "password", "text")
let confermaPassword = creaInput("Conferma Password", "Conferma_password", "text")

let submit = document.createElement("input")
submit.setAttribute("type", "submit")
form.appendChild(submit)

let prova = document.createElement("button")
prova.appendChild(document.createTextNode("prova"))
document.body.appendChild(prova)

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "+", "*", "-", "?", "@"]
let contCognome = 0;
let contNome = 0;

prova.addEventListener("click", function () {


    //controlla input nome
    for (let i = 0; i < nome.value.length; i++) {

        for (let j = 0; j < array.length; j++) {

            if (nome.value[i] && nome.value[i].includes(array[j])) {
                nome.style.borderColor = "red"
                contNome = 1
                break;
            }
            contNome = 0
        }
    }
    if (nome.value.length > 0 && contNome == 0) {
        nome.style.borderColor = "green"

    }

    //controlla input cognome
    for (let i = 0; i < cognome.value.length; i++) {

        for (let j = 0; j < array.length; j++) {

            if (cognome.value[i] && cognome.value[i].includes(array[j])) {
                cognome.style.borderColor = "red"
                contCognome = 1
                break;
            }
            contCognome = 0
        }
    }
    if (cognome.value.length > 0 && contCognome == 0) {
        cognome.style.borderColor = "green"

    }

}
)




