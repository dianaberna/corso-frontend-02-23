let  nav = document.createElement("nav")
document.body.appendChild(nav)

let span = document.createElement("span")
nav.appendChild(span)

let a1 = document.createElement("a")
span.appendChild(a1)

a1.setAttribute("href", "#")

let myPage = document.createTextNode("MyPage")
a1.appendChild(myPage)


let ul = document.createElement("ul")
nav.appendChild(ul)

arrayNav = ["Home","Why","How"]

for (let index = 0; index < arrayNav.length; index++) {
    
    let li = document.createElement("li")
    ul.appendChild(li)
    let aLi = document.createElement("a")
    li.appendChild(aLi)
    let navElem = document.createTextNode(arrayNav[index])
    aLi.appendChild(navElem)    
    a1.setAttribute("href", "#")
    
}


