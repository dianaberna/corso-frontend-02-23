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
//Creo Array
arrayNav = ["Home", "Why", "How"];
arrayLink = [
  "http://www.google.com",
  "https://www.repubblica.it/",
  "http://www.amazon.it",
]; //link casuali di prova
for (let i = 0; i < arrayNav.length; i++) {
  let elementoNav = document.createTextNode(arrayNav[i]);
  let ancorHref = document.createElement("a");
  ancorHref.appendChild(elementoNav);
  ancorHref.setAttribute("href", arrayLink[i]); //Provo a passare all'attributo href i link
  let itemList = document.createElement("li");
  itemList.appendChild(ancorHref);
  listaUl.appendChild(itemList);
}

/******FUNZIONE DI AGGIUNTA*******/

function creaTesto(testo, tipotag) {
  let descrizione = document.createTextNode(testo); //crea il titolo
  let elementoGenitore = document.createElement(tipotag);
  elementoGenitore.appendChild(descrizione); //non si fa il ritorno dell appenChild()
  return elementoGenitore;
}

let headerParent = document.getElementsByTagName("header")[0];

let titoloPrincipale = creaTesto("Basic landing page for big dream", "h1");

headerParent.appendChild(titoloPrincipale); //Funziona MA DEVO controllare il perchè non funziona lo stile css

//paragrafto
let paragrafoHeader = creaTesto("Minimal, responsive and accessible", "p");
headerParent.appendChild(paragrafoHeader);

//bottonne
let paragrafoButton = creaTesto("explore repo", button);
headerParent.appendChild(paragrafoButton);
