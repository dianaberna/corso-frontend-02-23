window.addEventListener("load", async () => {

    let input = document.createElement("input")
    input.setAttribute("type", "number")
    document.body.appendChild(input)

    let input2 = document.createElement("input")
    input2.setAttribute("type", "number")
    document.body.appendChild(input2)


    let bottone = document.createElement("button")
    bottone.textContent = "Cliccami"
    document.body.appendChild(bottone)


    let tabella = document.createElement("table")
    document.body.appendChild(tabella)

    let riga = document.createElement("tr")
    tabella.appendChild(riga)

    let colonna1 = document.createElement("td")
    riga.appendChild(colonna1)
    colonna1.textContent = "Time"

    let colonna2 = document.createElement("td")
    riga.appendChild(colonna2)
    colonna2.textContent = "Temperatura"

    bottone.addEventListener("click", async () => {
        let risultato = await RecuperoDati(input.value, input2.value);
        console.log(risultato)
        console.log(risultato.hourly.time)
        let ArrayTime = risultato.hourly.time
        console.log(risultato.hourly.temperature_2m)
        let ArrayTemp = risultato.hourly.temperature_2m

        for (i = 0; i < ArrayTime.length; i++) {
            let nuovaRiga = document.createElement("tr")
            let colonna1 = document.createElement("td")
            nuovaRiga.appendChild(colonna1)
            let colonna2 = document.createElement("td")
            nuovaRiga.appendChild(colonna2);
            colonna1.textContent = ArrayTime[i];
            colonna2.textContent = ArrayTemp[i];
            tabella.appendChild(nuovaRiga)

        }

        console.log(input.value)
        console.log(input2.value)
    })




});


async function RecuperoDati(latitude, longitude) {
    return await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
        .then((response) => {
            console.log(response)
            return response.json()
        })

        .catch((error) => (console.log(error.status)));

}










