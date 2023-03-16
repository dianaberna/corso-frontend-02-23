
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
