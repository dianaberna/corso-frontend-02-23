let input = document.querySelector(".schermo")
let contenitore  = document.querySelector(".contenitore ")

let contenitoreBottoni = document.querySelector(".contenitoreBottoni")
//se usi get element by class è sempre un array quindi alla fine va[]


function creaInput(posizione, tag, value) {

    let element = document.createElement(tag)
    posizione.appendChild(element)
    element.setAttribute("type", "button")
    element.value = value
    return element;
}

let array = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"];
for (i = 0; i < 16; i++) {
    let bottone = creaInput(contenitoreBottoni, "input", array[i])
    //console.log(bottone.value)

    bottone.addEventListener("click", function (e) {

        if (bottone.value == "=") {

                let p= document.createElement("p")
                document.querySelector(".scontrino").appendChild(p)
                p.appendChild(document.createTextNode(input.value))
                input.value=eval(input.value);
                p.appendChild(document.createTextNode(" = "+input.value))
           

        } else {
            let calcolo = input.value;
            calcolo += bottone.value;
            //console.log(input.value)
            input.value = calcolo
            console.log(calcolo)        }
      
    }
   
    )}








