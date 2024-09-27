// Math.floor(Math.random() * 256);
window.addEventListener("load" , function(){
    let rosso = Math.floor(Math.random() * 256);
    let blu = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    
    
    let colore = "rgb("+rosso+","+verde+","+blu+")";
    document.body.style.backgroundColor = colore;
    
    let div = document.getElementById("colore"); //selezione div colore
    div.textContent = colore;
})
