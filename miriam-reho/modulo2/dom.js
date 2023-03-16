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


/* Versione 1 Creazione di solo Home della Nav
let navli = document.createElement("li")
navul.appendChild(navli) 
let linkli = document.createElement("a")
let testoli = document.createTextNode("Home")
navli.appendChild(linkli)
linkli.appendChild(testoli) */


//----------------- Versione 2 Creazione nav con for
/* let linkLista = [
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
}*/

//----------------- Versione 3 Creazione nav con funzione

/* function creaNodo(posizione, nomeTag, testo = "") { //dove voglio appendere e chi
    let elemento = document.createElement(nomeTag) // elemento è la variabile che creiamo richiamando la funzione
    if (testo.length !=0){
        let elementoTesto = document.createTextNode(testo)
        elemento.appendChild(elementoTesto)
    }
    posizione.appendChild(elemento) //appendiamo l'elemento dove abbiamo dichiarato
    return elemento //mostriamo l'elemento effettivamente
}

let nav = creaNodo(document.body, "nav")  */

for (let i=0; i <3 ; i++){
    let ulLi = document.createElement("li")
    navul.appendChild(ulLi)
}
