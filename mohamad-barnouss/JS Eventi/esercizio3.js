window.addEventListener("load", function () {
  console.log("prova 3");

  //CREAZIONE BARRA INPUT E BOTTONE
  let inputBar = document.createElement("input");
  inputBar.setAttribute("id", "barra"); //ID BARRA INPUT
  document.body.appendChild(inputBar);
  let buttonText = document.createTextNode("AGGIUNGI");
  let buttonType = document.createElement("button");
  buttonType.setAttribute("id", "bottoneId");
  buttonType.appendChild(buttonText);
  document.body.appendChild(buttonType);

  //CREO "ul" e "li"
  let ulList = document.createElement("ul"); //creo la "ul"
  ulList.setAttribute("id", "UlPrincipale");
  // let listLi = document.createElement("li"); // creo "li"
  //ulList.appendChild(listLi);// provo a farlo dentro eventListener
  // creo il "div"
  let divElement = document.createElement("div");
  divElement.setAttribute("id", "divElement");

  //appendo la "ul" al "div" e di conseguenza il div al body
  divElement.appendChild(ulList);
  document.body.appendChild(divElement);

  //Evento bottone click
  buttonType.addEventListener("click", function () {
    console.log("Click bottone FUNZIONA");
    let aggiunta = document.createTextNode(
      document.getElementById("barra").value
    );
    let listLi = document.createElement("li"); //creo list
    listLi.appendChild(aggiunta);
    ulList.appendChild(listLi);
    listLi.setAttribute("class", "listClass");

    //creo bottone X
    let xtesto = document.createTextNode("X");
    let xbtn = document.createElement("button");
    xbtn.appendChild(xtesto);
    listLi.appendChild(xbtn);
    xbtn.setAttribute("class", "xbutton");

    //cancella
    xbtn.addEventListener("click", function () {
      //listLi.setAttribute("class", "delate");
      console.log(listLi);
      console.log(xbtn.parentNode.parentNode.id);
      if (xbtn.parentNode.parentNode.id == "ulCestino") {
        ulList.appendChild(listLi);
        xbtn.textContent = "Elimina";
        listLi.setAttribute("class", "");
      } else {
        //siamo in ulprincipale
        ulCestino.appendChild(listLi);
        xbtn.textContent = "ripristina";
        listLi.setAttribute("class", "delate");
      }
      //cestinoLi.appendChild(listLi);
      //ulCestino.appendChild(cestinoLi);
      //listLi.remove(); //si usa cosi prendendo l'elemento list che avevo creato RIVEDERE!!!!!
    });
  });

  //cestino
  let cestinoElement = document.createElement("div");
  let ulCestino = document.createElement("ul");
  ulCestino.setAttribute("id", "ulCestino");
  cestinoElement.appendChild(ulCestino);
  document.body.appendChild(cestinoElement);
  let cestinoTesto = document.createTextNode("cestino");
  let bottoneCestino = document.createElement("button");
  bottoneCestino.appendChild(cestinoTesto);
  cestinoElement.appendChild(bottoneCestino);

  //bottone cestino per eliminare
  bottoneCestino.addEventListener("click", function () {
    console.log(ulCestino);
    let elementiDaCancellare = document.getElementsByClassName("delate");
    for (let i = elementiDaCancellare.length - 1; i >= 0; i--) {
      //PARTO DALLA FINE E CANCELLO TUTTI GLI ELEMENTI
      elementiDaCancellare[i].remove();
    }
  });

  //bottone ripristino
  let ripristinaText = document.createTextNode("RIPRISTINA TUTTO");
  let ripristinaButton = document.createElement("button");
  ripristinaButton.appendChild(ripristinaText);
  cestinoElement.appendChild(ripristinaButton);

  // ripristina tutto con il bottone RIPRISTINA
  ripristinaButton.addEventListener("click", function () {
    //console.log("elementi dai cancelllare==> " + elementiDaCancellare.length);
    let elementiRipristino = document.getElementsByClassName("delate");
    console.log(elementiRipristino.length);

    for (let i = elementiRipristino.length - 1; i >= 0; i--) {
      ulList.appendChild(elementiRipristino[i]);
      // elementiRipristino[i].classList.remove("delate"); //per togliere la classe
      elementiRipristino[i].className = "";
    }
  });
});
