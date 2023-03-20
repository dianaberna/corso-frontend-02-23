function creaNodo(posizione, nomeTag, testo = "", attributo = {}) {
  let elemento = document.createElement(nomeTag);
  posizione.appendChild(elemento);
  if (attributo.length != 0) {
    if (attributo.class) {
      elemento.setAttribute("class", attributo.class);
    }
    if (attributo.href) {
      elemento.setAttribute("herf", attributo.href);
    }
    if (attributo.src) {
      elemento.setAttribute("src", attributo.src);
    }
  }

  if (testo.length != 0) {
    let elementoTesto = document.createTextNode(testo);
    elemento.appendChild(elementoTesto);
  }
  return elemento;
}
let nav = creaNodo(document.body, "nav");
/* let nav = document.createElement("nav");
document.body.appendChild(nav); */
let A = creaNodo(nav, "a", "", { href: "mypage" });
/* let A = document.createElement("a");
A.appendChild(nav); */
let navSpan = creaNodo(A, "span", "mypage");
/* let navSpan = createElement("span");
let testoSpan = createTextNode("mypage");
navSpan.appendChild("testoSpan");
A.appendChild(navSpan); */
let div = creaNodo(nav, "div", "");
let Ul = creaNodo(div, "ul", "");

/* let Ul = document.createElement("ul");
div.appendChild(Ul); */
/* let array = ["home", "why", "how"];
for (let i = 0; i < array.length; i++) {
  let Il = document.createElement("li");
  let listaA = document.createElement("a");
  listaA.setAttribute("href", "home.html");
  let testoIl = document.createTextNode(array[i]);
  Il.appendChild(listaA);
  listaA.appendChild(testoIl);
  Ul.appendChild(Il);
} */
let array = [
  { titolo: "home", link: "home.html" },
  { titolo: "why", link: "why.html" },
  { titolo: "how", link: "how.html" },
];
for (let i = 0; i < array.length; i++) {
  let Il = document.createElement("li");
  let listaA = document.createElement("a");
  listaA.setAttribute("href", array[i].link);
  let testoIl = document.createTextNode(array[i].titolo);
  Il.appendChild(listaA);
  listaA.appendChild(testoIl);
  Ul.appendChild(Il);
}

let header = creaNodo(document.body, "header");
let headerH1 = creaNodo(header, "h1", "Basic landing page for big dream");
let headerParagrafo = creaNodo(
  header,
  "p",
  "Minimal, responsive and accessible",
  { class: "subtitle" }
);
let headerDiv = creaNodo(header, "div", "", {
  class: "posizionamento-griglia",
});
let headerImmagine = creaNodo(headerDiv, "img", "", {
  src: "./elisa-boscani/modulo1/Vector(10).svg",
});
let botton = creaNodo(headerDiv, "button", "explore repo");
