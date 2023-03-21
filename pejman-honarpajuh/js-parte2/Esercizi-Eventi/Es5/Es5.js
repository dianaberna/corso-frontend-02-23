console.log('Esercizio 5-----------');

window.addEventListener("load", function (){


// Creare Form 
let form = document.createElement('form');
form.setAttribute('id','form');
document.body.appendChild(form);

// Creare Input e lebal nel Form
let lebal = document.createElement('label');
lebal.setAttribute('for','input');
lebal.textContent = 'Default';

let br = document.createElement('br');
lebal.appendChild(br);

let input = document.createElement('input');
form.appendChild(lebal);
input.setAttribute('type','text');
input.setAttribute('id','myInput');
input.setAttribute('value',' ');
form.appendChild(input);





    
});
