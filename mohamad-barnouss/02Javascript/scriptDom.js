let navTitle = document.createTextNode("Mypage");
let titolo = document.createElement("h4");

titolo.appendChild(navTitle);
let navGenitore = document.getElementById("nav");
navGenitore.appendChild(titolo);

//creo la <ul>
let listaUl = document.createElement("ul"); //riutilizzabile
let linkList = document.createElement("li");

// Link
let linkHome = document.createTextNode("Home");
let homeNav = document.createElement("a");

//inseriso il primo elemento lista
homeNav.appendChild(linkHome);
linkList.appendChild(homeNav);
listaUl.appendChild(linkList);
navGenitore.appendChild(listaUl); //APPEND UL all tag nav

//inseriso il Secondo elemento lista
let whyText = document.createTextNode("Why");
let ahrefWhy = document.createElement("a");
let linkListWhy = document.createElement("li");
ahrefWhy.appendChild(whyText);
linkListWhy.appendChild(ahrefWhy);
listaUl.appendChild(linkListWhy);

//inserisco il terzo elemento della lista HOW
let textHow = document.createTextNode("How");
let ahrefHow = document.createElement("a");
let listHow = document.createElement("li");
ahrefHow.appendChild(textHow);
listHow.appendChild(ahrefHow);
listaUl.appendChild(listHow);

//***********************TITOLO*************************** */

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
