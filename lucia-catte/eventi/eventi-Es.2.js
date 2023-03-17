//ES. 2:Realizzare una pagina web con js in cui inserire un input 
//      testuale dove il testo inserito rappresenta le regole css da 
//      applicare ad un div sottostante

//CREO UNA LABEL NEL QUALE SCRIVO DEI DETTAGLI E AL CLICK AGGIORNA SI AGGIORNA IL DIV
window.addEventListener("load", function () {

	console.log("il body è stato caricato");   
})

window.addEventListener("load", function () {
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
}) 





