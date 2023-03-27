window.addEventListener("load", async () => {
    // il browser legge il codice js e all'evento load sa che ci sarà una funzione asincrona (async)
    let username = "dianaberna";
    let imgAvatar = document.getElementById("avatar");

    let risultato = await infoGithub(username); // mettiamo la chiamata della funzione asincrona in await, in questo modo js sa che è questa la funzione che richiede del tempo
    console.log(risultato);
    imgAvatar.setAttribute("src", risultato.avatar_url);
});

// voglio che la funzione infoGithub sia eseguita in modo asincrono rispetto al flusso del file quindi metto la parola chiave async
// js/browser sa che prima o poi ci sarà questa funzione che richiede tempo

async function infoGithub(username) {
    // await --> il modo per dire a js che quello che c'è subito dopo richiede fisicamente del tempo per restituire un risultato
    return await fetch("https://api.github.com/users/" + username)
        .then((response) => {
            console.log(response);
            if (response.ok) {
                // response.json() -> converte la risposta in formato json prendendo solo la parte di dati interessanti per noi
                return response.json();
            }
            // se mi trovo qui è perché la chiamata non è andata a buon fine, quindi nella risposta ho un ok=false
            // Promise = tipo di dato Promise
            // reject è una funzione del tipo di dato Promise utilizzata per segnalare un errore (situazione negativa)
            // response -> è il risultato della promise
            return Promise.reject(response);
        })
        .catch((error) => (document.body.textContent = error.status));
}

// il return di riga 15 restutuisce all'esterno il risultato della fetch
// await davanti alla fetch -> comunica a js/browser che è quella subito dopo la funzione che richiede tempo
// fetch -> crea una promessa/promise di restituire un risultato dal collegamento con l'url passato come parametro/argomento
// .then -> gestione la risposta (Response) del fetch 
// return di riga 20 restituisce il risultato fuori dalla fetch, per poi essere rispedito fuori con il return precedente
// Promise.reject(response) in riga 27 sarà proprio quello che ritroviamo in error a riga 29
// .catch -> catturiamo l'errore che abbiamo creato a riga 27 (ovviamente solo se non siamo entrati nell'if response.ok)