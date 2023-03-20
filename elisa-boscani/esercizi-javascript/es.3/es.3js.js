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

  document.body.appendChild(ulLista);

  ///---------POPOLA LA LISTA----///

  button.addEventListener("click", function () {
    let articolo = document.createElement("li");
    articolo.innerHTML = input.value;
    ulLista.appendChild(articolo);
    let buttonElimina = document.createElement("button");
    let Elimina = document.createTextNode("elimina");
    buttonElimina.appendChild(Elimina);
    articolo.appendChild(buttonElimina);
    buttonElimina.addEventListener("click", function () {
      /* articolo.remove(); */
      /////cestino

      articolo.setAttribute("class", "delate");
      cestino.appendChild(articolo);
    });
  });
  let cestino = document.createElement("ul");
  document.body.appendChild(cestino);

  let bottoneCestino = document.createElement("button");
  let testoCestino = document.createTextNode("cestino");

  bottoneCestino.appendChild(testoCestino);
  cestino.appendChild(bottoneCestino);
  bottoneCestino.addEventListener("click", function () {
    let elementiDaCancellare = document.getElementsByClassName("delate");
    for (let i = elementiDaCancellare.length - 1; i >= 0; i--) {
      elementiDaCancellare[i].remove();
    }
  });
});

/* console.log(aggiungiArticolo(" ciao")); */
