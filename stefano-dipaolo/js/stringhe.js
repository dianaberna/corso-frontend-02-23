//Esercizio 1 Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente
console.log("Esercizio 1")
let parola = "precipitevolissimevolmente"
let cont = 0
for(let i=0; i<parola.length;i++){
    if (parola[i]== "e"){
         cont++
    }
}
console.log("Nella parola precipitevolissimevolmente ci sono", cont, "e")

//Esercizio 2 Scrivere un programma che verifica  se due stringhe sono palindrome
console.log("Esercizio 2")
let parola1="eram"
let parola2="mare"
//Controllo palidromo tra 2 stringhe
let palindromo = true
for (let i=0; i<parola2.length;i++){
    if (parola1[i]!==parola2[parola2.length-1-i]){
        palindromo = false}
}
console.log(palindromo)


//Controllo palindromo della stessa stringa
palindromo = "è palindromo"
for (let i=0; i<parola1.length/2; i++) {
    if (parola1[i] !== parola1[parola1.length-i-1]){
        palindromo = "non è palindromo"
    }
    
}
console.log(palindromo)

 palindromo = "è palindromo"
for (let i=0; i<parola2.length/2;i++) {
    if (parola2[i] !== parola2[parola2.length-i-1]){
        palindromo = "non è palindromo"
    }
    
}
console.log(palindromo)

//Esercizio 3 Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. scafo in piroscafo
console.log("Esercizio 3")
let parola3= "piro scafo"
let parola4= "scafo"
let controllo = true
for (let i=0; i < parola3.length;i++){
    if (parola3[i] === parola4[0]){
        for (let x=0; x < parola4.length; x++){
            if (parola3[i + x] !== parola4[x]){
            controllo = false
        }else{
            controllo = true
        }
    }
}
}
if (controllo){
console.log("è presente")}
else {console.log("non è presente")
}

console.log(parola3.includes(parola4))


//Esercizio 4 Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso
console.log("Esercizio 4")
parola5= "CIAO"
let parolacontrario = ""
for(let i = parola5.length -1; i>=0;i--){
    parolacontrario = parolacontrario + parola5[i]
}
console.log(parolacontrario)
/*
let j=0
for(let i = parola5.length -1; i>=0;i--){
    parolacontrario[j] =parola5[i]
    j++
}
*/

//Esercizio 5 Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)
console.log("Esercizio 5")
parola1= ["ciao"]
parola2= ["mondo"]
parola3= [""]

for (i=0; i<parola2.length;i++){
    parola3[i]=parola3[i]+parola1[i]
    parola3[parola2.lenght]=parola[i]+parola2
}

console.log(parola3)


let string = "ciao"
let string2 = "mondo"
console.log(string.concat(string2))
console.log(`${string}${string2}`)
 
//Esercizio 6 CIFRARIO DI CESARE
console.log("Esercizio 6")

let stringa="mare"
let contenitore = ""
spostamento=3
stringa.charCodeAt()

for (let i=0; i< stringa.length; i++){
    contenitore += (String.fromCharCode(stringa.charCodeAt(i)+spostamento))
}
console.log(contenitore)




//Esercizio 7 Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa che contiene solo le vocali presenti nella stringa originale
console.log("Esercizio 7")
stringa = "che bella giornata" //eeaioaa
nuovastringa = ""

for (i = 0; i < stringa.length; i++){
    if (stringa[i]==="a" ||stringa[i]==="e"||stringa[i]==="i"||stringa[i]==="o"||stringa[i]==="u") {
        nuovastringa = nuovastringa+stringa[i]
        
    }
}
console.log(nuovastringa)

//Esercizio 8 scrivere una funzione che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri comuni alle due stringhe.
console.log("Esercizio 8")
parola1= "macchina"
parola2= "matita"
parola3= ""

for (i = 0; i < parola1.length || i < parola2.length; i++){

}




