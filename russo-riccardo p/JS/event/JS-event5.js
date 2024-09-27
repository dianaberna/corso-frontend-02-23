window.addEventListener("load", function () {

    let titolo = document.createElement("h1")
    titolo.textContent = "Questo è il quinto evento"
    document.body.appendChild(titolo)


    let div = document.createElement("div")
    document.body.appendChild(div)

    let Form = document.createElement("form")
    div.appendChild(Form)
    Form.addEventListener("submit", function (e) {
        e.preventDefault()// <-- blocca il ricaricamento della pagina nel Submit

        let inputNome = document.getElementsByTagName("input")[0]
        if (controllo(inputNome.value) || stringavuota(inputNome.value)) {
            inputNome.setAttribute("class", "error")
        } else {
            inputNome.setAttribute("class", "correct")
        } 
        console.log(controllo(inputNome.value))

        let inputCognome = document.getElementsByTagName("input")[1]
        if (controllo(inputCognome.value)|| stringavuota(inputCognome.value)) {
            inputCognome.setAttribute("class", "error")
        } else {
            inputCognome.setAttribute("class", "correct")
        }
        console.log(controllo(inputCognome.value))

        let inputPsw = document.getElementsByTagName("input")[2]
            if(!controlloPsw(inputPsw.value)|| stringavuota(inputPsw.value)){
                inputPsw.setAttribute("class", "error")
            } else {
                inputPsw.setAttribute("class", "correct")
            }
            

    })

    let Nome = document.createElement("label")
    Nome.textContent = "Nome"
    Nome.setAttribute("for", "nome")
    Form.appendChild(Nome)


    let input = document.createElement("input")
    input.setAttribute("id","nome")
    input.setAttribute("type", "text")
    Form.appendChild(input)



    let Cognome = document.createElement("label")
    Cognome.setAttribute("for", "cognome")
    Cognome.textContent = "Cognome"
    Form.appendChild(Cognome)


    let input2 = document.createElement("input")
    input2.setAttribute("id","cognome")
    input2.setAttribute("type", "text")
    Form.appendChild(input2)


    let pswTitle = document.createElement("label")
    pswTitle.setAttribute("for", "password")
    pswTitle.textContent = "Password"
    Form.appendChild(pswTitle)

    let Password = document.createElement("input")
    input.setAttribute("id","password")
    Password.setAttribute("type", "text")
    Form.appendChild(Password)


    // let divAlert = document.createElement("div")
    //     div.appendChild(divAlert)


    let bottone = document.createElement("button")
    bottone.setAttribute("type", "submit")
    bottone.textContent = "Submit"
    Form.appendChild(bottone)





































})

function controllo(stringa) {


    let caratteriSpeciali = "!?*#"

    let trovato = false;

    for (let i = 0; i < stringa.length; i++) {
        console.log(stringa[i])
        for (let j = 0; j < caratteriSpeciali.length; j++) {
            // console.log(caratteriSpeciali[j])
            if (stringa[i] == caratteriSpeciali[j]) {
                trovato = true;
            }
        }
        for (let numero = 0; numero < 10; numero++) {
            if (stringa[i] === String(numero)) {
                trovato = true
            }
        }


    }
    return trovato
}

function stringavuota(stringa){
    if(stringa == ""){
        return true
    } else {
        return false
    }
}

function controlloPsw(stringa) {


    let caratteriSpeciali = "!?*#"

    let trovatoNum = false;
    let trovatoChar = false

    if (stringa.length >= 10 && stringa.length <= 30) {

        for (let i = 0; i < stringa.length; i++) {
            console.log(stringa[i])
            for (let j = 0; j < caratteriSpeciali.length; j++) {
                // console.log(caratteriSpeciali[j])
                if (stringa[i] == caratteriSpeciali[j]) {

                    trovatoChar = true;
                }
            }
            for (let numero = 0; numero < 10; numero++) {
                if (stringa[i] === String(numero)) {

                    trovatoNum = true
                }
            }


        }
        if (trovatoChar == true && trovatoNum == true) {

            return true
        } else {
            return false
        }
    } else {
        return false
    }
}