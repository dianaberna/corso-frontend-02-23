let es_array1 = [1, 2, 2, 3, 4];
let es_array2 = [4, 2, 2, 4];

// console.log("------- 16) --------------");
// for(let i = 0; i < es_array2.length; i++){
//     es_array2[i] = es_array2[i] / es_array1[es_array1.length -1 -i];
// }
// console.log(es_array2);

console.log("-------- 14.3) -------------");
let new_array = 0;

for(let i = 0; i < es_array1.length || i < es_array2.length; i++){
    if(es_array1[i]){
        new_array = new_array + es_array1[i];
        console.log(new_array);
    }
    if(es_array2[i]){
        new_array = new_array + es_array2[i];
        console.log(new_array);
    }
}



//Crittografare
console.log("---- Crittografare -----------");

let str5 = "ciao mondo come stai";
let new_str = "";
let codeStr = 0;
const incrementCode = 3;

for(let i = 0; i < str5.length; i++){
    if(incrementCode >= 0 && incrementCode <= 26) {
        codeStr = str5.charCodeAt(i);
        codeStr = codeStr + incrementCode;
        new_str = new_str + String.fromCharCode(codeStr);
        console.log("Ascii: " + codeStr + " -- " + "CHAR: " + new_str[i]);
    }
    else{
        console.log("Devi insererie un numero di incremento tra 0 e 26");
    }
}
console.log(new_str);






// 7) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa che contiene solo le vocali presenti nella stringa originale
console.log("-------- 7) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa che contiene solo le vocali presenti nella stringa originale -------");

const vocali = ["a", "e", "i", "o", "u"];
let new_input = "";
let input = "ciao";

for(let i = 0; i < input.length; i++){
    for(let a = 0; a < vocali.length; a++){
        // console.log(vocali[a])
        if(input[i] === vocali[a]){
            new_input = new_input + vocali[a];
        }
    }
}
console.log(new_input);



// 8) Scrivere una funzione che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri comuni alle due stringhe.
console.log("---------------- 8) Scrivere una funzione che accetti due stringhe come input e restituisca una nuova stringa che contiene solo i caratteri comuni alle due stringhe. --------------")

let input2 = "stringa1";
let input3 = "provaStr";
let new_input2 = "";

for(let i = 0; i < input2.length;  i++){
   for(let a = 0; a < input3.length; a++){
    if(input2[i] === input3[a]){
        new_input2 = new_input2 + input3[a]
    }
   }
}
console.log(new_input2);


// 9) Scrivere una funzione che accetti un array di stringhe come input e restituisca la stringa più lunga presente nell'array
console.log("---- 9) Scrivere una funzione che accetti un array di stringhe come input e restituisca la stringa più lunga presente nell'array --------");
let str_Input1 = ["rosso", "marrone", "rosa", "blu"];
let cont = 0;
let index = 0;

for(let i = 0; i < str_Input1.length; i++){
    // for(let a = 0; a < str_Input1[i].length; a++){
       
    // }
    if(cont < str_Input1[i].length){
        cont = str_Input1[i].length;
        index = i;
    }

}
console.log("La stringa piu lunga contiene: " + cont  + " caratteri ed è la stringa: " + str_Input1[index]);

// 10) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa in cui i caratteri sono ordinati in ordine crescente secondo il loro codice ASCII
console.log("---- 10) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa in cui i caratteri sono ordinati in ordine crescente secondo il loro codice ASCII ----");
let str_ascii = "contenente";
let code_ascii = 0;
let array_ascii = [0];
let cont_index = 0;

for(let i = 0; i < str_ascii.length; i++){
    // code_ascii = str_ascii.charCodeAt(i);
    // console.log(code_ascii);
    array_ascii[i] = str_ascii.charCodeAt(i);
   if(array_ascii[i] > array_ascii[i -1]){
        array_ascii[i -1] = array_ascii[i];
   }

    


}
console.log(array_ascii);


// 11) Scrivere una funzione che accetti una stringa come input e restituisca una nuova stringa in cui le vocali sono sostituite da un carattere speciale, ad esempio "*", e le consonanti sono convertite in lettere maiuscole
// 12) Scrivi una funzione che accetti una stringa come input e restituisca una nuova stringa in cui ogni parola è invertita al contrario, mantenendo l'ordine delle parole. Ad esempio, "ciao mondo" diventa "oaic odnom"
