let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]
console.log("ciao mondo")
// 1

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
//    arrayNuovo[i] = array[i]*2;       sporchiamo array principale 
      arrayNuovo.push(array[i]*2)
}
console.log(array)
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

//14Creare un array3 con la somma degli elementi dell’array1 e dell’array2 

 let array1 = [ 1, 2, 2, 3, 4] ;
 let array2 = [4, 2, 2, 4];
 let array3=[];
 i=0;
for(i=0; i< array1.length || i < array2.length;i++){
    if (array2[i] && array1[i]) {
        array3.push(array1[i] + array2[i])
        
    } else if (!array2[i]){
        array3.push(array1[i])

    }else{
        array3.push(array2[i])
    }
}
console.log(array3 + "array3");




//  while (i< array1.length) {
//      if (array2[i]  array1) {
//          array3[i]=array2[i] + array1[i];
//      } else{
//         array3= array1[i];
        
//      } 

    
//      i++
//  }
//  console.log(array3)

//15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]
array1 = [ 1, 2, 2, 3, 4] ;
array2 = [4, 2, 2, 4];
let array4=[];

for (let i = 0; i < array1.length; i++) {
    if(array1[i] % 2 ==1){
        array4.push(array1[i]);
    }
    if(array2[i] % 2 ==0){
        array4.push(array2[i]);
    }
}
console.log(array4)

//16  Aggiornare l’array2 con elemento uguale il suo valore diviso il valore nella posizione( lunghezza-1-posizione) dell’array1

array1 = [ 1, 2, 2, 3, 4] ;
array2 = [4, 2, 2, 4];
i=0;
while (i<array2.length) {
    array2[i] = array2[i]/ array1[array1.length-1-i];
    i++
}
console.log(array2)


//17 Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224

i=0;
array1 = [ 1, 2, 2, 3, 4] ;
array2 = [4, 2, 2, 4];
let palindromo= true;
palindromo="no palindromo"
for (let i = 0; i < array1.length/2; i++) {
    if (array1[i] !==array1[array1.length - i -1]) {
        palindromo= "fake"
        
    }

}
console.log("array1="+palindromo)

//true
palindromo= true;
for (let i = 0; i < array2.length/2; i++) {
    if (array2[i] !== array2[array2.length - i -1]) {
        palindromo= fake;
        
    }

}
console.log("array2="+palindromo)


//1 nuovo Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente 
let parola= "precipitevolissimevolmente";
let conteggio = 0;
i= 0;
for (let i = 0; i < parola.length; i++) {
    if (parola[i] === "e") {
        conteggio++;
    }
}

console.log("Il numero di lettere= " + conteggio ,"e")

//2 nuovo Scrivere un programma che verifica  se due stringhe sono palindrome





//3  Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa 

let p1 = "coraggio";
let p2 = "raggio";
let p3 = "raggio";
let conparole = 0;

console.log("non esiste in questa stringa ")
for  ( let  i  =  0 ;  i  <  p2.length ;  i ++ )  {

    if  ( p2 [ i ]  ==  p1[ conparole ] )  {
        if  ( p1[ conparole ] ) {
            conparole ++ ;
        }
    }

}
if  ( conparole  ==  p1.length )  {
    console.log ( "esiste" )

}  else  {
    console.log ( "non esiste" )

}

console.log("esiste in questa stringa ")
for  ( let  i  =  0 ;  i  <  p3.length ;  i ++ )  {

    if  ( p3 [ i ]  ==  p2[ conparole ] )  {
        if  ( p2[ conparole ] ) {
            conparole ++ ;
        }
    }

}
if  ( conparole  ==  p2.length )  {
    console.log ( "esiste" )

}  else  {
    console.log ( "non esiste" )

}


// 4 Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.

p1 = "coraggio";
let inverso= [];
let count = 0;

for (let i = p1.length - 1; i >=0; i--) {
    inverso[count] = p1[i];
    count++
}
console.log(inverso)
