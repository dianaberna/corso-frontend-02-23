window.addEventListener("load", async () => {
    let risultato = await meteo();
    let bod = document.querySelector("body");
    let timeArr=risultato.hourly.time;
    console.log(timeArr);
   
    for (let i=0; i< timeArr.lenght;i++){
        console.log(risultato.hourly.time[i]);
        console.log("ciao");
    }
    

    //prendere table
    let table = document.querySelector("table");

});



async function meteo() {

    let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=40.88&longitude=14.52&hourly=temperature_2m");

    if (response.ok) { // se l'HTTP-status è 200-299
        // ricevi il body della risposta (il metodo sarà spiegato di seguito)
        let json = await response.json();
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }

}