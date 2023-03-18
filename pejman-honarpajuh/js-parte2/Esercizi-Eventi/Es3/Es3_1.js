console.log("Es3.1")



/* window.addEventListener("load", function () {
   // Div di input e button e ul
    let div = document.createElement('div');
    div.setAttribute('id','div')
    document.body.appendChild(div);
    document.getElementById("div").style = 'width: 600px; margin: 2rem auto';
   
    // Div contenitore eliminati
    let div1 = document.createElement('div');
    div1.setAttribute('id','div')
    document.body.appendChild(div1);
    document.getElementById("div").style = 'width: 600px; margin: 2rem auto';
    
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
    //ul1
    let ul1 = document.createElement('ul');
    div1.appendChild(ul1);
    

   button.addEventListener("click", function () {
       let li = document.createElement('li');
       li.textContent = input.value;
       ul.appendChild(li)
       
       let x= document.createElement("button")
       x.textContent = "x"
       li.appendChild(x)
      
          x.addEventListener("click", function () {
            
            for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
                //let rimuovTask = document.getElementsByTagName("li")[i];
                let rimuovTask = document.getElementsByTagName('li')[i].innerHTML;
                //document.getElementsByTagName('li')[i].innerHTML = 
                z = ul1.appendChild(rimuovTask);
                //console.log(rimuovTask)
            }
            console.log('sono io'+z )    
            
      });
      
  
     });
    
     
}) */

window.addEventListener("load", function () {

    // Creare div contenitore Titolo e Input e btn Add
    let divheader = document.createElement('div');
    divheader.setAttribute('id', 'divH');
    divheader.setAttribute('class', 'header');
    document.body.appendChild(divheader);
    document.getElementById("divH").style = "width: 600px; margin: 2rem auto";

    // Creare Titolo
    let titolo = document.createElement('h2');
    titolo.textContent = 'To DO List';
    divheader.appendChild(titolo);
    titolo.style = "text-align: center";
    // Creare Input
    let input = document.createElement('input');
    input.setAttribute('id', 'myInput');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Scrivi qua....');
    divheader.appendChild(input)
    document.getElementById("myInput").style = "width: 26rem; margin: 2rem 1rem 2rem 6rem;";
    // Creare Button Add
    let spanAdd = document.createElement('span');
    spanAdd.setAttribute('id', 'addBtn')
    spanAdd.textContent = "Add";
    spanAdd.style = "cursor: pointer; background: #d9d9d9; padding:6px ;border-radius: 4px"
    divheader.appendChild(spanAdd);
    //Creare Ul 
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'ul');
    document.body.appendChild(ul);
    ul.style = "padding-left: 5rem;"


    //Creare Li control
    let licontrol = document.createElement('li');
    licontrol.setAttribute('class', 'control');
    licontrol.textContent = 'Controllo'
    licontrol.style = 'display: none;'
    ul.appendChild(licontrol)

    // Creare buttone close e lista todo
    let listaToDo = document.getElementsByTagName("LI");

    for (let i = 0; i < listaToDo.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        listaToDo[i].appendChild(span);
    }

    // Creare evento click del bottone per nascondere item di ToDo list
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            let div = this.parentElement;
            div.style.display = "none";
        });

    }

    // Congela(cestina o sbarra) item selzionato finchè non viente cancellato
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle('control');
            console.log('conta')
        }

    }, false);

    // Creare lista dei item Todo momento di inserimento nel input e aggiungeli con evento button Add
       spanAdd.addEventListener("click", function newElement() {
        let li = document.createElement("li");
        let inputValue = document.getElementById("myInput").value;
        let testo = document.createTextNode(inputValue);
        li.appendChild(testo);
        if (inputValue === '') {
            alert("Aggiungi task!");
        } else {
            document.getElementById("ul").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        let span = document.createElement("span");
        let txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);


        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener("click", function () {
                let div = this.parentElement;
                div.style.display = "none";
            });

        }


    })

});





