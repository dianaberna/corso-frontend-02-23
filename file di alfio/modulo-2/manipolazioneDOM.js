let nav = document.createElement("nav")

document.body.appendChild(nav)


let testo = document.createTextNode("MyPage")
let strong = document.createElement("strong")
let span = document.createElement("span")
strong.appendChild(testo)
span.appendChild(strong)
nav.appendChild(span)

let hamburger = document.createElement("div")
hamburger.setAttribute("class", "hamburger")
nav.appendChild(hamburger)

for (let i = 0; i < 3; i++) {
    let span2 = document.createElement("span")
    hamburger.appendChild(span2)
}

let ul = document.createElement("ul")
nav.appendChild(ul)

let array = ["Home", "Why", "How"];
for (let i = 0; i < array.length; i++) {
    let a=document.createElement("a")
    a.appendChild( document.createTextNode(array[i]))
    let li = document.createElement("li")
    li.appendChild(a)
    ul.appendChild(li)

}

let header=document.createElement("header")
document.body.appendChild(header);

let img=document.createElement("img")
img.setAttribute("src","./svg/Vector (15).svg")
header.appendChild(img)

let h1=document.createElement("h1")
h1.appendChild(document.createTextNode("Basic landing page for big dream"))
header.appendChild(h1);
let p=document.createElement("p")
p.appendChild(document.createTextNode("Minimal, responsive and accessible"))
header.appendChild(p)
let button=document.createElement("button")
let strong2=document.createElement("strong")
strong2.appendChild(document.createTextNode("Explore repo"))
button.appendChild(strong2)
header.appendChild(button)


