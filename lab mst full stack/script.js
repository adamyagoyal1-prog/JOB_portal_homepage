let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask(){

let task = input.value;

if(task === ""){
alert("Enter task");
return;
}

let li = document.createElement("li");
li.innerText = task;

// CREATE DELETE BUTTON
let delBtn = document.createElement("button");
delBtn.innerText = "Delete";

// DELETE EVENT
delBtn.addEventListener("click", function(){
li.remove();
});

// ADD BUTTON TO TASK
li.appendChild(delBtn);

// ADD TASK TO LIST
list.appendChild(li);

input.value = "";

}