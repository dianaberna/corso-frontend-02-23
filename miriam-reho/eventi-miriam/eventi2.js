window.addEventListener("load", function () {
    let box = document.getElementById("box")

    let button = document.getElementById("pulsante")

    let div = document.createElement("div")
    document.body.appendChild(div)

    div.style = "margin: 2rem; width: 400px; height: 400px; background-color: yellow"
    box.value = "margin: 2rem; width: 400px; height: 400px; background-color: yellow"
    
    button.addEventListener("click", function () {

        div.style = box.value
        
    })

})