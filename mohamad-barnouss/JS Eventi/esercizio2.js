window.addEventListener("load", function () {
  console.log("prova prova");

  //CREAZIONE BARRA INPUT E BOTTONE
  let inputBar = document.createElement("input");
  inputBar.setAttribute("id", "barra"); //ID BARRA INPUT
  document.body.appendChild(inputBar);
  let buttonText = document.createTextNode("Aggiorna stile");
  let buttonType = document.createElement("button");
  buttonType.setAttribute("id", "bottoneId");
  buttonType.appendChild(buttonText);
  document.body.appendChild(buttonType);

  //CREO IL div sottostanste

  let divElement = document.createElement("div");
  divElement.setAttribute("id", "divElement");
  document.body.appendChild(divElement);

  //Evento bottone click
  let bottodeId = document.getElementById("bottoneId").value;
  console.log(bottodeId);

  //Do stile al bottone  e alla batta

  document.getElementById("barra").style.width = "25rem";
  document.getElementById("barra").style.height = "2rem";
  document.getElementById("bottoneId").style.height = "2rem";
  this.document.getElementById("bottoneId").style.marginLeft = "0.5rem";
  this.document.getElementById("bottoneId").style.width = "9 rem";

  /***** */
  bottoneId.addEventListener("click", function () {
    //seleziono il valore nella barra e lo aggiungo al div
    let styleAggiunto = document.getElementById("barra").value;
    document.getElementById("divElement").style = styleAggiunto; //da passare cosi come valore e non come stringa ""
  });
});
