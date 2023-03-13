//1) Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 

/*// stesso meccanismo di es. 6) ripasso del file script-agnese.js: Stampare quante volte compare il numero 2 → 2
//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];
console.log("-- esercizio 6) ripasso con for-->")

let cont2 = 0;
for(i=0;i<array.length;i++){
    if(array[i] == 2){
        cont2 = cont2 + 1
    }
}
console.log(cont2) */
console.log("-- 1) esercizio STRINGHE -->")

let cont2 = 0;
let array = "precipitevolissimevolmente"

for(i=0; i<array.length;i++){
    if(array[i] == "e" ) {
        cont2 = cont2 + 1
    }
}

console.log(cont2)



//2) Scrivere un programma che verifica  se due stringhe sono palindrome 

/*   // 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”
console.log("-- esercizio 17)--> ")

i = 0;
cont = 0;
array2 = [ 1, 2, 2, 2, 1] 

while (i < array2.length / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - 1 - i]) {
        cont++
    }
    i++;
}

if (cont == array2.length / 2 || cont == Math.ceil(array2.length / 2)) {
    console.log("è palindromo");
} else{
    console.log("non è palindromo");
}

*/


console.log("-- 2) esercizio STRINGHE --> ")


i = 0;
cont = 0;
array2 = "anna"

while (i < array2.length / 2) {
    // se lunghezza è pari
    if (array2[i] === array2[array2.length - 1 - i]) {
        cont++
    }
    i++;
}

if (cont == array2.length / 2 || cont == Math.ceil(array2.length / 2)) {
    console.log("è palindromo");
} else{
    console.log("non è palindromo");
}


//3) Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti
//es. mare in categoria → la parola mare non esiste in categoria
console.log("-- 3) esercizio STRINGHE --> ")

 cont2 = 0;
 array = "piroscafo"

for(i=0; i<array.length;i++){
    if(array[i] == "scafo" ) {
        cont2 = cont2 + 1
    }
}

console.log(cont2)





//4) Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
console.log("-- 4) esercizio STRINGHE --> ")
array = "scafo"

for(let i=array.length - 1; i>=0; i--){
    console.log(array[i]);
}
console.log(array)
//5) Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
