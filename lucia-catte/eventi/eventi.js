console.log("SONO NEL FILE EVENTI");

//creo una funzione madre che mi fa ripetere le azioni 
//funzione (nome elemento, appendo elemento, creo testo)

function nodoLanding ({tagName, position, text = "", attribute = {}}){
    
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
//creo il nav con la funzione
let nav = nodoLanding ({tagName:"nav", position: document.body, attribute: {class:"nav"}})
/*//creo il nav
let nav = document.createElement("nav");
//appendo il nav al body
document.body.appendChild(nav);*/

//creo lo span con la funzione
let primoSpan = nodoLanding ({tagName:"span", position: nav, text:"MyPage"})
/*// creo lo span mypage
let span = document.createElement("span")
// appendo lo span alla nav
nav.appendChild(span);
//creo il testo mypage in span
let spanText = document.createTextNode("MyPage");
//appendo il testo span allo span
span.appendChild(spanText);*/

//creo l'ul con la funzione
let ul = nodoLanding ({tagName:"ul", position: nav})
/*//creo il contenitore dell'elenco
let ul = document.createElement("ul");
//appendo l'ul al nav
nav.appendChild(ul);*/

//creo l'elenco sotto forma di oggetti
let arrayLi = [
    {title: "Home", link: "#Home"}, 
    {title: "Why", link: "#Why"}, 
    {title: "Partner", link: "#Partner"}, 
    {title: "How", link: "#How"} 
];
//creo l'elenco con la funzione madre
for (let i = 0; i < arrayLi.length; i++){
     let li = nodoLanding ({tagName:"li", position: ul })
     nodoLanding ({tagName:"a", position:li, text:arrayLi[i].title, attribute:{href: arrayLi[i].link}});
}
//creo l'elenco senza funzione
/*for (let i = 0; i < arrayLi.length; i++) {
    // creo i vari li
    let li = document.createElement("li");
    // creo i vari a
    let a = document.createElement("a");
    // creo i contenuti dei vari li
    let liText = document.createTextNode(arrayLi[i].title);
    //a tutti gli a lego l'attributo href
    a.setAttribute("href", arrayLi[i].link)
    //appendo i testi agli a
    a.appendChild(liText);
    // appendo i testi a ai li
    li.appendChild(a);
    // appendo a ul i li
    ul.appendChild(li);
}*/

//creo l'header con la funzione
let header = nodoLanding({tagName:"header", position: document.body })
/*//creo l'header
let header = document.createElement("header");
//appendo l'header al body
document.body.appendChild(header);*/

//creo il primo titolo con la funzione
let primoTitolo = nodoLanding({tagName:"h1", position: header, text:"Basic landing page for big dream", attribute:{id:"Home"}});
/*//creo il primo titolo
let primoTitle = document.createElement("h1");
//creo il contenuto dell'h1
let titleText = document.createTextNode("Basic landing page for big dream")
//appendo il testo all' h1
primoTitle.appendChild(titleText);
//appendo il titlo all header
header.appendChild(primoTitle);*/

//creo il primo paragrafo con la funzione
let primoPar = nodoLanding({tagName:"p", position: header, text:"Minimal, responsive and accessible", attribute:{class:"subtitle"}})
/*//creo il primo paragrafo
let primoPar = document.createElement("p");
//creo il contenuto del p
let parText = document.createTextNode("Minimal, responsive and accessible")
//appendo il testo al p
primoPar.appendChild(parText);
//appendo il paragrafo all header
header.appendChild(primoPar);*/

//creo il primo bottone con la funzione
let primoBut = nodoLanding({tagName:"button", position: header, text:"Explore repo"})
/*//creo il primo bottone
let primoBut = document.createElement("button");
//creo il contenuto del button
let butText = document.createTextNode("Explore repo");
//appendo il testo al button
primoBut .appendChild(butText);
//appendo il button all header
header.appendChild(primoBut);*/

//creo il main con la funzione
let main = nodoLanding({tagName:"main", position: document.body})
/*//creo il main
let main = document.createElement("main");
//appendo il main al body
document.body.appendChild(main);*/

//creo la sezione con la funzione
let sectionWhy = nodoLanding({tagName:"section", position: main, attribute:{class:"why"}})
/*//section why
let sectionWhy = document.createElement("section");
main.appendChild(sectionWhy);*/
//creo  h2 con la funzione
let primoH2 = nodoLanding({tagName:"h2", position: sectionWhy, text:"Why use our MyPage?", attribute:{id:"Why"}})
/*let primoH2 = document.createElement("h2");
sectionWhy.appendChild(primoH2);
let h2Text = document.createTextNode("Why use our MyPage?");
primoH2.appendChild(h2Text);*/
/*//funzione nomefunzione (creo un div, dentro un div, dentro un div)
 function divContenitori (contenitore, posizione){
        
    let cont = document.createElement(contenitore); 
    posizione.appendChild(cont);
    let div2 = document.createElement(contenitore); 
    cont.appendChild(div2);

    return div2;
        
}
let whydiv2 = divContenitori ("div", whyDiv1) //ho creato due div dentro quello genitore*/
//NON SO COME AGGIUNGERE GLI ELEMENTI DENTRO IL SECONDO DIV

let whyDivGenitore = nodoLanding({tagName:"div", position:sectionWhy});
/*let whyDiv1 = document.createElement("div");
sectionWhy.appendChild(whyDiv1);*/

// Minimal but complete
/*let whyDiv2 = document.createElement("div");
whyDiv1.appendChild(whyDiv2);
let minimalDiv = document.createElement("div");
whyDiv2.appendChild(minimalDiv);
let svgMinimal = document.createElement("svg");
minimalDiv.appendChild(svgMinimal);
let h3Minimal = document.createElement("h3");
minimalDiv.appendChild(h3Minimal);
let h3Text = document.createTextNode("Minimal but complete");
h3Minimal.appendChild(h3Text);
let parMinimal = document.createElement("p");
whyDiv2.appendChild(parMinimal)
let parTextMinimal = document.createTextNode("It is minimal but complete. It contains all the sections and components a landing page needs with a minimal and essential design. We go straight to people's hearts");
parMinimal.appendChild(parTextMinimal);*/

//Minimal but complete con le funzioni
let whyDiv1 = nodoLanding({tagName:"div", position:whyDivGenitore})
let minimalDiv = nodoLanding({tagName:"div", position:whyDiv1})
nodoLanding({tagName:"svg", position:minimalDiv})
nodoLanding({tagName:"h3", position:minimalDiv, text:"Minimal but complete"})
nodoLanding({tagName:"p", position:whyDiv1, text:"It is minimal but complete. It contains all the sections and components a landing page needs with a minimal and essential design. We go straight to people's hearts"})

//Accessible and inclusive
/*let whyDiv3 = document.createElement("div");
whyDiv1.appendChild(whyDiv3);
let accessibleDiv = document.createElement("div");
whyDiv3.appendChild(accessibleDiv);
let svgAccessible = document.createElement("svg");
accessibleDiv.appendChild(svgAccessible);
let h3Accessible = document.createElement("h3");
whyDiv3.appendChild(h3Accessible);
let accessibleText = document.createTextNode("Accessible and inclusive");
h3Accessible.appendChild(accessibleText);
let parAccessible = document.createElement("p");
whyDiv3.appendChild(parAccessible)
let parTextAccesible = document.createTextNode("All the code and design has been overhauled, if you just change the contents and the order of the sections everything will remain accessible.");
parAccessible.appendChild(parTextAccesible);*/

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




