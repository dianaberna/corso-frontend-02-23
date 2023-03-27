window.addEventListener("load", () => {
    let numero = 2
    //console.log(controlloPari(numero)) 
    controlloPari(numero)
        .then((resolve)=> console.log(resolve))
        .catch((error) => console.log(error))
        .finally(() => console.log("la gestione della promessa è conclusa"))

    // then -> andiamo a leggere il risultato positivo
    // catch -> andiamo a catturare l'errore (risultato negativo)
    // finally -> eseguire un'operazione alla fine sia se il risultato è positivo sia se negativo

    
})

// dice al browser che questa funzione impiegherà del tempo ad essere eseguita
// e promette di restituire un risultato (positivo=dati o negativo=error)
// positivo -> è pari, negativo -> dispari
async function controlloPari(numero){
    if(numero % 2 == 0){
        return "Il numero è pari";
    }else{
        return "Il numero è dispari";
    }
}