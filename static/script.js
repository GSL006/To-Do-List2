// script.js
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value.trim();
    if (task !== "") {
        // Send task to backend
        fetch("/api/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "task=" + encodeURIComponent(task),
        })
            .then(response => {
                if (response.ok) {
                    // Add task to list if request was successful
                    var taskList = document.getElementById("taskList");
                    var li = document.createElement("li");
                    li.textContent = task;
                    taskList.appendChild(li);
                    taskInput.value = ""; // Clear input field
                } else {
                    throw new Error("Failed to add task");
                }
            })
            .catch(error => console.error("Error:", error));
    }
}
