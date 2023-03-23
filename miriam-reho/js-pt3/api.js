window.addEventListener("load", async function (){
    let risultato = await funzioneRecuperoDati()
    console.log(risultato.hourly.time)
    console.log(risultato.hourly.temperature_2m)
    // risultato.hourly.time > array orari
    // risultato.hourly.temperature_2m > array temperature
});

//funzione che restituisce i dati fetch in formato json
async function funzioneRecuperoDati() {
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&hourly=temperature_2m")
    .then((response) => response.json())
    .then((response) => {return response})
}
