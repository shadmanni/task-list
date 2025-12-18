const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");

taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") createTask();
});

document.querySelector("#push").onclick = createTask;

function createTask() {
    if (taskInput.value.trim() === "") {
        alert("The task field is blank. Enter a task name and try again.");
        return;
    }

    const task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <label class="taskname">
            <input type="checkbox" class="check-task">
            <p>${taskInput.value}</p>
        </label>
        <div class="delete">
            <i class="uil uil-trash"></i>
        </div>
    `;

    task.querySelector(".delete").onclick = () => task.remove();

    task.querySelector(".check-task").onclick = function () {
        this.nextElementSibling.classList.toggle("checked");
    };

    taskSection.appendChild(task);

    taskSection.offsetHeight >= 300
        ? taskSection.classList.add("overflow")
        : taskSection.classList.remove("overflow");

    taskInput.value = "";
}
