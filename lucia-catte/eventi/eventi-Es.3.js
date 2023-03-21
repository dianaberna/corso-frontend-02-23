/*Realizzare una pagina web con js di una to-do-list. 
Una prima versione potrebbe essere quella di eliminare dal dom l’elemento al click della X, 
mentre una seconda versione potrebbe essere quella di non rimuovere subito gli elementi ma 
lasciarli in una seconda lista (una sorta di cestino dei task) da poter svuotare al 
click di un altro pulsante (svuota cestino).*/

//PRIMO STEP: CREO UNA LABEL PER INSERIRE IL TESTO, UN PULSANTE PER INVIARE IL TESTO E UN ELENCO GENITORE.
window.addEventListener("load", function () {
	console.log(" 3 esercizio "); 
    
    //CREO UNA LABEL DI INPUT E L'APPENDO AL BODY DANDOLE UN ID
    let labelBar = document.createElement("input");
    labelBar.setAttribute("id", "inserisciTesto")
    document.body.appendChild(labelBar);
    
    //CREO IL BOTTONE INVIA, GLI DO UN ID E DELLO STILE, LO APPENDO AL BODY E GLI DO UN TESTO
    let button = document.createElement("button");
    button.setAttribute("id", "invio");
    button.style.margin = "1rem";
    document.body.appendChild(button);
    let invioTxt = document.createTextNode("invio");
    button.appendChild(invioTxt);
   
    //CREO L'ELENCO PRINCIPALE, LO APPENDO AL BODY E GLI DO UN ID
    let elencoGenitore = document.createElement("ul");
    document.body.appendChild(elencoGenitore);
    elencoGenitore.setAttribute("id", "elencoInvio");

    //CREO L'ELENCO CESTINO, LO APPENDO AL BODY E GLI DO UN ID
    let cestino = document.createElement("ul");
    document.body.appendChild(cestino);
    cestino.textContent = "cestino";
    //cestino.style = "background-color: yellow";
    cestino.setAttribute("id", "cestino");
    cestino.style.display = "none"; 

    //CREO IL PULSANTE SVUOTA CESTINO
    let svuotaCestino = document.createElement("button");
    let elementiCestino = document.querySelectorAll("#cestino>li") //SELEZIONI TUTTI I LI FIGLI DEL CESTINO
        svuotaCestino.addEventListener("click", function(){ //AL CLICK DEL PULSANTE
                for(i = elementiCestino.length -1; i>=0; i --){ //CANCELLIAMO TUTTI I LI FIGLI DEL CESTINO
                    elementiCestino[i].remove();
                }
                svuotaCestino.remove();//ELIMINIAMO SVUOTA CESTINO QUANDO IL CESTINO è VUOTO
                cestino.style.display = "none"; //NON MOSTRIAMO IL CESTINO SE è VUOTO

            }) 
            
    //SECONDO STEP: AL CLICK DEL PULSANTE "INVIO", CREO UN ELENCO FIGLIO E UN PULSANTE ELIMINA
    button.addEventListener("click", function (){
        console.log("evento click di invio");//controllo che il pulsante invio funzioni
        
        let primoElenco = document.createElement("li");//creo il primo elenco dove andranno ad inserirsi il valori raccolti dal label input
        let inseriscoText = document.createTextNode(document.getElementById("inserisciTesto").value);//creo una variabile che conterrà i valori del label input
        primoElenco.appendChild(inseriscoText);//appendo la variabile contenente i label input al primo elenco puntato
        elencoGenitore.appendChild(primoElenco);//appendo il sotto-elenco li all'elenco genitore ul
        labelBar.value = ""; //pulisco il label dopo ogni inserimento

        let eliminaButton = document.createElement("button"); //creo il bottone per eliminare
        eliminaButton.setAttribute("id", "cancButton");//assegno un id al mio secondo button
        eliminaButton.style.margin = "1rem";
        let eliminaTxt = document.createTextNode("elimina"); //creo il testo che conterrà il button 
        eliminaButton.appendChild(eliminaTxt);//appendo il testo del button al button stesso
        primoElenco.appendChild(eliminaButton);//appendo il button al mio sotto-elenco
            //li.remove(); //rimuovo completamente l'elemento

        //TERZO STEP: AL CLICK DEL PULSANTE, con un if gestisco bottone ripristina o elimina
        eliminaButton.addEventListener("click", function(){
            console.log("click elimina"); // controllo che il pulsante elimina funzioni

            if (eliminaButton.parentNode.parentNode.id == "elencoInvio"){// bottone, padre, nonno = id
                
                eliminaButton.textContent = "ripristina";
                primoElenco.setAttribute("id", "listaCestino");
                cestino.appendChild(primoElenco);
                document.body.appendChild(svuotaCestino)
                cestino.style.display = "block"; 
                /*let elementiCestino = document.querySelectorAll("#cestino>li")
                svuotaCestino.textContent = "svuota cestino" + elementiCestino.length;*/  
            
            } else {

                eliminaButton.textContent = "elimina";
                primoElenco.setAttribute("id", "listaInvio");
                elencoGenitore.appendChild(primoElenco);
                /*let elementiCestino = document.querySelectorAll("#cestino>li")
                svuotaCestino.textContent = "svuota cestino" + elementiCestino.length;*/
                 
            }
            aggiornaElCestino(svuotaCestino);
        })
    }) 
}) 

function aggiornaElCestino (elemento){
    let elementiCestino = document.querySelectorAll("#cestino>li")
    elemento.textContent = "svuota cestino" + elementiCestino.length;
    
}