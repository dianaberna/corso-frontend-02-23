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
    let body = document.body;
    let div1 = creoEappendo(body, "div");

  //creo l'input
    let input = creoEappendo(div1, "input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "pippo");

  //creo il bottone
    let bottone = creoEappendo(div1, "button");
    let testobottone = document.createTextNode("aggiungi");
    bottone.appendChild(testobottone);
    let ul = creoEappendo(div1, "ul")


    bottone.addEventListener("click", function () {
    let li = document.createElement("li");
    ul.appendChild(li);
    let lista = li.appendChild(document.createTextNode(input.value)) 
    input.value = "";
    let button_li = creoEappendo(li, "button");
    button_li.appendChild(document.createTextNode("X cancella"));
    button_li.style.margin = "0.3rem";
    console.log(lista)
    li.setAttribute("class","delete")
   
    
    button_li.addEventListener("click", function () {
        // let liCestino = creoEappendo(ulCestino, "li");
        // liCestino.appendChild(lista)
        
        li.remove();
    });
    
//    let divCestino = creoEappendo2(body, "div","Cestino");
//     let ulCestino = creoEappendo(divCestino, "ul");
//     let bottonecestino = creoEappendo2(divCestino,"button","Svuota Cestino")
//     bottonecestino.addEventListener("click", function () {
//         let elementiDaCancellare = lista
//         for (let i= lista.length-1; i>=0; i--){
//             elementiDaCancellare[i].remove()
//         }
//     })
//   });
  
    
//   let bottonecestino = creoEappendo2(cestino, "button", "Svuota Cestino");
//   lista.setAttribute("class", "delete");
//   bottonecestino.addEventListener("click", function () {
//     let elementiDaCancellare = document.getElementsByClassName("delete");
//     for (let i = elementiDaCancellare.length - 1; i >= 0; i--) {
//       elementiDaCancellare[i].remove();
//     }
// });
})})
