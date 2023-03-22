window.addEventListener("load", () => {
    let numero = 3
    controlloPari(numero)
        .then((resolve)=> console.log(resolve))
        .catch((error) => console.log(error))
        .finally(() => console.log("la gestione della promessa è conclusa"))
})

async function controlloPari(numero){
    if(numero %2 == 0){
        return "Il numero è pari";
    }else{
        return "Il numero è dispari";
    }
}