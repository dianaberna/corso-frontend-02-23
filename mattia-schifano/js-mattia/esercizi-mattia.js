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
//2.5 Stampare la somma dei soli elementi positivi

let sommaPositivi = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
        sommaPositivi = sommaPositivi + array[i];
    }
}
console.log("sommaPositivi = " + sommaPositivi);


//3 Stampare la somma dei soli elementi dispari
let sommaDispari = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i]%2 != 0){
    sommaDispari= sommaDispari  += array[i];
    }

}
console.log("sommaDispari= " + sommaDispari)

//4 Stampare la somma dei soli elementi in indice/posizione pari 

let sommaPari = 0;
for (let i = 0; i < array.length; i++ ){
    if(array[i]%2 == 0){
        sommaPari= sommaPari += array[i];
    }
}
console.log("sommaPari= " + sommaPari)