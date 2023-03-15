console.log("v1")

let nav = document.createElement("nav")
document.body.appendChild(nav)

let testoSpan = document.createTextNode("MyPage")
let span = document.createElement("span")
span.appendChild(testoSpan)
nav.appendChild(span)

let ul = document.createElement("ul")
nav.appendChild(ul)

let li1 = document.createElement("li")
let testoLink1 = document.createTextNode("Home")
let link1 = document.createElement("a")
link1.appendChild(testoLink1)
li1.appendChild(link1)
ul.appendChild(li1)

let li2 = document.createElement("li")
let testoLink2 = document.createTextNode("Why")
let link2 = document.createElement("a")
link2.appendChild(testoLink2)
li2.appendChild(link2)
ul.appendChild(li2)

let li3 = document.createElement("li")
let testoLink3 = document.createTextNode("How")
let link3 = document.createElement("a")
link3.appendChild(testoLink3)
li3.appendChild(link3)
ul.appendChild(li3)

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

let main = document.createElement("main")
document.body.appendChild(main)

let sectionHow = document.createElement("section")
sectionHow.setAttribute("id", "how")
main.appendChild(sectionHow)

let div1 = document.createElement("div")
sectionHow.appendChild(div1)

let divcard = document.createElement("div")
div1.appendChild(divcard)

let spanNumeroTesto = document.createTextNode("01")
let spanNumero = document.createElement("span")
spanNumero.appendChild(spanNumeroTesto)
divcard.appendChild(spanNumero)

let titoloh3Testo = document.createTextNode("Clone")
let titoloh3 = document.createElement("h3")
titoloh3.appendChild(titoloh3Testo)
divcard.appendChild(titoloh3)

let paragrafoTestoCard = document.createTextNode("Clone the repository from Github, the code is public and constantly evolving thanks to the community that supports us.")
let paragrafoCard = document.createElement("p")
paragrafoCard.appendChild(paragrafoTestoCard)
divcard.appendChild(paragrafoCard)
