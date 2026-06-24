let arr = JSON.parse(localStorage.getItem("task")) || [];

// all functions here

render();


 

function render() {
    
    
     let completedTasks = arr.filter(task => task.completed).length;
    let incompleteTasks = arr.length - completedTasks;

    document.getElementById("totalTasks").innerText = arr.length;
    document.getElementById("completedTasks").innerText = completedTasks;
    document.getElementById("incompleteTasks").innerText = incompleteTasks;

    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {

        let row = document.createElement("tr");

        let doneColumn = document.createElement("td");
        let taskColumn = document.createElement("td");

        // Checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = arr[i].completed;

        doneColumn.appendChild(checkbox);

        // Task text
        let span = document.createElement("span");
        span.innerText = arr[i].task;

        if (arr[i].completed) {
            span.style.textDecoration = "line-through";
        }

        taskColumn.appendChild(span);

        checkbox.onchange = function () {

            arr[i].completed = checkbox.checked;

    localStorage.setItem("task", JSON.stringify(arr));
            render();
        };

        row.appendChild(doneColumn);
        row.appendChild(taskColumn);

        taskList.appendChild(row);
    }
}

function append() {

    let userData = document.getElementById("userData").value;

    if (userData.trim() === "") {
        return;
    }

    arr.push({
        task: userData,
        completed: false
    });
    localStorage.setItem("task", JSON.stringify(arr));

    document.getElementById("userData").value = "";
  
   
    render();
}

function deleted() {

    arr = arr.filter(task => !task.completed);

    localStorage.setItem("task", JSON.stringify(arr));

    render();
}

