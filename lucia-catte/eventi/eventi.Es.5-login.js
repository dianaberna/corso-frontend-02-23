/*Realizzare una pagina web dove è presente un input 
testuale in cui è gestito ogni sua versione o stato, 
cioè default, evento hover, evento focus, evento keydown,
evento change, stato disabilitato, stato errore, stato corretto.  */
console.log("siamo nell' esecizio 5")

window.addEventListener("load", function () {
    
    /*//div contenitore
    let div = document.createElement("div");
    document.body.appendChild(div)*/

    //div contenitore primi 4
    let div1 = document.createElement("div")
    document.body.appendChild(div1)
    div1.setAttribute("class", "div1")

    let testoNome = document.createElement("h5");
    testoNome.textContent = "Nome";
    div1.appendChild(testoNome);
    let inputNome = document.createElement("input");
    inputNome.setAttribute("type", "text","id", "nome");
    inputNome.textContent = "Inserisci il nome"
    div1.appendChild(inputNome); 

    let testoCognome = document.createElement("h5");
    testoCognome.textContent = "Cognome";
    div1.appendChild(testoCognome);
    let inputCognome = document.createElement("input");
    inputCognome.setAttribute("type", "text","id", "cognome");
    inputCognome.textContent = "Inserisci il cognome"
    div1.appendChild(inputCognome); 

    let testoEmail = document.createElement("h5");
    testoEmail.textContent = "Email";
    div1.appendChild(testoEmail);
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "text", "id", "email");
    inputEmail.textContent = "Inserisci la tua email"
    div1.appendChild(inputEmail); 

    let testoPwd = document.createElement("h5");
    testoPwd.textContent = "Password";
    div1.appendChild(testoPwd);
    let inputPwd = document.createElement("input");
    inputPwd.setAttribute("type", "text", "id", "pssw");
    inputPwd.textContent = "Inserisci la password"
    div1.appendChild(inputPwd); 

    let testoConfPwd= document.createElement("h5");
    testoConfPwd.textContent = "Conferma Password";
    div1.appendChild(testoConfPwd);
    let inputConfPwd = document.createElement("input");
    inputConfPwd.setAttribute("type", "text", "id", "confermapssw");
    inputConfPwd.textContent = "Reinserisci la password"
    div1.appendChild(inputConfPwd); 

    let pulsante = document.createElement("button");
    div1.appendChild(pulsante);
    pulsante.textContent = "Invio";

    




    





})
