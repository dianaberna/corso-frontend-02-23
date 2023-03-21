window.addEventListener("load", function () {

    let div = document.createElement("div")
    document.body.appendChild(div)
    div.style = "display: flex; flex-direction: column; width: 20rem; padding: 1rem;"

    let display = document.createElement("input")
    display.setAttribute("id", "input")
    div.appendChild(display)
    display.setAttribute("type", "text")
    // display.setAttribute("disabled", "")
    display.placeholder = "clicca un pulsante per cominciare"
    display.style = "margin-bottom: 1rem;"

    //Versione 3 con lo scontrino
    h4 = document.createElement("h4")
    document.body.appendChild(h4)
    h4.textContent = "Scontrino"

    let scontrino = document.createElement("div")
    document.body.appendChild(scontrino)
    scontrino.style = "border: 1px solid; width: 20rem; display: flex; flex-direction: column; margin: 1rem"
    let operazioni = document.createElement("ul") //creo la ul dove andranno le operazioni fatte
    scontrino.appendChild(operazioni)
    operazioni.setAttribute("id", "operazioni")

    //creo la box con i numeri

    let calcolatrice = document.createElement("div")
    div.appendChild(calcolatrice)
    calcolatrice.style = "display: flex; flex-wrap: wrap; justify-content: space-between;"

    let arrayTasti = ["7","8","9","/","4","5","6","*","1","2","3","+","0",".","=","-"]

    for (let i = 0; i <= arrayTasti.length -1; i++) {

        let bottone = document.createElement("button")
        calcolatrice.appendChild(bottone)
        bottone.textContent = arrayTasti[i]

        if (arrayTasti[i] == "/" || arrayTasti[i] == "*" || arrayTasti[i] == "+" || arrayTasti[i] == "-") {
            // bottone.setAttribute("class", "operatori")
            bottone.style = "padding: 10px 32px; margin: 3px; border: none; border-radius: 0.25rem; background-color: #cacaca;"
        } else if (arrayTasti[i] == "="){
            // bottone.setAttribute("class", "uguale")
            bottone.style = "padding: 10px 32px; margin: 3px; border: none; border-radius: 0.25rem; background-color: #5cadf4;"
        } else {
            // bottone.setAttribute("class", "numeri")
            bottone.style = "padding: 10px 32px; margin: 3px; border: none; border-radius: 0.25rem; background-color: #ededed;"
        }

        //versione 1 con bottoni da cliccare
        bottone.addEventListener("click", function () {

            /* let operazione = document.createElement("li") */

            if (arrayTasti[i] !== "="){
                display.value += arrayTasti[i]
            } else {
                elaborazioneRisultato()
            }
        })

    }    

    //versione 2 con input da tastiera
    display.addEventListener("keypress", function (e){

        //se display.value contiene elementi diversi da quelli dell'arrayTasti restituisce errore
        if (display.value !== "") {
            for (let i = 0; i <= arrayTasti.length; i++) {
                console.log(e.target.value, display.value.includes(arrayTasti[i]))
                if (display.value.includes(arrayTasti[i]) == false) {
                    console.log("trovato")
                    display.value = ""
                    break;
                }
            }
            
            if (e.key == "Enter"){
                elaborazioneRisultato()
            }
        }
    })

})

function elaborazioneRisultato() {
    let display = document.getElementById("input")
    let appoggio = display.value
        display.value = eval(display.value)
        let operazione = document.createElement("li")
        operazione.textContent = appoggio +  " = " + display.value
        document.getElementById("operazioni").appendChild(operazione)
        display.value = ""
}