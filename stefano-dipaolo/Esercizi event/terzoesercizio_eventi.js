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
    //div delle task
    let div1 = creoEappendo(body, "div");
    //div del cestino
    let div2= creoEappendo2(body,"div","Cestino")

    let input = creoEappendo(div1,"input")
    let pulsante = creoEappendo2(div1,"button","Aggiungi")
    let svuotacestino = creoEappendo2(div2,"button","Svuota Cestino")
    //lista task
    let ul = creoEappendo(div1,"ul")

    //cestino
    let ulCestino = creoEappendo(div2,"ul")

    //aggiungere un elemento
    pulsante.addEventListener("click",function(){
      let li = creoEappendo(ul,"li")
      let testo_li = document.createTextNode(input.value)
      li.appendChild(testo_li)
      input.value = "";

      let pulsanteX = creoEappendo2(li,"button","X")

      let liCestino = li

      
      //buttare un elemento nel cestino

      pulsanteX.addEventListener("click",function(){
        ulCestino.appendChild(liCestino)
        let pulsanteRipristina = creoEappendo2(liCestino,"button","Ripristina")
        pulsanteX.remove()
        
        liCestino.setAttribute("class","delete")
        
      //svuotare il cestino

      svuotacestino.addEventListener("click",function(){
        let cestinoDaSvuotare = document.getElementsByClassName("delete")
        for (let i = cestinoDaSvuotare.length - 1; i >= 0; i--) {
          cestinoDaSvuotare[i].remove();
      }            
      
      })
        //ripristinare

        pulsanteRipristina.addEventListener("click",function(){
          liCestino.removeAttribute("class")
          ul.appendChild(liCestino)
          li.appendChild(pulsanteX)
          pulsanteRipristina.remove()
        })
        contatore_cestino (elemento)
      })
    })

})

function contatore_cestino (elemento){
  let elementi_cestino = documen.querySelectorAll(".liCestino")
  elemento.textContent ="svuota cestino"+ elementi_cestino.length
}