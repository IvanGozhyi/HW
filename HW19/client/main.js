const submitBtn = document.querySelector(".submitTasks");
const taskInput = document.querySelector(".forTasks");
const descInput = document.querySelector(".forDescription");
const diffInput = document.querySelector(".forDifficulty");
const output = document.querySelector(".output");

let ul = null;

submitBtn.addEventListener("click", function () {

    let title = taskInput.value.trim();
    let description = descInput.value.trim();
    let difficulty = parseInt(diffInput.value);

    if (!title || !difficulty){
        alert("Please enter a title and difficulty");
        return;
    }

    fetch("/api/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ title, description, difficulty })
    })
        .then(response => response.json())
        .then(newTask => {
            addTaskToList(newTask);
        })
        .catch(err => console.error("Error when adding:", err));
});

let addTaskToList = (task) => {
    if (!ul) {
        ul = document.createElement("ul");
        output.appendChild(ul);
    }

    const li = document.createElement("li");

    const forModal = document.createElement("span");
    forModal.textContent = `${task.title}, difficulty: ${task.difficulty}`;
    forModal.style.cursor = "pointer";
    forModal.addEventListener("click", function (){
        const modalEl = document.getElementById("taskModal");
        modalEl.querySelector(".modal-body").textContent = `Name of task: ${task.title},Description: ${task.description}`;
        let myModal = new bootstrap.Modal(document.getElementById("taskModal"));
        myModal.show();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", function () {
        fetch(`/api/tasks/${task.id}`, { method: "DELETE" })
            .then(() => li.remove())
            .catch(err => console.error("Error when deleting:", err));
    });
    li.appendChild(forModal);
    li.appendChild(delBtn);
    ul.appendChild(li);
}

function loadTasks() {
    fetch("/api/tasks")
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(addTaskToList);
        })
        .catch(err => console.error("Error when loading:", err));
}




loadTasks();


