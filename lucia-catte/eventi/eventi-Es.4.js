/*
Realizzare una pagina web con js di una calcolatrice.
PS. può tornare molto utile la funzione eval() 
Come prima versione lasciate l’input testuale disabilitato dove vengono mostrati 
numeri/operazioni/risultati. versione 2: accettare sia operazioni tramite pulsanti 
che scritte nell’input testuale (evento change).  versione 3: avere una sorta di “scontrino” 
che tiene traccia di tutte le operazioni (come nelle calcolatrici con il nastro di carta) in un div sotto la calcolatrice
*/

window.addEventListener("load", function(){

    let calcolatrice = document.createElement("div");//creo div che contiene la calcolatrice intera
    document.body.appendChild(calcolatrice);//attribuisco un id alla calcolatrice
    calcolatrice.style = "display: flex; flex-direction: column; width: 18rem; padding: 1rem;"

    let display = document.createElement("input");//creo il display della calcolatrice
    display.setAttribute("id", "input");//attribuisco un id al display
    calcolatrice.appendChild(display);
    display.setAttribute("type", "text");//attribuisco un tipo testo al display
    //display.setAttribute("disabled", "");
    display.placeholder = "clicca un pulsante per iniziare"
    display.style = "margin-bottom: 1rem;"

    //versione 3 con lo scontrino
    h4 = document.createElement("h4");
    document.body.appendChild(h4);
    h4.textContent = "Scontrino";

    let scontrino = document.createElement("div");//creo un contenitore dove scrivere le operazioni fatte
    document.body.appendChild(scontrino);
    scontrino.style = "border: 1px solid; width: 18rem; display: flex; flex-direction: column; margin: 1rem;"
    let operazioni = document.createElement("ul")//creo l'ul dove si elencheranno le operazioni;
    scontrino.appendChild(operazioni);
    operazioni.setAttribute("id", "operazioni");//attibuisco un id

    //creo il tastierino della calcolatrice

    let tastierino = document.createElement("div");//creo il contenitore dei tasti
    calcolatrice.appendChild(tastierino);
    tastierino.style = "display: flex; flex-wrap: wrap; justify-content: space-between;"

    let arrayTasti = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "+", "0", ".", "=", "-",];//creo array contenente i tasti della calcolatrice

    for(let i = 0; i <= arrayTasti.length -1; i++) {

        let pulsanti = document.createElement("button");//creo il bottone
        tastierino.appendChild(pulsanti);
        pulsanti.textContent = arrayTasti[i]; //trasforno il tastierino in pulsanti

        if (arrayTasti[i] == "/" || arrayTasti[i] == "*" || arrayTasti[i] == "+" || arrayTasti[i] == "-") {
            // pulsanti.setAttribute("class", "operatori")
            pulsanti.style = "width: 4rem; height: 2rem; margin: 0.25rem; border: none; border-radius: 0.25rem; background-color: #cacaca;"
        } else if (arrayTasti[i] == "=") {
            // pulsanti.setAttribute("class", "uguale")
            pulsanti.style = "width: 4rem; height: 2rem; margin: 0.25rem; border: none; border-radius: 0.25rem; background-color: #5cadf4;"
        } else {

            // pulsanti.setAttribute("class", "numeri")
            pulsanti.style = "width: 4rem; height: 2rem; margin: 0.25rem; border: none; border-radius: 0.25rem; background-color: #ededed;"
        }


        // versione 1 con pulsanti da cliccare
        pulsanti.addEventListener("click", function(){

            if (arrayTasti[i] !== "="){
                display.value += arrayTasti[i]
            } else {
                elaborazioneRisultato()
            }
        })
    }

    //versione 2 con input da tastiera
    display.addEventListener("keyup", function(e){

        //se display.value contiene elementi diversi da quelli dell'arrayTasti restituisce errore
        console.log(e.target.value)
        if(arrayTasti.includes(e.key) || e.key == "Enter" || e.key == "") {
            console.log("il carattere è incluso");
            if(e.key == "Enter") {
                elaborazioneRisultato
            }
        } else {
            console.log("il carattere NON è incluso");
            e.target.value = "";
        }
    })
})

function elaborazioneRisultato () {
    let display = document.getElementById("input");
    let appoggio = display.value;
    display.value = eval(display.value);
    let operazione = document.createElement("li");
    operazione.textContent = appoggio + " = " +  display.value;
    document.getElementById("operazioni").appendChild(operazione);
    display.value = "";
}