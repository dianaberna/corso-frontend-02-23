
let input = document.querySelector("input");
let button = document.querySelector("button");
let butt;
let li;
let count = 0;
button.addEventListener('click', () => {
    appendLi(input.value)
})



function appendLi(txt) {
    //creo elenco
    li = document.createElement("li");
    li.setAttribute("id", "sottoLista" + count);
    li.innerHTML = txt;
    //bottone elimina
    butt = document.createElement("button");
    butt.setAttribute("id", "bot");
    butt.textContent = "elimina";
    //bottone cestino
    cestinoButton = document.createElement("button");
    cestinoButton.setAttribute("id", "cestinoButton")
    cestinoButton.textContent = "cestino";
    //appendo al figlio gli elementi creati
    let lista = document.getElementById("lista");
    lista.appendChild(li);
    li.appendChild(butt);
    li.appendChild(cestinoButton);
    // lista dei "butt" elimina
    let current_tasks = document.querySelectorAll("#bot");
    for (var i = 0; i < current_tasks.length; i++) {

        current_tasks[i].onclick = function () {
            console.log("parent " + this.parentNode.id);
            this.parentNode.remove();
        }
    }

    //lista cestinoButton 
    let currentCestino= document.querySelectorAll("#cestinoButton");
    for(let i=0;i<currentCestino.length;i++){
        currentCestino[i].onclick = function (){
            if(this.parentNode.parentNode.id=="lista"){
                //appendere elemento in lista cestino
                console.log("cestino " + this.parentNode.id);
                let cestinoLista=document.getElementById("cestino");
                cestinoLista.appendChild(this.parentNode);
            }else{
                let current_tasksONE = document.querySelectorAll("#bot");
                console.log("current taskone " + current_tasks);
                for (var i = 0; i < current_tasks.length; i++) {
                    current_tasks[i].appendChild(this.parentNode);
                }
            }
        }
    }

    count++;


    function elimina(id) {
        document.getElementById(id).remove();
    }

}


