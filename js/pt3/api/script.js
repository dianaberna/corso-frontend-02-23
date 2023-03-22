window.addEventListener("load", ()=>{
    let username = "dianaberna"
    let risultato = infoGithub(username)
    console.log(risultato)
})

async function infoGithub(username) {
    let rispostaGithub = await fetch("https://api.github.com/users/"+username)
    let rispostaJson = await rispostaGithub.json()
    return rispostaJson
}