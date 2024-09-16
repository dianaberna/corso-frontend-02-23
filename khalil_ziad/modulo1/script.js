
function crea (tag,genitore,testo,listaAttributi){
    let element=document.createElement(tag);
    element.appendChild(document.createTextNode(testo));
    genitore.appendChild(element);
    let listaAtt=Object.getOwnPropertyNames(listaAttributi);
    for(let i=0;i<listaAtt.length;i++){
        element.setAttribute(listaAtt[i],listaAttributi[listaAtt[i]]);
    }
}
let genitore=document.getElementsByTagName("body")[0];
crea ("a",genitore,"hello World!",{href:"google.com"});
 
function nestedElement(tag,genitore,contenuto,posizione){
    let element=document.createElement(tag);
    let testo=document.createTextNode(contenuto)
    element.appendChild(testo);
    if(posizione>=0){
        nestedElement(tag,element,contenuto,posizione-1);
    }
        console.log(posizione);
        genitore.appendChild(element);
    
}
let bodyElement=document.body
nestedElement("a",bodyElement,"5",5);