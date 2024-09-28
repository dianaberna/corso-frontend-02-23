function creoEappendo(a, b) {
    let c = document.createElement(b);
    a.appendChild(c);
    return c;
  }
  function creoEappendo2(a, b, txt = "") {
    let c = document.createElement(b);
    a.appendChild(c);
    if (txt.length != 0) {
      let cTesto = document.createTextNode(txt);
      c.appendChild(cTesto);
    }
    return c;
  }

window.addEventListener("load", function () {
let body = document.body
let div = creoEappendo(body,"div")


let div1 = creoEappendo2(div,"div","Default")
let input_Default = creoEappendo2(div1,"input")
div1.setAttribute("class","default")


let div2 = creoEappendo2(div,"div","Hover")
let input_Hover = creoEappendo2(div2,"input")
div2.setAttribute("class","Hover")


let div3 = creoEappendo2(div,"div","Focus")
let input_Focus = creoEappendo2(div3,"input")
div3.setAttribute("class","Focus")
input_Focus.addEventListener("focus",(event) =>{
  event.target.style.background = "red"
})

let div4 = creoEappendo2(div,"div","Typing")
let input_Typing = creoEappendo2(div4,"input")
div4.setAttribute("class","Typing")
input_Typing.addEventListener("keydown",function(){
    input_Typing.value = "Evento keydown"
}
)

let div5 = creoEappendo2(div,"div","Entered")
let input_Entered = creoEappendo2(div5,"input")
div5.setAttribute("class","Entered")


let div6 = creoEappendo2(div,"div","Disabled")
let input_Disabled = creoEappendo2(div6,"input")
input_Disabled.setAttribute("class","Disabled")
input_Disabled.setAttribute("type","text")
let div7 = creoEappendo2(div,"div","Error")
let input_Error = creoEappendo2(div7,"input")
div7.setAttribute("class","Error")
input_Error.addEventListener("error",(event)=>{
    event.target.style.border = "red"
})

let div8 = creoEappendo2(div,"div","Confirmed")
let input_Confirmed = creoEappendo2(div8,"input")
div8.setAttribute("class","Confirmed")


})