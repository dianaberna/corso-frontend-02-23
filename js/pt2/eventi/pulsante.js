// captare il caricamento di tutto il body
window.addEventListener("load", function (event) {
    console.log(event)
	let pulsante = document.getElementById("pulsante");
    // captare l'evento click del pulsante con id "pulsante"
    pulsante.addEventListener("click", function (e) {
        // stampare il value dell'elemento che ha scaturito l'evento del click
        console.log(e)
        console.log(e.target)
        console.log(e.target.value) 
	    console.log("è stato cliccato il bottone");
    });
}) 