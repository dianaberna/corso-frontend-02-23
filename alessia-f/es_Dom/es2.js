

window.addEventListener("load",function(){ //devo scrivere un'evento predefinito nel browser = al caricamento della pagina devi fare quello che viene dopo
 let input = document.getElementsByTagName("input")[0] //ci da un'array di tutti gli input -- gli dico di prendere solo il primo quindi scrivo [0]
    console.log(input) // input+attributo

    let div= document.getElementsByTagName("div")[0] //seleziono il div su cui si applicano le caratteristiche inserite nel box testo
    div.style = "margin: 2rem; width: 400px; height: 400px; background-color: yellow"
    input.value = "margin: 2rem; width: 400px; height: 400px; background-color: yellow"


    let button = document.getElementsByTagName("button")[0] //seleziono il bottone sempre in posizione 0
    button.addEventListener("click",function(){ //creo l'evento
    console.log(input.value) //verifico se funziona

    div.style = input.value //quando sei nel event del bottone, assegna al div i parametri dell' input

    })

})