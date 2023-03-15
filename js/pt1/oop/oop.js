/*

OOP --> Object Orientend Programming 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming

classe --> struttura che ci permette di descrivere il problema/modello reale

oggetto --> istanza della classe, cioè prendiamo la classe che è generica 
    e gli passiamo i nostri valori

*/

// classe

class Persona { // Persona è il nome della classe

    // variabili  --> proprietà della classe
    nome = ""
    cognome = ""

    constructor({nome, cognome}){
        this.nome = nome
        this.cognome = cognome
    }

    // funzioni --> metodi della classe 
    getNome(){
       return this.nome 
    }
    getCognome() {
        return this.cognome
    }
    getNomeCognome(){
        return this.nome + " " + this.cognome
    }
  
}

// oggetto 

let persona1 = new Persona({nome: "Diana", cognome: "Bernabei"})

console.log(persona1)
console.log(persona1.nome)
console.log(persona1.getNome())
console.log(persona1.getNome() + persona1.getCognome())
console.log(persona1.getNomeCognome())

// notazione ad oggetti - JSON
let datiBrutto= [ "Diana", "Bernabei"]

let dati = {nome: "Diana", cognome: "Bernabei"};
console.log(dati.nome)
console.log(dati["nome"])

let parola = "ciao"
parola.length

let array = [1, 2, 3]
array.length
console.log(typeof array)

// array di array --> array con due elementi, entrambe gli elementi sono array
let arrayGenitore = [
    [1, 3],
    [6, 3]
] 

// array di oggetti
let listaArticoli = [
    {
        titolo: "primo articolo",
        autore: "Pippo",
        data: "14/03/2023"
    },
    {
        titolo: "secondo articolo",
        autore: "Pippo",
        data: "12/03/2023"
    },
    {
        titolo: "terzo articolo",
        autore: "Pippo",
        data: "10/03/2023"
    }
]

console.log(listaArticoli)
console.log(listaArticoli[0]) 
console.log("---")
for( let i = 0; i<listaArticoli.length; i++){
    console.log(listaArticoli[i].titolo) 
    // console.log(listaArticoli[i]["titolo"])
}
console.log("---")

// articolo --> listaArticoli[i]
listaArticoli.forEach(articolo => console.log(articolo.titolo))
console.log("---")


function funzione(a, b){
    return a+b
}

function funzione(a, b){
    return a-b
}

console.log(funzione(1,2))

// Notazione ad oggetti
/* 
let esempio = {
    browsers: {
        firefox: {
            name: "Firefox",
            pref_url: "about:config",
            releases: {
                1: {
                    release_date: "2004-11-09",
                    status: "retired",
                    engine: "Gecko",
                    engine_version: "1.7",
                },
            },
        },
    },
};


console.log(esempio)
console.log(esempio["browsers"])
console.log(esempio.browsers)
console.log(esempio["browsers"]["firefox"]["name"])
console.log(esempio.browsers.firefox.name)

let esempio2 = {
    nome: "Pippo",
    animali: ["cane", "gatto", 2, 4]
}

console.log(esempio2.nome)
console.log(esempio2.animali[0])
console.log("--" + esempio2[0])
console.log(typeof esempio2)
console.log(typeof esempio2.nome)
console.log(typeof esempio2.animali)

esempio = {0: "nome", 1: "cognome", 2: "età"}
console.log(esempio[0])


// programmazione ad oggetti 
// oggetto -> variabile che può avere sia altre variabili (proprietà) ma anche delle funzioni (metodi)


// 
 */