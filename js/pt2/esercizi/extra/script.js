console.log("prova")

let hamburger = document.getElementsByClassName("hamburger")[0]
let menu = document.getElementsByClassName("menu")[0]
let spanHamburger = document.querySelectorAll(".hamburger > span")

hamburger.addEventListener("click", function(){
    if(menu.classList.contains("hide")){
        menu.classList.replace("hide","show")
        document.body.classList.replace("body-play", "body-stop")
        spanHamburger.forEach(elem => elem.setAttribute("class", "close"))
    }else{
        menu.classList.replace("show","hide")
        document.body.classList.replace("body-stop", "body-play")
        spanHamburger.forEach(elem => elem.setAttribute("class", ""))
    }
        
})