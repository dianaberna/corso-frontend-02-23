//creazione input
let input = document.createElement("input");
input.setAttribute("type", "text");
//inserito un imput per far caparie a chi naviga cosa va inserito 
input.placeholder = 'Inserisci leregole CSS...';
document.body.appendChild(input);

//creazione bottone
let button= document.createElement("button");
button.appendChild(document.createTextNode("Aggiorna stile"));
document.body.appendChild(button);

//creazione div
let div= document.createElement("div");
document.body.appendChild(div);

//aggiunta evento al click del bottone
button.addEventListener("click", function(){
  div.style.backgroundColor = input.value;
});
