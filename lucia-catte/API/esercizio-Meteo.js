/*Creare una pagina web dove effettuare una chiamata fetch delle api di OpenMeteo https://open-meteo.com/en/docs
 e inserire i risultati in una tabella generata nel DOM.  */

/* window.addEventListener("load", async () => {
    let meteo = await meteoNuoro();
    console.log(meteo);
 })
 async function meteoNuoro (){
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.81&longitude=11.23&hourly=temperature_2m")
        .then((response) => {
            console.log(response)
            return response.json();
        })
})
 .catch((error) => (console.log(error.status)));*/

 /*window.addEventListener("load", async function () {//essendo una funziona async  bisogna richiamarla come tale
    let risultato = await meteoNuoro()
    console.log(risultato.hourly.time)
    console.log(risultato.hourly.temperature_2m)

    let arrayOrari = risultato.hourly.time // prendo l'array delle ore e lo metto in un mio array
    let arrayTemperature = risultato.hourly.temperature_2m // prendo l'array delle temperature e lo metto in un mio arra

    let tabella = document.createElement("table")//creo tabella
    document.body.appendChild(tabella)

    let rigaInt = document.createElement("tr")//creo la riga di intestazione
    tabella.appendChild(rigaInt)

    let colonnaInt = document.createElement("th") //creo la colonna Time
    colonnaInt.textContent = "Time "
    rigaInt.appendChild(colonnaInt)

    let colonnaInt2 = document.createElement("th")//creo la colonna temperatura
    colonnaInt2.textContent = "Temperatura Nuoro"
    rigaInt.appendChild(colonnaInt2)

    

    for (let i = 0; i < arrayOrari.length; i++){ //per ogni elemento dell'array orario creo una colonna e dentro una riga sotto time
        let riga = document.createElement("tr")
        let colonna1 = document.createElement("td")
        colonna1.textContent = arrayOrari[i];//e prende il testo che gli da l'elemento dell'array
        riga.appendChild(colonna1);

        let colonna2 = document.createElement("td")//per ogni elemento dell'array temperatura creo una colonna e dentro una riga sotto temperatura
        colonna2.textContent = arrayTemperature[i];//e prende il testo che gli da l'elemento dell'array
        riga.appendChild(colonna2);
        tabella.appendChild(riga)

    }
 })

// funzione che restituisce i dati della fetch in formato json
 async function meteoNuoro (){
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.81&longitude=11.23&hourly=temperature_2m")
        .then((response) => response.json()) 
        .then((response) => {return response}) //richiamando il return bisogna richiamarlo anche nella riga dell'await
 }*/


 //VERSIONE 2: INSERISCO DEI DATI DI LONGITUDINE E LATITUDINE AD INPUT E NON STATICO

 window.addEventListener("load", async function () {
    let risultato = await recuperoDatiOpenMeteo(11.00, 14.51);//I VALORI DEI DUE PARAMETRI LI INSERISCO QUI
    //console.log(risultato)
    // risultato.hourly.time -> array degli orari
    console.log(risultato.hourly.time);
    // risultato.hourly.temperature_2m -> array delle temperature
    console.log(risultato.hourly.temperature_2m);

    let arrayOrari = risultato.hourly.time;
    let arrayTemperature = risultato.hourly.temperature_2m;

    let input = document.createElement("input")
    input.setAttribute("type", "number")
    document.body.appendChild(input)

    let input2= document.createElement("input")
    input2.setAttribute("type", "number")
    document.body.appendChild(input2)

    input.addEventListener("change", () => {
        console.log(input.value)
    })

    /*input2.addEventListener("change", () => {
        console.log(input2.value)
    })*/

    let tabella = document.createElement("table");
    let rigaIntestazione = document.createElement("tr");
    let colonna1Intestazione = document.createElement("th");
    colonna1Intestazione.textContent = "Time";
    rigaIntestazione.appendChild(colonna1Intestazione);
    let colonna2Intestazione = document.createElement("th");
    colonna2Intestazione.textContent = "Temperatura";
    rigaIntestazione.appendChild(colonna2Intestazione);
    tabella.appendChild(rigaIntestazione);
    document.body.appendChild(tabella);

    let pulsante = document.createElement("button")
    pulsante.textContent = "Invio"
    document.body.appendChild(pulsante)

    pulsante.addEventListener("click", async () => {
        
        let risultato = await meteoNuoro (input.value, input2.value);
        
    })

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
async function recuperoDatiOpenMeteo(latitude, longitude) {//INSERISCO I DUE PARAMETRI LONG E LAT DENTRO LA MIA FUNZIONE
    return await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`//AL POSTO DI METTERE I DUE DATI NUMERICI, SCRIVO I PARAMERI DENTRO LE GRAFFE CON IL $ 
    )
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .catch((error) => (document.body.textContent = error.status));
}

