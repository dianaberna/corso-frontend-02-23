let nav = creanodo("nav",document.body) //tag, genitore, testo se c'è
let span = creanodo("span",nav)
let strong = creanodo("strong",span,"MyPage")
let navul = creanodo("ul",nav)




/*
 let nav = document.createElement("nav");
 document.body.appendChild(nav);
let span1 = document.createElement("span");
nav.appendChild(span1)

let strong = document.createElement("strong");
span1.appendChild(strong)

let testlink = document.createTextNode("MyPage");
strong.appendChild(testlink)

let navul = document.createElement("ul");
nav.appendChild(navul)

let listaelemento = document.createElement("li");
lista.appendChild(listaelemento)

let listaelemento2 = document.createElement("li");
lista.appendChild(listaelemento2)

let listaelemento3 = document.createElement("li");
lista.appendChild(listaelemento3)

let link = document.createElement("a");
listaelemento.appendChild(link)

let testo = document.createTextNode("Home")
link.appendChild(testo)

let link2 = document.createElement("a");
let testo2 = document.createTextNode("Why");
link2.appendChild(testo2)
listaelemento2.appendChild(link2)

let link3 = document.createElement("a");
let testo3 = document.createTextNode("How");
link3.appendChild(testo3)
listaelemento3.appendChild(link3)
*/



// siccome sto facendo sempre le stesse cose (ma non identiche) posso fare una funzione


/*let Linklista = ["Home", "Why", "How"]

for (let i=0; i<Linklista.length; i++){
    let navli = document.createElement("li")
    let linkli = document.createElement("a")
    let testoli = document.createTextNode(Linklista[i])

    navul.appendChild(navli)
    navli.appendChild(linkli)
    linkli.appendChild(testoli)
}
*/

//con la funzione

// let Linklista = ["Home", "Why", "How"]
let Linklista= [{titolo:"Home", link:"home.html"},{titolo:"Why", link:"why.html"},{titolo:"How", link:"how.html"}]

for (let i=0; i<Linklista.length; i++){
    let navli= creanodo("li", navul,"") //passo il tag, il genitore e vuoto per gli elementi- esegue 50e54
    creanodo("a", navli, Linklista[i].titolo, {ahref: Linklista[i].link});
}




function creanodo(tag,genitore,testo,listaattributi={}){ // listaattributi= lista oggetti: class;id;a href
    let elemento= document.createElement(tag); //nel tag c'è o li o a
    genitore.appendChild(elemento);

    if (listaattributi.classe) { //se esiste o no l'etichetta class nell'oggetto listaattributi
        elemento.setAttribute("class",listaattributi.classe) //  se essite aggiungila 
    }

    if (listaattributi.id) { //se esiste o no l'etichetta id nell'oggetto listaattributi
        elemento.setAttribute("id",listaattributi.id) //  se essite aggiungila 
    }

    if (listaattributi.ahref) { //se esiste o no l'etichetta ahref nell'oggetto listaattributi
        elemento.setAttribute("ahref",listaattributi.ahref) //  se esiste aggiungila 
    }
    
    if (testo && testo.length!==0){
       let testoli=document.createTextNode(testo);
       elemento.appendChild(testoli);
    }

    return elemento; //fin qui funziona la riga 65
}