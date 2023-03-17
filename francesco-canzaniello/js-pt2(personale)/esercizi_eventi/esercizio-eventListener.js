window.addEventListener("load", function () {
    // let div = document.createElement("div");
    // document.body.appendChild(div);
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    // divElem = this.document.querySelector("div");
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    let divGrande = document.createElement("div");
    document.body.appendChild(divGrande);

    let div = document.createElement("div");
    divGrande.appendChild(div);
    divGrande.style.display = "flex"
    div.style.backgroundColor = "white";

    let nuovoH1 = document.createElement("h1");
    let testo = document.createTextNode(`rgb ( ${red}, ${green}, ${blue})`);
    div.appendChild(nuovoH1)
    nuovoH1.appendChild(testo);

    div.style.width = "fit-content"
    divGrande.style.justifyContent= "center"
    

    // console.log("il body è stato caricato");
});
