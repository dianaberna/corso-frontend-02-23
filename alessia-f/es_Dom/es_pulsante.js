
/// evento: captare il caricamento di tutto il body

window.addEventListener("load",function(){
    let pulsante = document.getElementById("pulsante");
    //evento: click sul pulsante con id"pulsante"
    pulsante.addEventListener("click",function(){
        console.log("è stato cliccato il bottone");
    })
});

