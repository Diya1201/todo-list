//import swal from 'sweetalert';
const todoUL = document.getElementById("todo-ul");
var status;
loadEvents();
// load every event in the page
function loadEvents(){
  const filterOptions = document.querySelector(".filter-todos");
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',geeks);
  document.querySelector(".main-ul").addEventListener('click',deleteOrTick);
  filterOptions.addEventListener("change", filterList);
}
function submit(e){ // Checks whether the add task firld is empty or not
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
    {
      createEvent(input.value); // If value is not empty then addTask function will be called
      input.value = '';
    }
}
function createEvent(items) {
  status = "pending";
  var task = {
      item: items,
      status: function setStat(items) {
        if(items.classList.contains("completed")) {
          status = "completed";
        } else if(items.classList.contains("deleted")){
          status = "deleted";
        } else {
          status = "pending";
        }
      },
  } 
  console.log(task);
  //task.status = updateStatus();
  var tasks = []; 
  tasks.push(task);
  var len = tasks.length;
  for(var i=0; i<len ; i++){
    let ul = document.querySelector(".main-ul");
    let li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `<div class="inner-div"><p class="tasks" id="list-tasks" onclick="">${items}</p><button class="done" ><i class="fas fa-check"></i></button><button class="delete"><i class="fas fa-trash"></i></button><button class="edit"><i class="fas fa-pen-square"></i></button><br/><br/></div>`;
    ul.appendChild(li);
    document.querySelector('.task-list').style.display = 'block';
  }
  console.log(tasks);
}
function clearList(){
  // setting the ul innerHML to an empty string
  //functionAlert();
  let ul = document.querySelector(".main-ul").innerHTML = '';
}
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
}
function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
  parentNode.classList.add("deleted");
  showSnackBar(e);
  //status = "deleted";
  //updateStatus();
}
function checkTask(e){
  const task = e.target.previousElementSibling;
  if(e.target.click){
    task.classList.toggle("completed");
    showSnackBar(e);
    //updateStatus();
    //input.focus();
  } 
}
/*function updateStatus() {
 var t = document.getElementById("list-tasks");
 if(t.classList.contains("completed")){
   status = "completed";
 }else if(t.classList.contains("deleted")){
   status = "deleted";
 } else {
   status = "pending";
 }
 console.log(status); 
}*/
function edit(e) {
  const edit = e.target.previousElementSibling;
  const edit1 = edit.previousElementSibling.previousElementSibling;
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
          todoEl.style.display = "block";
          document.getElementById("demo").innerHTML = ""
        break;
        case "completed":
          if (todoEl.children[0].children[0].classList.contains("completed")) {
            todoEl.style.display = "block";
            document.getElementById("demo").innerHTML = " "
          } else {
            todoEl.style.display = "none";
            //document.innerHTML("There are no completed tasks");
            //var x = document.getElementById("no-completed").innerHTML;
            document.getElementById("demo").innerHTML = "There are no completed tasks";
          }
        break;
        case "pending":
          if (todoEl.children[0].children[0].classList.contains("completed")) {
            todoEl.style.display = "none";
            //document.innerHTML("There are no pending tasks");
            //var x = document.getElementById("no-pending").innerHTML;
            document.getElementById("demo").innerHTML = "There are no pending tasks";
          } else {
            todoEl.style.display = "block";
            document.getElementById("demo").innerHTML = " "
          }
        break;
      }
    }
  });
}
function showSnackBar(e) {
  if(e.target.className == 'delete'){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  } else if(e.target.className == 'done'){
    var x = document.getElementById("snackbar1");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}
/*function functionAlert(myYes , myNo , msg) {
  console.log("Entered alert function")
  var confirmBox = $("#confirm");
  console.log("Variable set");
  console.log(confirmBox);
  console.log(myYes);
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click
  ( function() {
     clearList();
     confirmBox.hide();
  });
  confirmBox.find(".no").unbind().click(function() {
    confirmBox.hide();
  })
  confirmBox.find(".yes").click(myYes);
  confirmBox.find(".yes").click(myNo);
  confirmBox.show();
}*/
/*function JSalert(){
  
	swal({   
    title: "Your list will be deleted!",   
    text: "Are you sure to proceed?",   
    icon: "warning",   
    //showCancelButton: true,   
    buttons: true,
    dangerMode: true,   
    //closeOnConfirm: true,   
    //closeOnCancel: true
   })
    .then((isConfirm) => {   
        if (isConfirm) 
        {   
          swal(
             "cleared !!" ,"your list is cleared successfully" ,"success"
          );  
          clearList(); 
        } else {
          swal(
            "Clear Canceled" , "Your list is safe" ,"error"
          );
        }
          });
}*/
function geeks(msg, gfg) { 
  var confirmBox = $("#container"); 
    
  /* Trace message to display */
  confirmBox.find(".message").text("Do you want to clear the list"); 
    
  /* Calling function */
  confirmBox.find(".yes").unbind().click(function()  
  { 
  confirmBox.hide(); 
  }); 
  confirmBox.find(".yes").click(
    function() {
      clearList();
    }
  ); 
  confirmBox.show(); 
    
  confirmBox.find(".no").unbind().click(function()  
  { 
  confirmBox.hide(); 
  }); 
  confirmBox.find(".no").click(gfg); 
  confirmBox.show(); 
} 