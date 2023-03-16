window.addEventListener("load", function () {
    console.log("il body è stato caricato");
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb("+colori+")"
}) 


document.getElementsByTagName("body")[0].style.display="flex"
document.getElementsByTagName("body")[0].style.margin="50%"
let div=document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id", div)
document.getElementById(div).style.backgroundColor="white"; 
document.getElementById(div).style.padding="5px 10px";


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


