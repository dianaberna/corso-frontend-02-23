//Aspetto che carica il DOM
window.addEventListener("load", () => {
    //Eseguo il controllo se esiste il cookie "colore", se esiste aggiorno la maglietta
    let previousColor = getCookie("colore");

    if (previousColor) {
        //Se esiste un colore precedente, lo assegno
        changeColor(previousColor);
    }

    let colors = ["red", "yellow", "blue", "green"];
    let colorsContainer = document.getElementById("colors-container");

    // array.forEach((element, index) => { corpo del for})
    // element è uguale a "array[i]", e index è uguale a "i"

    colors.forEach((color) => {
        let button = document.createElement("button");
        //let buttonLabel = document.createTextNode(color);
        //button.appendChild(buttonLabel);
        button.textContent=color
        button.style.backgroundColor = color;
        button.addEventListener("click", function () {
            return changeColor(color);
        });
        colorsContainer.appendChild(button);
    });

   /*  
    senza forEach ma con un for normale
        for(let i = 0; i < colors.length; i++){
            let button = document.createElement("button");
            let buttonLabel = document.createTextNode(colors[i]);
            button.appendChild(buttonLabel);
            button.style.backgroundColor = colors[i];
            button.addEventListener("click", function () {
                return changeColor(colors[i]);
            });
            colorsContainer.appendChild(button);
        } 
    */
});

// prendo un colore e dipingo la maglietta!
function changeColor(colore) {
    //aggiungo uno step in più, scrivo il colore nel cookie
    setCookie("colore", colore);
    getCookie("colore")
    return (document.getElementById("colorami").style.fill = colore);
}

/*
 * I cookie sono dei file conservati all'interno del browser per quel determinato sito web
 * questi file consentono di "conservare dati" per un determinato tempo.
 *
 * Dobbiamo quindi preoccuparci eventualmente di gestire due / tre aspetti fondamentali:
 * 1) Lettura / Ricerca di un cookie
 * 2) Scrittura / Modifica di un cookie
 * 3) Rimozione forzata (ora preoccupiamoci di poterlo distruggere per provare)
 *
 */

const setCookie = (name, value, days = 7, path = "/") => {
    /*
     * - Nome del cookie
     * - Contenuto del cookie
     * - Durata (in giorni)
     * - Percorso (i cookies possono dividersi in sottocartelle)
     */

    // La data di scadenza è generata per oggi

    // 864e5 -> 1000*60*60*24 or 86400000 or 864e5 ovvero il calcolo di 24 ore
    // UTC -> Standard tempo universale senza fuso orario applicato (ora globale)
    console.log(864e5)
    console.log(Date.now())
    console.log(Date.now() + days)
    console.log(Date.now() + days * 864e5)
    console.log(new Date(Date.now() + days * 864e5))
    console.log(new Date(Date.now() + days * 864e5).toUTCString())
    const expires = new Date(Date.now() + days * 864e5).toUTCString();

    // encodeURIComponent -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent?retiredLocale=it
    // document.cookie -> vado ad impostare il cookie, codifico il valore, imposto la scadenza ed il percorso
    document.cookie =
        name +
        "=" +
        encodeURIComponent(value) +
        "; expires=" +
        expires +
        "; path=" +
        path;
};

const getCookie = (name) => {
    // document.cookie -> prendo il cookie e lo riduco in piccole parti
    // 1) split divide una stringa in un array
    // 2) reduce accetta una funzione da eseguire per ogni elemento dell'array
    // 3) ritorno se la parte === name (del cookie di cui voglio conoscere il valore)
    // il suo contenuto
    console.log(document.cookie)
    return document.cookie.split("; ").reduce((r, v) => {
        const parts = v.split("=");
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "");
};

const deleteCookie = (name, path) => {
    // Trovo un cookie dato un nome ed un path, lo imposto "vuoto" e lo faccio scadere, quindi lo distruggo
    setCookie(name, "", -1, path);
    alert("eliminato!");
};