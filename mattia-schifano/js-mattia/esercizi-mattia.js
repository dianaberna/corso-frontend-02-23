let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log("ciao mondo")
// 1
console.log("1")
console.log("con while")
let i = 0;
while(i <= array.length){
    console.log(array [+i]);
    i++
}

//2

i= 0;
let arraySum = 0;
while(i<= array.length -1){
    arraySum= arraySum + array[i];
    i++
}
console.log("arraySum="+arraySum)
//3 Stampare la somma dei soli elementi positivi

let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sommaPositivi = sommaPositivi + array[i];
    }
}
console.log("sommaPositivi = " + sommaPositivi);


//4 Stampare la somma dei soli elementi dispari
let sommaDispari = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]%2 != 0){
    sommaDispari= sommaDispari  += array[i];
    }

}
console.log("sommaDispari= " + sommaDispari)

//5 Stampare la somma dei soli elementi in indice/posizione pari 

let sommaPari = 0;
for (let i = 0; i < array.length; i++ ){
    if(array[i]%2 == 0){
        sommaPari= sommaPari += array[i];
    }
}
console.log("sommaPari= " + sommaPari)

//6 Stampare quante volte compare il numero 2
let compare = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === 2) {
        compare++;
    }
}

console.log("compare= " + compare);

//7 Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array


let Positivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        Positivi++;
    }
}
console.log("Positivi=" + Positivi)

//8 Stampare il numero massimo (senza usare funzioni matematiche) 

let numeroMax =0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > numeroMax){
        numeroMax=array[i];
    }
    
}
console.log(numeroMax)

//9 Stampare il numero minimo 

let numeroMin = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < numeroMin) {
        numeroMin=array[i]
        
    }
    
}
console.log(numeroMin)
