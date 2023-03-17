console.log("Es3.1")



window.addEventListener("load", function () {
   // Div di input e button e ul
    let div = document.createElement('div');
    div.setAttribute('id','div')
    document.body.appendChild(div);
    document.getElementById("div").style = 'width: 600px; margin: 0 auto';
    
    //input
    let input = document.createElement("input");
    input.setAttribute("id","input");
    input.setAttribute("type","text")
    input.setAttribute("value",'')
    div.appendChild(input)
    document.getElementById("input").style.width = "15rem";
    
    //button
    let button = document.createElement("button");
    button.setAttribute('id','add')
    button.appendChild(document.createTextNode("Add"))
    div.appendChild(button);
    
    button = document.getElementById("add");
    //ul
    let ul = document.createElement('ul');
    div.appendChild(ul);


   button.addEventListener("click", function () {
       let li = document.createElement('li');
       li.textContent = input.value;
        ul.appendChild(li)
        let x= document.createElement("button")
        x.textContent = "x"
        li.appendChild(x)

          x.addEventListener("click", function () {
            for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
                let rimuovTask = document.getElementsByTagName("li")[i];
                li.remove(rimuovTask);
            }
                   
      });
  
     });
    
    
})
