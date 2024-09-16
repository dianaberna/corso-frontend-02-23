window.addEventListener("load",function(){
    //funzione utile numero random fino ad un massimo che viene dato.
    let corpo=document.body;
    function numeroCasuale(massimo){
        return Math.floor((Math.random()*massimo));
    };
    //esercizio uno
    function randomColor() {
        let red=numeroCasuale(255);
    let green=numeroCasuale(255);
    let blue=numeroCasuale(255);
    corpo.style.backgroundColor="rgb("+red+","+green+","+blue+")";
    let contenitore=document.createElement("div");
    contenitore.innerHTML="rgb("+red+","+green+","+blue+")";
    contenitore.style.backgroundColor="white";
    contenitore.style.textAlign="center";
    corpo.style.display="flex";
    corpo.style.justifyContent="center";
    contenitore.style.marginTop="49%";
    corpo.appendChild(contenitore);
    }
    //randomColor();
    
})
/* esercizio 2;
let testo=document.getElementById("text-field");
let btn=document.getElementById("btn");
console.log(btn);
let quadro=document.getElementById("quadro");
testo.value="margin: 2rem; width: 400px;height:400px; background-color:yellow";
quadro.style=testo.value;
btn.addEventListener("click", function(){
quadro.style=testo.value;
});*/

//esercizio 3
let testo=document.getElementById("text-field");
let btn=document.getElementById("btn");
let ulList=document.getElementsByTagName("ul")[0];
let cestino=document.createElement("ul");
let body=document.body;
let bottoneCestino=document.createElement("button")
bottoneCestino.textContent="svuota cestino, attenzione non li trovi più";
body.appendChild(document.createTextNode("cestino:-"));
body.appendChild(cestino);
body.appendChild(bottoneCestino);
bottoneCestino.addEventListener("click",function(){
    cestino.innerHTML="";
})
btn.addEventListener("click",function() {
    let lista=document.createElement("li");
    let testoLista=document.createTextNode(testo.value);
    testo.value="";
    let bottone=document.createElement("button");
    bottone.textContent="X";
     lista.appendChild(testoLista);
    lista.appendChild(bottone);
    bottone.addEventListener("click",function() {
        if(bottone.parentElement.parentElement!=cestino){
             cestino.appendChild(bottone.parentElement);
             bottone.textContent="represtina";
        }
        else
       {
        bottone.textContent="X";
        ulList.appendChild(bottone.parentElement);
       }
        
        
    })
    ulList.appendChild(lista);
})

//esercizio 4
/*let pulsanti=document.getElementById("pulsanti");


function creaRigaElementiDentroDiv(padre,tipo,quante,contenutoTestuale) {
    let temp;
    let div=document.createElement("div");
    for(let i=0;i<quante;i++){
        temp=document.createElement(tipo);
        if(contenutoTestuale[i]=="/"||contenutoTestuale[i]=="+"||contenutoTestuale[i]=="*"||contenutoTestuale[i]=="-"){
            temp.style="background-color:gray;";
        } else if(contenutoTestuale[i]=="="){
            temp.style="background-color:dodgerblue; color:white";
        } else{
            temp.style="background-color:silver;";
        }
        temp.appendChild(document.createTextNode(contenutoTestuale[i]));
        div.appendChild(temp); 
        }
    padre.appendChild(div);
}

let arrayCalc=[["7","8","9","/"],["4","5","6","*"],["1","2","3","-"],["0",".","=","+"]];

for(let i=0;i<arrayCalc.length;i++){
    creaRigaElementiDentroDiv(pulsanti,"button",arrayCalc[i].length,arrayCalc[i]);

}
let campoTestuale=document.getElementById("text-field");
let arrayBottone=document.getElementsByTagName("button");
let temp;
let scontrino=document.getElementById("scontrino");
for(let i=0;i<arrayBottone.length;i++){
    temp=arrayBottone[i];
    temp.addEventListener("click",function(){
        if(this.textContent!="="){
            
                campoTestuale.value=campoTestuale.value+this.textContent;
            
        } else {
            scontrino.innerText=scontrino.innerText+"\n"+campoTestuale.value+"="+eval(campoTestuale.value);
            campoTestuale.value=eval(campoTestuale.value);
        }
    })
}*/

//esercizion 5

