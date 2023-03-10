//console.log("--INIZIO ESERCIZI ARRAY STRINGHE");

/*

1. Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 
2. Scrivere un programma che verifica  se due stringhe sono palindrome 
3. Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti
   es. mare in categoria → la parola mare non esiste in categoria
4. Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
5. Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)


*/ 

//ES.1: QUANTE 'E' CI SONO NELLA PAROLA precipitevolissimevolmente
console.log(" ES.1: ")
let i = 0;
let stringaPrec = "precipitevolissimevolmente";
let contaE = 0;

while(i < stringaPrec.length){
    
    if(stringaPrec[i] == "e"){
        contaE ++;
    }
i++;
}

console.log("Nella parola precipitevolissimevolmente ci sono tot e: " + contaE)


//ES.2: Scrivere un programma che verifica  se due stringhe sono palindrome 
console.log(" ES.2: ")
let parPal = "radar";
let b = true;

i = 0;
while(i < parPal.length/2){
    if (parPal[i] !== parPal[parPal.length - i - 1]){
        b = false;
    } 
i++;
}
if ( b == true){
    console.log("Radar è palindroma")
} else{
    console.log("Radar non è palindroma")
}

parPal = "mondo";
b = true;

i = 0;
while(i < parPal.length/2){
    if (parPal[i] !== parPal[parPal.length - i - 1]){
        b = false;
    } 
i++;
}
if ( b == true){
    console.log("Mondo palindroma")
} else{
    console.log("Mondo non è palindroma")
}

parPal = "emme";
let parInv = "";
let char;

//seconda versione
console.log(" SECONDA VERSIONE")
i = parPal.length - 1;
while(i >= 0 / 2){
    char = parPal [i];
    parInv = parInv + char;
i--;
} if (parPal == parInv){
    console.log("Emme è Palindroma ")
} else {
    console.log("Emme non è Palindroma ")
}
    
//ES.3: Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa 
// es. cat in categoria, scafo in piroscafo, mente in palesemente
console.log(" ES.4: ")
let stringaA = "piroscafo";
let stringaB = "scafo";
let bool = false;
//let stringaC = "";

i = 0;
while(i < stringaA.length){
    if(stringaA[i] == stringaB[0]){
        for(j = 1; j < stringaB.length; j++){ // j=1 -> parto direttamente dalla seconda lettera, dato che la prima ce l abbiamo già
            if(stringaA[i + j] == stringaB[j]){ // stringaA[i + j] -> fa ripartire il ciclo da dove si era fermato nel primo while
                bool = true;
            } else {
                bool = false;
            }
        }
    } 
i++;
}
if(bool){
    console.log("E' contenuto");
} else {
    console.log("Non è contenuto");
}

//esercizio che con includes
console.log("esercizio con includes")
stringaA = "piroscafo";
stringaB = "scafo";


    if(stringaA.includes(stringaB)){
        console.log("Piroscafo include scafo")
    }else {
        console.log("Piroscafo non include scafo")
    }

console.log(" 2 esercizio con indexOf")
stringaA = "categoria";
stringaB = "cat";

    console.log(stringaA.indexOf(stringaB))
    if(stringaA.indexOf(stringaB) !== -1){
        console.log("categoria include cat")
    }else {
        console.log("categoria non include cat")
    }



/*ES.4: Scrivere un programma che prenda una stringa come input e restituisca 
        la stessa stringa con i caratteri in ordine inverso.*/
console.log(" -- ES: 4: -- ")

let stringaC = "elefante";
let stringaD = "";

i = stringaC.length - 1;
while(i >= 0){
    stringaD += stringaC[i]
    //console.log(stringaC[i]);
i--;
}
console.log(stringaD)

//versione ja
console.log("-- VERSIONE CON FUNZIONI JS --")
stringaC = "elefante";
stringaD = "";

console.log(stringaC);
console.log(...stringaC);
console.log([...stringaC]);
console.log([...stringaC].reverse());
stringaD = [...stringaC].reverse().join("");
console.log(stringaD);

//ALTRA VERSIONE
/*console.log("ALTRA VERSIONE")
console.log(stringaD = String(Array(...stringaC).reverse()))
stringaD = String(Array(...stringaC).reverse().replaceAll(",", ""));
console.log(stringaD)*/


/*ES.5: Scrivere un programma che prenda due stringhe come input e restituisca 
        una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio.*/

console.log(" -- ES.5: -- ")
let stringaE = "ciao";
let stringaF = "mondo";
let stringaG = "";

i = 0;
while(i < stringaE.length, i < stringaF.length){
    stringaG = stringaE + " " + stringaF;
i++;
}
console.log(stringaG)

console.log(" -- ALTRA VERSIONE -- ")
stringaE = "ciao";
stringaF = "pippo";
stringaG = stringaE + " " + stringaF;

console.log(stringaG)

/*stringaA = [];

stringaA.splice(0, 0, "ciao");
stringaA.splice(0, 0, "mondo");


console.log("")*/
/*
stringaE = ["ciao"];
stringaF = ["mondo"];
stringaG = [];

i = 0;
while(i < stringaE.length){
    stringaG.push(stringaE[i]);
    i++;
}
i = 0;
while(i < stringaF.length){
    stringaG.push(stringaF[i]);
    i++;
} 
let stringaGInStringa = stringaG.toString()
console.log(stringaG)
console.log(stringaGInStringa)*/

//ES.7: SCRIVERE UNA FUNZIONE CHE ACCETTI UNA STRINGA COME INPUT E RESTITUISCA 
//      NUOVA STRINGA CHE CONTIENE SOLO LE VOCALI PRESENTI NELLA STRINGA ORIGINALE.
console.log(" ES.7: ")
/*let vocali = ["a", "e", "i", "o", "u"]
stringaA = "animali";
stringaB = "";

for(i = 0; i < stringaA.length; i++){
    if(stringaA[i] == vocali[i]){
        console.log(stringaB)
    } 
}
console.log(stringaB)*/

stringaA = "animali";
stringaB = "";

for(i = 0; i < stringaA.length; i++){
    if(stringaA[i] == "a" || stringaA[i] == "e" || stringaA[i] == "i" || stringaA[i] == "o" || stringaA[i] == "u"){
        stringaB += stringaA[i];
        /*if(stringaB[i].includes("a", "e", "i", "o", "u")){

        } else{
            stringaB += stringaA[i];
        }*/
    } 
}
console.log(stringaB)

/*ES.8: SCRIVERE UNA FUNZIONE CHE ACCETTI DUE STRINGHE COME INPUT E RESTITUISCA
        UNA NUOVA STRINGA CHE CONTIENE SOLO I CARATTERI COMUNI ALLE DUE STRINGHE.*/
//VERSIONE 1 -> SENZA ESCLUDERE I DUPLICATI 
        
stringaA = "papavero";
stringaB = "";

for(i = 0; i < stringaA.length; i++){
    if(stringaA[i] == "a" || stringaA[i] == "e" || stringaA[i] == "i" || stringaA[i] == "o" || stringaA[i] == "u"){
        stringaB += stringaA[i];
    } 
}
console.log(stringaB)
        
        
        
// VERSIONE 2 -> ESCLUDENDO I DUPLICATI


for(i = 0; i < stringaA.length; i++){
    if(stringaA[i] == "a" || stringaA[i] == "e" || stringaA[i] == "i" || stringaA[i] == "o" || stringaA[i] == "u"){
        stringaB += stringaA[i];
    } if(stringaA.includes("a","e","i","o","u")){

    }else{
        stringaB += stringaA[i];
    }

}
console.log(stringaB)


/*ES.9: SCRIVERE UNA FUNZIONE CHE ACCETTI UN ARRAY DI STRINGHE COME INPUT E 
        RESTITUISCA LA STRINGA PIU LUNGA PRESENTE NELL' ARRAY */

/*ES.10: SCRIVERE UNA FUNZIONE CHE ACCETTI UNA STRINGA COME INPUT E RESTITUISCA UNA
        NUOVA STRINGA IN CUI LE VOCALI SONO SOSTITUITE DA UN CARATTERE SPECIALE E 
        LE CONSONANTI SONO CONVERTITE IN LETTERE MAIUSCOLE */

