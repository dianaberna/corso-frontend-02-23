

//<-------Moltiplicazione-------->

// Es. 1

function molt(a, b){   
    const somma = a * b;
    return somma; 
}
//Richiamo la funzione
// Primo Risultato
let Risultato = molt(5,6);
console.log("Primo Risultato = " + Risultato);
// Secondo risultato
let Risultato2 = molt (-3,-6);
console.log("Secondo Risultato = " + Risultato2);
// Terzo risultato
let Risultato3 = molt(7,3);
console.log("Terzo Risultato = " + Risultato3);


//Es. 2

function data(giorni){
    let a = 0;
    let c = 365;
    if(giorni > 0){
        giorni = giorni * c;
    }
    console.log(giorni);
    return giorni;
}

data(13);
console.log("Quanti giorni ho? Risultato = " + data(31));

// Es. 3

// Crea una funzione che accetta un numero come unico argomento
// e restituisce true se è minore o uguale a zero, 
// altrimenti restituisce false.



function MinOrPlus(vero){
    if(vero <= 0){
        return true
    }else{
        return false
    }
}

console.log("Questo numero è = " + MinOrPlus(-10))


//Es. 4

function Animali(pollo, mucca, maiale){

    if(pollo >= 0 && mucca >= 0 && maiale >= 0){
        Zampe = pollo *2 + mucca* 4 + maiale *4;
    } return Zampe;
}
console.log("Numero di zampe totali = " + Animali(4, 8, 10))


// Es. 5

function fiammiferi(numcase){
    //fiammiferi = 0;
    if(numcase >= 0){
        // 1 casa --> "0" 
        // 2 casa --> "-1"
        // 3 casa --> "-2"
        // 4 casa --> "-3"
         calcolo = (numcase * 6) - (numcase - 1);
    }else {
        console.log("Error") 
    }
    return calcolo;
}
console.log("L'incremento = " + fiammiferi(4))


/*while (step < fiammiferi){
        if(step == 0){
            
        }step++;
}*/


// Es. 6

function sommaUnicoNum(_num1){
    let sommaN = 0;
    for(let i = 1; i <= _num1; i++){
        sommaN += i;
    }
    return sommaN;
}

console.log("La somma del numero unico è :" + sommaUnicoNum(4));


// Es. 7

function calSconto(a, b){

    let Prezzofinale = a - ((a*b)/100);
    return Prezzofinale ;  
}
console.log("Scontato = " + calSconto(89, 20))

// Es. 8
function letterposition(a){
    
    if (a > 1 && a < 27){
           let letter = String.fromCharCode(a+96);
           return letter;
    }
    else if(a%1 != 0 || a == 0){
        console.log("INVALIDATO")
        return "error"
    }
    
}
console.log("Questa stringe è : " + letterposition(2))

// Es. 9

function calcolatrice(a, operator, b){

    let risultato = 0;

    // if (a <= 0 || b <= 0){
    //     console.log("Non è definibile")
    // }
    switch(operator){
        case '+' : risultato = (a + b);
            break;
        case '-' : risultato = (a - b);
            break;
        case '/' :
            if(b != 0){
                risultato = (a / b)
                }else{
                 return "errore impossibile dividere per 0"
                }
            break;
        case '*' : risultato = (a * b);
            break;
        default : return "errore"
    }
    return risultato
}
console.log("Questa è addizione = " + calcolatrice(-10, "/", 0))

// Es. 10

function sommaArray(array){
        
        let Somma = 0;
        for(let i = 0; i < array.length; i++){
            Somma = Somma + array[i];
        }
        return Somma
}
console.log("Somma della Array nella funzione = " + sommaArray([1,2,4]))
console.log("Somma della Array nella funzione = " + sommaArray([4,2,10,2]))
console.log("Somma della Array nella funzione = " + sommaArray([1]))


// Es . 11

function quantiTrue(array){

    Somma = 0;
    if(array.length == 0){
        return 0;
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] == true){
            Somma++;
        }
    }return Somma
}
console.log("True o False = " + quantiTrue([true,true,false,true]))
console.log("True o False = " + quantiTrue([false,false,false,true]))


// Es. 12

function carta(oggetto){
    let spessore = 0.5;
    calcolo = spessore * Math.pow(2, oggetto)
//  calcolo = spessore * oggetto** 2
    console.log(calcolo / 1000 )
    return calcolo    
}
console.log("il calcolo dello spessore è = " + carta(4))


// Es . 13








