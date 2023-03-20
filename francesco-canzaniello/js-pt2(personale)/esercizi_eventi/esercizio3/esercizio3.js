// es 3

window.addEventListener("load", function () {
    
    let input = document.createElement("input");
    document.body.appendChild(input);

    let pulsante = document.createElement("button");
    document.body.appendChild(pulsante);

    let testo_btn = document.createTextNode("Aggiungi");
    pulsante.appendChild(testo_btn);

    let cestino = document.createElement("button");
    document.body.appendChild(cestino);
    let testo_cest = document.createTextNode("Cestino");
    cestino.appendChild(testo_cest);

    // div dei task
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.style.width = "fit-content";
    div.style.margin = "0px";

    // lista task
    let ul = document.createElement("ul");
    div.appendChild(ul);
    ul.style.margin = "0px";

    

    // cestino
    let divCestino = document.createElement("div");
    document.body.appendChild(divCestino);

    let testoCestino = document.createTextNode("Cestino")
    let h1Cestino = document.createElement("h1")
    divCestino.appendChild(h1Cestino)
    h1Cestino.appendChild(testoCestino)
    
    let ulCestino = document.createElement("ul");
    divCestino.appendChild(ulCestino);
    ulCestino.style.margin = "0px";

    divCestino.style.width = "fit-content";
    divCestino.style.marginTop = "35px";
    
    
    // aggunge un elemento 
    pulsante.addEventListener("click", function () {
        let li = document.createElement("li");
        ul.appendChild(li);
        let testo_li = document.createTextNode(input.value);
        li.appendChild(testo_li);

        let pulsanteX = document.createElement("button");
        li.appendChild(pulsanteX);
        let testo_X = document.createTextNode("X");
        pulsanteX.appendChild(testo_X);
        pulsanteX.style.marginLeft = "5px";

        let liCestino = li;
        
        
        //svuota il cestino
        cestino.addEventListener("click", function () {
            let cestinoDaSvuotare = document.getElementsByClassName("delete");                    
            
            for (let i = cestinoDaSvuotare.length - 1; i >= 0; i--) {
                cestinoDaSvuotare[i].remove();
            }            
            testo_cest.textContent = `Cestino [${document.getElementsByClassName("delete").length}]`
            
        });



        //butta un elemento nel cestino
        pulsanteX.addEventListener("click", function () {
            
            ulCestino.appendChild(liCestino);
            let pulsanteRipr = document.createElement("button");
            liCestino.appendChild(pulsanteRipr);
            let testo_ripr = document.createTextNode("Ripristina");
            pulsanteX.remove()
            pulsanteRipr.appendChild(testo_ripr);
            pulsanteRipr.style.marginLeft = "5px";
                
            liCestino.setAttribute("class", "delete");
            
            
            testo_cest.textContent = `Cestino [${document.getElementsByClassName("delete").length}]`
            
            // rispristina un elemento della task
            pulsanteRipr.addEventListener("click", function(){
                liCestino.removeAttribute("class")
                ul.appendChild(liCestino)              
                li.appendChild(pulsanteX);                
                pulsanteRipr.remove()
                testo_cest.textContent = `Cestino [${document.getElementsByClassName("delete").length}]`
            });
        }); 
        
        
        

    });
    
});