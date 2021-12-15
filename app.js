// remove all task
const clearTaskBtnNode = document.querySelector('.btn-black');
console.log(clearTaskBtnNode);
clearTaskBtnNode.addEventListener("click",removeTaskFromList);


function removeTaskFromList(e){
  console.log("e");
  e.preventDefault();
  const taskListsNodes  = document.querySelectorAll("li");
  for(let i = 0 ; i < taskListsNodes.length;i++){
    taskListsNodes[i].remove();


  }
  // let taskNodesArr = Array.from(tasksNodes);
  // taskNodesArr.forEach(function(e){
  //   e.remove;
  }

// remove one task
let removeBtns = document.querySelectorAll("span");
for(let i = 0;i < removeBtns.length;i++){
  removeBtns[i].addEventListener("click",removeElement);
}

function removeElement(e){
  e.preventDefault();
  console.log(e.target.parentElement.parentElement.remove());
}

// add task by clicking "add task" btn

// const addBtnNode = document.querySelector("#add-btn");
// addBtnNode.addEventListener("click",addElement);
const taskListNode = document.querySelector("ul");
const form = document.querySelector("form");
form.addEventListener("submit",addElement);
function addElement(e){
  e.preventDefault();
  let taskTitle = document.querySelector("#input-task").value;
  if(taskTitle == ""){
    alert("task cannot be empty")
    return;
  }
  if(doesTaskExist(taskTitle.trim())){
    console.log(taskTitle);
    alert("task exists. cannot add");
    return;
  }

  const task = document.createElement("li");
  task.classList.add("list-item");
  task.appendChild(document.createTextNode(taskTitle));
  const span = document.createElement("span");
  span.innerHTML = '<i class="fas fa-times fa-xs"></i>';
  task.appendChild(span);
  taskListNode.appendChild(task);
  removeBtns = document.querySelectorAll("span");
  document.querySelector("#input-task").value = "";

for(let i = 0;i < removeBtns.length;i++){
  removeBtns[i].addEventListener("click",removeElement);
}
}
function doesTaskExist(taskTitle){
  // 
  let taskListChildren = taskListNode.children;
  for(let i = 0 ; i < taskListChildren.length; i++){
    if(taskListChildren[i].innerText == taskTitle){
      return true;
    }
  }
  return false;
}

// ==key press events==
// add task by pressing enter key
// const inputTaskNode = document.querySelector("#input-task");
// inputTaskNode.addEventListener("keydown",keyPressEvent);

// document.addEventListener("keydown",keyPressEvent);
// function keyPressEvent(e){
// if(e.keyCode == 47){
//   e.preventDefault();
//   inputTaskNode.focus(e);
// }
// console.log(e);

// }