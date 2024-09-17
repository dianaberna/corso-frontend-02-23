
//createNode
function createNode(dest_element, tag, text = "") {

    let element = document.createElement(tag);

    if(text){
        if(text.length != 0){
            let text_el = document.createTextNode(text);
            element.appendChild(text_el);
        }
    }

    dest_element.appendChild(element);

    return element;
}

//changeBg
function changeBg(r, g, b){
    let body = document.body;
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    body.style.position = "relative";
}


let r = Math.floor(Math.random()*246);
let g = Math.floor(Math.random()*246);
let b = Math.floor(Math.random()*246);

//Div
let elm_div = createNode(document.body, "div");
elm_div.style.width = "10rem";
elm_div.style.backgroundColor = "white";
elm_div.style.textAlign = "center";
elm_div.style.padding = "1rem";
elm_div.style.position = "absolute";
elm_div.style.top = "20rem";
elm_div.style.left = "40rem";


createNode(elm_div, "p","rgb(" + r + " ," + g + " ," + b + ")");
changeBg(r, g, b);