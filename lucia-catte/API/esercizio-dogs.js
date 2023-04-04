window.addEventListener("load", function(){

})
// funzione che restituisce i dati della fetch in formato json
async function dogs (){
    return await fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json()) 
        .then((response) => {return response}) //richiamando il return bisogna richiamarlo anche nella riga dell'await
 }

 