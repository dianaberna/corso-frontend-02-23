window.addEventListener("load", function () {
    console.log("il body è stato caricato");
    
    //style Body
document.getElementsByTagName("body")[0].style.display="flex";
document.getElementsByTagName("body")[0].style.justifyContent="center";

//style div rgb
let div=document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id", div)
document.getElementById(div).style.backgroundColor="rgb(220,220,220"; 
document.getElementById(div).style.padding="5px 10px";
document.getElementById(div).style.margin="200px";


function cambia(max){
    let a1= Math.floor(Math.random() * max);
    let a2= Math.floor(Math.random() * max);
    let a3= Math.floor(Math.random() * max);
    let colori=[a1,a2,a3]
    return colori
    
    }
    let colori=cambia(255)
    let text= document.createTextNode("rgb("+colori+")")
    div.appendChild(text)
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb("+colori+")";
}) ;









