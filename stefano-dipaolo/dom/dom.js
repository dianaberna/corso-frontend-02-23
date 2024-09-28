//creo il tag nav
let nav = document.createElement("nav");
let body = document.body
//appendo il nav al body
body.appendChild(nav)

//creo lo span
let span = document.createElement("span")
//creo il testo dello span
let txtspan = document.createTextNode("MyPage")
//appendo il testo alla span
span.appendChild(txtspan)
//appendo lo span al nav
nav.appendChild(span)

//creo il ul
let ul = document.createElement("ul")
//appendo  ul al nav
nav.appendChild(ul)

//creo i 3 li e li appendo al ul

/*for (let i=0;i<3;i++){
    let li = document.createElement("li")
    ul.appendChild(li)
}*/
/*
let li1 =document.createElement("li")
ul.appendChild(li1)
let li2 =document.createElement("li")
ul.appendChild(li2)
let li3 =document.createElement("li")
ul.appendChild(li3)



//creo gli a e li lego agli li

let a1 = document.createElement("a")
let txta1 = document.createTextNode("Home")
a1.appendChild(txta1)
li1.appendChild(a1)
a1.setAttribute("href","#")


let a2 = document.createElement("a")
let txta2 = document.createTextNode("Why")
a2.appendChild(txta2)
li2.appendChild(a2)
a2.setAttribute("href","#")


let a3 = document.createElement("a")
let txta3 = document.createTextNode("How")
a3.appendChild(txta3)
li3.appendChild(a3)
a3.setAttribute("href","#")
*/

function appending (a,b){
    a.appendChild(b)
}
function creoEappendo (a,b,txt = ""){
    let c = document.createElement(b)
    a.appendChild(c)
    if (txt.length != 0){
        let cTesto = document.createTextNode(txt)
        c.appendChild(cTesto)
    }
    return c
}
function assegnoAttributo (nodo,tag="",txttag="") { //section_main_Mypage.setAttribute("id","Mypage")
    nodo.setAttribute(tag,txttag)
}
function creaNodo (posizione,nomeTag,testo = ""){
    let elemento = document.createElement(nomeTag)
    posizione.appendChild(elemento)
    if (testo.length != 0){
        let elementoTesto = document.createTextNode(testo)
        elemento.appendChild(elementoTesto)
    }
    return elemento
}

function creaNodo2(posizione, nomeTag, testo = "", listaAttributi = {}) {

    let elemento = document.createElement(nomeTag);
    if (listaAttributi.classe) {
        elemento.setAttribute("class", listaAttributi.classe);
    }
    if (listaAttributi.id) {
        elemento.setAttribute("id", listaAttributi.id);
    }
    if (listaAttributi.href) {
        elemento.setAttribute("href", listaAttributi.href);
    }
    

    posizione.appendChild(elemento);

    if (testo.length != 0) {
        let elementoTesto = document.createTextNode(testo);
        elemento.appendChild(elementoTesto);
    }

    return elemento;
}

function creaNodo3({ posizione, nomeTag, testo = "", listaAttributi = {} }) {
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


let array_Link = [
{title:"Home",link:"#"},
{title:"Why",link:"#"},
{title:"How",link:"#"}
]

for (let i = 0; i < array_Link.length; i++) {
    let a = document.createElement("a")
    let lista = document.createElement("li")
    let txta = document.createTextNode(array_Link[i].title)
    a.setAttribute("href",array_Link[i].link) 
    //a.appendChild(lista)
    appending(a,lista)
    //lista.appendChild(txta)
    appending(lista,txta)
    //ul.appendChild(a)
    appending(ul,a)
    
}

let header = document.createElement("header");
body.appendChild(header)
//creo h1
let h1header = document.createElement("h1")
//creo il testo
let h1headertxt = document.createTextNode("Basic landing page for big dream")
//lego il testo al mio h1
h1header.appendChild(h1headertxt)
//appendo h1 al header
header.appendChild(h1header)

let pheader = creoEappendo (header,"p","Minimal,responsive,accesible")
/*let pheader = document.createElement("p")
let pheadertxt = document.createTextNode("Minimal, responsive, accesible")
pheader.appendChild(pheadertxt)
header.appendChild(pheader)*/

let button = document.createElement("button")
let buttontxt = document.createTextNode("Explore repo")
//button.appendChild(buttontxt)
appending (button,buttontxt)
let abutton = document.createElement("a")
//abutton.appendChild(button)
appending (abutton,button)
//header.appendChild(abutton)
appending(header,abutton)

/*let main = document.createElement("main")
appending(body,main)*/
let main = creoEappendo (body,"main")
/*let section_main_Mypage = document.createElement("section")
appending(main,section_main_Mypage)
let h2_section = document.createElement("h2")
appending(section_main_Mypage,h2_section)
let h2_section_txt = document.createTextNode("Why use our MyPage")
appending(h2_section,h2_section_txt)*/
let section_main_Mypage = creoEappendo (main,"section")
let h2_section = creoEappendo (section_main_Mypage,"h2","Why use our MyPage")




//section_main_Mypage.setAttribute("id","Mypage")
assegnoAttributo (section_main_Mypage,"id","Mypage")

let big_container = creoEappendo (section_main_Mypage,"div")
big_container.setAttribute("class","big_container")

/*let big_container =creaNodo(section_main_Mypage,"div")
big_container.setAttribute("class","big-container")*/

//let big_container = creaNodo2(section_main_Mypage,"div","",{classe:"big-container"})

/*let big_container = creaNodo3 ({
                posizione:section_main_Mypage,
                nomeTag:"div",
                listaAttributi:  {classe:"big-container"}
                            })*/
let small_container = creoEappendo (big_container,"div")
assegnoAttributo(small_container,"class","small-container")

let box = creoEappendo (small_container,"div")
assegnoAttributo(box,"class","box")

let img1 = creoEappendo (box,"img")
assegnoAttributo(img1,"src","/stefano-dipaolo/immagini/img1.svg")












let section_Partner = document.createElement("section")
section_Partner.setAttribute("class","Partner")
appending(main,section_Partner)
let h2_Parter = document.createElement("h2")
let h2_Parter_txt = document.createTextNode("Partner")
appending(h2_Parter,h2_Parter_txt)
appending(section_Partner,h2_Parter)
let div_Partner = document.createElement("div")
appending(section_Partner,div_Partner)
div_Partner.setAttribute("class","logo")


/*let img_Apple = creaNodo2 (div_Partner,"img","ciao",{
    id:"apple",
    href:"https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202209050149"})*/

    
    let img_Apple = creaNodo3 ({
        posizione: div_Partner,
        nomeTag:"img",
        listaAttributi: {src:"/stefano-dipaolo/immagini/Apple.jpg"},
 })

/*let img_Apple = document.createElement("img")
img_Apple.setAttribute("src","/stefano-dipaolo/immagini/Apple.jpg")
appending(div_Partner,img_Apple)*/
let img_Amazon = creoEappendo (div_Partner,"img")
assegnoAttributo(img_Amazon,"src","/stefano-dipaolo/immagini/Amazon.jpg")

/*let img_Amazon = document.createElement("img")
img_Amazon.setAttribute("src","/stefano-dipaolo/immagini/Amazon.jpg")
appending(div_Partner,img_Amazon)*/

let img_Google = document.createElement("img")
img_Google.setAttribute("src","/stefano-dipaolo/immagini/Google.jpg")
appending(div_Partner,img_Google)

let img_Microsoft = document.createElement("img")
img_Microsoft.setAttribute("src","/stefano-dipaolo/immagini/Microsoft.jpg")
appending(div_Partner,img_Microsoft)

let img_Meta = document.createElement("img")
img_Meta.setAttribute("src","/stefano-dipaolo/immagini/Meta.jpg")
appending(div_Partner,img_Meta)

let section_testimonial = document.createElement("section")
section_testimonial.setAttribute("id","testimonial")
appending(main,section_testimonial)
let h2_section_testimonial = document.createElement("h2")
appending(section_testimonial,h2_section_testimonial)
let h2_section_testimonial_txt = document.createTextNode("Our customers love us")
appending (h2_section_testimonial,h2_section_testimonial_txt)

let section_how = document.createElement("section")
section_how.setAttribute("id","how")
appending(main,section_how)

let section_how_h2 = document.createElement("h2")
appending(section_how,section_how_h2)
let section_how_h2_txt = document.createTextNode("How does this work?")
appending(section_how_h2,section_how_h2_txt)

let section_how_h4 = document.createElement("h4")
appending(section_how,section_how_h4)
let section_how_h4_txt = document.createTextNode("Create your website in 3 easy steps")
appending(section_how_h4,section_how_h4_txt)


//let section_how_div = document.createElement("div")

let section_how_div = creaNodo (section_how,"div")
let section_how_div_div = creaNodo (section_how_div,"div")
let section_how_div_div_span = creaNodo (section_how_div_div,"span","01")
let section_how_div_div_h3 = creaNodo (section_how_div_div,"h3","Clone")
let section_how_div_div_p = creaNodo (section_how_div_div,"p","Clone the repository from Github, the code is public and constantly evolving thanks to the community that supports us.")






