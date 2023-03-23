window.addEventListener("load", async function () {

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    document.body.appendChild(input)
    let button = document.createElement("button")
    button.textContent = "Cerca"
    button.addEventListener("click", async () => {
        
        let risultatoPrimaAPI = await recuperoDatiGeocoding(input.value)
        console.log(risultatoPrimaAPI)
        console.log(risultatoPrimaAPI.results)
        let dropdownRisultati = document.createElement("select")
        dropdownRisultati.addEventListener("change", async (e) => {
            let datiOpzione = JSON.parse(e.target.value) 
            // let datiOpzione = dropdownRisultati.value
            // .json()  -> da stringa a json pulendo tutti i dati che non ci servono dalla risposta della promise
            // JSON.parse() -> da stringa a json 
            // JSON.strigify() -> da json a stringa
            let latitude = datiOpzione.latitude
            let longitude = datiOpzione.longitude
            let risultatoApiOpenMeteo = await recuperoDatiOpenMeteo(latitude, longitude);
            console.log(risultatoApiOpenMeteo)
            generaTabellaRisultato(risultatoApiOpenMeteo)
        })
        document.body.appendChild(dropdownRisultati)
        let optionDefault = document.createElement("option")
        optionDefault.textContent = "Seleziona tra le seguenti opzioni"
        optionDefault.value = "-"
        dropdownRisultati.appendChild(optionDefault)
        risultatoPrimaAPI.results.forEach(element => {
            let option = document.createElement("option")
            option.textContent = `${element.name} (${element.country}) ${element.latitude} ${element.longitude}`
            option.value = JSON.stringify({name: element.name, country: element.country, latitude: element.latitude, longitude: element.longitude})
            
            dropdownRisultati.appendChild(option)
        });
    })

    document.body.appendChild(button)
});

// funzione che restituisce i dati della fetch in formato json
async function recuperoDatiOpenMeteo(latitude, longitude) {
    return await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    )
    //.then((response) => {return response.json();}
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .catch((error) => (document.body.textContent = error.status));
}

// quando abbiamo una funzione in async
// - all'interno della funzione ci sarà un await
// - la funzione stessa quando verrà richiamata avrà l'await davanti --> di conseguenza ci sarà un async esterno

/*

async function nomeFunzione(){
    await fetch(url)
        .then((response) => (response.json()))
        .then((response) => console.log(response))
}

response -> risposta della fetch (in formato Response)
response.json() -> converte in formato json la risposta (la parte di dati che ci interessa)

*/


async function recuperoDatiGeocoding(value){
    return await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${value}`
    )
    //.then((response) => {return response.json();}
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .catch((error) => (document.body.textContent = error.status));
}


function generaTabellaRisultato(risultatoApiOpenMeteo){
    let arrayOrari = risultatoApiOpenMeteo.hourly.time;
    let arrayTemperature = risultatoApiOpenMeteo.hourly.temperature_2m;
    
    let tabella = creaNodo({posizione: document.body, nomeTag: "table"})
    let rigaIntestazione = document.createElement("tr");
    creaNodo({posizione: rigaIntestazione, nomeTag: "th", testo: "time"})
    /* colonna1Intestazione.textContent = "time";
    rigaIntestazione.appendChild(colonna1Intestazione); */
    let colonna2Intestazione = document.createElement("th");
    colonna2Intestazione.textContent = "temperature_2m";
    rigaIntestazione.appendChild(colonna2Intestazione);
    tabella.appendChild(rigaIntestazione);
    document.body.appendChild(tabella);

    for (let i = 0; i < arrayOrari.length; i++) {
        let riga = document.createElement("tr");
        let colonna1 = document.createElement("td");
        colonna1.textContent = arrayOrari[i];
        riga.appendChild(colonna1);
        let colonna2 = document.createElement("td");
        colonna2.textContent = arrayTemperature[i];
        riga.appendChild(colonna2);
        tabella.appendChild(riga);
    }
}


function creaNodo({ posizione, nomeTag, testo = "", listaAttributi = {} }) {
    //console.log(nomeTag, testo, listaAttributi)

    // listaAttributi = ["classe", "id", "href"]
    // listaAttributi = {classe: "nomeclasse", id: "nomeid", href: "link"}

    let elemento = document.createElement(nomeTag);

    //console.log(listaAttributi)
    if (listaAttributi.classe) {
        elemento.setAttribute("class", listaAttributi.classe);
    }
    if (listaAttributi.id) {
        elemento.setAttribute("id", listaAttributi.id);
    }
    if (listaAttributi.href) {
        elemento.setAttribute("href", listaAttributi.href);
    }

    posizione.appendChild(elemento);

    if (testo.length != 0) {
        let elementoTesto = document.createTextNode(testo);
        elemento.appendChild(elementoTesto);
    }

    return elemento;
}