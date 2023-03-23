// console.log("JS-Event")
// alert("Sei in JS-Event")

window.addEventListener("load", function () {
	
    let red = Math.floor((Math.random()) * 256) ;
    let blue = Math.floor((Math.random()) * 256);
    let green = Math.floor((Math.random()) * 256);
   
    let colore = "rgb("+red+","+blue+","+green+")" 
    document.body.style.backgroundColor = colore;

    let div = document.getElementById("colore")
    div.innerHTML=colore


    
    console.log(colore)
    console.log("il body è stato caricato");
    
})