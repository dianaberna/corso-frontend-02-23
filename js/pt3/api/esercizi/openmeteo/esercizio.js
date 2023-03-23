window.addEventListener("load", async function () {
    let risultato = await recuperoDatiOpenMeteo(11.00, 12.51);
    //console.log(risultato)
    // risultato.hourly.time -> array degli orari
    console.log(risultato.hourly.time);
    // risultato.hourly.temperature_2m -> array delle temperature
    console.log(risultato.hourly.temperature_2m);

    let arrayOrari = risultato.hourly.time;
    let arrayTemperature = risultato.hourly.temperature_2m;

    let tabella = document.createElement("table");
    let rigaIntestazione = document.createElement("tr");
    let colonna1Intestazione = document.createElement("th");
    colonna1Intestazione.textContent = "time";
    rigaIntestazione.appendChild(colonna1Intestazione);
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
