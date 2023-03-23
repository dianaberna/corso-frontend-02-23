window.addEventListener("load", function(){

let titolo = document.createElement("h1")
    titolo.textContent = "Questo è il quinto evento"
    document.body.appendChild(titolo)


let div = document.createElement("div")
    div.setAttribute("id", "div")
    document.body.appendChild(div)

let Nome = document.createElement("h2")
    Nome.textContent= "Nome"
    div.appendChild(Nome)


let input = document.createElement("input")
    input.setAttribute("id", "input")
    div.appendChild(input)


let Cognome = document.createElement("h2")
    Cognome.textContent = "Cognome"
    div.appendChild(Cognome) 

































})