console.log("es6")

window.addEventListener("load", function(){
    
    let numeroRighe = 0
    let numeroColonne = 2
    let tabella = document.createElement("table")
    tabella.setAttribute("id", "tabella")
    document.body.appendChild(tabella)
    let riga = document.createElement("tr")
    tabella.appendChild(riga)

    // intestazione tabella
    let etichettaIntestazione = ["nome", "cognome"]
    for (let i = 0; i < numeroColonne; i++) {
        let colonnaIntestazione = document.createElement("th")
        colonnaIntestazione.textContent = etichettaIntestazione[i]
        riga.appendChild(colonnaIntestazione)
    }
    
    // riga vuota
    aggiungiRigaVuota(numeroRighe)
    numeroRighe++;
})

function aggiungiRigaVuota(numeroRighe){
    let numeroColonne = 2
    let tabella = document.getElementById("tabella")
    let rigaVuota = document.createElement("tr")
    rigaVuota.setAttribute("class", "row"+numeroRighe)

    tabella.appendChild(rigaVuota) 
    for (let i = 0; i < numeroColonne; i++) {
        let colonnaVuota = document.createElement("td")
        colonnaVuota.setAttribute("class", "col"+i)
        let inputColonna = document.createElement("input")
        
        inputColonna.addEventListener("keypress", function(e){
            console.log(e)
            if(e.key == "Enter"){
                aggiungiRigaVuota(numeroRighe)
                numeroRighe++;
            }
        })

        inputColonna.addEventListener("keyup", function(e){
            console.log(e.key)
            console.log(e.target.value)
            if(e.key == "Tab"){
                console.log("rimuovi classe")
            }
        })
        
        colonnaVuota.appendChild(inputColonna)
        rigaVuota.appendChild(colonnaVuota)

    }
}
