let nav = document.createElement("nav")
document.body.appendChild(nav)


let testoLink= document.createTextNode("MyPage")
let link= document.createElement("a")
link.appendChild(testoLink)
nav.appendChild(link)

let ul= document.createElement("ul") 
nav.appendChild(ul)

let li1 = document.createElement("li")
let testoLink1 = document.createTextNode("Home")
let link1 = document.createElement("a")
link1.appendChild(testoLink1)
li1.appendChild(link1)
ul.appendChild(li1)

let li2 = document.createElement("li")
let testoLink2 = document.createTextNode("Why")
let link2 = document.createElement("a")
link2.appendChild(testoLink2)
li2.appendChild(link2)
ul.appendChild(li2)

let li3 = document.createElement("li")
let testoLink3 = document.createTextNode("How")
let link3 = document.createElement("a")
link3.appendChild(testoLink3)
li3.appendChild(link3)
ul.appendChild(li3)