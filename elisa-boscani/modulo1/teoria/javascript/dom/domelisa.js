console.log("siamo nel DOM");
document.getElementById("paragrafo").style.backgroundColor = "red";
/* document.getElementsByClassName("verde").style.backgroundColor = "green"; */
let classeVerde = document.getElementsByClassName("verde");
for (let i = 0; i < classeVerde.length; i++) {
  classeVerde[i].style.backgroundColor = "green";
}

/* document.getElementsByTagName("li").style.backgroundColor = "pink"; */
for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
  document.getElementsByTagName("li")[i].style.backgroundColor = "pink";
}

document.querySelector("div>.verde,h1").style.backgroundColor = "yellow";

let classBlu = document.querySelectorAll(".blu");
for (let i = 0; i < classBlu.length; i++) {
  classBlu[i].style.backgroundColor = "blue";
}
paragrafo.style.backgroundColor = "orange";

let testoh1 = document.createTextNode("Sono il testo del titolo");
let titoloh1 = document.createElement("h1");
titoloh1.appendChild(testoh1);
let posizione = document.getElementById("genitore");
genitore.appendChild(titoloh1);

let testoParagrafo = document.createTextNode("sono il test del paragrafo");
let paragrafoNuovo = document.createElement("p");
paragrafoNuovo.appendChild(testoParagrafo);
let header = document.getElementsByTagName("header")[0];
header.appendChild(paragrafoNuovo);

let footer = document.getElementsByTagName("footer")[0];
for (let i = 0; i < 4; i++) {
  let testoParagrafo = document.createTextNode("sono il paragrafo");
  let paragrafoNuovo = document.createElement("p");
  paragrafoNuovo.appendChild(testoParagrafo);
  footer.appendChild(paragrafoNuovo);
}
document.getElementById("cancellami").remove();

document.getElementById("selezionami").innerHTML = "<p>prova</p>sono un testo";

let form = document.getElementsByTagName("form")[0];
let input = document.createElement("input");
input.setAttribute("tipe", "email");
input.setAttribute("placeholder", "email@");
form.appendChild(input);
