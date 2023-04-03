window.addEventListener("load", function () {
    let box = document.getElementById("box")
    
    let button = document.getElementById("pulsante")

    let ul = document.createElement("ul")
    document.body.appendChild(ul)   
    ul.setAttribute("id", "elenco") //assegno un id per non dar conflitto alle x di cancella

    //versione 2 con cestino da svuotare
    let cestino = document.createElement("div")
    document.body.appendChild(cestino)
    cestino.style = "display: none" //nascondo il cestino così che appaia solo quando elimino qualcosa
    let svuotacestino = document.createElement("button")
    svuotacestino.textContent = "Svuota cestino"
    cestino.appendChild(svuotacestino)
    let ulcestino = document.createElement("ul") //creo la ul dove andranno le liste cancellate
    cestino.appendChild(ulcestino)
    ulcestino.setAttribute("id", "cestino") //assegno un id alla lista diverso
    

    button.addEventListener("click", function () {

        //Creo la task singola col bottone
        console.log("button")
        let li = document.createElement("li")
        li.textContent = box.value
        ul.appendChild(li)
        let x = document.createElement("button")
        x.textContent = "x"
        x.style.margin = "0.5rem 1rem";
        li.appendChild(x)
        
        // Versione 1: rimuovere dal DOM la task senza il cestino

      /*  x.addEventListener("click", function () {
            document.getElementsByTagName("li")
            li.remove()
        }); */

        // Versione 2: creare un cestino da svuotare !!!!!! DA RIVEDERE
        x.addEventListener("click", function () {
            cestino.style= "padding: 1.25rem; border: .0625rem solid #1D1B1F; border-radius: 0.25rem; background: #F0F0F0;"

            if (x.parentNode.parentNode.id == "cestino"){ //se il "nonno" è cestino...
                x.textContent = "cancella"
                li.setAttribute("class", "")
                ul.appendChild(li)

                let elementiCestino = document.querySelectorAll("#cestino > li")
                svuotacestino.textContent = "Svuota cestino" + elementiCestino.length
                
            } else {
                x.textContent = "ripristina"
                li.setAttribute("class", "delete")
                ulcestino.appendChild(li)
            }
    
        })

    });

    svuotacestino.addEventListener("click", function () {
        let xli = document.getElementsByClassName("delete")
        
        for (let i = xli.length -1; i >= 0; i--){
            xli[i].remove();
        }

    });

})