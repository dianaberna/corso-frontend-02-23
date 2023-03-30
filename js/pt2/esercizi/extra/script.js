console.log("prova")

let hamburger = document.getElementsByClassName("hamburger")[0] // pulsante 
let spanHamburger = document.querySelectorAll(".hamburger > span") // le linee dentro il pulsante
let menu = document.getElementsByClassName("menu")[0] // ul con tutti gli li

hamburger.addEventListener("click", function(){
    // se menu ha come classe "hide"
    if(menu.classList.contains("hide")){
        // rimpiazzo la classe hide con la classe show del menu
        menu.classList.replace("hide","show")
        // rimpiazzo la classe body-play con body-stop
        document.body.classList.replace("body-play", "body-stop")
        // per ogni span interno al pulsante hamburget vado ad aggiungere la classe close
        spanHamburger.forEach(elem => elem.setAttribute("class", "close"))
        /* for(let i=0; i<spanHamburger.length; i++){
            spanHamburger[i].setAttribute("class", "close")
        } */
        hamburger.classList.add("close")
    }else{
        menu.classList.replace("show","hide")
        document.body.classList.replace("body-stop", "body-play")
        spanHamburger.forEach(elem => elem.setAttribute("class", ""))
        hamburger.classList.remove("close")
    }
        
})