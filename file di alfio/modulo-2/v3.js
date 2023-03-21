//codice con le funzioni
function crea({posizione, tag = "", testo = "", listaAttributi ={}}) {
    let element = document.createElement(tag)
    posizione.appendChild(element)
    if (testo.length != 0) {
        element.appendChild(document.createTextNode(testo))
    }

     
        //(varie opzioni di listaAttributi)
        if (listaAttributi.class) {
            element.setAttribute("class", listaAttributi.class)
        }
        if (listaAttributi.id) {
            element.setAttribute("id", listaAttributi.id)
        }
        if (listaAttributi.href) {
            element.setAttribute("href", listaAttributi.href)
        }
        if (listaAttributi.src) {
            element.setAttribute("src", listaAttributi.src)
        }
    
    return element
}





let nav = crea({posizione:document.body,tag: "nav"})
let span = crea({posizione:nav,tag: "span"})
crea({posizione:span,tag: "strong", testo:"Mypage"})

let hamburger = crea({posizione:nav,tag: "div", listaAttributi: {class:"hamburger"}})

for (let i = 0; i < 3; i++) {
    crea({posizione:hamburger,tag: "span"})
}

let ul = crea({posizione:nav,tag: "ul"})
let li = crea({posizione:ul,tag: "li"})

let array = [
    { titolo: "Home", href: "Home.html" },
    { titolo: "Why", href: "Why.html" },
    { titolo: "How", href: "How.html" },
]
for (let i = 0; i < array.length; i++) {
    let li = crea({posizione:ul,tag: "li"})
    crea({posizione:li,tag:"a",testo:array[i].titolo,listaAttributi:{href:array[i].href}})

}
let header=crea({posizione:document.body,tag:"header"})

crea({posizione:header,tag:"img",listaAttributi:{src:"./svg/Vector (15).svg"}})

crea({posizione:header,tag:"h1",testo:"Basic landing page for big dream"})
crea({posizione:header,tag:"p",testo:"Minimal, responsive and accessible"})
let button=crea({posizione:header,tag:"button"})
crea({posizione:button,tag:"strong",testo:"Explore repo"})





