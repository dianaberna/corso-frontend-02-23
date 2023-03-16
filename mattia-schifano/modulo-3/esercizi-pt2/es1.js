//window si associa a load che permette che la paggina quando è pronta ci carichi il codice js
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

window.addEventListener('load', function() {
    // Genera un numero casuale per ogni componente RGB del colore di sfondo i (colore max e 256)
    //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#using_addeventlistener
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
  
    //  RGB che andra al interno del paragrafo
    let colore = "rgb(" + r + "," + g + "," + b + ")";
  
    // sfondo
    document.body.style.backgroundColor = colore;
  
    // colore al div
    let coloreDiv = document.createElement("div");
    coloreDiv.classList.add("color-div");
  
    //  nuovo elemento p che contiene rgb
     let coloredelparagrafo = document.createElement("p");
     coloredelparagrafo.textContent = colore;
  
    // appendo il paragrafo al div
    coloreDiv.appendChild(coloredelparagrafo);
  
    // Aggiungi il nuovo elemento div come figlio del body
    document.body.appendChild(coloreDiv);
  });