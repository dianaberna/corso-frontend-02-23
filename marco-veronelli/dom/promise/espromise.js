window.addEventListener("load",async ()=> {
    let risultato= await funzioneRecuperoDati()
    console.log(risultato)

    
})

async function funzioneRecuperoDati() {
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&hourly=temperature_2m")

    .then((response)=>response.json())
    .then((response)=>{return response})
 
    .catch((error) => (console.log(error.status)));

}
