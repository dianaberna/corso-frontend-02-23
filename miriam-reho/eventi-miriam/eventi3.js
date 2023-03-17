window.addEventListener("load", function () {
    let box = document.getElementById("box")
    
    let button = document.getElementById("pulsante")

    let ul = document.createElement("ul")
    document.body.appendChild(ul)   

    button.addEventListener("click", function () {

        let li = document.createElement("li")
        li.textContent = box.value
        ul.appendChild(li)
        let x = document.createElement("button")
        x.textContent = "x"
        x.style.margin = "0.5rem 1rem";
        li.appendChild(x)
        
        // Versione 1: rimuovere dal DOM la task
       x.addEventListener("click", function () {
            document.getElementsByTagName("li")
            li.remove()
        });

        // Versione 2: creare un cestino da svuotare
        /* let cestino = document.createElement("div")
        document.body.appendChild(cestino)
        cestino.style = "margin: 1rem 1.25rem; border: .0625rem solid #1D1B1F; border-radius: 0.25rem; background: #F0F0F0;"
    
        x.addEventListener("click", function () {
           li.setAttribute("class", "delete")
        })

        let svuotacestino = document.createElement("button")
        svuotacestino.textContent = "Svuota tutto"
        cestino.appendChild(svuotacestino)
        svuotacestino.addEventListener("click", function () {
        let xli = document.getElementsByClassName("delete")
        
        for (let i = xli.length -1; i<= 0; i++){
            xli[i].remove();
        }
        }) */

    }); 
})