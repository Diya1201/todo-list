const todoUL = document.getElementById("todo-ul");
  loadEvents();
  // load every event in the page
  function loadEvents(){
    const filterOptions = document.querySelector(".filter-todos");
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector(".main-ul").addEventListener('click',deleteOrTick);
  filterOptions.addEventListener("change", filterList);
}
function submit(e){ // Checks whether the add task firld is empty or not
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
      addTask(input.value); // If value is not empty then addTask function will be called
    input.value = '';
}
function addTask(task) { // Adds a task into task list 
    let ul = document.querySelector(".main-ul");
    let li = document.createElement('li');
    li.innerHTML = `<div class="inner-div"><button class="done" >&#10004;</button><p class="tasks" id="list-tasks" onclick="">${task}</p><button class="delete">&#10006;</button><button class="edit">&#128393;</button><br/><br/></div><br/>`;
    ul.appendChild(li);
    document.querySelector('.task-list').style.display = 'block';
    console.log("Task added successfully");
}
function clearList(e){
    // setting the ul innerHML to an empty string
    let ul = document.querySelector(".main-ul").innerHTML = '';
}
/* Check , delete and edit button functions */
function deleteOrTick(e){
    if(e.target.className == 'delete'){
      deleteTask(e);
    }   
    else if(e.target.className == 'done'){
      checkTask(e);
    }
    else if(e.target.className == 'edit'){
       edit(e);
    }
    else if(e.target.className == 'done' && e.target.dblclick == 'true'){
       dbclickdone(e);      
    }
}
// delete task
function deleteTask(e){
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}
function checkTask(e){
    const task = e.target.nextElementSibling;
    if(e.target.click){
       task.classList.toggle("completed");
       //input.focus();
    }
}
function edit(e) {
     const edit = e.target.previousElementSibling;
     const edit1 = edit.previousElementSibling;
     if(e.target.click){
      edit1.contentEditable = 'true';
     }
      
}
 
function filterList(e) {
  const todo = todoUL.childNodes;
  todo.forEach(todoEl => {
    if(todoEl.children[0].nodeName === "DIV") {
          console.log(todoEl);
          switch(e.target.value){
          case "all":
          todoEl.style.display = "flex";
          break;
          case "completed":
            if (todoEl.children[0].children[1].classList.contains("completed")) {
              todoEl.style.display = "flex";
            } else {
              todoEl.style.display = "none";
           }
          break;
          case "pending":
            if (todoEl.children[0].children[1].classList.contains("completed")) {
              todoEl.style.display = "none";
            } else {
              todoEl.style.display = "flex";
            }
          break;
        }
    }
  });
}