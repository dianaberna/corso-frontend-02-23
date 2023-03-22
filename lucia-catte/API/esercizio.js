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
            return response;
        })
        .then((response) => {
            console.log(response.json())
            return response.json()
        })
        .catch((error) => (console.log(error.status)));*/
 window.addEventListener("load", async function () {//essendo una funziona async  bisogna richiamarla come tale
    let risultato = await meteoNuoro()
    console.log(risultato.hourly.time)
    console.log(risultato.hourly.temperature_2m)


    let arrayOrari = risultato.hourly.time
    let arrayTemperature = risultato.hourly.temperature_2m

    let tabella = document.createElement("table")
    let rigaInt = document.createElement("tr")
    let colonnaInt = document.createElement("th")
    let colonnaInt2 = document.createElement("th")
    rigaInt.textContent = "Time"
    rigaInt.appendChild(colonnaInt)
    colonnaInt.textContent = "Temperatura"
    rigaInt.appendChild(colonnaInt2)
    document.body.appendChild(tabella)
    tabella.appendChild(rigaInt)
  
    

    for (let i = 0; i < arrayOrari.length; i++){
        let riga = document.createElement("tr")
        let colonna1 = document.createElement("td")
        colonna1.textContent = arrayOrari[i];
        riga.appendChild(colonna1);

        let colonna2 = document.createElement("td")
        colonna2.textContent = arrayTemperature[i];
        riga.appendChild(colonna2);
        tabella.appendChild(riga)

    }
 })

// funzione che restituisce i dati della fetch in formato json
 async function meteoNuoro (){
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.81&longitude=11.23&hourly=temperature_2m")
        .then((response) => response.json())
        .then((response) => {return response}) //richiamando il return bisogna richiamarlo alnche nella riga dell'await
 }


