// es 5


window.addEventListener("load", function(){

    let divInputs = document.createElement("div")
    document.body.appendChild(divInputs)
    divInputs.setAttribute("id", "principale")


    let labelDefault = document.createElement("label")
    divInputs.appendChild(labelDefault)
    let testoDefault = document.createTextNode("Default")
    labelDefault.appendChild(testoDefault)
    labelDefault.setAttribute("for", "default")


    let inputDefault = document.createElement("input")
    divInputs.appendChild(inputDefault)
    inputDefault.setAttribute("id","default")
    



    let inputHover = document.createElement("input")
    divInputs.appendChild(inputHover)



    let inputFocused = document.createElement("input")
    divInputs.appendChild(inputFocused)



    let inputTyping = document.createElement("input")
    divInputs.appendChild(inputTyping)



    let inputEntered = document.createElement("input")
    divInputs.appendChild(inputEntered)



    let inputDisabled = document.createElement("input")
    divInputs.appendChild(inputDisabled)



    let inputError = document.createElement("input")
    divInputs.appendChild(inputError)



    let inputConfirmed = document.createElement("input")
    divInputs.appendChild(inputConfirmed)














});