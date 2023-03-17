// Creiamo una funzione che generi un colore casuale
function generateColore() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    var colore = "rgb(" + r + ", " + g + ", " + b + ")";
    return colore;
  }
  
  // Selezioniamo il body della pagina
  var body = document.querySelector("body");
  
  // Generiamo un colore casuale e lo applichiamo al body come sfondo
  var background = generateColore();
  body.style.backgroundColor = background;
  
  // Selezioniamo il div con id "color" e stampiamo il colore generato all'interno
  var divColor = document.querySelector("#color");
  divColor.textContent = background;


  
  
