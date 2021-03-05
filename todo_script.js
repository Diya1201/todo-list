/*(function(){
    /*1*///var customSelects = document.querySelectorAll(".dropdown_select");
    /*2*///for(var i=0; i<customSelects.length; i++){
      /*if (customSelects[i].hasAttribute("disabled")){
        customSelects[i].parentNode.className += " custom-dropdown--disabled";
      }*/
    //}
  //})()*/
  const todoUL = document.getElementById("todo");
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
    li.innerHTML = `<div class="inner-div"><li id="note-li" class="note-li"><button class="done" >&#10004;</button><p class="tasks" id="list-tasks" onclick="">${task}</p><button class="delete">x</button><button class="edit">&#128393;</button><br/><br/></li></div><br/>`;
    ul.appendChild(li);
    document.querySelector('.task-list').style.display = 'block';
    console.log("Task added successfully");
}
function clearList(e){
    // setting the ul innerHML to an empty string
    let ul = document.querySelector(".main-ul").innerHTML = '';
}
/* Check , delete and edit button functions */
/*function editIt(e) {
    if(e.target.className == 'edit'){
        edit(e);
      } 
}*/
function deleteOrTick(e){
    if(e.target.className == 'delete'){
      deleteTask(e);
    }   
    else if(e.target.className == 'done'){
      //console.log("check button ticked");
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
    //console.log("Entered function checkTask");
    const task = e.target.nextElementSibling;
    //console.log("set the variable");
    //console.log(task);
    if(e.target.click){
       task.classList.toggle("completed");
       //input.focus();
    }
}
function edit(e) {
    console.log(" Entered edit function");
     const edit = e.target.previousElementSibling;
     console.log("set the value of variable");
     console.log(edit);
     const edit1 = edit.previousElementSibling;
     console.log(edit1);
     if(e.target.click){
      console.log("checked edit if condition");
      edit1.contentEditable = 'true';
     }
     /*console.log("set the value of variable");
     console.log(edit_element);
    if(e.target.click){
      console.log("entered edit if condition");  
      edit_element.contentEditable = 'true';
     }*/
}
/*function dbclickdone(e) {
  const task = e.target.nextElementSibling;
  console.log("var setted");
  console.log(task);
  if(e.target.dblclick){
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}*/
function filterList(e) {
  console.log(todoUL);
  const todo = todoUL.childNodes;
  console.log(todo);
  todo.forEach(function(todoEl){
    if(todoEl.nodeName === "P") {
      switch(e.target.value){
        case "all":
          todoEl.style.display = "flex";
          break;
        case "completed":
          if (todoEl.children[1].classList.contains("completed")) {
            todoEl.style.display = "flex";
          } else {
            todoEl.style.display = "none";
          }
          break;
        case "pending":
          if (todoEl.children[1].classList.contains("completed")) {
            todoEl.style.display = "none";
          } else {
            todoEl.style.display = "flex";
          }
          break;
      }
    }
  });
}