function funzione1(){
    console.log("sono in funzione 1")
}

function funzione2(){
    console.log("sono in funzione 2")
}

function funzione3(){
    console.log("sono in funzione 3")
}

export default funzione1
export {funzione2, funzione3}

/*
export default funzione1  --> la funzione1 è la più importante che voglio esportare
export {funzione1, funzione2...} --> le funzione che ho verrano esportate ma ci sarà della sintassi in più
*/

console.log("ciao1")
let variabile = 1
/*
senza modularità più file js condividono lo stesso spazio -> le variabili anche se in let hanno un scope della pagina web e non dei file js
con modularità andiamo ad isolare ogni file js non permettendo più una condivisione "semplice" dello spazio ma obbligandoci ad utilizzare import/export
*/

/*

SPOILER

senza react e senza modularità 

index.html --> navbar.js, header.js, main.js, footer.js, sectionHow.js, sectionWhy.js
contatti.html --> navbar.js, formContatti.js, footer.js

in react

index.html --> index.js --> da qui importeremo tutti i nostri file js

index.js -> navbar.js, header.js, main.js, footer.js
    main.js -> sectionHow.js, sectionWhy.js
contatti.js -> navbar.js, formContatti.js, footer.js

navbar.js
header.js
main.js
    how.js
    why.js
footer.js

*/