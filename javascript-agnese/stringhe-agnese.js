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
/*    let countZero = 0;
    array1 = [1, 2, 2, 1];
    array2 = [4, 2, 2, 4];

for (let i = 0; i < array2.length / 2; i++) {
    if (array2[i] == array2[array2.length - 1 - i]) {
        countZero++
    }
}
if (
    countZero == array2.lenght / 2 ||
    countZero == Math.ceil(array2.lenght / 2)
) {
    console.log("Palindromo") // funziona solo se la lunghezza è pari
} else {
    console.log("Non è palindromo")
}
*/
console.log("-- 2) esercizio STRINGHE --> ")
let contatore = 0;
    array1 = "otto"
    array2 = "anna"

for (let i = 0; i < array2.length / 2; i++) {
        if (array2[i] == array2[array2.length - 1 - i]) {
            contatore++
        }
    }
if (
        contatore == array2.lenght / 2 ||
        contatore == Math.ceil(array2.lenght / 2)
    ) {
        console.log("Palindromo") 
    } else {
        console.log("Non è palindromo")
    }

//3) Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti
//es. mare in categoria → la parola mare non esiste in categoria
console.log("-- 3) esercizio STRINGHE --> ")





//4) Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.
console.log("-- 4) esercizio STRINGHE --> ")



//5) Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
console.log("-- 5) esercizio STRINGHE --> ")