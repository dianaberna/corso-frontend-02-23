let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

// 1 - Stampare tutti gli elementi dell’array 
console.log(array);

let ind = 0;
while(ind <= array.length -1){
        console.log("Stampa dell'Array" + ind)
        ind++;
}

// 2 - Stampare la somma di tutti gli elementi dell’ array 

let sommaContenuto = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array [8] + array[9];
console.log("Prima funzione di somma dell'Array =" + sommaContenuto);


let indice = 0;
let SommaContenuto2 = 0;

while (indice < array.length) {
    SommaContenuto2 = SommaContenuto2 + array[indice];
    indice++;
}
console.log("Seconda funzione di somma dell'Array con while =" + SommaContenuto2);


// ind = 0;
// let somma = 0;
// while(ind < array.length){
//         if(array[ind] > 0 ){
//             somma = somma + array[ind];
//         }
//         console.log(array[ind])
//         ind++;
// }


// 3 - Stampare la somma dei soli elementi positivi















//4 - Stampare la somma dei soli elementi dispari 

ind = 0;
let sommaDispari = 0;

for(let ind = 0; (ind < array.length);ind++){
    if(array[ind] % 2 !== 0)// array[ind] % 2 == 1 ||  array[ind] % 2 == -1
    {
        sommaDispari = sommaDispari + array[ind];
    }
}
console.log("La somma dei dispari è uguale a : " + sommaDispari)



// 5 Stampare la somma dei soli elementi in posizione pari
// if % 2
// ind 
// somma for
//stampa somma
ind = 0;
let sommaPari = 0;

//sto sommando l'elemento dell'array nella posizione (ind)
while(ind < array.length){
    if(ind % 2 == 0){
        sommaPari = sommaPari + array[ind];
    }
    ind++;
}
   
console.log("Questa è la somma Pari : " + sommaPari)


//ind=0;
// somma = 0;
/* while(ind < array.lenght){
        somma = somma + array[ind];
        ind = ind + 2;
}
*/


// 6 - Stampare quante volte compare il numero 2 
ind = 0;
SommaDue = 0;

while(ind < array.length){
        if(array[ind] == 2){
        SommaDue++;          // o SommaDue + 1 (vale come incremento)
        }ind++;
}

console.log("Questa e la somma dei 2 nell'array : " + SommaDue)


// 7 - Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array 

let conto = 0;

for(let i = 0; i < array.length; i++){
        if(array[i] >= 0){
                conto = conto + 1;
        }
}
console.log("Questi sono i numeri positivi = " + conto);





// 8 - Stampare il numero massimo (senza usare funzioni matematiche)

// array = [ -2, -6, -9, -10, -2, -3, -7, -2, -5, -1];

let max = array[0];

for(let i = 0; i < array.length; i++){
        if (array[i] > max){
                max = array[i];
        }
}
console.log("Questo è il Max : " + max );



// 9 - Stampare il numero minimo

let min = 0;

for(let i = 0; i < array.length; i++){
        if (array[i] < min){
                min = array[i];
        }
}
console.log("Questo è il minore : " + min)



// 10 - Inserire in un nuovo array solo gli elementi negativi 

let NewArray = []
ind = 0;

while(ind < array.length){
        if(array[ind] < 0 ){
        NewArray.push(array[ind])       
        }
        ind++
}

console.log("Questo è il NewArray degli elementi negativi = " + NewArray)



// 11 - Creare (e stampare) un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato 🤯 → arrayNuovo=[4, 12, 18, 20, -4, -6, 0, 4, 10, 2] 

//let array = [2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

let DoppioArray = []
ind = 0 ;

while(ind < array.length){
        DoppioArray.push(array[ind] * 2)
        ind++;
}
console.log("Questo è il DoppioArray = " + DoppioArray)



// 12 - Creare (e stampare) un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato 🤯 🤯 → [2, 6, 9, 10, -2, -3, 0, 2, 5, 1, 2, 6, 9, 10, -2, -3, 0, 2, 5, 1]

let sequence = 0;
let DoubleArray = []

for (let ind = 0; ind < array.length; ind++){
        DoubleArray[ind] = array[ind];
        DoubleArray[array.length + ind] = array[ind];
        console.log(ind, DoubleArray[ind],array.length + ind, DoubleArray[array.length + ind])
}

console.log("Queste sono array in sequenza = " + DoubleArray);



// 13 - Stampare al contrario gli elementi dell’array → 1, 5, 2, 0, -3, -2, 10, 9, 6, 2 🙂


for (let ind = array.length - 1; ind >= 0; ind--){
        console.log("Questa è l'array al contrario : " + array[ind])
}


// 14) Creare un array3 con la somma degli elementi dell’array1 e dell’array2 → [5, 4, 4, 7, 4]   


let Arr1 = [1,2,2,3,2,2]
let Arr2 = [4,2,2,4,2,2,7]

let ArrResult = []


for(let i = 0; i < Arr1.length || i < Arr2.length; i++){
        if(Arr2[i] && Arr1[i]){
                ArrResult.push(Arr1[i] + Arr2[i]);
        }else if (!Arr1[i]){
                ArrResult.push(Arr2[i]);
        }else{
                ArrResult.push(Arr1[i]);
        }
        
}


console.log("Questa è la somma di due Array : " + ArrResult)

ArrResult = []

if(Arr1.length > Arr2.length){
        for(let i = 0; i < Arr1.length; i++){
        ArrResult.push(Arr1[i] + Arr2[i]);
        }
}
else{
        for(let i = 0; i < Arr2.length; i++)
        ArrResult.push(Arr1[i] + Arr2[i]);
}

console.log("Questa è la somma di due Array : " + ArrResult)


// 15) Creare un array3 con gli elementi (non la posizione) dispari di array1 e gli elementi pari di array2 → versione1 [1,3,4,2,2,4] 	versione2 [1,4,2,2,3,4]

// let Arr1 = [1,2,2,3,2,2]
// let Arr2 = [4,2,2,4,2,4,7]
// 1,4,2,2,3,4,2,4

let ArrayElement =[];

for(i = 0; i < Arr1.length && i < Arr2.length; i++){
                if(Arr1[i] % 2 !== 0){
                        ArrayElement.push(Arr1[i]);
                }
                if(Arr2[i] % 2 == 0){
                        ArrayElement.push(Arr2[i]);
                }

}

console.log("Elementi Array = " + ArrayElement)





// 16) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1

for(i = 0; i < Arr2.length; i++){
        Arr2[i] = Arr2[i] / Arr1[Arr1.length - 1 - i];
}
console.log("Es. 16 =" + Arr2)
// array2[i] = array2[i] / array1[lunghezza-i]



// 17) Verificare se array1 e array2 dati sono palindromi come ad esempio “anna”, “radar”, “emme”, “1221”, “4224”

// let Arr1 = [1,2,2,3,2,2]
// let Arr2 = [4,2,2,4,2,4,7]
let pal = 0;

for(let i = 0; i < Arr2.length / 2; i++){
        if (Arr2[i] == Arr2[Arr2.length - 1 - i]){
                pal++;
        }
}
if (
    pal == Arr2.length / 2 ||
    pal == Math.ceil(Arr2.length / 2)
){
        console.log("Palindromo");
} else {
        console.log("Non è Palindromo")
}

// 18 - Scrivere un programma che conta quante lettere “e” ci sono nella parola precipitevolissimevolmente


let parola = "precipitevolissimevolmente"
contaL = 0;

for(let i = 0; i < parola.length; i++){
        if(parola[i] == "e"){
           contaL++;          
        }
}

console.log("Quante 'e' ci sono nella parola = " + contaL)


// 19 - Scrivere un programma che verifica se due stringhe sono palindrome

let Stringa1 = "anna"
let Stringa2 = "anna, ama, ere, anna"
let contaP = 0 ;


for(i = 0; i < Stringa1.length / 2; i++){
        if(Stringa1[i] == Stringa1[Stringa1.length - 1 - i])
        contaP++;
        console.log(Stringa1)
}
if (
        contaP == Stringa1.length / 2 ||
        contaP == Math.ceil(Stringa1.length / 2)
    ){
            console.log("Palindromo");
    } else {
            console.log("Non è Palindromo")
    }

// 20 - Scrivere un programma che verifica se esiste una stringa all'interno di un altra stringa es. cat in categoria, scafo in piroscafo, mente in palesemente → esempi corretti es. mare in categoria → la parola mare non esiste in categoria

let par1 = "Hello"
let par2 = "Hello my name is"
let contaPar = false ;

for(let i = 0; i < par1.length; i++){
        if(par1[i] == par2[0]){
                for(let a = 1 ; a < par2.length; a++){
                        if(par1[i + a] == par2[a]){
                                contaPar = true;
                        } else {
                                contaPar = false;      
                        } 
                }
        }
}if (contaPar){
        console.log("Esiste");
} else {
        console.log("Non esiste");
}

// 21 - Scrivere un programma che prenda una stringa come input e restituisca la stessa stringa con i caratteri in ordine inverso.


let Stringa3 = "Recita"
let Conta3 = 0;

for(let i = Stringa3.length - 1; i >= 0; i--){
                console.log("Stringa inversa = " + Stringa3[i])
}

// String.prototype.reverse_string = function() {
//         var s = "Cheesecake";
//         var i = this.length;
//         while (i>0) {
//             s += this.substring(i-1,i);
//             i--;
//         }
//         return s;
//     }

// console.log("Stringa inversa = " )




// 22 - Scrivere un programma che prenda due stringhe come input e restituisca una nuova stringa che è la concatenazione delle due stringhe, separate da uno spazio. (simile all’esercizio 12)


// let Str4 = "Cheese"
// let Str5 = "cake"
let alimento = [];

alimento.splice(0,0,"Cheese");
alimento.splice(1,0,"cake");
alimento.concat();

console.log("Cheese"+" "+"cake")



// for(let i = 0; i < Str4.length && i < Str5.length; i++){
// }


//<-------------------------------------------->



// <--Il Cifrario di Cesare-->

let primos = "Brute"
let nvmero = 126;

let cifrario = 0;

for(i = 0; i < primos.length && i <nvmero; i++){
        if(primos[i] == primos.charCodeAt(nvmero)){
                cifrario++;
        }
}

console.log("Il cifrario ha dato : " + cifrario)


// 1 - Scrivere programma che accetti una stringa come input e restituisca una nuova stringa
//      che contiene solo le vocali presenti nella stringa originale


let parola1 = "Precisamente"
let vocale = "";

for(i = 0; i < parola1.length; i++){
        if(     parola1[i]== "a" ||
                parola1[i]== "e" ||
                parola1[i]== "i" ||
                parola1[i]== "o" ||
                parola1[i]== "u" 
                ) {
                vocale += (parola1[i])//vocale = vocale + parola1[i]
                
        }
}
console.log("Vocali della Stringa = " + vocale)



