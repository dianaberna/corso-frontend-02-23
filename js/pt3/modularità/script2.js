console.log("ciao2")

/* quando il browser legge delle import all'interno di un file
    (il browser si aspetta di trovarli dato che abbiamo messo 
    il type="module") prima di tutto legge queste righe poi tutto
    il resto del file
*/
import funzione1 from "./script.js"
import {funzione2 as f2, funzione3} from "./script.js"
import * as f3 from "./script3.js"

funzione1()
// funzione2() --> abbiamo assegnato un alias  
f2()
funzione3()

f3.funzione1file3()

/* console.log(variabile) */