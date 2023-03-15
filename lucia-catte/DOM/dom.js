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




