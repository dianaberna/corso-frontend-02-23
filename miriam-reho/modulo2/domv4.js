function creaNodo(tipoTag, posizione, testo = "", listaAttributi = {}){
    let tag = document.createElement(tipoTag)
    posizione.appendChild(tag)
    if (testo) {
        let nodoTesto = document.createTextNode(testo)
        tag.appendChild(nodoTesto)
    }

    if (listaAttributi.class) {
        tag.setAttribute("class" , listaAttributi.class)
    }
    if (listaAttributi.id) {
        tag.setAttribute("id" , listaAttributi.id)
    }
    if (listaAttributi.href) {
        tag.setAttribute("href" , listaAttributi.href)
    }
    if (listaAttributi.src) {
        tag.setAttribute("src" , listaAttributi.src)
    }
    if (listaAttributi.alt) {
        tag.setAttribute("alt" , listaAttributi.alt)
    }

    return tag
}

//listaAttributi.class contenga classe, quindi listaAttributi sarà un oggetto
//listaAttributi.id con id
//listaAttributi.href

let nav = creaNodo ( "nav" , document.body)
let logo = creaNodo("a", nav)
creaNodo("img",logo,"", {href:"landing-page1.html", src:"/miriam-reho/modulo-1/assets/MyPage.png", alt: "MyPage"})

let ul = creaNodo("ul", nav)

let listaNav = [
    {testo: "Home", href: "Dom.html"},
    {testo: "Why", href: "Dom.html"},
    {testo: "How", href: "Dom.html"}
]

for (let i = 0; i < listaNav.length; i++){
    let li = creaNodo ("li", ul)
    creaNodo ("a", li, listaNav[i].testo, {href: listaNav[i].href})
}