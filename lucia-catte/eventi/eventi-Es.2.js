//ES. 2:Realizzare una pagina web con js in cui inserire un input 
//      testuale dove il testo inserito rappresenta le regole css da 
//      applicare ad un div sottostante

window.addEventListener("load", function () {

	console.log("il body è stato caricato");   
})

window.addEventListener("load", function () {
let label = document.getElementById("input"); //ci da un array e ne prendiamo il primo elemento
   console.log(label)// prendo l'attributo

let pulsante = document.getElementById("clicca");
    pulsante.addEventListener("click", function(){
        console.log(label.value)
    })
}) 

let div = document.createElement("div");
document.body.appendChild(div);


/*window.addEventListener("load", function () {
	let pulsante = document.getElementById("pulsante");
    // captare l'evento click del pulsante con id "pulsante"
    pulsante.addEventListener("click", function () {
	    console.log("è stato cliccato il bottone");
    });
}) */



