/*Realizzare una pagina web con js di una to-do-list. 
Una prima versione potrebbe essere quella di eliminare dal dom l’elemento al click della X, 
mentre una seconda versione potrebbe essere quella di non rimuovere subito gli elementi ma 
lasciarli in una seconda lista (una sorta di cestino dei task) da poter svuotare al 
click di un altro pulsante (svuota cestino).*/



window.addEventListener("load", function () {
	console.log("il body è stato caricato"); 

    let elencoGenitore = document.createElement("ul");
    document.body.appendChild(elencoGenitore); 
    
    let primoLi = document.createElement("li");
    elencoGenitore.appendChild(primoLi);
    let secondoLi = document.createElement("li");
    elencoGenitore.appendChild(secondoLi);
    let terzoLi = document.createElement("li");
    elencoGenitore.appendChild(terzoLi);
})





























/*window.addEventListener("load", function () {
let label = document.getElementById("input"); 
   console.log(label)

let div = this.document.getElementsByTagName("div")[0];
div.style = "margin: 2rem; width: 400px; height: 400px; background-color: yellow";
input.value = "margin: 2rem; width: 400px; height: 400px; background-color: yellow"

let pulsante = document.getElementById("clicca");
    pulsante.addEventListener("click", function(){
        console.log(label.value)
    
    div.style = input.value
    })
}) */

