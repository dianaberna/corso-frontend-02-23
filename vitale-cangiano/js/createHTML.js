let nav = document.createElement("nav");
document.body.appendChild(nav);

let div = document.createElement("div");
nav.appendChild(div);

let a = document.createElement("a");
div.appendChild(a);

let text = document.createTextNode("MyPage");
a.appendChild(text);

// creo l'elemento e aggiungo degli attributi

let form = document.querySelector(".input");
let input = document.createElement("input");
let button = document.querySelector("button");

// elemento.setAttribute(“nome_attributo”, “valore”)
input.setAttribute("type", "text");
input.setAttribute("placeholder", "quanti figli hai");
input.setAttribute("name", "figlio");
form.appendChild(input);


function figli(numberSon) {
   
    for (i = 0; i < numberSon; i++) {
        let inp = document.createElement("input");
        inp.setAttribute("type", "text");
        inp.setAttribute("placeholder", "nome figlio");
        inp.setAttribute("name", "fi");
        form.appendChild(inp);
        console.log("figli"+i);
    }
}



button.addEventListener('click', () => {
    console.log(input.value);
    figli(input.value);
})

