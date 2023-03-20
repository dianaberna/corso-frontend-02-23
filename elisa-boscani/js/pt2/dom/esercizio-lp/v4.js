console.log("v3 - aggiunta funzione creazione nodo generico");

function creaNodo(posizione, nomeTag, testo = "", listaAttributi = []){

    //console.log(nomeTag, testo, listaAttributi)

    // listaAttributi = ["classe", "id", "href"]

    let elemento = document.createElement(nomeTag)

    if(listaAttributi.length != 0){
        
        //console.log(listaAttributi)
        if(listaAttributi[0]){
            elemento.setAttribute("class", listaAttributi[0])
        }
        if(listaAttributi[1]){
            elemento.setAttribute("id", listaAttributi[1])
        }
        if(listaAttributi[2]){
            elemento.setAttribute("href", listaAttributi[2])
        }
    }

    posizione.appendChild(elemento)

    if(testo.length != 0){
        let elementoTesto = document.createTextNode(testo);
        elemento.appendChild(elementoTesto)
    }

    return elemento
}


let nav = creaNodo(document.body, "nav", "", ["navigazione", "idnav", ""])
let span = creaNodo(nav, "span", "MyPage")
let ul = creaNodo(nav, "ul")

let arrayLink = [
    { titolo: "Home", href: "index.html" },
    { titolo: "Why", href: "why.html" },
    { titolo: "How", href: "how.html" },
];

for (let i = 0; i < arrayLink.length; i++) {
    let li = creaNodo(ul, "li")
    creaNodo(li, "a", arrayLink[i].titolo, ["", "", arrayLink[i].href])
}


let header = creaNodo(document.body, "header")
creaNodo(header, "h1", "Basic landing page for big dream")
creaNodo(header, "p", "Minimal, responsive and accessible", ["subtitle"])
creaNodo(header, "button", "Explore repo")

let main = creaNodo(document.body, "main")
let sectionHow = creaNodo(main, "section", "", ["", "how"])

let div1 = creaNodo(sectionHow, "div")
let divcard = creaNodo(div1, "div")

creaNodo(divcard, "span", "01")
creaNodo(divcard, "h3", "Clone")
creaNodo(divcard, "p", "Clone the repository from Github, the code is public and constantly evolving thanks to the community that supports us.")
