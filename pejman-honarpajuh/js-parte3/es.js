console.log('esercizio meteo------')

window.addEventListener("load", async () => {
    

    
    
  
    // Crearae due input
    let input1 = document.createElement('input');
    input1.setAttribute('type','number');
    document.body.appendChild(input1);
   
    let input2 = document.createElement('input');
    input2.setAttribute('type','number');
    document.body.appendChild(input2);
    // Creare buutton
    let button = document.createElement('button');
    button.setAttribute('type','button');
    button.textContent = 'Trova'
    document.body.appendChild(button);
    // Creare la tabella 
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

    button.addEventListener('click', async () =>{
        let risultato = await funzioneRecuperoDati( input1.value, input2.value);
        let arreyTime = risultato.hourly.time;
        let arreyTemperature = risultato.hourly.temperature_2m;
        console.log(risultato)
        console.log(risultato.hourly.time)
        console.log(risultato.hourly.temperature_2m)

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
    })



});

async function funzioneRecuperoDati(latitude, longitude) {
    return await fetch( `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
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
