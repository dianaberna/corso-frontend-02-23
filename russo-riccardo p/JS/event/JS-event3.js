window.addEventListener("load", function () {

    // let testoTitolo = document.createTextNode("Esercizio 3");

    // let titolo1 = document.createElement("h1")
    //     document.body.appendChild(titolo1)


    // let input = document.createElement("input")
    //    document.body.appendChild(input)

    // let bottone = document.createElement("button")
    //     document.body.appendChild(bottone)
    //     bottone.textContent="Aggiungi"


    // let lista = document.createElement("ul")
    //     lista.appendChild(bottone)

    // let elimina = document.createElement("button")
    //     elimina.appendChild(lista)

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    document.body.appendChild(input)

    let bottone = document.createElement("button")
    document.body.appendChild(bottone)
    bottone.textContent = "Aggiungi"

    let lista = document.createElement("ul")
    lista.setAttribute("id", "lista")
    document.body.appendChild(lista)

    let div = document.createElement("div")
    document.body.appendChild(div)


    let stile = "margin: 0px 130rem 0 0 ; border-style: solid; background-color: lightblue"
    div.style = stile

    let cestino = document.createElement("ul")
    cestino.setAttribute("id", "cestino")
    div.appendChild(cestino)

    let cancellaCestino = document.createElement("button")
    cancellaCestino.textContent = "Svuota Cestino"
    // div.appendChild(cancellaCestino)


    //Evento del bottone   
    bottone.addEventListener("click", function () {

        let li = document.createElement("li")
        li.textContent = input.value// prende il valore dell'input testuale
        lista.appendChild(li)
        input.value = ""

        let cancella = document.createElement("button")
        cancella.textContent = "Elimina"
        li.appendChild(cancella)

        //evento cancellazione dalla lista
        cancella.addEventListener("click", function () {
            // li.remove()
            if (cancella.parentNode.parentNode.id == "lista") {
                //se siamo nel ul lista vogliamo spostare "li" nel cestino e il pulsante avrà lo scopo di ripristinare "li" nella lista
                cestino.appendChild(li)
                cancella.textContent = "Ripristina"
                div.appendChild(cancellaCestino)

            let liRemove = document.querySelectorAll("#cestino > li")
                cancellaCestino.addEventListener("click", function () {
            
                    for (i = liRemove.length - 1; i >= 0; i--) {
                        liRemove[i].remove()
                    }
                    cancellaCestino.remove()
                })


            } else {
                // se siamo nel "ul" cestino vogliamo spostare "li" nella lista e il pulsante avra lo scopo di cancellare "li" dalla lista e spostarla nel cestino 
                lista.appendChild(li)
                cancella.textContent = "Elimina"
            }




        })

    })

    if (liRemove.length !== 0) {
        div.appendChild(liRemove)
    }


})
//1) creare una lista cestino
//2) riporta gli elementi nella lista del cestino
//3) svuota cestino

