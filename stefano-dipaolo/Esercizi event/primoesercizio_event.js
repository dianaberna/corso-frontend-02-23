function creoEappendo (a,b){
    let c = document.createElement(b)
    a.appendChild(c)
    return c
}

window.addEventListener("load",function(){
let body = document.body
let primodiv = creoEappendo (body,"div")


let a = Math.floor(Math.random()*256)
let b = Math.floor(Math.random()*256)
let c = Math.floor(Math.random()*256)
let coloreRandom = "rgb("+a+","+b+","+c+")" //`rgb(${a}${b}${c})`template literal
body.style.backgroundColor =coloreRandom

let testoDiv = document.createTextNode(coloreRandom)
primodiv.appendChild(testoDiv)
primodiv.setAttribute("margin","10rem")
})

//elemento.innerhtml = colore    innerhtml va a sostituire il contenuto
//generare il div, aggiunger il contenuto, aggiungere il div al body
















