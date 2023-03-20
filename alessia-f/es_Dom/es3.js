

window.addEventListener("load", function () { // quando capti l'evento di caricamento della finestra
   let input = document.createElement("input")  //genera l'input testuale
   input.setAttribute("type", "text") //gli devo dire che tipo di input è : type e testo
   document.body.appendChild(input) // input dipende da body


   //creo il bottone
   let button = document.createElement("button")
   button.textContent = "Aggiungi nuovo task" //testo nel bottone
   document.body.appendChild(button) //button dipende a body

   //creo la lista 
   let lista = document.createElement("ul") //l'elemento è il tipo di tag =ul per la lista vuota
   lista.setAttribute("id", "lista") // do un'id alla lista e lo chiamo lista
   document.body.appendChild(lista)

   //creo il cestino
   let listacestino = document.createElement("ul") //creo una nuova lista
   listacestino.setAttribute("id", "cestino")  // la chiamo cestino
   listacestino.style = "background-color: grey"
   document.body.appendChild(listacestino) //l'appendo al body  

   //aggiungi tasto svuota cestino per eliminare definitivamente
   let svuotacestino = document.createElement("button")
   svuotacestino.textContent = "svuota cestino"

   //creo l'evento del bottone
   button.addEventListener("click", function () { // quando capti il click del bottone
      let li = document.createElement("li") //creo l'elemento della lista "voce della lista"
      li.textContent = input.value // come voce della lista metti il testo che scrivo nell'input
      lista.appendChild(li) //attacco li alla lista
      input.value = "" // pulisco l'input quando metto l'elemento nella lista

      let pulsantecancella = document.createElement("button") // genero il pulsante per cancellare l'elemento della lista.
      li.appendChild(pulsantecancella)// attacco il pulsante all'elemento della lista
      pulsantecancella.textContent = "X" //testo contenuto nel pulsante
      pulsantecancella.addEventListener("click", function () { // quando capti il click sul bottone allora..
         //creo l'evento del bottone che mette l'input nel cestino
         //listacestino.appendChild(li) //appendi l'li alla lista cestino---> lo faccio dopo


         // se sei nella lista, li va nel cestino e il pulsante diventa ripristina
         if (pulsantecancella.parentNode.parentNode.id == "lista") {
            listacestino.appendChild(li)
            pulsantecancella.textContent = "riprisitina"

            //se non ci sono elementi, non appendere il pulsante svuotacestino
            //if(){ // con riga 57 gli dico che ci sono già elementi perchè l'ho appena appeso.

            let li_dacancellare = document.querySelectorAll("#cestino>li") //seleziona li figli dell'id cestino-- querySelectorAll genera un array / la tengo fuori per usarla anche dopo
            svuotacestino.addEventListener("click", function () {
               for (i = li_dacancellare.length - 1; i >= 0; i--) { //situazione iniziale, condizione, decremento
                  li_dacancellare[i].remove() //rimuovi l'elemento di li_dacancellare
               }
               svuotacestino.remove()
            })
            document.body.appendChild(svuotacestino) //appendi il pulsante svuotacestino

            // }

         } else {// se sei nella listacestino, li va nella lista e il pulsante diventa elimina (X)
            lista.appendChild(li)
            pulsantecancella.textContent = "Elimina"
         }

      })




   })



})



// - riporta elementi nella lista esistente
// - svuota cestino


// per riprotare gli elementi nella lista esistente funzione "dato un elemento dimmi chi è il genitore" li.parentNode mi dice dove è appeso quell'li