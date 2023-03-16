let nav = document.createElement("nav")
document.body.appendChild(nav)

let a= document.createElement("a")
let img= document.createElement("img")
img.setAttribute("src","imgdom/MyPage.png")
a.appendChild(img)
nav.appendChild(a)

    //lista
    
let ul= document.createElement("ul") 

nav.appendChild(ul) 
let links = [ 'Home','Why', 'How' ];


for (let i = 0; i < links.length; i++) {
     let li=document.createElement("li");
     let a=document.createElement("a")
     a.appendChild(document.createTextNode(links[i]))
     li.appendChild(a)
     ul.appendChild(li)
}

                  //header

let header = document.createElement("header")

document.body.appendChild(header)

let titolo1= document.createTextNode("Basic landing page for big dream")
let titolo= document.createElement("h1")
titolo.appendChild(titolo1)
header.appendChild(titolo)

let paragrafoprincipale=document.createTextNode("Minimal, responsive and accessible")
let paragrafo= document.createElement("p")
paragrafo.appendChild(paragrafoprincipale)
header.appendChild(paragrafo)

let bottoneprincipale=document.createTextNode("Explore repo")
let bottone= document.createElement("button")
bottone.appendChild(bottoneprincipale)
header.appendChild(bottone)