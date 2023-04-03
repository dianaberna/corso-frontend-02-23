// Realizzare una pagina web dove è presente un input testuale in cui è gestito ogni sua versione o stato,
// cioè default, evento hover, evento focus, evento keydown, evento change, stato disabilitato, stato errore, stato corretto. 
let b=7


function esempio(){
let a=5

return a

}


let form = document.querySelector(".form")

//funzione che crea i miei input con associati i label
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
//creazionne effettiva elementi input
let nome = creaInput("NOME :", "nome", "text")
let p = document.createElement("p")
nome.insertAdjacentElement('afterend', p)
p.innerHTML = "Attenzione caratteri speciali non consentiti"
let p1 = document.createElement("p")
p.insertAdjacentElement('afterend', p1)
p1.innerHTML = "Attenzione campo vuoto"


let cognome = creaInput("COGNOME :", "cognome", "text")
let p3 = document.createElement("p")
cognome.insertAdjacentElement('afterend', p3)
p3.innerHTML = "Attenzione caratteri speciali non consentiti"
let p4 = document.createElement("p")
p3.insertAdjacentElement('afterend', p4)
p4.innerHTML = "Attenzione campo vuoto"




let email = creaInput("EMAIL :", "email", "text")
let p5 = document.createElement("p")
email.insertAdjacentElement('afterend', p5)
p5.innerHTML = "Attenzione devi inserire del testo prima della @"
let p6 = document.createElement("p")
p5.insertAdjacentElement('afterend', p6)
p6.innerHTML = "Attenzione puoi avere solo un carattere @"
let p7 = document.createElement("p")
p6.insertAdjacentElement('afterend', p7)
p7.innerHTML = "Attenzione email non valida"
let p8 = document.createElement("p")
p7.insertAdjacentElement('afterend', p8)
p8.innerHTML = "Attenzione campo email vuoto"

let password = creaInput("Password:  (deve contenere tra i 10 e 30 caratteri) ", "text", "text")
let confermaPassword = creaInput("Conferma Password:", "Conferma_password", "text")

let submit = document.createElement("input")
submit.setAttribute("type", "submit")
form.appendChild(submit)







//controllo input nome

function Nome(variabile) {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "+", "*", "-", "?", "@", "#"]
    let cont = 0
    if (variabile.value[0]) {                //controllo che non sia vuoto...altrimenti parte il for

        for (let i = 0; i < variabile.value.length; i++) {
            for (let j = 0; j < array.length; j++) {
                //controlla se input ha quache carattere errato(ovvero quelli all interno l array)
                if (variabile.value[i].includes(array[j])) {
                    variabile.style.borderColor = "red"
                    p.style.display = "block"
                    console.log("caratteri speciali non consentiti")
                    i = variabile.value.length //exit from first for...and complete ours check
                    cont++
                    break;

                }
            }
        }
        if (cont == 0) {
            variabile.style.borderColor = "green";
            p1.style.display = "none"
            p.style.display = "none"
        }

    } else {
        variabile.style.borderColor = "red";
        p1.style.display = "block"
        console.log("campo vuoto")

    }
}
function Cognome(variabile) {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "+", "*", "-", "?", "@", "#"]
    let cont = 0
    if (variabile.value[0]) {                //controllo che non sia vuoto...altrimenti parte il for

        for (let i = 0; i < variabile.value.length; i++) {
            for (let j = 0; j < array.length; j++) {
                //controlla se input ha quache carattere errato(ovvero quelli all interno l array)
                if (variabile.value[i].includes(array[j])) {
                    variabile.style.borderColor = "red"
                    p3.style.display = "block"
                    console.log("caratteri speciali non consentiti")
                    i = variabile.value.length //exit from first for...and complete ours check
                    cont++
                    break;

                }
            }
        }
        if (cont == 0) {
            variabile.style.borderColor = "green";
            p4.style.display = "none"
            p3.style.display = "none"
         
        }

    } else {
        variabile.style.borderColor = "red";
        p4.style.display = "block"
        console.log("campo vuoto")

    }
}


// email (puoi riutilizzare la funzione di validazione email invece del type=”email”)

// Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, a seconda della valutazione.
// La stringa deve contenere un carattere @.
// La stringa deve contenere un . carattere.
// La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
// Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre "mario.rossi@email.com" è valido.


function controlloEmail(email) {
    let cont = 0;
    let cont2 = 2;

    let array = ["@gmail.", "@hotmail."]


    if (email.value.length > 0) { //se email ha del testo partono dei controlli
        if (email.value.includes(array[0]) || email.value.includes(array[1])) {

            for (let i = 0; i < email.value.length; i++) {
                if (email.value[i] == "@") {
                    cont++;// mi serve per avere una sola @
                    cont2 = email.value.indexOf("@")
                }
            }
            if (cont2 == 0) {
                p5.style.display = "block"
                console.log("attenzione devi inserire del testo prima della @")
                email.style.borderColor = "red"

            }
            if (cont > 0) {
                p6.style.display = "block"
                console.log("attenzione puoi avere solo un carattere @")
            }
            if (cont2 > 0 && cont == 1) {
                email.style.borderColor = "green"
                p5.style.display = "none"
                p6.style.display = "none"
                p7.style.display = "none"
                p8.style.display = "none"
            }

        } else {
            email.style.borderColor = "red"
            p7.style.display = "block"
            console.log("attenzione email non valida")

        }

    } else {
        p8.style.display = "block"
        console.log("campo email vuoto")
        email.style.borderColor = "red"
    }

}



//funzione convalida password

function convalidaPassword(password) {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    let array2 = ["!", "+", "*", "-", "?", "@", "#"]
    let cont = 0
    if (password.value.length >= 10 && password.value.length <= 20) {

        for (let i = 0; i < array.length; i++) {
            if (password.value.includes(array[i])) { //controlla se ha numeri
                cont++
                break;
            }
        }
        for (let i = 0; i < array.length; i++) {
            if (password.value.includes(array2[i])) {//controlla se ha caratteri
                cont++
                break;
            }
        }

        if (cont == 2) {
            password.style.borderColor = "green"
          
        } else {
            console.log("attenzione la password deve contenere almeno un numero e un carattere speciale")
        }

    } else {
        console.log("numero caratteri vuoto o minore di 10 o maggiore di 20 caratteri")
        password.style.borderColor = "red"
    }
}

//funzione controlla conferma password
function conferma(confermaPassword) {
    if (confermaPassword.value == password.value) {
        confermaPassword.style.borderColor = "green"
    } else {
        console.log("attenzione conferma password diversa")
        confermaPassword.style.borderColor = "red"
    }
}



form.addEventListener("submit", function (e) {
    e.preventDefault(form)
    Nome(nome)
    Cognome(cognome)
    controlloEmail(email)
    convalidaPassword(password)
    conferma(confermaPassword)
  
})
