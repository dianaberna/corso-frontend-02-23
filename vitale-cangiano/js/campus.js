window.addEventListener("load", async () => {
    let risultato = await meteo();
    console.log("risultato "+risultato);
    let bod = document.querySelector("body");
    let maggiorenniArr = risultato.content.maggiorenni;
    console.log(maggiorenniArr);

    for (let i = 0; i < maggiorenniArr.length; i++) {
        let table = document.querySelector("table");
        let tr = document.createElement("tr");
        tr.setAttribute("id", maggiorenniArr[i].maggiorenniUUID)
        let td = document.createElement("td");
        let tdT = document.createElement("td");
        let elimnaButton = document.createElement("button");
        elimnaButton.setAttribute("id", "elimina")
        elimnaButton.textContent = "elimina";
        td.innerHTML = maggiorenniArr[i].nome;
        tdT.innerHTML = maggiorenniArr[i].cognome;
        table.appendChild(tr);
        tr.appendChild(td);
        tr.appendChild(tdT);
        tr.appendChild(elimnaButton);
    }
    let listButton = document.querySelectorAll("#elimina");
    console.log(listButton)
    for (let i = 0; i < listButton.length; i++) {
        listButton[i].onclick = function () {
            console.log("UUID " + this.parentNode.id)
            const params = this.parentNode.id;
            let url = "http://localhost:8080/maggiorenne/uuid";
            let res = delet(url, params);
            console.log(res);
            let p = document.querySelector("p");
            p.innerHTML = "eliminato " + res.content.maggiorenne.cognome;




            this.parentNode.remove();
        }
    }


});


async function delet(url, params) {
    console.log(params);
    return await fetch(url + "?UUID=" + params, {
        method: "POST",
        //body: JSON.stringify(params),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((response) => {
            console.log(response)
            return response
        })
        .then((response) => {
            //console.log(response.json())
            return response.json()
        })
        .catch((error) => (console.log(error.status)));
}





async function meteo() {

    let response = await fetch("http://localhost:8080/maggiorenne/getAll");

    if (response.ok) { // se l'HTTP-status è 200-299
        // ricevi il body della risposta (il metodo sarà spiegato di seguito)
        let json = await response.json();
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }

}

