window.addEventListener("load", function() {

let input = document.createElement("input")
   document.body.appendChild(input)

let bottone = document.createElement("button")
    document.body.appendChild(bottone)
    bottone.textContent="Aggiorna Stile"

let stringa = "margin: 2rem; width: 400px; height: 400px; background-color: yellow"

let div = document.createElement("div")
    document.body.appendChild(div)
    div.style = stringa

    input.value = stringa;
    bottone.addEventListener("click", function(){
        div.style=input.value
    })





})