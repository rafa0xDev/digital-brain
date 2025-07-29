const input = document.getElementById('taskInput');
const addbtn = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Fungsi untuk simpan ke localStorage
function saveTasks(){
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        tasks.push({
            Text : li.firstChild.textContent.trim(),
            done : li.classList.contains('done')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Fungsi untuk muat tasks dari localStorage
function loadTasks(){
    const data = JSON.parse(localStorage.getItem('tasks')) || [];
    data.forEach(task => {
        addTaskToUI(task.text, task.done);
    });
};

// Fungsi untuk menambahkan task ke UI
function addTaskToUI(taskText, done = false) {
    const li = document.createElement('li');
    li.textContent = taskText;

    if (done) {
    li.classList.add("done");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Checklist selesai
    li.addEventListener("click", function () {
        li.classList.toggle("done");
        saveTasks();
    });

    // Hapus task
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
        saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
};

addbtn.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText !== "") {
    addTaskToUI(taskText);
    input.value = "";
    saveTasks();
  }
});

// 6. Jalankan load saat pertama kali
loadTasks();
