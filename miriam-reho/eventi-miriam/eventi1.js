// Fase 5: eventListner
window.addEventListener("load", function () {
    
    let div = document.createElement("div")
    document.body.appendChild(div)

    // Fase 1: genera i colori

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    // Fase 2: creare il BG del body
    // Fase 3: creare il blocco colore
    let rgb = "rgb( " + r + " , " + g + " , " + b + " )"
    console.log(rgb)
    document.body.style.backgroundColor = rgb

    // Fase 4: aggiungere ad un div
    let rgbdiv = document.createTextNode(rgb)
    div.appendChild(rgbdiv)

})