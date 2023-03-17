/*Realizzare una pagina web con js di una to-do-list. 
Una prima versione potrebbe essere quella di eliminare dal dom l’elemento al click della X, 
mentre una seconda versione potrebbe essere quella di non rimuovere subito gli elementi ma 
lasciarli in una seconda lista (una sorta di cestino dei task) da poter svuotare al 
click di un altro pulsante (svuota cestino).*/


window.addEventListener("load", function () {
	console.log(" 3 esercizio "); 
    
    let labelBar = document.createElement("input");//creo label input
    document.body.appendChild(labelBar);// appendo al body

    let button = document.createElement("button");// creo button elimina
    button.setAttribute("id", "invio")//imposto l'id "invio" al primo button
    document.body.appendChild(button);// appendo al body

    let invioTxt = document.createTextNode("invio");//imposto il primo button con il testo invio
    button.appendChild(invioTxt);//appendo il testo al button

    let elencoGenitore = document.createElement("ul");//creo l'elenco ul
    document.body.appendChild(elencoGenitore);//appendo l'elenco al body

    //evento click "invio testo"
    invioTxt.addEventListener("click", function (){
        console.log("evento click di invio");
        
        
        let inseriscoText = document.createTextNode(document.getElementsByTagName("input").value);//creo una variabile che conterrà i valori del label input
        let primoElenco = document.createElement("li");//creo il primo elenco dove andranno ad inserirsi il valori raccolti dal label input
        
        primoElenco.setAttribute("id", "listaInvio")//imposto un id al primo elenco
        primoElenco.appendChild(inseriscoText);//appendo la variabile contenente i label input al primo elenco puntato
        elencoGenitore.appendChild(primoElenco);//appendo il sotto-elenco li all'elenco genitore ul

        let eliminaButton = document.createElement("button"); //creo il bottone per eliminare
        eliminaButton.setAttribute("id", "cancButton");//assegno un id al mio secondo button
        let eliminaTxt = document.createTextNode("elimina"); //creo il testo che conterrà il button 

        eliminaButton.appendChild(eliminaTxt);//appendo il testo del button al button stesso
        primoElenco.appendChild(eliminaButton);//appendo il button al mio sotto-elenco

        
        
    })


}) 

