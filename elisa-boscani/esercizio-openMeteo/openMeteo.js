window.addEventListener("load", async function () {
  let input = document.createElement("input");
  document.body.appendChild(input);
  input.setAttribute("type", "numbre");

  let input2 = document.createElement("input");
  document.body.appendChild(input2);
  input2.setAttribute("type", "numbre");

  input2.addEventListener("change", () => {
    console.log(input2.value);
  });

  let bottone = document.createElement("button");

  document.body.appendChild(bottone);

  let arrayTime = risultato.hourly.time;
  console.log(risultato.hourly.temperature_2m);
  let arrayTemperatura = risultato.hourly.temperature_2m;
  let tabella = document.createElement("table");
  document.body.appendChild(tabella);

  let riga = document.createElement("tr");
  tabella.appendChild(riga);

  let colonna1 = document.createElement("td");
  riga.appendChild(colonna1);
  colonna1.textContent = "tempo";

  let colonna2 = document.createElement("td");
  riga.appendChild(colonna2);
  colonna2.textContent = "temperatura";
  bottone.addEventListener("click", async () => {
    let risultato = await recuperoDati(input.value, input2.value);
    console.log(risultato);
    console.log(risultato.hourly.time);
    console.log(input.value);
    console.log(input2.value);

    for (let index = 0; index < arrayTime.length; index++) {
      let nuovaRiga = document.createElement("tr");
      tabella.appendChild(nuovaRiga);
      let colonna1 = document.createElement("td");
      nuovaRiga.appendChild(colonna1);
      let colonna2 = document.createElement("td");
      nuovaRiga.appendChild(colonna2);
      colonna1.textContent = arrayTime[index];
      colonna2.textContent = arrayTemperatura[index];
    }
  });
});
let latitude;
async function recuperoDati(latitude, longitude) {
  return await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=$(latitude)41.89&longitude=$(longitude)12.51&hourly=temperature_2m`
  )
    .then((response) => response.json())

    .then((response) => {
      return response;
    });

  /* .catch((error) => console.log(error.status)); */
}
