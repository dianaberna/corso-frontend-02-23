let array=[2,6,9,10,-2,-3,0,2,5,1];
let somma =0;
let conta=0;
let max=0;
let min=0;
let newArray=[];
let array1=[1,2,2,3,4];
let array2=[4,2,2,4];
let array3=[];
// per vedere se un esercizio funziona togliere il commento che circonda
/* 1)
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}*/

/* 2)

for(let i=0;i<array.length;i++){
    somma=somma+array[i];
}
console.log(somma);*/

/* 3)

for(let i=0;i<array.length;i++){
    if(array[i]>=0){
        somma=somma+array[i];
    }
}
console.log(somma);*/

/* 4)

for(let i=0;i<array.length;i++){
    if(array[i]%2!=0){
        somma=somma+array[i];
    }
}
console.log(somma); */

/* 5)

for(let i=0;i<array.length;i=i+2){
    if(i<array.length)
    somma=somma+array[i];
}
console.log(somma);*/

/* 6)

for(let i=0;i<array.length;i++){
    if(array[i]==2){
        conta++;
    }
}
console.log(conta);*/

/* 7)

for(let i=0;i<array.length;i++){
    if(array[i]>=0)
        conta++
}
console.log(conta);*/

/* 8)

for(let i=0;i<array.length;i++){
    if(array[i]>max)
        max=array[i];
}
console.log(max);*/

/* 9)

for(let i=0;i<array.length;i++){
    if(min>array[i])
        min=array[i];
    
}
console.log(min);*/

/* 10)

for(let i=0;i<array.length;i++){
    if(array[i]<0){
        newArray.push(array[i]);
    }
}
console.log(newArray);
*/

/* 11)

for(let i=0;i<array.length;i++){
    newArray.push((array[i])*2);
}
console.log(newArray);
*/

/* 12)

for(let i=0;i<2;i++){
    for(let j=0;j<array.length;j++){
        newArray.push(array[j]);
    }
}
console.log(newArray);
*/

/* 13)

for(let i=(array.length-1);i>0;i--){
    console.log(array[i]);
}*/

/* 14)

let valore1;
let valore2;
for(let i=0;i<=array1.length&&i<=array2.length;i++)      {
        
        if(i>=array1.length){
            valore1=0;
        } else{
            valore1=array1[i];
        }
        if(i>=array2.length){
            valore2=0;
        } else{
            valore2=array2[i];
        }
    
         array3.push(valore1+valore2);           
}  
console.log(array3); */

/* 15)

for(let i=0;i<array1.length&&i<array2.length;i++){
    if(array1[i]%2!=0){
        array3.push(array1[i]);
    }
    if(array2[i]%2==0){
        array3.push(array2[i]);
    }
}
console.log(array3);*/

/* 16)

for(let i=0;i<array2.length;i++){
    array2[i]=array2[i]/array1[array1.length-1-i];
}
console.log(array2);*/

/* 17)

let arraystr="12321";
let palin=true;
for(let i=0;i<arraystr.length/2;i++){
    if(arraystr[i]!=arraystr[arraystr.length-i-1]){
        palin=false;
        break;
    }
}
console.log(palin);
*/


/* 1)

let arraystr="precipitevolissimevolmente";
let lettera ="e"
for(let i=0;i<arraystr.length;i++){
    if(arraystr[i]==lettera)
    conta++;
}
console.log(conta);*/


/* 2)

let str1="dnob";
let str2="bond";
let palin=true;
for(let i=0;i<str1.length;i++){
    if(str1.length!=str2.length){
        palin=false;
        break;
    }
    if(str1[i]!=str2[str2.length-i-1]){
        palin=false;
        break;
    }

}
console.log(palin);*/


/* 3 ver1)

let str1="jamesbond";
let str2="bond";
let dentro=true;
if(str1.indexOf(str2)==-1){
    dentro=false;
}
console.log(dentro);
*/

/* 3 ver2)

let str1="jamesbond";
let str2="bond";
let dentro=false;
for(let i=0;i<str1.length;i++){
    if(str2.length>str1.length){
        
        break;
    } else if(str1[i]==str2[0]){
        conta =i;
        for(let j=0;j<str2.length;j++){
            if(str1[conta]==str2[j]){
               dentro=true;
               conta++; 
            } else {
                dentro=false;
                conta=0;
            }
        }
    }
    
}
console.log(dentro);
*/

/* 4)

let str="mamma";
let rev="";
for(let i=0;i<str.length;i++){
    rev=rev+str[str.length-i-1];
}
console.log(rev);*/

/* 5)

let str1="jamesbond";
let str2="bond";
let str3=str1+" "+str2;
console.log(str3);*/

/* 6)

let str="mare";
let spostamento=3;
let crStr="";
for(let i=0;i<str.length;i++){
    crStr=crStr+String.fromCharCode(str.charCodeAt(i)+spostamento);
}
console.log(crStr);*/
/* 7) a**
let str="merlino";
function vocali(str) 
{
let strV=[];    
for(let i=0;i< str.length;i++){
    if(str[i]=="a"){
        strV.push(str[i]);
    } else  if(str[i]=="e"){
        strV.push(str[i]);
    } else  if(str[i]=="i"){
        strV.push(str[i]);
    } else  if(str[i]=="o"){
        strV.push(str[i]);
    } else  if(str[i]=="u"){
        strV.push(str[i]);
    } 
}
return strV.toString();
}
console.log(vocali(str));*/

/* 7) b**
let str="merlino";
function vocali(str) 
{
let voc="aeiou"
let strV=[];    
for(let i=0;i< str.length;i++){
    if(voc.includes(str[i]))
        strV.push(str[i]);
}
return strV.toString();
}
console.log(vocali(str));*/

/* 8) a**

let stringa1="sole grande";
let stringa2="terra nera";
function caratteriComuniNoDuplicati (str1,str2) {
    let str=[];
    for(let i=0;i<str1.length;i++){
        if(str2.includes(str1[i])&&!str.includes(str1[i])){
            str.push(str1[i]);
        }
    }
    return str.toString();
}
console.log(caratteriComuniNoDuplicati(stringa1,stringa2));*/

/* 8) b**

let stringa1="sole grande";
let stringa2="terra nera";
function caratteriComuni (str1,str2) {
    let str=[];
    if(str1.length>=str2.length){
        for(let i=0;i<str1.length;i++){
            if(str2.includes(str1[i])){
                str.push(str1[i]);
            }
        }
    } else {
        for(let i=0;i<str1.length;i++){
            if(str1.includes(str2[i])){
                str.push(str2[i]);
            }
        }
    }
    return str.toString();
}
console.log(caratteriComuni(stringa1,stringa2));*/

/* 9)

let arrayStr =["sole", "terra", "mare", "genova"];
function lunga(array) {
    let stringa=array[0];
    for(let i=0;i<array.length;i++){
        if(array[i].length>stringa.length){
            stringa=array[i];
        }
    }
    return stringa;
}
console.log(lunga(arrayStr));*/

/* 10)

let stringa="trentino alto adigo";
function stella(stringa){
    let voc="aeiou";
    let arrayString=stringa.split("");
    for(let i=0;i<arrayString.length;i++){
        if(voc.includes(arrayString[i])){
            arrayString[i]="*";
        } else if(arrayString[i]!=" "){
           arrayString[i]=arrayString[i].toUpperCase();
        }
    }
    return arrayString.join("");
}
console.log(stella(stringa));*/

/* 11)

let stringa="trentino alto adigo";
console.log(stringa);
function reversa(stringa){
    
    let arrayString=stringa.split(" ");
    let tempArr=[];
    for(let i=0;i<arrayString.length;i++){
        tempArr=arrayString[i].split("");
        tempArr=tempArr.reverse();
        arrayString[i]=tempArr.join("");

    }
    return arrayString.join(" ");
}
console.log(reversa(stringa));*/

/* 12)

let stringa ="isfahan"
function ordina(stringa){
    let stringaOrdinata=stringa.split("");
    stringaOrdinata.sort();
    return stringaOrdinata.join("");
}

console.log(ordina(stringa));*/

/* 1)

let arraybi=[[1,2],[2,4]];
function sommaN(arraybi) {
    let somma=0;
    for(let i=0;i<arraybi.length;i++){
        for(let j=0;j< arraybi[i].length;j++){
            somma=somma+arraybi[i][j];
        }
    }
    return somma;
}
console.log(sommaN(arraybi));*/

/* 2)

let arraybi=[["genova","milano","torino","venezia"],["firenze","sienna","pisa","lucca"],["roma","urbino","spoleto","rivenna","ancona"]];
function conc(arraybi) {
    let stringa =[];
    for(let i=0;i<arraybi.length;i++){
        for (let j = 0; j< arraybi[i].length; j++) {
          stringa.push(arraybi[i][j]);
        }

    }
    return stringa.join(" ");
}
console.log(conc(arraybi));*/

/* 3)

let arraybi=[[1,2],[2,4]];
function sumRow(arraybi) {
    let somma=0;
    let arrSomma=[];
    for(let i=0;i<arraybi.length;i++){
        for (let j = 0; j < arraybi[i].length; j++) {
             somma=somma+arraybi[i][j];
        }
        arrSomma.push(somma);
        somma=0;
    } 
    return arrSomma;
}
console.log(sumRow(arraybi));*/

/* 4)

let arraybi=[[1,2],[2,4]];
function maxNum(arraybi){
    let maxN=arraybi[0][0];
    for(let i=0;i<arraybi.length;i++){
        for(let j=0;j<arraybi[i].length;j++){
            if(maxN<arraybi[i][j]){
                maxN=arraybi[i][j];
            }
        }
    }
    return maxN;
}
console.log(maxNum(arraybi));*/


// ES.Moltiplicazione di due numeri

function multiplication(number1,number2) {
    return number1*number2;
}

// ES.Convertire anni in giorni

function toGiorni(anni)
{
    return anni*365;
}

// ES.Minore o uguale a zero

function minoreUgualeAZero(numero) {
    return (numero<=0);
}

// ES.Il problema della fattoria

function numeroZampe(n1,n2,n3) {
    return((n1*2)+((n2+n3)*4));
}

// ES.Case di fiammiferi

function numeroDiFiammiferi(number) {
    if(number>=0){
    number=(number*6)-(number-1);
    return number;}
    else console.log("you should insert a positive integer");
}

// ES.Somma i numeri da un unico numero

function sommaDaUnUnicoNumero(number) {
    let somma=0;
    for(let i=0;i<=number;i++){
        somma=somma+i;
    }    
    return somma;
}

// ES.Trova lo sconto

function trovaSconto(prezzo,sconto){
    let prezzoPost=0;
    prezzoPost=prezzo-((sconto/100)*prezzo);
    return Number.parseFloat(prezzoPost).toFixed(2);
}

// ES.Posizione nell'alfabeto

function letteraInPosizione(n) {
    if(n>26||n<1||n%1!=0){
        return "non valido";
    }
    return String.fromCharCode(n+96);
}

//ES.Calcolatrice di base

function calcolatrice(n1,op,n2) {
    switch (op) {
        case "+":
            return n1+n2;
            break;
        case "*":
            return n1*n2;
            break;
        case "-":
            return n1-n2;
            break;
        case "/":
            if(n2==0)
            return "impossibile dividere per 0"
            else return n1/n2; break;
        default:
            return "please use an adequate operation simbol between \"+,-,*,/\"";
            break;
    }
}

//ES.Fare la somma di tutte gli elementi di un array

function sommaElementiArray(array) {
    somma=0;
    for(let i=0;i<array.length;i++){
        somma=somma+array[i];
    }
    return somma;
}

//ES.Quanto volte è vero

function quantiTrue(arrayBoll) {
    somma=0;
    for(let i=0;i<arrayBoll.length;i++){
        somma=somma-arrayBoll[i];
    }
    return somma*-1;
}

//ES.Piegare un pezzo di carta

function spessore(n) {
    somma=0.0005;
    for(let i=0;i<n;i++){
        somma=somma*2;
    }
    return somma+"m";
}

//ES.Validare un'e-mail

function validateEmail(mail) {
    let tempArr=mail.slice(mail.indexOf("@"));
    if(mail.indexOf("@")==-1||
    mail.indexOf("@")==0||
    mail.indexOf(".")==0||
    mail.indexOf(".")==-1||
    tempArr.indexOf(".")==-1
    ){
        return false;
    } else return true}

//ES.Sasso,carta,forbici

/* a)

function rbs(mano1,mano2){
    if(mano1==mano2){
        return "draw";
    } else 
    if(mano1=="Rock"){
        switch (mano2) {
            case "Paper":
                return "p2 won";
                break;
            case "Scissores":
                return "p1 won";
            default:
                return "mano non valida"
                break;
        }
    } else
    if(mano1=="paper"){
        switch (mano2) {
            case "Scissores":
                return "p2 won";
                break;
            case "Rock":
                return "p1 won";
            default:
                return "mano non valida"
                break;
        } 
    } else 
    if(mano1=="Scissores"){
        switch (mano2) {
            case "Rock":
                return "p2 won";
                break;
            case "Paper":
                return "p1 won";
            default:
                return "mano non valida"
                break;
        }
} else return "mano non valida"
}*/

// b) carta forbice sasso <=================================
const Rock={vince: "Scissores"}    
const Scissores= {vince: "Paper"}
const Paper={vince: "Rock"};

function rbs(mano1,mano2) {
    if(mano1==mano2){
        return "tie";
    } else if(mano1.vince==mano2){
        return "p1 win";
    } else return "p2 win";
}

//ES.Rimuovere i duplicati da un array

function removeDups(array){
    let unduped=[];
    for(let i=0;i<array.length;i++){
        if(unduped.indexOf(array[i])==-1){
            unduped.push(array[i]);
        }
    }
    return unduped;
}

//ES.Quanti giorni tra due date

function getDays(date1,date2)
{
  time=date2-date1;
  time=time/1000/60/60/24;
  return time+" days";
}

//ES.Ottieni la somma del budget della persona

function getBudgets(persone) {
    let budget=0;
    for(let i=0;i<persone.length;i++){
        budget=budget+persone[i].budget;
    } return budget;
}
//ES.Calcola il prezzo totale dei generi alimentari

function getTotalPrice(lista) {
    let somma=0;
    for(let i=0;i<lista.length;i++){
        somma=somma+(lista[i].quantity*lista[i].price);
    }return somma;
}

//ES.19 Generatore di password

function generaPasswordCasuale(lungezza) 
{
    let password="";
    for(let i=0;i<lungezza;i++){
       // ho aggiunto 32 perchè quelli prima sono non visibili
        password=password+(String.fromCharCode(Math.floor(Math.random()*100)+32));
    }
    return password;
}
console.log(generaPasswordCasuale(8));




