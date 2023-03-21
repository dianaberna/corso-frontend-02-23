
//  es 4



window.addEventListener("load", function(){

    function creaParagrafi(){
        for (let i = 0; i < arrayScontrino.length; i++) {
            console.log("sono qui")
            let paragrafo = document.createElement("p")
            let testoParagrafo = document.createTextNode(`${arrayScontrino[i]}`)
            paragrafo.appendChild(testoParagrafo)
            divScontrino.appendChild(paragrafo)
            
            
        }
    }



    // creazione dvi che conterrà l'intera calcolatrice
    let divCalcolatrice = document.createElement("div")
    divCalcolatrice.setAttribute("class", "divCalcolatrice")
    document.body.appendChild(divCalcolatrice)
    

    // input/visione delle operazioni
    let input = document.createElement("input")
    input.setAttribute("id", "input")
    divCalcolatrice.appendChild(input)
    input.setAttribute("disabled", "true")
    

    // creazione tastiera
    let numero7 = document.createElement("button")
    divCalcolatrice.appendChild(numero7)
    let testo7 = document.createTextNode("7")
    numero7.appendChild(testo7)
    // creaButton("7")

    let numero8 = document.createElement("button")
    divCalcolatrice.appendChild(numero8)
    let testo8 = document.createTextNode("8")
    numero8.appendChild(testo8)
    // creaButton("8")

    let numero9 = document.createElement("button")
    divCalcolatrice.appendChild(numero9)
    let testo9 = document.createTextNode("9")
    numero9.appendChild(testo9)

    let simboloDiviso = document.createElement("button")
    divCalcolatrice.appendChild(simboloDiviso)
    let testoDiviso = document.createTextNode("/")
    simboloDiviso.appendChild(testoDiviso)
    simboloDiviso.setAttribute("class","operazioni")

    let numero4 = document.createElement("button")
    divCalcolatrice.appendChild(numero4)
    let testo4 = document.createTextNode("4")
    numero4.appendChild(testo4)

    let numero5 = document.createElement("button")
    divCalcolatrice.appendChild(numero5)
    let testo5 = document.createTextNode("5")
    numero5.appendChild(testo5)

    let numero6 = document.createElement("button")
    divCalcolatrice.appendChild(numero6)
    let testo6 = document.createTextNode("6")
    numero6.appendChild(testo6)

    let simboloMoltip = document.createElement("button")
    divCalcolatrice.appendChild(simboloMoltip)
    let testoMoltip = document.createTextNode("*")
    simboloMoltip.appendChild(testoMoltip)
    simboloMoltip.setAttribute("class","operazioni")

    let numero1 = document.createElement("button")
    divCalcolatrice.appendChild(numero1)
    let testo1 = document.createTextNode("1")
    numero1.appendChild(testo1)

    let numero2 = document.createElement("button")
    divCalcolatrice.appendChild(numero2)
    let testo2 = document.createTextNode("2")
    numero2.appendChild(testo2)

    let numero3 = document.createElement("button")
    divCalcolatrice.appendChild(numero3)
    let testo3 = document.createTextNode("3")
    numero3.appendChild(testo3)

    let simboloMeno = document.createElement("button")
    divCalcolatrice.appendChild(simboloMeno)
    let testoMeno = document.createTextNode("-")
    simboloMeno.appendChild(testoMeno)
    simboloMeno.setAttribute("class","operazioni")

    let numero0 = document.createElement("button")
    divCalcolatrice.appendChild(numero0)
    let testo0 = document.createTextNode("0")
    numero0.appendChild(testo0)

    let punto = document.createElement("button")
    divCalcolatrice.appendChild(punto)
    let testoPunto = document.createTextNode(".")
    punto.appendChild(testoPunto)    
    
    let uguale = document.createElement("button")
    divCalcolatrice.appendChild(uguale)
    let testoUguale = document.createTextNode("=")
    uguale.appendChild(testoUguale)
    uguale.setAttribute("id","uguale")

    let simboloAdd = document.createElement("button")
    divCalcolatrice.appendChild(simboloAdd)
    let testoAdd = document.createTextNode("+")
    simboloAdd.appendChild(testoAdd)
    simboloAdd.setAttribute("class","operazioni")

    let canc = document.createElement("button")
    divCalcolatrice.appendChild(canc)
    let testoCanc = document.createTextNode("Canc")
    canc.appendChild(testoCanc)
    canc.setAttribute("id", "cancella")

    let dis = document.createElement("button")
    divCalcolatrice.appendChild(dis)
    let testoDis = document.createTextNode("Abilita")
    dis.appendChild(testoDis)
    dis.setAttribute("id", "abilita")

    let divScontrino = document.createElement("div")
    divCalcolatrice.appendChild(divScontrino)        
    let h2Scontrino = document.createElement("h2")
    divScontrino.appendChild(h2Scontrino)
    let testoScontrino = document.createTextNode("Scontrino")
    h2Scontrino.appendChild(testoScontrino)
    divScontrino.setAttribute("id", "scontrino")
    let arrayScontrino = []




    let pulsanti = document.getElementsByTagName("button")
    let arrayOperazioni = []
    let eventoInput = document.getElementById("input")
    
    
    // evento per i tasti della calcolatrice
    for(let i=0; i<pulsanti.length; i++){
        pulsanti[i].addEventListener("click", function(){
            
            let testo = pulsanti[i].textContent
            arrayOperazioni.push(testo)
            input.value = arrayOperazioni.join("")
            
            if(pulsanti[i].textContent == "="){ // quando premo uguale stampa il risultato 
                arrayScontrino.push(input.value + eval(input.value.replace("=", "").replace("Canc", "").replace("Abilita", "")))            
                input.value = eval(input.value.replace("=", "").replace("Canc", "").replace("Abilita", ""))
                
                arrayOperazioni =[]
                console.log(arrayScontrino)
                creaParagrafi()
                arrayScontrino = []
            }else if(pulsanti[i].textContent == "Canc"){// cancella l'input
                input.value = ""
                arrayOperazioni = []
                
            }else if(pulsanti[i].textContent == "Abilita"){//abilita l'inserimento da input
                document.getElementById("input").removeAttribute("disabled");
                dis.textContent = "Disab."
                input.value = ""
                arrayOperazioni = []
            } else if(pulsanti[i].textContent == "Disab."){//disabilita l'inserimento da input
                input.setAttribute("disabled", "true")
                dis.textContent = "Abilita"
                input.value = ""
                arrayOperazioni = []
            }
            
        });
}//fine evento pulsanti
    


        eventoInput.addEventListener("change", function(){

            let testo = input.value
            arrayOperazioni.push(testo)            
            arrayScontrino.push(input.value + eval(input.value.replace("Canc", "").replace("Abilita", "")))            
            input.value = eval(input.value.replace("=", "").replace("Canc", "").replace("Abilita", ""))           
            arrayOperazioni =[]
            console.log(arrayScontrino)
            creaParagrafi()
            arrayScontrino = []

        });

        
        
        
        
        






});