//crea un nodo HTML
// il nome del tag del nodo,il testo da inserire  e l'attributi da asegnare

function creaNodo(posizione, nomeTag, testo = "", listaAttributi = []){

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
     //ho creato un nodo per il Logo
let nav = creaNodo(document.body, "nav", "", ["navigazione", "idnav", ""])
let a = creaNodo(nav, "a");
let img = creaNodo(a, "img");
img.setAttribute("src","imgdom/MyPage.png");

  // lista home page
let ul = creaNodo(nav, "ul")

let arrayLink = [
    { titolo: "Home", href: "home.html" },
    { titolo: "Why", href: "why.html" },
    { titolo: "How", href: "how.html" },
];

for (let i = 0; i < arrayLink.length; i++) {
    let li = creaNodo(ul, "li")
    creaNodo(li, "a", arrayLink[i].titolo, ["", "", arrayLink[i].href])
}

        //HEADER

let header = creaNodo(document.body, "header")
creaNodo(header, "h1", "Basic landing page for big dream")
creaNodo(header, "p", "Minimal, responsive and accessible", ["subtitle"])
creaNodo(header, "button", "Explore repo")