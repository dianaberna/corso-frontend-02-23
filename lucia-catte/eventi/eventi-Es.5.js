/*Realizzare una pagina web dove è presente un input 
testuale in cui è gestito ogni sua versione o stato, 
cioè default, evento hover, evento focus, evento keydown,
evento change, stato disabilitato, stato errore, stato corretto.  */
console.log("siamo nell' esecizio 5")

window.addEventListener("load", function () {
    
    //div contenitore
    let div = document.createElement("div");
    document.body.appendChild(div)

    //div contenitore primi 4
    let div1 = document.createElement("div")
    div.appendChild(div1)
    div1.setAttribute("class", "div1")

    let testoh5 = document.createElement("h5");
    testoh5.textContent = "Default";
    div1.appendChild(testoh5);

    let inputDef = document.createElement("input");
    inputDef.setAttribute("type", "text");
    div1.appendChild(inputDef); 

    let testoHov = document.createElement("h5");
    testoHov.textContent = "Hover";
    div1.appendChild(testoHov);

    let inputHov = document.createElement("input");
    inputHov.setAttribute("type", "text");
    div1.appendChild(inputHov); 

    let testoFoc = document.createElement("h5");
    testoFoc.textContent = "Focused";
    div1.appendChild(testoFoc);

    let inputFoc = document.createElement("input");
    inputFoc.setAttribute("type", "text", "id", "focus");
    div1.appendChild(inputFoc); 

    let testoKey = document.createElement("h5");
    testoKey.textContent = "Typing";
    div1.appendChild(testoKey);

    let inputKey = document.createElement("input");
    inputKey.setAttribute("type", "text", "id", "keydown");
    div1.appendChild(inputKey); 

    //div contenitore ultimi 4
    let div2 = document.createElement("div")
    div.appendChild(div2)
    div2.setAttribute("class", "div2")

    let testoChange = document.createElement("h5");
    testoChange.textContent = "Entered";
    div2.appendChild(testoChange);

    let inputChange = document.createElement("input");
    inputChange.setAttribute("type", "text");
    div2.appendChild(inputChange); 

    let testoDis = document.createElement("h5");
    testoDis.textContent = "Disabled";
    div2.appendChild(testoDis);

    let inputDis = document.createElement("input");
    inputDis.setAttribute("type", "text");
    div2.appendChild(inputDis); 

    let testoErr = document.createElement("h5");
    testoErr.textContent = "Error";
    div2.appendChild(testoErr);

    let inputErr = document.createElement("input");
    inputErr.setAttribute("type", "text");
    div2.appendChild(inputErr); 

    let testoConf = document.createElement("h5");
    testoConf.textContent = "Confirmed";
    div2.appendChild(testoConf);

    let inputConf = document.createElement("input");
    inputConf.setAttribute("type", "text");
    div2.appendChild(inputConf); 



})


