window.addEventListener("load", function(){
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "ciao")
    // input.value = "ciao"
    input.addEventListener("change", function(e){
        console.log(e.target.value)
    })
    input.addEventListener("keydown", function(e){
        console.log(e.target.value)
    })
    document.body.appendChild(input);
})