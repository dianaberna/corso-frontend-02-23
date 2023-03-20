let nav = document.createElement("nav");
document.body.appendChild(nav)


//Mypage dentro nav modello compagna corso
let testoLink = document.createTextNode("MyPage")
let link = document.createElement("a")

//genitore.appendo(figlio)
link.appendChild(testoLink)
nav.appendChild(link)

//Voci menu nella lista

let navul = document.createElement("ul")
nav.appendChild(navul)

let linkLista = ["Home", "Why", "How"]

for (let i = 0; i < linkLista.length; i++){
    let navli = document.createElement("li")
    let linkli = document.createElement("a")
    let testoli = document.createTextNode (linkLista[i])
    linkli.setAttribute("href", "#"); 
    navul.appendChild(navli)
    navli.appendChild(linkli)
    linkli.appendChild(testoli)
}

//header modello docente v1

let header = document.createElement("header")
document.body.appendChild(header)

let testoTitolo = document.createTextNode("Basic landing page for big dream")
let titolo = document.createElement("h1")
titolo.appendChild(testoTitolo)
header.appendChild(titolo)

let testoParagrafo = document.createTextNode("Minimal, responsive and accessible")
let paragrafo = document.createElement("p")
paragrafo.setAttribute("class", "subtitle")
paragrafo.appendChild(testoParagrafo)
header.appendChild(paragrafo)


let testoBtn = document.createTextNode("Explore repo")
let btn = document.createElement("button")
btn.appendChild(testoBtn)
header.appendChild(btn)
btn.setAttribute("onclick", "esploraRepo()"); // attributo onclick
btn.setAttribute("class", "button"); // classe bottone per colorarlo all'hover

