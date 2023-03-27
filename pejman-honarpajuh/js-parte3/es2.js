console.log('es Api 2 ---------')

window.addEventListener('load', async () => {

let input = creaNodo({posizione: document.body , nomeTag: 'input' , listaAttributi: { type: 'text'}} )
let button = creaNodo({posizione: document.body, nomeTag: 'button',testo: 'Cerca'})

button.addEventListener('click', async() => {
    let risultatoPrimaAPI = await recuperoDatiGeocoding(input.value)

    let dropdownRisultati = document.createElement('select');
    dropdownRisultati.addEventListener('change', async(e) =>{
        let datiOpzione = JSON.parse(e.target.value) 
        let latitude = datiOpzione.latitude;
        let longitude = datiOpzione.longitude;
        let risultatoApiOpenMeteo = await recuperoDatiOpenMeteo(latitude,longitude);
        generaTabellaRisultato(risultatoApiOpenMeteo)
    })
    document.body.appendChild(dropdownRisultati);
    let optionDefault = document.createElement('option');
    optionDefault.textContent = 'Seleziiona tra le seguenti opzioni'
    optionDefault.value = "-";
    dropdownRisultati.appendChild(optionDefault);
    risultatoPrimaAPI.results.forEach(element => {
        let option = document.createElement("option")
        option.textContent = `${element.name} (${element.country}) ${element.latitude} ${element.longitude}`
        option.value = JSON.stringify({name: element.name, country: element.country, latitude: element.latitude, longitude: element.longitude})
        
        dropdownRisultati.appendChild(option)
    });

})


});

// Recupero dati di meteo
async function recuperoDatiOpenMeteo(latitude, longitude){
    return fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    )
    .then((response) => { return response.json();})

    .catch((error) => (document.body.textContent = error.status));
}
// Recupero dati della cità
async function recuperoDatiGeocoding(value){
    return fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${value}`
    )
    .then((response) => { return response.json();})

    .catch((error) => (document.body.textContent = error.status));
}

// Crea la tabella dei risultati
function generaTabellaRisultato(risultatoApiOpenMeteo){
    let arrayOrari = risultatoApiOpenMeteo.hourly.time;
    let arrayTemperature = risultatoApiOpenMeteo.hourly.temperature_2m;
    
    let tabella = creaNodo({posizione: document.body, nomeTag: "table"})
    let rigaIntestazione = document.createElement("tr");
    creaNodo({posizione: rigaIntestazione, nomeTag: "th", testo: "Time"})
    creaNodo({posizione: rigaIntestazione, nomeTag: 'th', testo: 'Temperatura'});
    tabella.appendChild(rigaIntestazione);
      
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

// Crea Nodo
function creaNodo({posizione , nomeTag , testo = '', listaAttributi = {} }){
    let elemento = document.createElement(nomeTag);

    if(listaAttributi.id){
        elemento.setAttribute('id',listaAttributi.id)
    }
    if(listaAttributi.class){
        elemento.setAttribute('class',listaAttributi.class)
    }
    if(listaAttributi.href){
        elemento.setAttribute('href',listaAttributi.href)
    }
    if(listaAttributi.type){
        elemento.setAttribute('type',listaAttributi.type)
    }
    posizione.appendChild(elemento);
    if(testo.length !=0){
        let elementoTesto = document.createTextNode(testo);
        elemento.appendChild(elementoTesto);
    }
    return elemento;
}

