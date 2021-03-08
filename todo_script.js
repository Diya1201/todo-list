/*(function(){
    /*1*///var customSelects = document.querySelectorAll(".dropdown_select");
    /*2*///for(var i=0; i<customSelects.length; i++){
      /*if (customSelects[i].hasAttribute("disabled")){
        customSelects[i].parentNode.className += " custom-dropdown--disabled";
      }*/
    //}
  //})()*/
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
  //const filter = todo.childNodes;
  //const filter_list = filter[0].childNodes;
  console.log(todo);
  //console.log(filter);
  todo.forEach(function(todoEl){
    console.log("Entered for each function");
    if(todoEl.children[0].nodeName === "DIV") {
          console.log(" enteered if of for each");
          //const todo1 = todoe[1].childNodes;
          console.log(todoEl);
          switch(e.target.value){
          case "all":
          console.log(e.target.value);
          console.log("entered all");
          todoEl.style.display = "flex";
          break;
          case "completed":
            console.log(e.target.value);
            console.log(todoEl.children[0].children[1]);
            if (todoEl.children[0].children[1].classList.contains("completed")) {
              console.log("entered completed if");
              todoEl.style.display = "flex";
            } else {
              console.log("entered completed else");
              todoEl.style.display = "none";
           }
          break;
          case "pending":
            console.log(e.target.value); 
            if (todoEl.children[0].children[1].classList.contains("completed")) {
              console.log("entered pending if");
              todoEl.style.display = "none";
            } else {
              console.log("entered pending else");
              todoEl.style.display = "flex";
            }
          break;
        }
    }
  });
}