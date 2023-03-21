///---------CREA INPUT-------///
window.addEventListener("load", function () {
  let input = document.createElement("input");

  document.body.appendChild(input);
  ///----------CREA BUTTON-----///
  let button = document.createElement("button");
  let buttonText = document.createTextNode("aggiungi");
  button.appendChild(buttonText);
  document.body.appendChild(button);

  ///----------CREA LISTA---------///
  let ulLista = document.createElement("ul");
  ulLista.setAttribute("id", "lista");

  document.body.appendChild(ulLista);
  /////////////////////////////////

  ///---------POPOLA LA LISTA----///
  let ulCestino = document.createElement("ul");
  document.body.appendChild(ulCestino);
  ulCestino.setAttribute("id", "cestino");

  let bottoneCestino = document.createElement("button");
  let testoCestino = document.createTextNode("cestino");

  bottoneCestino.appendChild(testoCestino);
  /* ulCestino.appendChild(bottoneCestino); */

  button.addEventListener("click", function () {
    let articolo = document.createElement("li");
    articolo.innerHTML = input.value;
    ulLista.appendChild(articolo);
    let buttonElimina = document.createElement("button");
    let Elimina = document.createTextNode("cancella");
    buttonElimina.appendChild(Elimina);
    articolo.appendChild(buttonElimina); /* articolo.remove(); */
    /*     buttonElimina.addEventListener("click", function () {
     */
    /////cestino
    /* articolo.setAttribute("class", "delate");
      cestino.appendChild(articolo); */
    /* }); */

    buttonElimina.addEventListener("click", function () {
      console.log(buttonElimina);
      if (buttonElimina.parentNode.parentNode.id == "cestino") {
        buttonElimina.textContent = "cancella";
        articolo.setAttribute("class", "");
        ulLista.appendChild(articolo);
      } else {
        buttonElimina.textContent = "ripristina";
        articolo.setAttribute("class", "delate");
        ulCestino.appendChild(articolo);
        ulCestino.appendChild(bottoneCestino);
      }
    });
  });
  /*  let ulCestino = document.createElement("ul");
  document.body.appendChild(ulCestino);
  ulCestino.setAttribute("id", "cestino");

  let bottoneCestino = document.createElement("button");
  let testoCestino = document.createTextNode("cestino");

  bottoneCestino.appendChild(testoCestino);
  ulCestino.appendChild(bottoneCestino); */
  bottoneCestino.addEventListener("click", function () {
    let elementiDaCancellare = document.getElementsByClassName("delate");

    for (let i = elementiDaCancellare.length - 1; i >= 0; i--) {
      elementiDaCancellare[i].remove();
      bottoneCestino.remove();
    }
  });
});

/* console.log(aggiungiArticolo(" ciao")); */
