let input = document.createElement("input")
input.setAttribute("type", "text")
document.body.appendChild(input)

let button = document.createElement("button")

button.appendChild(document.createTextNode("Aggiungi"))
document.body.appendChild(button)

let ul = document.createElement("ul")
document.body.appendChild(ul)

let div = document.createElement("div")
div.style = "border: 1px solid black;margint-top:2rem"
document.body.appendChild(div)

let svuotaCestino = document.createElement("button")

svuotaCestino.appendChild(document.createTextNode("svuota cestino"))
div.appendChild(svuotaCestino)

let span = document.createElement("span")
let cont = 0;
span.appendChild(document.createTextNode(cont))
div.appendChild(span)
span.style = "margin-left:1rem"

let ul2 = document.createElement("ul")
div.appendChild(ul2)
ul2.className = "ul2"


button.addEventListener("click", function () {

    let li = document.createElement("li")
    ul.appendChild(li)
    li.appendChild(document.createTextNode(input.value))
    li.className = "li"
    let elimina = document.createElement("button")
    elimina.appendChild(document.createTextNode("x"))
    li.appendChild(elimina)
    elimina.style = "margin-left:1rem"




    elimina.addEventListener("click", function () {

        if (li.parentNode == ul) {
            ul2.appendChild(li)
            elimina.textContent = "ripristina";
            cont += 1
            span.textContent = cont + " elementi totali";


        } else {
            ul.appendChild(li)
            elimina.textContent = "x";
            cont -= 1
            span.textContent = cont + " elementi totali";
        }

    })

})




svuotaCestino.addEventListener("click", function () {
    let elementiCestino= document.querySelectorAll(".ul2 > li");
    cont = 0
    span.textContent = cont
    console.log(elementiCestino.length)
    for (let i = elementiCestino.length - 1; i >= 0; i--) {
        elementiCestino[i].remove();
    }

})