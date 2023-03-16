let nav = document.createElement("nav");
document.body.appendChild(nav);

let testoA = document.createTextNode("mypage");
let A = document.createElement("a");
A.appendChild(testoA);
nav.appendChild(A);

let div = document.createElement("div");
nav.appendChild(div);

let Ul = document.createElement("ul");
div.appendChild(Ul);

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

let header = document.createElement("header");
document.body.appendChild(header);

let headerH1 = document.createElement("h1");
let testoHeaderH1 = document.createTextNode("Basic landing page for big dream");
headerH1.appendChild(testoHeaderH1);
header.appendChild(headerH1);

let headerParagrafo = document.createElement("p");
let testoHeaderP = document.createTextNode(
  "Minimal, responsive and accessible"
);
headerParagrafo.appendChild(testoHeaderP);
headerParagrafo.setAttribute("class", "subtitle");
header.appendChild(headerParagrafo);

let headerDiv = document.createElement("div");
headerDiv.setAttribute("class=", "posizionamento-griglia");

let headerImmagine = document.createElement("svg");
let headerImmagineTesto = document.createTextNode();
