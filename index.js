// Function to add a task to the list
function addTask(event) {
  event.preventDefault(); // Prevent form submission
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    let task = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", completeTask);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", deleteTask);

    task.appendChild(checkbox);
    task.appendChild(document.createTextNode(taskInput.value));
    task.appendChild(deleteButton);

    taskList.appendChild(task);
    taskInput.value = ""; // Clear the input field
  }
}

// Function to mark a task as completed
function completeTask(event) {
  let task = event.target.parentNode;
  if (event.target.checked) {
    task.className = "completed";
  } else {
    task.className = "";
  }
}

// Function to delete a completed task
function deleteTask(event) {
  let task = event.target.parentNode;
  let taskList = document.getElementById("taskList");
  taskList.removeChild(task);
}

let todoForm = document.getElementById("todoForm");
todoForm.addEventListener("submit", addTask);
