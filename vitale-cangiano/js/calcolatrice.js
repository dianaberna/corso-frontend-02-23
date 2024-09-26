let count= "";

let input = document.querySelector("input");
let unoButton = document.getElementById("uno");
let dueButton = document.getElementById("due");
let treButton = document.getElementById("tre");
let divisoButton = document.getElementById("diviso");
let perButton = document.getElementById("per");
let menoButton = document.getElementById("meno");
let ugualeButton = document.getElementById("uguale");

unoButton.addEventListener('click', () => {
    
    addNumber("1");
})
dueButton.addEventListener('click', () => {
    
    addNumber("2");
})

treButton.addEventListener('click', () => {
    
    addNumber("3");
})
divisoButton.addEventListener('click', () => {
    
    addNumber("/");
})
perButton.addEventListener('click', () => {
    
    addNumber("*");
})
menoButton.addEventListener('click', () => {
    
    addNumber("-");
})
ugualeButton.addEventListener('click', () => {
    
    uguale();
})

function addNumber(value){
    count = count+value;
    input.setAttribute("value", count);
}

function uguale(){
let operazione="";
let numeri=[];
let operatore=[];
let r=0;
//divido i numeri dall operatore
    for(let i=0;i<count.length;i++){
        if(Number(count[i])){  
            operazione=operazione+""+count[i];
        }else{
            operatore.push(count[i]);
            numeri.push(operazione);
            operazione="";
        }
    }
    numeri.push(operazione);
    console.log("numeri "+numeri+" length " + numeri.length);
    //valuto i 3 casi di operatori diversi e faccio l'operazione
    for(let i=0;i<operatore.length;i++){
        switch(operatore[i]){
            case "/" :
            r=   numeri[i] / numeri[i+1];
            break;
            case "*" :
            r=   numeri[i] * numeri[i+1];
            break;
            case "-" :
                r=   numeri[i] - numeri[i+1];
                break;    
        }
    }

    //risultato
    input.setAttribute("value", r);
    count="";
}