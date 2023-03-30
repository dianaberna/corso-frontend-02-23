window.addEventListener("load",function(){
let div=document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id","contenitore")

//creo input e p default
let divdefault=document.createElement("div")
div.appendChild(divdefault)
let pdefault= document.createElement("p")
divdefault.setAttribute("id","")
divdefault.appendChild(pdefault)
let tdefault=document.createTextNode("default")
pdefault.appendChild(tdefault)
let idefault=document.createElement("input")
idefault.setAttribute("id","idefault")
divdefault.appendChild(idefault)

//creo input e p focused
let divfocused=document.createElement("div")
div.appendChild(divfocused)
let pfocused= document.createElement("p")
divfocused.setAttribute("id","focused")
divfocused.appendChild(pfocused)
let tfocused=document.createTextNode("focused")
pfocused.appendChild(tfocused)
let ifocused=document.createElement("input")
ifocused.setAttribute("class","ifocused")
divfocused.appendChild(ifocused)
/* ifocused.addEventListener("focus", function(e)  {
    
    e.target.focus=true
});
 */

//creo input e p entered
let diventered=document.createElement("div")
div.appendChild(diventered)
let pentered= document.createElement("p")
diventered.setAttribute("id","entered")
diventered.appendChild(pentered)
let tentered=document.createTextNode("entered")
pentered.appendChild(tentered)
let ientered=document.createElement("input")
ientered.setAttribute("id","ientered")
diventered.appendChild(ientered)
ientered.addEventListener("keydown",function (e) {
    console.log(e)

    if (e.key=== "Enter") {

        ientered.classList.toggle("ientered2");
    }
    
})

//creo input e p error
let diverror=document.createElement("div")
div.appendChild(diverror)
let perror= document.createElement("p")
diverror.setAttribute("id","")
diverror.appendChild(perror)
let terror=document.createTextNode("error")
perror.appendChild(terror)
let ierror=document.createElement("input")
ierror.setAttribute("id","ierror")
ierror.setAttribute("class","")
diverror.appendChild(ierror)
ierror.addEventListener("keydown",function (e) {
    console.log(e)

    if (e.key=== "Enter") {

        ierror.classList.toggle("ierror2");
    }
    
})

//creo input e p hover
let divhover=document.createElement("div")
div.appendChild(divhover)
let phover= document.createElement("p")
divhover.setAttribute("id","hover")
divhover.appendChild(phover)
let thover=document.createTextNode("hover")
phover.appendChild(thover)
let ihover=document.createElement("input")
ihover.setAttribute("class","ihover")
divhover.appendChild(ihover)
/* ihover.addEventListener("mouseover",function () {
    ihover.style.backgroundColor="blue"
    
})
ihover.addEventListener("mouseout",function () {
    ihover.style.backgroundColor=""
    
}) */

//creo input e p typing
let divtyping=document.createElement("div")
div.appendChild(divtyping)
let ptyping= document.createElement("p")
divtyping.setAttribute("id","typing")
divtyping.appendChild(ptyping)
let ttyping=document.createTextNode("typing")
ptyping.appendChild(ttyping)
let ityping=document.createElement("input")
ityping.setAttribute("class","type")
divtyping.appendChild(ityping)

//creo input e p disabled
let divdisabled=document.createElement("div")
div.appendChild(divdisabled)
let pdisabled= document.createElement("p")
divdisabled.setAttribute("id","")
divdisabled.appendChild(pdisabled)
let tdisabled=document.createTextNode("disabled")
pdisabled.appendChild(tdisabled)
let idisabled=document.createElement("input")
idisabled.setAttribute("id","idisabled")
idisabled.setAttribute("placeholder","nope")
divdisabled.appendChild(idisabled)
idisabled.disabled=true

//creo input e p confirmed
let divconfirmed=document.createElement("div")
div.appendChild(divconfirmed)
let pconfirmed= document.createElement("p")
divconfirmed.setAttribute("id","")
divconfirmed.appendChild(pconfirmed)
let tconfirmed=document.createTextNode("confirmed")
pconfirmed.appendChild(tconfirmed)
let iconfirmed=document.createElement("input")
iconfirmed.setAttribute("id","iconfirmed")
iconfirmed.setAttribute("class","")
divconfirmed.appendChild(iconfirmed)
iconfirmed.addEventListener("keydown",function (e) {
    console.log(e)

    if (e.key=== "Enter") {

        iconfirmed.classList.toggle("iconfirmed2");
    }
    
})



});