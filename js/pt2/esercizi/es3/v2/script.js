console.log("es3");

window.addEventListener("load", function () {
    // input e pulsante
    let nuovoDiv = document.createElement("div");
    let inputTesuale = document.createElement("input");
    inputTesuale.id = "inputTestuale";
    let inputButton = document.createElement("input");
    inputButton.type = "button";
    inputButton.value = "Aggiungi";

    // lista
    let lista = document.createElement("ul");
    lista.setAttribute("id", "lista");
    nuovoDiv.appendChild(inputTesuale);
    nuovoDiv.appendChild(inputButton);
    let titoloLista = document.createElement("h2");
    titoloLista.textContent = "Lista";
    nuovoDiv.appendChild(titoloLista);
    nuovoDiv.appendChild(lista);
    document.body.appendChild(nuovoDiv);

    // cestino
    let titoloCestino = document.createElement("h2");
    titoloCestino.textContent = "Cestino";
    nuovoDiv.appendChild(titoloCestino);
    let cestino = document.createElement("ul");
    cestino.setAttribute("id", "cestino");
    nuovoDiv.appendChild(cestino);

    inputButton.addEventListener("click", function () {
        let nuovoTask = document.createElement("li");
        let testo = document.createTextNode(inputTesuale.value);

        let bottoneCancella = document.createElement("input");
        bottoneCancella.type = "button";
        bottoneCancella.value = "Elimina";
        bottoneCancella.addEventListener("click", function () {
            // se sono nella lista sposto la voce dell'elenco nel cestino e il pulsante diventa di ripristino
            if (bottoneCancella.parentNode.parentNode.id == "lista") {
                cestino.appendChild(nuovoTask);
                bottoneCancella.value = "Ripristina";
                nuovoDiv.appendChild(svuotaCestino);
            } else {
                lista.appendChild(nuovoTask);
                bottoneCancella.value = "Elimina";
                let elementiCestino =
                    document.querySelectorAll("#cestino > li");
                if (elementiCestino.length != 0) {
                    nuovoDiv.appendChild(svuotaCestino);
                }
            }
        });
        nuovoTask.appendChild(testo);
        nuovoTask.appendChild(bottoneCancella);
        lista.appendChild(nuovoTask);
        inputTesuale.value = "";
    });

    // pulsante svuota cestino
    let svuotaCestino = document.createElement("button");
    svuotaCestino.textContent = "Svuota cestino";

    svuotaCestino.addEventListener("click", function () {
        let elementiCestino = document.querySelectorAll("#cestino > li");
        for (let i = elementiCestino.length - 1; i >= 0; i--) {
            elementiCestino[i].remove();
        }
        // quando elimino tutte le voci nel cestino nascondo il pulsante di svuota cestino
        svuotaCestino.remove();
    });
});
