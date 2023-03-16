function creaNodo(posizione, nomeTag, testo = "", listaAttributi = {}) {
    

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
  let a = creaNodo(nav, "a");
  let img = creaNodo(a , "img",);
  img.setAttribute("src","imgdom/MyPage.png");
  
  let ul = creaNodo(nav, "ul");

  let arrayLink = [
    { titolo: "Home", href: "home.html" },
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