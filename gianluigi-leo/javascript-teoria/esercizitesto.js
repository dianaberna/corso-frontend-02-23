// Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 
console.log("------- 1) Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente  ----------");

const parola = "precipitevolissimevolmente";
let cont = 0;

for(let i = 0; i < parola.length; i++){
    if(parola[i] === "e" ){
        cont++;
    }
}
console.log("Nella parola ci sono:" + cont + " e");

// Scrivere un programma che verifica  se due stringhe sono palindrome 
console.log("------- 2) Scrivere un programma che verifica  se due stringhe sono palindrome --------");
let p1 = "emme";
let p2 = "emme";
let pFlag = true;
for(let i = 0; i < p1.length / 2; i++){
    if(p1[i] !== p2[p2.length -1 -i]){
        pFlag = false;
    }
}

if(pFlag == true){
    console.log("La frase è palindroma");
}
else{
    console.log("La frase non è palindroma");
}


// Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti
console.log("------- 3) Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti --------");
let str1 = "ciao mondo mondo";
let str2 = "mondo";
let isFlag = true;

for(let i = 0; i < str1.length; i++){
    if(str1[i] === str2[0]){
        for(let a = 0; a < str2.length; a++){
            if(str1[i + a] !== str2[a]){
                isFlag = false;
            }
        }
    }
}

if(isFlag == true){
    console.log("Esiste");
}
else{
    console.log("non esiste");
}



// Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
console.log("------------ 4)");
let input = "mare";
let reverseInput = "";

for(let i = input.length -1; i >= 0; i--){
    reverseInput = reverseInput + input[i];
    
}
console.log(reverseInput);



// Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
console.log("----------- 5)");
let input1 = "prova";
let input2 = "concatenazione";

let str3 = input1 + " " + input2;
console.log(str3);







