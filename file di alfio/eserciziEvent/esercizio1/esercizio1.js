


let div = document.createElement("div")
div.setAttribute("id", "color")
document.body.appendChild(div)

let rgb = 0;


function colore() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);

    rgb = "rgb(" + a + ", " + b + ", " + c + ")"
    console.log(rgb)
    return rgb;

}

colore()
div.appendChild(document.createTextNode(rgb));

//style
document.body.style.backgroundColor = rgb;



