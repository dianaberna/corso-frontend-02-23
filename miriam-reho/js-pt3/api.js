window.addEventListener("load", async function (){
    let risultato = await funzioneRecuperoDati()
    console.log(risultato.hourly.time)
    console.log(risultato.hourly.temperature_2m)
    // risultato.hourly.time > array orari
    // risultato.hourly.temperature_2m > array temperature

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
    tabella.style = "border: 1px solid"
    colonna1Intestazione.style = "border: 1px solid"
    colonna2Intestazione.style = "border: 1px solid"


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

//funzione che restituisce i dati fetch in formato json
async function funzioneRecuperoDati() {
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&hourly=temperature_2m")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .catch((error) => (document.body.textContent = error.status));
}
