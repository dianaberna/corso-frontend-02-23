window.addEventListener("load", async () => {
    let risultato = await recuperoDatiOpenMeteo(11.00, 12.51)
});



async function recuperoDatiOpenMeteo(latitude, longitude) {
    return await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
    )
        //.then((response) => {return response.json();}
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .catch((error) => (document.body.textContent = error.status));
}
