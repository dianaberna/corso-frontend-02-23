//Seconda versione usando gli Array

//creo il titolo
let navTitle = document.createTextNode("Mypage");
let titolo = document.createElement("h4");
titolo.appendChild(navTitle);

//creo la nav e ci metto il titolo
let navGenitore = document.getElementById("nav");
navGenitore.appendChild(titolo);

//creo la lista
let listaUl = document.createElement("ul");
navGenitore.appendChild(listaUl);
let v = [
  { titolo: "Home", href: "https://www.repubblica.it/" },
  { titolo: "Why", href: "https://www.google.it/" },
  { titolo: "How", href: "https://www.ansa.it/" },
];

for (let i = 0; i < v.length; i++) {
  let listElement = document.createTextNode(v[i].titolo);
  let anchorTag = document.createElement("a");
  anchorTag.appendChild(listElement);
  anchorTag.setAttribute("href", v[i].href);
  let listItem = document.createElement("li");
  listItem.appendChild(anchorTag);
  listaUl.appendChild(listItem);
}

/**** Seconda parte */
let mainTitolo = document.createTextNode("Basic landing page for big dream");
let titoloH1 = document.createElement("h1");
titoloH1.appendChild(mainTitolo);

let headerPart = document.getElementsByTagName("header")[0]; //[0] perche lo considera come array
headerPart.appendChild(titoloH1); //aggiunge il titolo

//PARAGRAFO SOTTO AL TITOLO

let minimalParagrafo = document.createTextNode(
  "Minimal, responsive and accessible"
);
let paragrafo = document.createElement("p");
paragrafo.appendChild(minimalParagrafo);
headerPart.appendChild(paragrafo);

//*****BOTTONE
let buttontText = document.createTextNode("Explore repo");
let headerButton = document.createElement("button");

headerButton.appendChild(buttontText);
headerPart.appendChild(headerButton);

//****** Second title*/
let sottotitolo = document.createTextNode("Why use our MyPage?");
let h2Title = document.createElement("h2");
h2Title.appendChild(sottotitolo);
headerPart.appendChild(h2Title);
