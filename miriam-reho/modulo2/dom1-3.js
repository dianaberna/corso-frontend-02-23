/* versione 1

let nav = document.createElement("nav")

document.body.appendChild(nav)

//Ho creato la scritta Mypage dentro nav
let testoLink = document.createTextNode("MyPage")
let link = document.createElement("a")
//genitore.appendo(figlio)
link.appendChild(testoLink)
nav.appendChild(link)

//Creiamo la Lista Home,Why,How

let navul = document.createElement("ul")
nav.appendChild(navul)



let navli = document.createElement("li")
navul.appendChild(navli) 
let linkli = document.createElement("a")
let testoli = document.createTextNode("Home")
navli.appendChild(linkli)
linkli.appendChild(testoli) */


//----------------- Versione 2 e 3 Creazione nav con for e array di oggetti
let linkLista = [
    {title: "Home", link: "Dom.html"},
    {title: "Why", link: "Dom.html"},
    {title: "How", link: "Dom.html"}
]

for (let i = 0; i < linkLista.length; i++){
   let navli = document.createElement("li")
   let linkli = document.createElement("a")
   linkli.setAttribute("href",linkLista[i].link)
   let testoli = document.createTextNode(linkLista[i].title)
   navul.appendChild(navli)
   navli.appendChild(linkli)
   linkli.appendChild(testoli)
}

