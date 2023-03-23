
//Es 2

window.addEventListener("load", function () {

    // let form = document.createElement("form");
    // document.body.appendChild(form); // non va bene il form perché ogni volta che premo invio si ricarica la pagina

    let label = document.createElement("label")
    document.body.appendChild(label)

    let input = document.createElement("input")
    document.body.appendChild(input)

    let pulsante = document.createElement("button")
    document.body.appendChild(pulsante)

    // testo nel pulsante
    let testo = document.createTextNode("Aggiorna stile")
    pulsante.appendChild(testo)

    label.setAttribute("for", "input-prova")
    pulsante.setAttribute("id", "button")
    input.setAttribute("type", "text")
    input.setAttribute("id", "input-prova")

    let div = document.createElement("div");
    document.body.appendChild(div);

    input.style.width = "50%"
    div.style.height = "200px"
    div.style.backgroundColor = "red"

    pulsante.addEventListener('click', function() {
        let stileCSS = input.value;
        div.style.cssText = stileCSS;
    });

}) ;