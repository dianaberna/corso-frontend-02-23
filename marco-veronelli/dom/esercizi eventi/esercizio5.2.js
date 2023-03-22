/* window.addEventListener("load",function(){


let body=document.getElementsByTagName("body")[0]
let form=document.createElement("div")
body.appendChild(form)
form.style.display="flex"
form.style.flexWrap= "wrap";
form.style.flexDirection= "column";
form.style.width="500px";
form.style.gap="20px";


//INPUT NOME
let inome =document.createElement("input")
form.appendChild(inome)
inome.setAttribute("class","")
inome.setAttribute("id","")
inome.setAttribute("placeholder","nome")
//INPUT cognome
let icognome =document.createElement("input")
form.appendChild(icognome)
icognome.setAttribute("class","")
icognome.setAttribute("id","")
icognome.setAttribute("placeholder","cognome")
//INPUT email
let iemail =document.createElement("input")
form.appendChild(iemail)
iemail.setAttribute("class","")
iemail.setAttribute("id","")
iemail.setAttribute("placeholder","email")
//INPUT password
let ipassword =document.createElement("input")
form.appendChild(ipassword)
ipassword.setAttribute("class","")
ipassword.setAttribute("id","")
ipassword.setAttribute("placeholder","password")
//INPUT cpassword
let icpassword =document.createElement("input")
form.appendChild(icpassword)
icpassword.setAttribute("class","")
icpassword.setAttribute("id","")
icpassword.setAttribute("placeholder","cpassword")
console.log("ciao")

let submit=document.createElement("input")

form.appendChild(submit)
let st=document.createTextNode("Submit")
submit.appendChild(st)
submit.setAttribute("id","tasto")
submit.setAttribute("type","submit")
submit.addEventListener("click",function(){
let nome=""
//leggo il NOME
nome=inome.value
console.log(nome)
for (let i = 0; i < nome.length; i++) {
    if
    
    
}

})







}); */

str1 = "ciaossooaau";
str2 = "provaaoou";
comuni = "";


for (let i = 0; i < str1.length; i++) {
    let carattere = str1[i];
    if (str2.indexOf(carattere) !== -1 && comuni.indexOf(carattere) === -1) {
        
        comuni += carattere;
    }
}

console.log("soluzione con funzioni: " + comuni);
console.log(2+"2")