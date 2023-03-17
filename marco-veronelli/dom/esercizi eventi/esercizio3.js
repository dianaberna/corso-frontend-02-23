window.addEventListener("load", function () {
    console.log("il body è stato caricato");


    let body= document.getElementsByTagName("body")[0]
// input
    let input =document.createElement("input")
    body.appendChild(input)
    input.setAttribute("id","input")
    input.setAttribute("value","")
    //pulsante
    let pulsante= document.createElement("button")
    body.appendChild(pulsante)
    let txtp=document.createTextNode("aggiungi")
    pulsante.appendChild(txtp)
    //ul/li
    let ul=document.createElement("ul")
    body.appendChild(ul)
//EVENT LISTENER
pulsante.addEventListener("click", function () {

    let value=document.getElementById("input").value
	let li=document.createElement("li")
    ul.appendChild(li)
    let t=document.createTextNode(value)
    li.appendChild(t)
    let x =document.createElement("button")
    li.appendChild(x)
    let txtx=document.createTextNode("X")
    x.appendChild(txtx)
    x.style.margin ="0.3rem"
    document.getElementById("input").value=""
   
    
    x.addEventListener("click", function () {
        console.log("x Clicked")
        li.remove()
        
    });
    
    
}) ; 

}) ;
