// con funzione normale 
window.addEventListener("load", () => {
    // utilizziamo il meccanismo delle promise per verifica se un numero è pari o dispari 
    // se è pari la promessa è andata a buon fine
    // se dispari la promessa non è andata a buon fine
    let numero = 2;
    //console.log(nuovaPromessa(numero))

    nuovaPromessa(numero)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        .finally(() => console.log("la gestione della promessa è conclusa"))
})


function nuovaPromessa (nuovoNumero) {
    return new Promise((resolve, reject) => {
        // qui più avanti avremo la richiesta dei dati da un url
        if(nuovoNumero % 2 == 0){
            //setTimeout(() => resolve("Il numero è pari"), 1000)
            resolve("Il numero è pari")
        }else{
            // timer che esegue quello che c'è all'interno dopo 1000ms
            setTimeout(() => reject("Il numero è dispari"), 2000)
            //reject("Il numero è dispari")
        }
    })
}


/* 
    let nuovaPromessa = (numero) => {
    return new Promise((resolve, reject) => {
        // qui più avanti avremo la richiesta dei dati da un url
        if(numero % 2 == 0){
            //setTimeout(() => resolve("Il numero è pari"), 1000)
            resolve("Il numero è pari")
        }else{
            // timer che esegue quello che c'è all'interno dopo 1000ms
            setTimeout(() => reject("Il numero è dispari"), 1000)
            //reject("Il numero è dispari")
        }
    })
    } 
*/

// con arrow function
/* window.addEventListener("load", function(e) {

}) */