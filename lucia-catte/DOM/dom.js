console.log("sono nel file js dom");

//creo il nav
let nav = document.createElement("nav");
//appendo il nav al body
document.body.appendChild(nav);

// creo lo span mypage
let span = document.createElement("span")
// appendo lo span alla nav
nav.appendChild(span); 

//creo il testo mypage in span
let spanText = document.createTextNode("MyPage");
//appendo il testo span allo span
span.appendChild(spanText);



//creo il contenitore dell'elenco
let ul = document.createElement("ul");
//appendo l'ul al nav
nav.appendChild(ul);

//creo l'elenco sotto forma di array
let arrayLi = [
    {title: "Home", link: "#Home"}, 
    {title: "Why", link: "#Why"}, 
    {title: "Partner", link: "#Partner"}, 
    {title: "How", link: "#How"} 
];
for (let i = 0; i < arrayLi.length; i++) {
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
}

//creo l'elenco con le funzioni
/*function elencoNavBar(Home, Why, Partner, How){
    for (let i = 0; i < arrayLi.length; i++) {
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
        return li;
    }
}*/

//creo l'header
let header = document.createElement("header");
//appendo l'header al body
document.body.appendChild(header);

//creo il primo titolo
let primoTitle = document.createElement("h1");
//creo il contenuto dell'h1
let titleText = document.createTextNode("Basic landing page for big dream")
//appendo il testo all' h1
primoTitle.appendChild(titleText);
//appendo il titlo all header
header.appendChild(primoTitle);

//creo il primo paragrafo
let primoPar = document.createElement("p");
//creo il contenuto del p
let parText = document.createTextNode("Minimal, responsive and accessible")
//appendo il testo al p
primoPar.appendChild(parText);
//appendo il paragrafo all header
header.appendChild(primoPar);

//creo il primo bottone
let primoBut = document.createElement("button");
//creo il contenuto del button
let butText = document.createTextNode("Explore repo");
//appendo il testo al button
primoBut .appendChild(butText);
//appendo il button all header
header.appendChild(primoBut);

//creo il main
let main = document.createElement("main");
//appendo il main al body
document.body.appendChild(main);

//creo la prima section
let sectionWhy = document.createElement("section");
//appendo la section al main
main.appendChild(sectionWhy);

//creo il primo h2
let primoH2 = document.createElement("h2");
//appendo h2 alla section
sectionWhy.appendChild(primoH2);
//creo il contenuto
let h2Text = document.createTextNode("Why use our MyPage?");
//appendo il testo all h2
primoH2.appendChild(h2Text);

//creo il primo div figlio della why section
let whyDiv1 = document.createElement("div")
//appendo il div alla why section
sectionWhy.appendChild(whyDiv1);

//creo il secondo div figlio del primo div
let whyDiv2 = document.createElement("div")
//appendo il div al primo div
whyDiv1.appendChild(whyDiv2);

//creo il secondo div figlio del secondo div
let whyDiv3 = document.createElement("div")
//appendo il div al secondo div
whyDiv2.appendChild(whyDiv3);

//creo il primo titolo del terzo div
let h3Minimal = document.createElement("h3")
//appendo il div al secondo div
whyDiv2.appendChild(whyDiv3);
//creo il contenuto del h3

//creo il primo paragrafo dentro il div - section why





