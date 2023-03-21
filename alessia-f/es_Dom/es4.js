
window.addEventListener("load", function (){
    let arearisultato = document.createElement("input")
    arearisultato.setAttribute("type","text")
    document.body.appendChild(arearisultato)

    let table = document.createElement('table');
    let thead = document.createElement('thead'); 
    let tbody = document.createElement('tbody');

    document.body.appendChild(table)
    table.appendChild(thead);
    table.appendChild(tbody);
    



    //riga numeri da 7 a 9   
    let riga79 = document.createElement("tr")
    tbody.appendChild(riga79)

    //tasto 7    
    let tasto7 = document.createElement("button")
    tasto7.textContent = "7"
    tasto7.id="tasto7"
    riga79.appendChild(tasto7)

    //tasto 8
    let tasto8 = document.createElement("button")
    tasto8.textContent = "8"
    riga79.appendChild(tasto8)

    //tasto 9
    let tasto9 = document.createElement("button")
    tasto9.textContent = "9"
    riga79.appendChild(tasto9)

    //tasto /
    let tastodiviso = document.createElement("button")
    tastodiviso.textContent = "/"
    riga79.appendChild(tastodiviso)





    //riga numeri da 4 a 6    
    let riga46 = document.createElement("tr")
    tbody.appendChild(riga46)

    //tasto 4    
    let tasto4 = document.createElement("button")
    tasto4.textContent = "4"
    riga46.appendChild(tasto4)

    //tasto 5
    let tasto5 = document.createElement("button")
    tasto5.textContent = "5"
    riga46.appendChild(tasto5)

    //tasto 6
    let tasto6 = document.createElement("button")
    tasto6.textContent = "6"
    riga46.appendChild(tasto6)


    //tasto *
    let tastoper = document.createElement("button")
    tastoper.textContent = "*"
    riga46.appendChild(tastoper)





    //riga numeri da 1 a 3    
    let riga13 = document.createElement("tr")
    tbody.appendChild(riga13)

    //tasto 1    
    let tasto1 = document.createElement("button")
    tasto1.textContent = "1"
    riga13.appendChild(tasto1)

    //tasto 2
    let tasto2 = document.createElement("button")
    tasto2.textContent = "2"
    riga13.appendChild(tasto2)

    //tasto 3
    let tasto3 = document.createElement("button")
    tasto3.textContent = "3"
    riga13.appendChild(tasto3)

    //tasto -
    let tastomeno = document.createElement("button")
    tastomeno.textContent = "-"
    riga13.appendChild(tastomeno)


    


    //riga numeri 0 e + 
    let riga0 = document.createElement("tr")
    tbody.appendChild(riga0)

    //tasto 0 
    let tasto0 = document.createElement("button")
    tasto0.textContent = "0"
    riga0.appendChild(tasto0)

    //tasto punto
    let tastopunto = document.createElement("button")
    tastopunto.textContent = "."
    riga0.appendChild(tastopunto)

    //tasto uguale
    let tastouguale = document.createElement("button")
    tastouguale.textContent = "="
    riga0.appendChild(tastouguale)

    //tasto +
    let tastopiu = document.createElement("button")
    tastopiu.textContent = "+"
    riga0.appendChild(tastopiu)

    


    let pulsanti = document.getElementsByTagName("button")
    let arrayOperazioni = []


    for (let i = 0; i < pulsanti.length; i++) {
        pulsanti[i].addEventListener("click", function () {

            let testo = pulsanti[i].textContent
            arrayOperazioni.push(testo)
            arearisultato.value = arrayOperazioni.join("")

            if (pulsanti[i].textContent == "=") {

                arearisultato.value = eval(arearisultato.value.replace("=", ""))
            }
        })   
        
        pulsanti[i].style = "background-color: #EFF1F2; font-size:18px; border:none; padding: 0.25rem 2rem 0.25rem 2rem; border-radius: 5px; gap: 2rem;"
    }

        
})
