console.log("SONO NEL FILE EVENTI");

//creo una funzione madre che mi fa ripetere le azioni 
//funzione (nome elemento, appendo elemento, creo testo)
/*function nodoLanding ({tagName, position, text = "", attribute = {}}){
    
    let tag = document.createElement(tagName); // creo una variabile che prende il primo elemendo della funzione
    position.appendChild(tag); //prendo il secondo elemento della funzione e appendo la variabile
    
    if(attribute.class) { //se esiste la classe
        tag.setAttribute("class", attribute.class) //aggiunge l'attributo
    }

    if(attribute.id) { //se esiste l'id
        tag.setAttribute("id", attribute.id) //aggiunge l'attributo
    }

    if(attribute.href) { //se esiste l'href
        tag.setAttribute("href", attribute.href) //aggiunge l'attributo
    }

    if(attribute.src) { //se esiste src
        tag.setAttribute("src", attribute.src) //aggiunge l'attributo
    }
    
    
    if(text.length != 0){ //se il testo è presente
        let textTag = document.createTextNode(text); //creo un testo che prende il terzo elemento della funzione
        tag.appendChild(textTag); // appendo il testo 
    }
    return tag;
}

let nav = nodoLanding ({tagName:"nav", position: document.body, attribute: {class:"nav"}})
let primoSpan = nodoLanding ({tagName:"span", position: nav, text:"MyPage"})
let ul = nodoLanding ({tagName:"ul", position: nav})

let arrayLi = [
    {title: "Home", link: "#Home"}, 
    {title: "Why", link: "#Why"}, 
    {title: "Partner", link: "#Partner"}, 
    {title: "How", link: "#How"} 
];

for (let i = 0; i < arrayLi.length; i++){
     let li = nodoLanding ({tagName:"li", position: ul })
     nodoLanding ({tagName:"a", position:li, text:arrayLi[i].title, attribute:{href: arrayLi[i].link}});
}

let header = nodoLanding({tagName:"header", position: document.body })

let primoTitolo = nodoLanding({tagName:"h1", position: header, text:"EVENTI:Basic landing page for big dream", attribute:{id:"Home"}});

let primoPar = nodoLanding({tagName:"p", position: header, text:"Minimal, responsive and accessible", attribute:{id:"primoParagrafo"}})

let primoBut = nodoLanding({tagName:"button", position: header, text:"Explore repo"})

let main = nodoLanding({tagName:"main", position: document.body})

let sectionWhy = nodoLanding({tagName:"section", position: main, attribute:{class:"why"}})

let primoH2 = nodoLanding({tagName:"h2", position: sectionWhy, text:"Why use our MyPage?", attribute:{id:"Why"}})

let whyDivGenitore = nodoLanding({tagName:"div", position:sectionWhy});

//Minimal but complete con le funzioni
let whyDiv1 = nodoLanding({tagName:"div", position:whyDivGenitore})
let minimalDiv = nodoLanding({tagName:"div", position:whyDiv1})
nodoLanding({tagName:"svg", position:minimalDiv})
nodoLanding({tagName:"h3", position:minimalDiv, text:"Minimal but complete"})
nodoLanding({tagName:"p", position:whyDiv1, text:"It is minimal but complete. It contains all the sections and components a landing page needs with a minimal and essential design. We go straight to people's hearts"})

//Accessible and inclusive con le funzioni
let whyDiv2 = nodoLanding({tagName:"div", position:whyDivGenitore })
let accessibleDiv = nodoLanding({tagName:"div", position:whyDiv2})
nodoLanding({tagName:"svg", position:accessibleDiv})
nodoLanding({tagName:"h3", position:accessibleDiv, text:"Accessible and inclusive"})
nodoLanding({tagName:"p", position:whyDiv2, text:"All the code and design has been overhauled, if you just change the contents and the order of the sections everything will remain accessible."});

//Responsive design
let whyDiv3 = nodoLanding({tagName:"div", position:whyDivGenitore })
let responsiveDiv = nodoLanding({tagName:"div", position:whyDiv3})
nodoLanding({tagName:"svg", position:responsiveDiv})
nodoLanding({tagName:"h3", position:responsiveDiv, text:"Responsive design"})
nodoLanding({tagName:"p", position:whyDiv3, text:"Optimized to be responsive, ensuring that the landing pages created with it will look great on any device, including desktop, tablet, and mobile."});

//Open-source
let whyDiv4 = nodoLanding({tagName:"div", position:whyDivGenitore })
let openDiv = nodoLanding({tagName:"div", position:whyDiv4})
nodoLanding({tagName:"svg", position:openDiv})
nodoLanding({tagName:"h3", position:openDiv, text:"Open-source"})
nodoLanding({tagName:"p", position:whyDiv4, text:"The product allows users to create different versions of their landing pages, and easily test which version performs better by using A/B testing."});
*/

//ES.1:Realizzare una pagina web con js che generi un colore di sfondo random, 
//     lo applica al body e lo stampa in un div con id color. (ogni volta che viene ricaricata la pagina il colore cambia)

window.addEventListener("load", function () {
	console.log("il body è stato caricato");   
})

//document.body.setAttribute("class", "corpo")
/*let div = document.createElement("div");
document.body.appendChild(div);*/
document.body.setAttribute("class", "corpo")

window.addEventListener("load", function(){
    this.document.getElementById("corpo").style.background = rgb(31, 120, 50)
    console.log("cambio colore")
})









