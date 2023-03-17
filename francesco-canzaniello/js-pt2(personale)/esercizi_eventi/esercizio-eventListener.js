//Es 1
// window.addEventListener("load", function () {
//     // let div = document.createElement("div");
//     // document.body.appendChild(div);
//     let red = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     // divElem = this.document.querySelector("div");
//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

//     let divGrande = document.createElement("div");
//     document.body.appendChild(divGrande);

//     let div = document.createElement("div");
//     divGrande.appendChild(div);
//     divGrande.style.display = "flex"
//     div.style.backgroundColor = "white";

//     let nuovoH1 = document.createElement("h1");
//     let testo = document.createTextNode(`rgb ( ${red}, ${green}, ${blue})`);
//     div.appendChild(nuovoH1)
//     nuovoH1.appendChild(testo);

//     div.style.width = "fit-content"
//     divGrande.style.justifyContent= "center"

//     // console.log("il body è stato caricato");
// });

//Es 2

// window.addEventListener("load", function () {

//     // let form = document.createElement("form");
//     // document.body.appendChild(form); // non va bene il form perché ogni volta che premo invio si ricarica la pagina

//     let label = document.createElement("label")
//     document.body.appendChild(label)

//     let input = document.createElement("input")
//     document.body.appendChild(input)

//     let pulsante = document.createElement("button")
//     document.body.appendChild(pulsante)

//     // testo nel pulsante
//     let testo = document.createTextNode("Aggiorna stile")
//     pulsante.appendChild(testo)

//     label.setAttribute("for", "input-prova")
//     pulsante.setAttribute("id", "button")
//     input.setAttribute("type", "text")
//     input.setAttribute("id", "input-prova")

//     let div = document.createElement("div");
//     document.body.appendChild(div);

//     input.style.width = "50%"
//     div.style.height = "200px"
//     div.style.backgroundColor = "red"

//     pulsante.addEventListener('click', function() {
//         let stileCSS = input.value;
//         div.style.cssText = stileCSS;
//     });

// }) ;

// es 3

window.addEventListener("load", function () {
    let input = document.createElement("input");
    document.body.appendChild(input);

    let pulsante = document.createElement("button");
    document.body.appendChild(pulsante);

    let testo_btn = document.createTextNode("Aggiungi");
    pulsante.appendChild(testo_btn);

    let cestino = document.createElement("button");
    document.body.appendChild(cestino);
    let testo_cest = document.createTextNode("Cestino");
    cestino.appendChild(testo_cest);

    // div dei task
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.style.width = "fit-content";
    div.style.margin = "0px";

    // lista task
    let ul = document.createElement("ul");
    div.appendChild(ul);
    ul.style.margin = "0px";

    // cestino
    let divCestino = document.createElement("div");
    document.body.appendChild(divCestino);
    let ulCestino = document.createElement("ul");
    divCestino.appendChild(ulCestino);
    ulCestino.style.margin = "0px";

    divCestino.style.width = "fit-content";
    divCestino.style.margin = "0px";

    pulsante.addEventListener("click", function () {
        let li = document.createElement("li");
        ul.appendChild(li);
        let testo_li = document.createTextNode(input.value);
        li.appendChild(testo_li);
        let pulsanteX = document.createElement("button");
        li.appendChild(pulsanteX);
        let testo_X = document.createTextNode("X");
        pulsanteX.appendChild(testo_X);
        pulsanteX.style.marginLeft = "5px";

        pulsanteX.addEventListener("click", function () {
            let liCestino = li;
            ulCestino.appendChild(liCestino);
            console.log(ulCestino + " cestino");
            liCestino.setAttribute("class", "delete");
        });
    });
    cestino.addEventListener("click", function () {
        let cestinoDaSvuotare = document.getElementsByClassName("delete");
        console.log(cestinoDaSvuotare.length + " lunghezza lista");
        for (let i = cestinoDaSvuotare.length - 1; i >= 0; i--) {
            cestinoDaSvuotare[i].remove();
        }
    });
});
