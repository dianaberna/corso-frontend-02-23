console.log("siamo nel dom.js");

// 

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

// 