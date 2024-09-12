window.addEventListener("load",async ()=> {
    document.body.style.margin="3rem"
    let ilat=document.createElement("input")
    ilat.style.margin="1rem"
    let ilong=document.createElement("input")
    let submit=document.createElement("button")
    submit.setAttribute("id","submit")
    ilat.setAttribute("placeholder","latitudine")
    ilong.setAttribute("placeholder","longitudine")
    document.body.appendChild(ilat) //ilong,submit
    document.body.appendChild(ilong)
    document.body.appendChild(submit)
    submit.textContent="submit"
    
    let latitudine=""
    let longitudine=""
    submit.addEventListener("click",async function () {
        latitudine=ilat.value
        longitudine=ilong.value

        

    let risultato= await funzioneRecuperoDati(latitudine,longitudine)

    /* console.log(risultato)
    console.log(risultato.hourly.time)
    console.log(risultato.hourly.temperature_2m) */
   
    let atime=risultato.hourly.time
    let atemp=risultato.hourly.temperature_2m
    let tab=document.createElement("tr")
    
    document.body.appendChild(tab)
    let tabtime=document.createElement("th")
    let titolotime= document.createTextNode("time")
    let tabtemp=document.createElement("th")
    let titolotemp=document.createTextNode("temperature")
    tabtime.appendChild(titolotime)
    tabtemp.appendChild(titolotemp)
   
    tab.appendChild(tabtemp)
    tab.appendChild(tabtime)
    tabtime.style.border="1px solid black"
    tabtemp.style.border="1px solid black"
    
    





    for (let i = 0; i < atime.length; i++) {
        
        let nriga=document.createElement("tr")
        let tdt=document.createElement("td")
        let tdti=document.createElement("td")
        document.body.appendChild(nriga)
        nriga.appendChild(tdt)
        tdt.style.padding="0.5rem"
        tdti.style.padding="0.5rem"
        nriga.appendChild(tdti)
        tdt.textContent=atemp[i]+" °C"
        tdti.textContent=atime[i]
        tdt.style.border="1px solid black"
        tdti.style.border="1px solid black"

        
    };
    
})
    
})

/* async function funzioneRecuperoDati() {
    return await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&hourly=temperature_2m")
    .then((response)=>{
        if (response.ok) {
            return response.json()     
        }
            return Promise.reject(response)
    })
    .catch((error) => (document.body.textContent = error.status));
      
}
 */
async function funzioneRecuperoDati(latitudine,longitudine) {
    return await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitudine}&longitude=${longitudine}&hourly=temperature_2m`)
    /* .then((response)=>console.log(response)) */
    .then((response)=> {return response.json()})
    /* .then((response)=>console.log(response.json())) */
    .catch((error)=>console.log(error))
      
}