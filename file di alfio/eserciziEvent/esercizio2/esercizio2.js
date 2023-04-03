let input = document.createElement("input")
input.setAttribute("type", "text")
document.body.appendChild(input)

let button = document.createElement("button")

button.appendChild(document.createTextNode("Aggiorna stile"))
document.body.appendChild(button)

let div = document.createElement("div")
document.body.appendChild(div)


button.addEventListener("click", function() {   
    div.style=input.value  
})






//     background-color: yellow; width: 40px; height: 40px;margin: 2rem;


