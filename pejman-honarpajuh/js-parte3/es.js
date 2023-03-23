console.log('esercizio meteo------')

window.addEventListener("load", async () => {
    let risultato = await funzioneRecuperoDati();

    let arreyTime = risultato.hourly.time;
    let arreyTemperature = risultato.hourly.temperature_2m;
    
    console.log(risultato)
    console.log(risultato.hourly.time)
    console.log(risultato.hourly.temperature_2m)

    

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

    for (let i = 0; i < arreyTime.length; i++) {
        let riga = document.createElement("tr");
        let colonna1 = document.createElement("td");
        colonna1.textContent = arreyTime[i];
        riga.appendChild(colonna1);
        let colonna2 = document.createElement("td");
        colonna2.textContent = arreyTemperature[i];
        riga.appendChild(colonna2);
        tabella.appendChild(riga);
    }

});

async function funzioneRecuperoDati() {
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.json();
                
            }
            return Promise.reject(response);
        })
/* .then((response) => {
            console.log(response.json())
		return response.json()
        }) */
        
        .catch((error) => (console.log(error.status)));
}
