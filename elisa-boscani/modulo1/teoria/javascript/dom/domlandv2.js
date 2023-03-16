function creaNodo({ posizione, nomeTag, testo = "", attributo = {} }) {
  let elemento = document.createElement(nomeTag);
  posizione.appendChild(elemento);
  if (attributo.length != 0) {
    if (attributo.class) {
      elemento.setAttribute("class", attributo.class);
    }
    if (attributo.href) {
      elemento.setAttribute("herf", attributo.href);
    }
    if (attributo.svg) {
      elemento.setAttribute("src", attributo.svg);
    }
    if (attributo.id) {
      elemento.setAttribute("id", attributo.id);
    }
  }
  if (testo.length != 0) {
    let elementoTesto = document.createTextNode(testo);
    elemento.appendChild(elementoTesto);
  }
  return elemento;
}
let nav = creaNodo({ posizione: document.body, nomeTag: "nav" });
let A = creaNodo({
  posizione: nav,
  nomeTag: "a",
  testo: "",
  attributo: { href: "mypage" },
});
let navSpan = creaNodo({ posizione: A, nomeTag: "span", testo: "mypage" });
let div = creaNodo({ posizione: nav, nomeTag: "div", testo: "" });
let Ul = creaNodo({ posizione: div, nomeTag: "ul", testo: "" });

let array = [
  { titolo: "home", link: "home.html" },
  { titolo: "why", link: "why.html" },
  { titolo: "how", link: "how.html" },
];
for (let i = 0; i < array.length; i++) {
  let li = creaNodo({ posizione: Ul, nomeTag: "li" });
  creaNodo({
    posizione: li,
    nomeTag: "a",
    testo: array[i].titolo,
    attributo: { href: array[i].link },
  });
  /* let Il = document.createElement("li");
  let listaA = document.createElement("a");
  listaA.setAttribute("href", array[i].link);
  let testoIl = document.createTextNode(array[i].titolo);
  Il.appendChild(listaA);
  listaA.appendChild(testoIl);
  Ul.appendChild(Il); */
}
