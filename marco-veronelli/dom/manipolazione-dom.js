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

let nav= document.createElement("nav");
document.body.appendChild(nav);
let body= document.getElementsByTagName("body")[0];
body.insertAdjacentElement("afterbegin", nav);

//attribuisco la classe flexbetween al nav
nav.setAttribute("class", "flexbetween");

//creo l'elemento span e lo appendo al nav
let span =document.createElement("span");
nav.appendChild(span);

//creo il testo mypage e lo appendo allo span
let testoLogo =document.createTextNode("MYPage");
span.appendChild(testoLogo);

//creo i testi a e i contenitori a e li appendo
//home
let home= document.createTextNode("home");
let ahome = document.createElement("a");
ahome.appendChild(home);

//why
let why= document.createTextNode("Why") ;
let awhy = document.createElement("a");
awhy.appendChild(why);

//how
let how= document.createTextNode("How");
let ahow = document.createElement("a");
ahow.appendChild(how);

//aggiungo l'attributo href AGLI A
/* a.setAttribute("href","#"); */

ahome.setAttribute("href","#")
awhy.setAttribute("href","#")
ahow.setAttribute("href","#")

//creo gli elementi li e appendo gli a a li
//home
let lihome= document.createElement("li");
lihome.appendChild(ahome);

//why
let liwhy= document.createElement("li");
liwhy.appendChild(awhy);

//how
let lihow= document.createElement("li");
lihow.appendChild(ahow);

//creo l'elemnto ul
let ul= document.createElement("ul");

//appendo i li al ul
ul.appendChild(lihome);
ul.appendChild(liwhy);
ul.appendChild(lihow);

//appendo l'ul al nav
nav.appendChild(ul);

//section header
let header = document.createElement("header")
body.appendChild(header)
nav.insertAdjacentElement("afterend", header);

/* let array =[{tag:"h1",text:"Basic landing page for big dream"},
            {tag:"p",text:"minimal,responsive, accessibile"},
            {tag:"button",text:"explore repo"}]; */
            //
            createAppend([{tag:"h1",text:"Basic landing page for big dream"},
            {tag:"p",text:"minimal,responsive, accessibile"},
            {tag:"button",text:"explore repo"}],header);

            /* for (let i = 0; i < array.length; i++) {
                let txt =document.createTextNode(array[i].text);
                let tag = document.createElement(array[i].tag);
                tag.appendChild(txt);
                header.appendChild(tag)
                
            } */
            function createAppend (array,g){
                for (let i = 0; i < array.length; i++) {
                    let txt =document.createTextNode(array[i].text);
                    let tag = document.createElement(array[i].tag);
                    tag.appendChild(txt);
                    g.appendChild(tag)
                    
                }

            }
            




