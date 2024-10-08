let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    tasks.push({ text: task, completed: false });
    taskInput.value = "";
    displayTasks()
}

function displayTasks(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++){
        const li = document.createElement('li')
        li.textContent = tasks[i].text;
        if(tasks[i].completed){
            li.classList.add('completed');
        }
        li.onclick = () => toggleTask(i);
        taskList.appendChild(li)
    }
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks()
}

function sortTasks(){
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    displayTasks()
}