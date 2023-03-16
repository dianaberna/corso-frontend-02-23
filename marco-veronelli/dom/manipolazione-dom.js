/* let testoH1 = document.createTextNode("Io sono un titolo 1!"); crea un nodo testuale (cioè il contenuto del tag) */

/* let nuovoH1 = document.createElement("h1"); crea l’elemento (ancora vuoto), il tag creato in questo caso sarà 
un “h1”*/

/* nuovoH1.appendChild(testoH1); */ // aggiunge/appende il nodo testo all’elemento appena creato

// Poi si appende l’elemento nuovoH1 ad un punto del DOM già esistente 
/* let div = document.getElementById("mioDiv");
div.appendChild(nuovoH1);
 */

/* insertAdjacentElement(position, element)
Copy to Clipboard
Parameters
position
A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself. */


//creo l'elemnto nav e lo appendo al body

/* let nav= document.createElement("nav");
document.body.appendChild(nav); */


//attribuisco la classe flexbetween al nav


//creo l'elemento span e lo appendo al nav

/* let span =document.createElement("span");
nav.appendChild(span); */

//creo il testo mypage e lo appendo allo span

/* let testoLogo =document.createTextNode("MYPage");
span.appendChild(testoLogo); */

//creo i testi a e i contenitori a e li appendo
//home

/* let home= document.createTextNode("home");
let ahome = document.createElement("a");
ahome.appendChild(home); */

//why
/* let why= document.createTextNode("Why") ;
let awhy = document.createElement("a");
awhy.appendChild(why); */

//how
/* let how= document.createTextNode("How");
let ahow = document.createElement("a");
ahow.appendChild(how);
 */
//aggiungo l'attributo href AGLI A
/* a.setAttribute("href","#"); */

/* ahome.setAttribute("href","#")
awhy.setAttribute("href","#")
ahow.setAttribute("href","#") */

//creo gli elementi li e appendo gli a a li
//home
/* let lihome= document.createElement("li");
lihome.appendChild(ahome); */

//why
/* let liwhy= document.createElement("li");
liwhy.appendChild(awhy); */

//how
/* let lihow= document.createElement("li");
lihow.appendChild(ahow); */

//creo l'elemnto ul
/* let ul= document.createElement("ul"); */

//appendo i li al ul
/* ul.appendChild(lihome);
ul.appendChild(liwhy);
ul.appendChild(lihow); */

//trasformo in un array
/* let ul= document.createElement("ul");
let arrayli=["home","Why","How"]
let arraylink=["/home","/why","/how"]
for (let i = 0; i < arrayli.length; i++) {
    let txt= document.createTextNode(arrayli[i]);
    let a = document.createElement("a");
    a.appendChild(txt);
    a.setAttribute("href",arraylink[i])
    let li= document.createElement("li");
    li.appendChild(a); */
    /* let ul= document.createElement("ul"); */
    /* ul.appendChild(li);
}
 */
//traSFORMO IN UN OGGETTO
/* let ul= document.createElement("ul");
let array = [
  { txt: "home", link: "/home" },
  { txt: "Why", link: "/why" },
  { txt: "How", link: "/how" },
];

for (let i = 0; i < array.length; i++) {
    let txt= document.createTextNode(array[i].txt);
    let a = document.createElement("a");
    a.appendChild(txt);
    a.setAttribute("href",array[i].link)
    let li= document.createElement("li");
    li.appendChild(a);
   
    ul.appendChild(li);
    
}
//appendo l'ul al nav
nav.appendChild(ul);

//section header

let header = document.createElement("header")
body.appendChild(header)
nav.insertAdjacentElement("afterend", header); */

/* let array =[{tag:"h1",text:"Basic landing page for big dream"},
            {tag:"p",text:"minimal,responsive, accessibile"},
            {tag:"button",text:"explore repo"}]; */
            //
           /*  createAppend([{tag:"h1",text:"Basic landing page for big dream"},
            {tag:"p",text:"minimal,responsive, accessibile"},
            {tag:"button",text:"explore repo"}],header); */

            /* for (let i = 0; i < array.length; i++) {
                let txt =document.createTextNode(array[i].text);
                let tag = document.createElement(array[i].tag);
                tag.appendChild(txt);
                header.appendChild(tag)
                
            } */
            /* function createAppend (array,g){
                for (let i = 0; i < array.length; i++) {
                    let txt =document.createTextNode(array[i].text);
                    let tag = document.createElement(array[i].tag);
                    tag.appendChild(txt);
                    g.appendChild(tag)
                    
                }

            } */
            

//VERSIONE CON CREANODO
//attr=[class,id,href]
/* function creaNodo(posizione, tag , testo ="", attr=[]) {
    let elemento= document.createElement(tag)

    if(attr.length!=0){
        if (attr[0]) {
            elemento.setAttribute("class",attr[0])       
        }
        if (attr[1]) {
            elemento.setAttribute("id", attr[1])
        }
        if (attr[2]) {
            elemento.setAttribute("href",attr[2])     
        }
    }
    posizione.appendChild(elemento)
    if(testo.length!=0){

        let t=document.createTextNode(testo)
        elemento.appendChild(t)

    }
    

    return elemento
    
} */

//definisco il body
/* let body= document.getElementsByTagName("body")[0]; */
//cre la nav e la appendo al body
/* let nav = creaNodo(body, "nav", testo="", attr=[])
 *///inserisco la nav subito dopo l'apertura del body
/* body.insertAdjacentElement("afterbegin", nav); */
//definisco la classe nav
/* nav.setAttribute("class", "flexbetween"); */
//creo l'elemnto span e lo appendo al nav con testo

/* let span = creaNodo(nav,"span", testo="MyPage", attr=[]) */
//creo l'elemento ul e lo appendo al nav
/* let ul = creaNodo(nav, "ul",testo="" ,attr=[]) */
//creo a li e lo appendo a ul, creo a e lo appendo a li con testo e link
/* let array = [
  { testo: "Home", href: "/home" },
  { testo: "Why", href: "/why" },
  { testo: "How", href: "/how" },
];
for (let i = 0; i < array.length; i++) {
    let li=creaNodo(ul,"li")
    let a =creaNodo(li,"a", array[i].testo, attr=["","",array[i].href])
    
} */
//creo l'header e lo appendo al body
/* let header =creaNodo(body,"header") */
//posiziono l'header subito dopo il nav
/* nav.insertAdjacentElement("afterend", header) */

//creo h1 p e button e li appendo al header 
 /* <h1>Basic landing page for big dream</h1>
<p>minimal,responsive, accessibile</p>
<button>explore repo</button> */
/* let h1 =creaNodo(header,"h1",testo="Basic landing page for big dream" ,attr=[])
let p= creaNodo(header,"p", testo="minimal,responsive, accessibile",attr=[])
let b=creaNodo(header,"button",testo="explore repo",) */

//CREO IL MAIN E LO APPENDO AL BODY
/* let main =creaNodo(body,"main") */
//CREO LA SECTION WHY E LA APPENDO AL MAIN
/*     let sectionwhy=creaNodo(main,"section",testo="",attr=["why"]) */
//CREO L'H2 E LO APPENDO ALLA SECTION
/* let h2why=creaNodo(sectionwhy,"h2",testo="Why use our Mypage?") */
//CREO IL DIV E LO APPENDO ALLA SECTION
/* let divswhy=creaNodo(sectionwhy,"div") */

//VERSIONE CREANODO CON OGGETTI
//VERSIONE CON CREANODO
//attr=[class,id,href]
/* function creaNodo(posizione, tag , testo ="", attr={}) {
    let elemento= document.createElement(tag)

    
        if (attr.class) {
            elemento.setAttribute("class",attr.class)       
        }
        if (attr.id) {
            elemento.setAttribute("id", attr.id)
        }
        if (attr.href) {
            elemento.setAttribute("href",attr.href)     
        }
   
    posizione.appendChild(elemento)
    if(testo.length!=0){

        let t=document.createTextNode(testo)
        elemento.appendChild(t)

    }
    

    return elemento
    
} */
//definisco il body
/* let body= document.getElementsByTagName("body")[0]; */
//cre la nav e la appendo al body
/* let nav = creaNodo(body, "nav") */
//definisco la classe nav
/* nav.setAttribute("class", "flexbetween"); */
//creo l'elemnto span e lo appendo al nav con testo

/* let span = creaNodo(nav,"span", testo="MyPage") */
//creo l'elemento ul e lo appendo al nav
/* let ul = creaNodo(nav, "ul",testo="") */
//creo a li e lo appendo a ul, creo a e lo appendo a li con testo e link
/* let array = [
  { testo: "Home", href: "/home" },
  { testo: "Why", href: "/why" },
  { testo: "How", href: "/how" },
];
for (let i = 0; i < array.length; i++) {
    let li=creaNodo(ul,"li")
    let a =creaNodo(li,"a", array[i].testo, {href: array[i].href})
    
} */
//creo l'header e lo appendo al body
/* let header =creaNodo(body,"header") */
//posiziono l'header subito dopo il nav
/* nav.insertAdjacentElement("afterend", header) */

//creo h1 p e button e li appendo al header 
 
/* let h1 =creaNodo(header,"h1",testo="Basic landing page for big dream" )
let p= creaNodo(header,"p", testo="minimal,responsive, accessibile")
let b=creaNodo(header,"button",testo="explore repo") */

//CREO IL MAIN E LO APPENDO AL BODY
/* let main =creaNodo(body,"main") */
//CREO LA SECTION WHY E LA APPENDO AL MAIN
    /* let sectionwhy=creaNodo(main, "section", testo="", {class: "why"}) */
//CREO L'H2 E LO APPENDO ALLA SECTION
/* let h2why=creaNodo(sectionwhy,"h2",testo="Why use our Mypage?") */
//CREO IL DIV E LO APPENDO ALLA SECTION
/* let divswhy=creaNodo(sectionwhy,"div") */

//VERSIONE CON OGETTI
function creaNodo ({posizione,tag,testo="", attr={}}){
    let elemento=document.createElement(tag)

    if (attr.class) {
        elemento.setAttribute("class",attr.class)
    }
    if (attr.id) {
        elemento.setAttribute("id", attr.id)
        
    }
    if (attr.href) {
        elemento.setAttribute("href",attr.href)
        
    }
       posizione.appendChild(elemento);

    if (testo.length!=0) {
        let t= document.createTextNode(testo)
        elemento.appendChild(t)
        
    }
    return elemento;


}

//definisco il body
let body= document.getElementsByTagName("body")[0];
//cre la nav e la appendo al body
let nav = creaNodo({posizione: body, tag: "nav"})
//definisco la classe nav
nav.setAttribute("class", "flexbetween");
//creo l'elemnto span e lo appendo al nav con testo

let span = creaNodo({posizione:nav,tag:"span", testo:"MyPage"})
//creo l'elemento ul e lo appendo al nav
let ul = creaNodo({posizione:nav,tag: "ul"})
//creo a li e lo appendo a ul, creo a e lo appendo a li con testo e link
let array = [
  { testo: "Home", href: "/home" },
  { testo: "Why", href: "/why" },
  { testo: "How", href: "/how" },
];
for (let i = 0; i < array.length; i++) {
  let li = creaNodo({ posizione: ul, tag: "li" });
  let a = creaNodo({
    posizione: li,
    tag: "a",
    testo: array[i].testo,
    attr: { href: array[i].href },
  });
}
//creo l'header e lo appendo al body
let header =creaNodo({posizione: body, tag:"header"})
//posiziono l'header subito dopo il nav
nav.insertAdjacentElement("afterend", header)

//creo h1 p e button e li appendo al header 
 
let h1 =creaNodo({posizione: header, tag:"h1", testo:"Basic landing page for big dream"} )
let p= creaNodo({posizione: header, tag:"p", testo:"minimal,responsive, accessibile"})
let b=creaNodo({posizione: header, tag:"button", testo:"explore repo"})

//CREO IL MAIN E LO APPENDO AL BODY
let main =creaNodo({posizione: body,tag:"main"})
//CREO LA SECTION WHY E LA APPENDO AL MAIN
    let sectionwhy=creaNodo({posizione:main,tag: "section",attr: {class: "why"}})
//CREO L'H2 E LO APPENDO ALLA SECTION
let h2why=creaNodo({posizione:sectionwhy,tag:"h2",testo:"Why use our Mypage?"})
//CREO IL DIV E LO APPENDO ALLA SECTION
let divswhy=creaNodo({posizione:sectionwhy,tag:"div"})

function rico(posizione,n) {

    let div= document.createElement("div")
        posizione.appendChild(div)
        /* n-- */
    if (n==0) {
        return;     
    }else {
        rico(div,n-1)
    } 
}
 let div= rico(divswhy,2)
