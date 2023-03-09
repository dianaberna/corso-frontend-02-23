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
i = parPal.length - 1;
while(i >= 0 ){
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


//ES.4: Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.


