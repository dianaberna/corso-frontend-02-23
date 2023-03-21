


//5 Genero l'evento che racchiude tutto
window.addEventListener("load",function(){
    //1) Genero i colori con la formulina.
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);


    //2) creo una stringa con gli elementi generati dalla formula precedente.
    let rgb = "rgb("+r+","+g+","+b+")" // concatenazione di stringhe


    //3)applico il colore al body
    document.body.style.background = rgb;

    // 4) Creo un div nel body, con un testo "rgb" dove scrivo i valori dello sfondo
    let div= document.createElement("div");
    div.innerHTML= rgb
    document.body.appendChild(div);
    
})
