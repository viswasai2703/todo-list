function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.append(span)
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}
