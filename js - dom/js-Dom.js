
function creaNodo({ posizione, nomeTag, testo = "", listaAttributi = {} }) {
    //console.log(nomeTag, testo, listaAttributi)

    // listaAttributi = ["classe", "id", "href"]
    // listaAttributi = {classe: "nomeclasse", id: "nomeid", href: "link"}

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
    if (listaAttributi.src) {
        elemento.setAttribute("src", listaAttributi.src);
    }

    posizione.appendChild(elemento);

    if (testo.length != 0) {
        let elementoTesto = document.createTextNode(testo);
        elemento.appendChild(elementoTesto);
    }

    return elemento;
}

let nav = document.createElement("nav")
document.body.appendChild(nav)

let span1 = document.createElement("span")
nav.appendChild(span1)


let strong = document.createElement("strong")
span1.appendChild(strong)


let testolink = document.createTextNode("MyPage")
strong.appendChild(testolink)

let lista = document.createElement("ul")
nav.appendChild(lista)

let listaelemento= document.createElement("li")
lista.appendChild(listaelemento)

let listaelemento2= document.createElement("li")
lista.appendChild(listaelemento2)

let listaelemento3= document.createElement("li")
lista.appendChild(listaelemento3)

let link = document.createElement("a")
link.setAttribute("href","a")
listaelemento.appendChild(link)

let testo = document.createTextNode("Home")
link.appendChild(testo)

let link2 = document.createElement("a")
let testo2 = document.createTextNode("Why")
link2.setAttribute("href","a")
link2.appendChild(testo2)
listaelemento2.appendChild(link2)

let link3 = document.createElement("a")
let testo3 = document.createTextNode("How")
link3.setAttribute("href","a")
link3.appendChild(testo3)
listaelemento3.appendChild(link3)

// Con Array
 
// .1

// let linklista = ["Home","Why","How"]

// // for (let i = 0; i < linklista.length; i++){
// //     let navli = document.createElement("li")
// //     let linkli = document.createElement("a")
// //     let testoli = document.createTextNode(linklista[i])
// //     lista.appendChild(navli)
// //     navli.appendChild(link)
// //     linkli.appendChild(testoli)
// // }

// .2

// let array = [
//     {title : "Home", link: "#"}
//     {title : "Why", link: "#"}
//     {title : "How", link: "#"}
// ]

// for (let i = 0; i < array.length; i++){
//     let a = document.createElement("a")
//     let lista = document.createElement("li")
//     let txta = document.createTextNode(array[i].title)
//     a.setAttribute("href", array[i].link)
//     a.appendChild(lista)
//     lista.appendChild(txta)
//     URL.appendChild(a)
// }

// header

let header = document.createElement("header");
document.body.appendChild(header);

let testoTitolo = document.createTextNode("Basic landing page for big dream");
let titolo = document.createElement("h1");
titolo.appendChild(testoTitolo);
header.appendChild(titolo);

let testoParagrafo = document.createTextNode(
    "Minimal, responsive and accessible"
);
let paragrafo = document.createElement("p");
paragrafo.setAttribute("class", "subtitle");
paragrafo.appendChild(testoParagrafo);
header.appendChild(paragrafo);

let testoBtn = document.createTextNode("Explore repo");
let btn = document.createElement("button");
btn.appendChild(testoBtn);
header.appendChild(btn);


let main = creaNodo({posizione: document.body, nomeTag: "main"});

let sectionWhy = creaNodo({ posizione: main, nomeTag: "section", listaAttributi: { id : "primasezione"}});

let div1 = creaNodo({posizione: sectionWhy, nomeTag: "div", listaAttributi: { id : "title"}});

let h2 = creaNodo({posizione: div1, nomeTag: "h2", testo:"Why use our Firstpage?"});

let div2 = creaNodo({posizione: sectionWhy, nomeTag: "div"});

let div_primo = creaNodo({posizione: div2, nomeTag:"div", listaAttributi : { class: "primo"}});

let div3 = creaNodo({posizione: div_primo, nomeTag: "div", listaAttributi : {class : "cont_1"}});

let div_img1 = creaNodo({posizione : div3, nomeTag: "img", listaAttributi : {src : "/russo-riccardo p/Img/Vector.svg"}})

let h3 = creaNodo({posizione: div3, nomeTag : "h3", testo : "Minimal but complete"})

let paragrafo1 = creaNodo({posizione: div3, nomeTag: "p", testo: "It is minimal but complete It contains all the sections and components a landing page needswith a minimal and essential design We go straight to people's hearts."})