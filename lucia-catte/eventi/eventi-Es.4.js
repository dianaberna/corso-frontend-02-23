/*
Realizzare una pagina web con js di una calcolatrice.
PS. può tornare molto utile la funzione eval() 
Come prima versione lasciate l’input testuale disabilitato dove vengono mostrati 
numeri/operazioni/risultati. versione 2: accettare sia operazioni tramite pulsanti 
che scritte nell’input testuale (evento change).  versione 3: avere una sorta di “scontrino” 
che tiene traccia di tutte le operazioni (come nelle calcolatrici con il nastro di carta) in un div sotto la calcolatrice
*/


//VERSIONE 1 -> CREARE LA CALCOLATRICE CON L'INPUT TESTUALE DISATTIVATO
    /*let calcolatrice = document.createElement("div");
    calcolatrice.setAttribute("id", "calcolatrice")
    document.body.appendChild(calcolatrice);
    calcolatrice.style.display = "flex";*/
    /*let buttons = document.createElement("div");
    buttons.setAttribute("id", "testiera");
    calcolatrice.appendChild(buttons);
    buttons.style.display = "grid";
    buttons.style.border = "solid, black, 0.5rem"*/
   /* function pulsanti ({elemento, position, text = "", attribute = {}}){
    
        let tag = document.createElement(elemento); // creo una variabile che prende il primo elemendo della funzione
        position.appendChild(tag); //prendo il secondo elemento della funzione e appendo la variabile
        
        if(attribute.class) { //se esiste la classe
            tag.setAttribute("class", attribute.class) //aggiunge l'attributo
        }
    
        if(attribute.id) { //se esiste l'id
            tag.setAttribute("id", attribute.id) //aggiunge l'attributo
        }
    
        if(attribute.href) { //se esiste l'href
            tag.setAttribute("href", attribute.href) //aggiunge l'attributo
        }
    
        if(attribute.src) { //se esiste src
            tag.setAttribute("src", attribute.src) //aggiunge l'attributo
        }
        
        
        if(text.length != 0){ //se il testo è presente
            let textTag = document.createTextNode(text); //creo un testo che prende il terzo elemento della funzione
            tag.appendChild(textTag); // appendo il testo 
        }
        return tag;

    }
    let nav = nodoLanding ({tagName:"nav", position: document.body, attribute: {class:"nav"}})*/
   /* function pulsanti (elemento, text){
        elemento = document.createElement("button");
        elemento.textContent = text;
        buttons.appendChild(elemento);
    }
    pulsanti ("button", "7")
    pulsanti ("button", "8")
    pulsanti ("button", "9")
    pulsanti ("button", "/")

    pulsanti ("button", "4")
    pulsanti ("button", "5")
    pulsanti ("button", "6")
    pulsanti ("button", "*")

    pulsanti ("button", "1")
    pulsanti ("button", "2")
    pulsanti ("button", "3")
    pulsanti ("button", "-")

    pulsanti ("button", "0")
    pulsanti ("button", ".")
    pulsanti ("button", "=")
    pulsanti ("button", "+")*/ 
   /*let primaRiga = document.createElement("div");
    primaRiga.setAttribute("id", "prima");
    buttons.appendChild(primaRiga);

    let uno = document.createElement("button");
    uno.textContent = "1";
    primaRiga.appendChild(uno)
    
    let due = document.createElement("button");
    due.textContent = "2";
    primaRiga.appendChild(due)

    let tre = document.createElement("button");
    tre.textContent = "3";
    primaRiga.appendChild(tre)
    
    let meno = document.createElement("button");
    meno.textContent = "-";
    primaRiga.appendChild(meno)

    let secondaRiga = document.createElement("div");
    secondaRiga.setAttribute("id", "seconda");
    buttons.appendChild(secondaRiga);
   
    let quattro = document.createElement("button");
    quattro.textContent = "4";
    secondaRiga.appendChild(quattro)
    
    let cinque = document.createElement("button");
    cinque.textContent = "5";
    secondaRiga.appendChild(cinque)

    let sei = document.createElement("button");
    sei.textContent = "6";
    secondaRiga.appendChild(sei)
    
    let per = document.createElement("button");
    per.textContent = "*";
    secondaRiga.appendChild(per)
    */
   
window.addEventListener("load", function () {  

    let display = document.createElement("input");
    display.setAttribute("type", "text");
    document.body.appendChild(display);
    

    let calcArray = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"]
    let stringa = "";

    for (let i = 0; i<= calcArray.length; i++){
        let pulsante = document.createElement("button");
        document.body.appendChild(pulsante)
        pulsante.textContent = calcArray[i];

        pulsante.addEventListener("click", function(){

        if(calcArray[i] != "="){
            stringa = stringa + calcArray[i];
            display.value = eval(stringa);
            //stringa += calcArray[i];
        } else {
                display.value = eval(stringa);
            }
        })
    }
})