console.log("Es3.2-------")



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
    spanAdd.style = "cursor: pointer; background: #d9d9d9; padding:6px ;border-radius: 4px";
    divheader.appendChild(spanAdd);
    // Creare div con span contatore
    let divcontN = document.createElement('div')
    divcontN.setAttribute('id','contN');
    divcontN.textContent = 'Controllati:'
    divcontN.style = "width: 15px; higth: 8px; padding-left: 2rem";
    document.body.appendChild(divcontN)
    //Creare span contatore per divcontN
    let spanC = document.createElement('span');
    spanC.setAttribute('id','spanC');
    spanC.style = "width: 10px; higth: 8px; padding-left: 2rem;margin-left:5px; border: 1px solid gray";
    divcontN.appendChild(spanC);
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
    
    let  contatore = 0;
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle('control');
           // console.log('conta')
            contatore++;
        }
        document.getElementById('spanC').innerHTML = contatore ;
        console.log(contatore)
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