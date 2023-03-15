console.log("siamo nel dom.js");

// come selezionare elementi del dom

// id
let paragrafo = document.getElementById("paragrafo");
paragrafo.style.backgroundColor = "red";

console.log(document.getElementsByClassName("verde"));
console.log(document.getElementsByClassName("verde").length);

// questo non posso farlo
// document.getElementsByClassName("verde").style.backgroundColor = "green"

// classe

let classeVerde = document.getElementsByClassName("verde");
for (let i = 0; i < classeVerde.length; i++) {
    classeVerde[i].style.backgroundColor = "green";
}

// tag

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByTagName("li").length);

// errore
// document.getElementsByTagName("li").style.backgroundColor = "pink"

for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    document.getElementsByTagName("li")[i].style.backgroundColor = "pink";
}

// query selector -> sfruttiamo i selettori css

// querySelector  --> il primo elemento
document.querySelector("div > .verde, h1").style.backgroundColor = "yellow";

// querySelectorAll --> l'array di tutti gli elementi
let classeBlu = document.querySelectorAll(".blu");

for (let i = 0; i < classeBlu.length; i++) {
    classeBlu[i].style.backgroundColor = "blue";
}

// nuova modifica dell'id paragrafo
paragrafo.style.backgroundColor = "orange";

// come inserire nuovi elementi nel dom

// creo gli elementi
let testoh1 = document.createTextNode("sono il testo del titolo");
let titoloh1 = document.createElement("h1");

// appende come ultimo figlio
titoloh1.appendChild(testoh1);

let genitore = document.getElementById("genitore");
genitore.appendChild(titoloh1);

let array = [1, 2, 3];
array[0];

// creo il contenuto
let testoParagrafo = document.createTextNode("Sono il testo del paragrafo");
// creo il tag
let paragrafoNuovo = document.createElement("p");
// appendo il contenuto al tag
paragrafoNuovo.appendChild(testoParagrafo);
// selezionare la posizione nel dom
let header = document.getElementsByTagName("header")[0];
// appendo il tag nella posizione selezionata
header.appendChild(paragrafoNuovo);

// inserisco 4 paragrafi nel footer

// selezionare la posizione nel dom
let footer = document.getElementsByTagName("footer")[0];

let arrayFooter = [
    "testo 1 footer",
    "testo 2 footer",
    "testo 3 footer",
    "testo 4 footer",
];
let arrayFooterOggetti = [
    { titolo: "titolo 1", testo: "testo 1 footer" },
    { titolo: "titolo 2", testo: "testo 2 footer" },
];

for (let i = 0; i < arrayFooterOggetti.length; i++) {
    // creo il contenuto
    let testoParagrafo = document.createTextNode(arrayFooterOggetti[i].testo);
    // creo il tag
    let paragrafoNuovo = document.createElement("p");
    // appendo il contenuto al tag
    paragrafoNuovo.appendChild(testoParagrafo);
    // appendo al footer il tag
    footer.appendChild(paragrafoNuovo);
}

// come eliminare un elemento del dom

document.getElementById("cancellami").remove();

// innerHTML --> da usare con cautela

let testoSpan = "ciao mondo";

document.getElementById("selezionami").innerHTML =
    "<p class='pippo'>prova</p>sono un testo <span>" + testoSpan + "</span>";

// creo l'elemento e aggiungo degli attributi

let form = document.getElementsByTagName("form")[0];
let input = document.createElement("input");

// elemento.setAttribute(“nome_attributo”, “valore”)
input.setAttribute("type", "email");
input.setAttribute("placeholder", "email@email.it");

form.appendChild(input);

// eliminare un attributo
//document.getElementById("genitore").removeAttribute("class")

let arrayClassPippo = document.getElementsByClassName("pippo")
arrayClassPippo[1].removeAttribute("id")
