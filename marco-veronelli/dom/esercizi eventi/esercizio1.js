window.addEventListener("load", function () {
    console.log("il body è stato caricato");
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb("+colori+")";
}) ;


document.getElementsByTagName("body")[0].style.display="flex";
document.getElementsByTagName("body")[0].style.justifyContent="center";
/* document.getElementsByTagName("body")[0].style.alignContent ="center" */

let div=document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id", div)
document.getElementById(div).style.backgroundColor="rgb(220,220,220"; 
document.getElementById(div).style.padding="5px 10px";
document.getElementById(div).style.margin="200px";


function cambia(max){
let a= Math.floor(Math.random() * max);
let b= Math.floor(Math.random() * max);
let c= Math.floor(Math.random() * max);
let colori=[a,b,c]
return colori

}

let colori=cambia(255)
console.log(colori)
let text= document.createTextNode("rgb("+colori+")")
div.appendChild(text)


