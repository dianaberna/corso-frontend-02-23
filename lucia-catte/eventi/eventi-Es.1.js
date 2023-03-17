console.log("SONO NEL FILE EVENTI ES 1");

//ES. 1:Realizzare una pagina web con js che generi un colore di sfondo random, 
//     lo applica al body e lo stampa in un div con id color. (ogni volta che viene ricaricata la pagina il colore cambia)
window.addEventListener("load", function () {
	console.log("il body è stato caricato");   
})
//genero i colori
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(r, g, b);

//unisco i numeri random 
let coloriRgb = "rgb( " + r + "," + g + "," + b + ")"
console.log(coloriRgb);

//applico il colore al background del body
document.body.style.backgroundColor = coloriRgb;

//creo un div e gli imposto il testo dei colori random
let div = document.createElement("div");
document.body.appendChild(div);
let divText = document.createTextNode(coloriRgb);
div.appendChild(divText)

//creo l'evento
window.addEventListener("load", function(){
    //genero i colori
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    console.log(r, g, b);

    //unisco i numeri random 
    let coloriRgb = "rgb( " + r + "," + g + "," + b + ")"
    console.log(coloriRgb);

    //applico il colore al background del body
    document.body.style.backgroundColor = coloriRgb;

    //creo un div e gli imposto il testo dei colori random
    let div = document.createElement("div");
    document.body.appendChild(div);
    let divText = document.createTextNode(coloriRgb);
    div.appendChild(divText)
})













