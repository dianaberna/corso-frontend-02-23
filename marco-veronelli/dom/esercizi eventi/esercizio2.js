window.addEventListener("load", function () {
    console.log("il body è stato caricato");
     
//definisco il body
let body= document.getElementsByTagName("body")[0]
//creo l'imput
let input=document.createElement("input")
body.appendChild(input)
input.setAttribute("id","input")
document.getElementById("input").style.width= "450px";

//creo il bottone e aggiungo il testo
let pulsante =document.createElement("button")
body.appendChild(pulsante)
let txtp= document.createTextNode("set attribute")
pulsante.appendChild(txtp)
input.setAttribute("type","text")

input.setAttribute("value", "margin:2rem; width: 400px; height: 400px; background-color: yellow")
//creo il div e lo stilizzo
let div=document.createElement("div")
body.appendChild(div)
div.setAttribute("id","div")
div.style= document.getElementById("input").value;
pulsante.addEventListener("click", function () {
    
	console.log("è stato cliccato il bottone");
    document.getElementById("input").value
    console.log(document.getElementById("input").value)
    div.style=document.getElementById("input").value
    
    
}) ; 
}) ;


 





