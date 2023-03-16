console.log("v3 - versione array di oggetti");

function creaNodo(posizione, nomeTag, testo = "", listaAttributi = {}) {
    //console.log(nomeTag, testo, listaAttributi)

    // listaAttributi = ["classe", "id", "href"]
    // listaAttributi = {classe: "nomeclasse", id: "nomeid", href: "link"}

    let elemento = document.createElement(nomeTag);

    //console.log(listaAttributi)
    if (listaAttributi.classe) {
        elemento.setAttribute("class", listaAttributi.classe);
    }
    if (listaAttributi.id) {
        elemento.setAttribute("id", listaAttributi.id);
    }
    if (listaAttributi.href) {
        elemento.setAttribute("href", listaAttributi.href);
    }

    posizione.appendChild(elemento);

    if (testo.length != 0) {
        let elementoTesto = document.createTextNode(testo);
        elemento.appendChild(elementoTesto);
    }

    return elemento;
}

let nav = creaNodo(document.body, "nav", "", {
    classe: "navigazione",
    id: "idnav",
});
let span = creaNodo(nav, "span", "MyPage");
let ul = creaNodo(nav, "ul");

let arrayLink = [
    { titolo: "Home", href: "index.html" },
    { titolo: "Why", href: "why.html" },
    { titolo: "How", href: "how.html" },
];

for (let i = 0; i < arrayLink.length; i++) {
    let li = creaNodo(ul, "li");
    creaNodo(li, "a", arrayLink[i].titolo, { href: arrayLink[i].href });
}

let header = creaNodo(document.body, "header");
creaNodo(header, "h1", "Basic landing page for big dream");
creaNodo(header, "p", "Minimal, responsive and accessible", {
    classe: "subtitle",
});
creaNodo(header, "button", "Explore repo");

let main = creaNodo(document.body, "main");
let sectionHow = creaNodo(main, "section", "", { id: "how" });

let div1 = creaNodo(sectionHow, "div");
let divcard = creaNodo(div1, "div");

creaNodo(divcard, "span", "01");
creaNodo(divcard, "h3", "Clone");
creaNodo(
    divcard,
    "p",
    "Clone the repository from Github, the code is public and constantly evolving thanks to the community that supports us."
);
