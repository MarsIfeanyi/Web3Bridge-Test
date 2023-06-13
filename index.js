// Function that allows user to enter or a tasks to the Task list
function addTask(event) {
  // Prevent form submission
  event.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const task = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", completeTask);

    const deleteButton = document.createElement("button");
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

// Function that allows user to mark a task as completed
function completeTask(event) {
  const task = event.target.parentNode;
  if (event.target.checked) {
    task.className = "completed";
  } else {
    task.className = "";
  }
}

// Function  that allows user to delete a completed task
function deleteTask(event) {
  const task = event.target.parentNode;
  const taskList = document.getElementById("taskList");
  taskList.removeChild(task);
}

// getting access to the form
const todoForm = document.getElementById("todoForm");
todoForm.addEventListener("submit", addTask);
