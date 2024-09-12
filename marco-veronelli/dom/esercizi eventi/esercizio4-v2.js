window.addEventListener("load", function () {
    console.log("il body è stato caricato");
    let body = document.getElementsByTagName("body")[0];
    let calcolatrice = document.createElement("div");
    body.appendChild(calcolatrice);
    let input = document.createElement("input");
    input.setAttribute("id", "i");
    input.setAttribute("value", "");
    calcolatrice.appendChild(input);
    input.style.width = "100%";
    calcolatrice.style.display = "flex;";
    calcolatrice.style.width = "500px";
    calcolatrice.style.margin = "3.125rem";
    let divscontrino=document.createElement("div")
    body.appendChild(divscontrino)
    divscontrino.style.backgroundColor="gray"
    let scontrino=document.createTextNode("Scontrino")
    divscontrino.appendChild(scontrino)
    let br=document.createElement("br")
    divscontrino.appendChild(br)
    divscontrino.style.width="100px"
    let pcifre=document.createElement("p")
    pcifre.setAttribute("id","pcifre")
    
    divscontrino.appendChild(pcifre)
    let cifre=document.createTextNode(" ")
    pcifre.appendChild(cifre)
    let pbr=document.createElement("p")
    pcifre.appendChild(pbr)
    pbr.setAttribute("id","br")
  
    function calc(nometag, text = "", id = "", classe = "") {
      let tasto = document.createElement(nometag);
      let numero = document.createTextNode(text);
      console.log(numero);
      tasto.appendChild(numero);
      tasto.setAttribute("id", id);
      tasto.setAttribute("class", classe);
      calcolatrice.appendChild(tasto);
      tasto.style.width = "100px";
      tasto.style.height = "30px";
      tasto.style.margin = "10px";
      return tasto;
    }
  
    /* let prova= calc (nometag="button", text="sette",id="7") */
  
    let tasti = [
      { nometag: "button", text: "7", id: "7", classe: "but" },
      { nometag: "button", text: "8", id: "8", classe: "but" },
      { nometag: "button", text: "9", id: "9", classe: "but" },
      { nometag: "button", text: "/", id: "diviso", classe: "but" },
      { nometag: "button", text: "4", id: "4", classe: "but" },
      { nometag: "button", text: "5", id: "5", classe: "but" },
      { nometag: "button", text: "6", id: "6", classe: "but" },
      { nometag: "button", text: "*", id: "per", classe: "but" },
      { nometag: "button", text: "1", id: "1", classe: "but" },
      { nometag: "button", text: "2", id: "2", classe: "but" },
      { nometag: "button", text: "3", id: "3", classe: "but" },
      { nometag: "button", text: "-", id: "meno", classe: "but" },
      { nometag: "button", text: "0", id: "0", classe: "but" },
      { nometag: "button", text: ".", id: "punto", classe: "but" },
      { nometag: "button", text: "=", id: "uguale", classe: "but" },
      { nometag: "button", text: "+", id: "piu", classe: "but" },
      { nometag: "button", text: "cancella", id: "cancella", classe: "but" },
    ];
  
    for (let i = 0; i < tasti.length; i++) {
      let tasto = calc(
        tasti[i].nometag,
        tasti[i].text,
        tasti[i].id,
        tasti[i].classe
      );
      tasto.addEventListener("click", function (e) {
        let a = "";


        // Cancella
        if (e.target.firstChild.nodeValue === "cancella") {
          input.value = "";
          let br2=document.createElement("br")
          divscontrino.appendChild(br2)
          /* let bre = */
        } else {
          //PRENDE IL VALUE DAL PULSANTE E LO METTE NEL INPUT
          car = e.target.firstChild.nodeValue;
          input.value += car;
          cifre.textContent+=car
          

          console.log("input.value"+input.value);
          for (let i = 0; i < input.value.length; i++) {

          if (input.value[i] != "=") {
            
            a+=input.value[i]
            console.log("A"+a)
            
          }else{

            input.value=eval(a)
            /* let html=document.getElementById("br").innerhtml=""+<br>+"" */
          
            cifre.textContent+=" "+input.value+" "
          }
        }
         
        }
      });
    }
  });
  