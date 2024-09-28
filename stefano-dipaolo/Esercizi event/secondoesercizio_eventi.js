function creoEappendo (a,b){
    let c = document.createElement(b)
    a.appendChild(c)
    return c
}
window.addEventListener("load",function(){
    let body = document.body
    //creo l'input
    let input = creoEappendo (body,"input")
    input.setAttribute("id","mioinput")
    input.setAttribute("type","text")
    //gli assegno un valore
    input.setAttribute("value","margin: 2rem; width: 400px; height: 400px; background-color: yellow")
    input.style.width = "35rem"
    //creo il pulsante
    let pulsante = creoEappendo (body,"button")
    let testo = this.document.createTextNode("Aggiorna stile")
    pulsante.appendChild(testo)
    
    //creo il div
    let div = creoEappendo(body,"div")
    //gli dico che lo style lo deve prender dal valore dell'input
    div.style = document.getElementById("mioinput").value
    //quando clicco lo style del div cambia in base a ciò che ho scritto nell'input
    pulsante.addEventListener("click",function(){
        let testo = document.getElementById("mioinput").value
        console.log(testo)
        div.style = testo
    })

})