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

