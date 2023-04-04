/*Realizzare una pagina web dove è presente un input 
testuale in cui è gestito ogni sua versione o stato, 
cioè default, evento hover, evento focus, evento keydown,
evento change, stato disabilitato, stato errore, stato corretto.  */
console.log("siamo nell' esecizio 5")

window.addEventListener("load", function () {
    
    //form generale
    let form = document.createElement("form");
        document.body.appendChild(form)
        form.setAttribute("id", "mioForm")
        form.addEventListener("submit", function () {
            e.preventDefault() // blocca il ricaricamento della pagina
            let inputnome = document.getElementsByTagName("input")[0]
            


    })

    //div nome
    let div1 = document.createElement("div")
        form.appendChild(div1)
        div1.setAttribute("class", "div1")
    let labelNome = document.createElement("label");
        labelNome.textContent = "Nome:";
        div1.appendChild(labelNome);
    let inputNome = document.createElement("input");
        inputNome.setAttribute("type", "text");
        inputNome.setAttribute("id", "nome");
        inputNome.textContent = "Inserisci il nome"
        div1.appendChild(inputNome); 

    //div cognome
    let div2 = document.createElement("div")
        form.appendChild(div2)
        div2.setAttribute("class", "div2")
    let labelCognome = document.createElement("label");
        labelCognome.textContent = "Cognome:";
        div2.appendChild(labelCognome);
    let inputCognome = document.createElement("input");
        inputCognome.setAttribute("type", "text");
        inputCognome.setAttribute("id", "cognome");
        inputCognome.textContent = "Inserisci il cognome"
        div2.appendChild(inputCognome);
    
    //div email
    let div3 = document.createElement("div")
    form.appendChild(div3)
    let labelEmail = document.createElement("label");
    labelEmail.textContent = "Email:";
    div3.appendChild(labelEmail);
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "text");
    inputEmail.setAttribute("id", "email");
    inputEmail.textContent = "Inserisci la tua email"
    div3.appendChild(inputEmail); 

    //div password
    let div4 = document.createElement("div")
    form.appendChild(div4)
    let labelPwd = document.createElement("label");
    labelPwd.textContent = "Password:";
    div4.appendChild(labelPwd);
    let inputPwd = document.createElement("input");
    inputPwd.setAttribute("type", "text");
    inputPwd.setAttribute("id", "pwd");
    inputPwd.textContent = "Inserisci la password"
    div4.appendChild(inputPwd);

    /*let occhio = document.createElement("input")
    occhio.setAttribute("type", "button") 
    occhio.setAttribute("id", "mostraPassword");
    occhio.textContent = "x"
    inputPwd.appendChild(occhio);*/
    
    //div conferma password
    let div5 = document.createElement("div")
    form.appendChild(div5)  
    let labelConfPwd= document.createElement("label");
    labelConfPwd.textContent = "Conferma Password:";
    div5.appendChild(labelConfPwd);
    let inputConfPwd = document.createElement("input");
    inputConfPwd.setAttribute("type", "text");
    inputConfPwd.setAttribute("id", "confermapwd");
    inputConfPwd.textContent = "Reinserisci la password"
    div5.appendChild(inputConfPwd); 

    //invio
    let pulsante = document.createElement("button");
    form.appendChild(pulsante);
    pulsante.textContent = "Invio";
    pulsante.setAttribute("type", "submit");

    



})

/*let stringa = "ciao 123";
let trovato = false;

    for (let i = 0; i < stringa.length; i++){

        for (let numero = 0; numero < 10; numero++)
        
        if (stringa[i] == numero){
            console.log(trovato)
            trovato = true;
        } 

    }
    console.log(trovato)*/