// es 5



window.addEventListener("load", function(e){

    function numeriCharSec(strPassw) {



        let regex = /^[a-zA-Z]+$/;
        let regex2 = /^[!*?#]+$/
        let regex3 = /^[0-9]+$/
            if (regex.test(strPassw)) {
                if(regex2.test(strPassw)){
                    if(regex3.test(strPassw)){
                        return true
                    }
                }
                    
            } 
            return false 
            

    }
    
    function creaInput(classDiv, testolabel) {
        let divran = document.createElement("div")
        divInputs.appendChild(divran)
        divran.setAttribute("class", classDiv)
        let labelran = document.createElement("label")
        divran.appendChild(labelran) 
        let brRan = document.createElement("br")   
        divran.appendChild(brRan)
        let testoran = document.createTextNode(testolabel)
        labelran.appendChild(testoran)
        labelran.setAttribute("for", classDiv)
        let inputran = document.createElement("input")
        divran.appendChild(inputran)
        inputran.setAttribute("id", classDiv)
    }

    let mioForm = document.getElementById("form")

    let divInputs = document.createElement("div")
    mioForm.appendChild(divInputs)
    divInputs.setAttribute("id", "principale")

    
    creaInput("nome", "nome")    
    creaInput("cognome", "cognome")    
    creaInput("password", "password")    
    creaInput("conferma-password", "conferma password")  
    let divSubmit = document.createElement("div")
    mioForm.appendChild(divSubmit)
    let brult = document.createElement("br")   
    divSubmit.appendChild(brult)
    let invio = document.createElement("input")
    divSubmit.appendChild(invio)
    invio.setAttribute("type", "submit")
    testoInvio = document.createTextNode("Invio")
    invio.appendChild(testoInvio)
    
    

    mioForm.addEventListener("submit", function(e) {
        e.preventDefault()
    })
    
        function soloStringa(testo) {

            let regex = /^[a-zA-Z]+$/;
            
            if (regex.test(testo)) {
                return true
            } else {
                return false 
            }
            
        }

        let nome = document.getElementById("nome")
        let cognome = document.getElementById("cognome")

        nome.addEventListener("change", function() {
            
            if(soloStringa(nome.value)) {
                nome.setAttribute("class", "nomeCorretto")
                
            } else {     
                nome.setAttribute("class", "nomeErrato")       
                
                
            }

        })        

        cognome.addEventListener("change", function() {
            
            if(soloStringa(cognome.value)) {
                cognome.setAttribute("class", "cognomeCorretto")
                
            } else {            
                cognome.setAttribute("class", "cognomeErrato")
                
                
            }

        })

        let password = document.getElementById("password")
            
        password.addEventListener("focus", function() {
            
                let lista = document.createElement("ul")
                divInputs.appendChild(lista)

                let elem1 = document.createElement("li")
                lista.appendChild(elem1)
                let par1 = document.createElement("p")
                elem1.appendChild(par1)
                testo1 = document.createTextNode("La password deve avere minimo 10 caratteri e massimo 30")
                elem1.appendChild(testo1)                        

                let elem2 = document.createElement("li")
                lista.appendChild(elem2)
                let par2 = document.createElement("p")
                elem2.appendChild(par2)            
                testo2 = document.createTextNode("Deve contenere almeno un numero")
                elem2.appendChild(testo2)   


                let elem3 = document.createElement("li")
                lista.appendChild(elem3)
                let par3 = document.createElement("p")
                elem3.appendChild(par3)
                testo3 = document.createTextNode("Deve contenere almeno un tra i seguenti caratteri: ! * ? #")
                elem3.appendChild(testo3)            
            }
            
        )

        password.addEventListener("focusout", function() {

            let listaDaNascondere = document.getElementsByTagName("ul")
            for (let i = 0; i < listaDaNascondere.length; i++) {
                listaDaNascondere[i].remove()
                
            }

        })

        password.addEventListener("change", function() {

            


        })       
        
})









