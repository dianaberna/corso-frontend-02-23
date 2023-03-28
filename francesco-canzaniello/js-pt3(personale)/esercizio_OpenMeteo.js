


window.addEventListener("load", async function(){

    // let inputLat = document.getElementById("latitudine")
    // let inputLong = document.getElementById("longitudine")
    

    let risultato = await recuperoDatiOpenMeteo()
    console.log(risultato)

});



async function recuperoDatiOpenMeteo(lat, lon) {
    return await fetch("https://api.open-meteo.com/v1/forecast?"+"")
        .then((response) => {
            console.log(response)
        })
.then((response) => {
            //console.log(response.json())
		return response.json()
        })
        .catch((error) => (console.log(error.status)));
}
