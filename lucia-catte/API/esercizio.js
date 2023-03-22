/*Creare una pagina web dove effettuare una chiamata fetch delle api di OpenMeteo https://open-meteo.com/en/docs
 e inserire i risultati in una tabella generata nel DOM.  */



 async function meteoNuoro (){
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.81&longitude=11.23&hourly=temperature_2m")
        .then((response) => {
            console.log(response)
        })
        .catch((error) => (console.log(error.status)));
 }