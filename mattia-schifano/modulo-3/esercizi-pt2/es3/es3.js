// imput per il dom
const body = document.body;
const taskList = document.createElement("ul");
const trashList = document.createElement("ul");
const inputTask = document.createElement("input");
inputTask.type = "text";
const addTaskBtn = document.createElement("button");
addTaskBtn.innerText = "Aggiungi";
const clearTrashBtn = document.createElement("button");
clearTrashBtn.innerText = "Svuota cestino";


body.appendChild(inputTask);
body.appendChild(addTaskBtn);
body.appendChild(taskList);
body.appendChild(trashList);
body.appendChild(clearTrashBtn);

// variabili
let tasks = [];
let trashTasks = [];

//creo il pulsante aggiungi e il pulsante per cestinare la parola aggiunta
addTaskBtn.addEventListener("click", function() {
  const task = inputTask.value.trim();
  if (task !== "") {
    const li = document.createElement("li");
    const taskText = document.createTextNode(task);
    const rimuovere = document.createElement("button");
    rimuovere.innerText = "X";
    
    li.appendChild(taskText);
    li.appendChild(rimuovere);
    taskList.appendChild(li);
    tasks.push(li);
    
    
    rimuovere.addEventListener("click", function() {
      li.remove();
      tasks = tasks.filter(t => t !== li);
      trashList.appendChild(createTrashItem(li));
    });
    
    inputTask.value = "";
  }
});

//creo la lista cestino con il puslante ripistina ,elimina
function createTrashItem(item) {
  const li = document.createElement("li");
  const taskText = document.createTextNode(item.firstChild.textContent);
  const restoreBtn = document.createElement("button");
  restoreBtn.innerText = "Ripristina";
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  
  li.appendChild(taskText);
  li.appendChild(removeBtn);
  li.appendChild(restoreBtn);
  trashTasks.push(li);
  
  removeBtn.addEventListener("click", function() {
    li.remove();
    trashTasks = trashTasks.filter(t => t !== li);
  });
  
  restoreBtn.addEventListener("click", function() {
    li.remove();
    trashTasks = trashTasks.filter(t => t !== li);
    taskList.appendChild(item);
    tasks.push(item);
  });
  
  return li;
}

// il pulsante svuota cestino rimuove tutto cio che si trova nell'array tashtasks
clearTrashBtn.addEventListener("click", function() {
  trashTasks.forEach(function(task) {
    task.remove();
  });
  trashTasks = [];
});

