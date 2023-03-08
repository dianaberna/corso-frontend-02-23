
/*************
 * VARIABILI *
 *************/

var a = 1;
let b = 2;
const c = 3;

console.log("ciao mondo");
console.log(a);
console.log(b);
console.log(c);

console.log(a + b + c);

/*

Differenze tra variabili

*/

//Blocco senza nome
{
    // dichiaro una variabile var(globale anche se si trova in una funzione)
    var variabile = 50;

    // dichiaro un let
    let variabileLet = 10;
}

//Scivo le due variabili e il let è errore perchè è dentro il blocco -> guardare debugger

let nuovaVariabileLet = 30;

console.log(variabile);
console.log(nuovaVariabileLet);
// console.log(varièabileLet); //Si interrompe lo script quando c'è questo errore (!ATTENZIONE)


//Mostrare i tipi delle variabili
let g = 20;
let s = "parola";
console.log(g, s);
console.log(typeof g);
console.log(typeof s);


