console.log("v3 - versione array di oggetti");

function creaNodo({ posizione, nomeTag, testo = "", listaAttributi = {} }) {
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

let nav = creaNodo({
    posizione: document.body,
    nomeTag: "nav",
    listaAttributi: { classe: "navigazione", id: "idnav" },
});
let span = creaNodo({ posizione: nav, nomeTag: "span", testo: "MyPage" });
let ul = creaNodo({ posizione: nav, nomeTag: "ul" });

let arrayLink = [
    { titolo: "Home", href: "index.html" },
    { titolo: "Why", href: "why.html" },
    { titolo: "How", href: "how.html" },
];

for (let i = 0; i < arrayLink.length; i++) {
    let li = creaNodo({ posizione: ul, nomeTag: "li" });
    creaNodo({
        posizione: li,
        nomeTag: "a",
        testo: arrayLink[i].titolo,
        listaAttributi: { href: arrayLink[i].href },
    });
}

let header = creaNodo({ posizione: document.body, nomeTag: "header" });
creaNodo({
    posizione: header,
    nomeTag: "h1",
    testo: "Basic landing page for big dream",
});
creaNodo({
    posizione: header,
    nomeTag: "p",
    testo: "Minimal, responsive and accessible",
    listaAttributi: { classe: "subtitle" },
});
creaNodo({ posizione: header, nomeTag: "button", testo: "Explore repo" });

let main = creaNodo({ posizione: document.body, nomeTag: "main" });
let sectionHow = creaNodo({
    posizione: main,
    nomeTag: "section",
    listaAttributi: { id: "how" },
});

let div1 = creaNodo({ posizione: sectionHow, nomeTag: "div" });
let divcard = creaNodo({ posizione: div1, nomeTag: "div" });

creaNodo({ posizione: divcard, nomeTag: "span", testo: "01" });
creaNodo({ posizione: divcard, nomeTag: "h3", testo: "Clone" });
creaNodo({
    posizione: divcard,
    nomeTag: "p",
    testo: "Clone the repository from Github, the code is public and constantly evolving thanks to the community that supports us.",
});
