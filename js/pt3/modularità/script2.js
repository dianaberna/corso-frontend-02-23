console.log("file2")

import variabile from "./script4.js"

console.log(variabile)

/* quando il browser legge delle import all'interno di un file
    (il browser si aspetta di trovarli dato che abbiamo messo 
    il type="module") prima di tutto legge queste righe poi tutto
    il resto del file
*/

import funzione1 from "./script.js"
import {funzione2 as f2, funzione3} from "./script.js"
import * as f3 from "./script3.js"
import * as f5 from "./script5.js"

funzione1()
f2() 
funzione3()

f3.funzione1file3()
f5.funzione1file3()


/*

SPOILER

senza react e senza modularità 

index.html --> navbar.js, header.js, main.js, footer.js, sectionHow.js, sectionWhy.js
contatti.html --> navbar.js, formContatti.js, footer.js

in react (ha la modularità)

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