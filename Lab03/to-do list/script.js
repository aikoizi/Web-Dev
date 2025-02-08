function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim(); 
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteImg = document.createElement("img");
    deleteImg.src = "trash.png"; 
    deleteImg.className = "delete-icon"; 
    deleteImg.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(checkbox); 
    li.appendChild(span);     
    li.appendChild(deleteImg);
    taskList.appendChild(li);

    taskInput.value = "";
}
