// cambiare colore body ad ogni ricarica pagina

window.addEventListener("load", function () {
    let b = document.querySelector("body");
    b.style.backgroundColor = cambiaBg();
    let section = this.document.querySelector("section");
    let div = document.createElement("div");
    section.appendChild(div);
    div.innerHTML=cambiaBg();
    


})

function cambiaBg() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    let ris = 'rgb(' + a + ',' + b + ',' + c + ')';
    console.log(ris);
    return ris;
}
