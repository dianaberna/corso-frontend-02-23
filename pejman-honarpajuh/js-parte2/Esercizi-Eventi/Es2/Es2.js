console.log("Es2")



window.addEventListener("load", function () {
 
    let input = document.createElement("input");
    input.setAttribute("id","input");
    input.setAttribute("type","text")
    input.setAttribute("value","margin: 2rem; width: 400px; height: 400px; background-color: yellow")
    document.body.appendChild(input)
    document.getElementById("input").style.width = "30rem";
    
    
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Cambia"))
    document.body.appendChild(button);
    
    
    
    let div = document.createElement("div")
    div.setAttribute("id","div")
    document.body.appendChild(div)
    div.style = document.getElementById("input").value;
    
    button.addEventListener("click", function () {
       
	   div.style = document.getElementById("input").value

    });


    
    
})

