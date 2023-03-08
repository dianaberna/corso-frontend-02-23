let array = [ 2, 6, 9, 10, -2, -3, 0, 2, 5, 1];

// 1
console.log(array);

let ind = 0;
while(ind <= array.length -1){
        console.log("Stampa dell'Array" + ind)
        ind++;
}

// 2
let sommaContenuto = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array [8] + array[9];
console.log("Prima funzione di somma dell'Array =" + sommaContenuto);

let indice = 0;
let SommaContenuto2 = 0;
while (indice < array.length) {
    SommaContenuto2 = SommaContenuto2 + array[indice];
    indice++;
}
console.log("Seconda funzione di somma dell'Array con while =" + SommaContenuto2);

// 3
let sommaPari = 0;


