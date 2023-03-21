window.addEventListener("load", function(){
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "ciao")
    // input.value = "ciao"
    
    // se ho bisogno di gestire più eventi per uno stesso elemento devo creare più eventlistener
    input.addEventListener("change", function(e){
        // "e" contiene le informazioni dell'evento
        console.log("ciao")
    })
    input.addEventListener("keydown", function(e){
        console.log(e)
        if(e.key == "Enter"){
            console.log("ciao")
        }
    })

    // ho due o più eventi da gestire esattamente nello stesso modo
    let arrayEventi = ["change", "keydown"]
    // genero un eventlistener per ogni elemento dell'arrayEventi
    for (let i = 0; i < arrayEventi.length; i++) {
        arrayEventi[i].addEventListener(arrayEventi[i], function(){
            console.log("ciao")
        })
    }

    document.body.appendChild(input);
})