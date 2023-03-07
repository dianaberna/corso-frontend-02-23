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

//5 Stampare la somma dei soli elementi i pari 

 let sommaPari = 0;
 for (let i = 0; i < array.length; i++ ){
     if(array[i]%2 == 0){
          sommaPari= sommaPari + array[i];      //  <--        serve per sommare tutti i numeri
     }                                                   
 }
 console.log("sommaPari= " + sommaPari)
// 5.1 indice pari
i = 0;
somma = 0;
while (i < array.length) {
    if (i % 2 == 0) {     
        somma = somma + array[i];
    }
    i++;
}
console.log("somma="+somma)


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

let numeroMax = array [0];
for (let i = 0; i < array.length; i++) {
    if (array[i] > numeroMax){
        numeroMax=array[i];
    }
    
}
console.log(+numeroMax)

//9 Stampare il numero minimo 

let numeroMin = array [0];

for (let i = 0; i < array.length; i++) {
    if (array[i] < numeroMin) {
        numeroMin=array[i]
        
    }
    
}
console.log(+numeroMin)

// 10 Inserire in un nuovo array solo gli elementi negativi dell'array che abbiamo
i=0;
let arrayNuovo =[]
while (i < array.length) {
    if (array[i] < 0) {
        arrayNuovo.push(array[i]);
    }  
i++  
}
console.log("arrayNuovo=" + arrayNuovo)

//11 Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → [4, 12, 18, 20, -4, -6, 0, 4, 10, 2]


arrayNuovo= []
for (let i= 0; i < array.length; i++) {
   arrayNuovo[i] = array[i]*2;
    
}
console.log (arrayNuovo)

//12
arrayNuovo=[];
for (let i = 0; i < array.length; i++) {
    arrayNuovo.push(array[i])
    
}
for (let i = 0; i < array.length; i++) {
    arrayNuovo.push(array[i])
    
}
console.log(arrayNuovo)



//13 Stampare al contrario gli elementi dell’array 
let pippo= array.length

for (let i = pippo-1; i >= 0; i--){
    console.log (+array[i])
  
}