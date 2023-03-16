         //  nav
            //LOGO
let nav = document.createElement("nav")
document.body.appendChild(nav)

document.body.appendChild(nav)
let a= document.createElement("a")
let img= document.createElement("img")
img.setAttribute("src","imgdom/MyPage.png")
a.appendChild(img)
nav.appendChild(a)

       //LINK INDIRIZZAMENTO PAGE

let ul= document.createElement("ul") 
nav.appendChild(ul)
            
let arrayLink = [
    { titolo: "Home", href: "home.html" },
    { titolo: "Why", href: "why.html" },
    { titolo: "How", href: "how.html" },
];

for (let i = 0; i < arrayLink.length; i++) {
    let li = document.createElement("li");
    let testoLink = document.createTextNode(arrayLink[i].titolo);
    let link = document.createElement("a");
    link.setAttribute("href", arrayLink[i].href);
    link.appendChild(testoLink);
    li.appendChild(link);
    ul.appendChild(li);
}

            //HADER

let header = document.createElement("header")           
document.body.appendChild(header)
  
            //H1
let titolo1= document.createTextNode("Basic landing page for big dream")
let titolo= document.createElement("h1")
titolo.appendChild(titolo1)
header.appendChild(titolo)

            //P
let paragrafoprincipale=document.createTextNode("Minimal, responsive and accessible")
let paragrafo= document.createElement("p")
paragrafo.appendChild(paragrafoprincipale)
header.appendChild(paragrafo)

           //BOTTONE
let bottoneprincipale=document.createTextNode("Explore repo")
let bottone= document.createElement("button")
bottone.appendChild(bottoneprincipale)
header.appendChild(bottone)
