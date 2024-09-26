console.log("ciao")
let array = [ 2, 6 , 9, 10, -2, -3, 0, 2, 5, 1]
console.log(array)
console.log(array[0])
let posizione = 0
while(posizione<array.length){
    console.log(array[posizione])
    posizione = posizione +1
}


let posizione2 = 0
for(posizione2=0; posizione2<array.length; posizione2=posizione2+1){
    console.log(array[posizione2])
}



let posizione3 = 0
console.log(posizione3)
let somma = 0
while(posizione3<array.length){
    console.log(array[posizione3])
    somma = somma + array[posizione3]
    posizione3 = posizione3 + 1
    // console.log(somma)
}
console.log(somma)



/* 
posizione3 = 0 la somma è 0 + 2 = 2 (somma + array[0])
posizione3 = 1 la somma è 2 + 6 = 8 
posizione3 = 2 la somma è 8 + 10 = 18 
*/ 






/*Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) 
l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]*/

array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log(array)
let arraynuovo = []
let i = 0
while(i<array.length){
    arraynuovo.push(array[i])
    i++
}
i = 0
while(i<array.length){
    arraynuovo.push(array[i])
    i++
}

console.log(arraynuovo)



array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log(array)
arraynuovo = []
i = 0
while(i<array.length){
    arraynuovo[i] = array[i]
    arraynuovo[array.length +i] = array [i]
    i++
}
console.log(arraynuovo)