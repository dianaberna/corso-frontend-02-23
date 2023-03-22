window.addEventListener("load", async () => {
    let username = "dianaberna";
    let imgAvatar = document.getElementById("avatar")
    let risultato = await infoGithub(username);
    console.log(risultato)
    imgAvatar.setAttribute("src", risultato.avatar_url)
});

// voglio che la funzione infoGithub sia eseguita in modo asincrono rispetto al flusso del file

async function infoGithub(username) {
    // await --> il modo per dire a js che quello che c'è subito dopo richiede fisicamente del tempo per restituire un risultato
    return await fetch("https://api.github.com/users/" + username)
        .then((response) => {
            console.log(response)
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response); 
        })
        .then((response) => console.log(response))
        .catch((error) => (document.body.textContent = error.status));
}
