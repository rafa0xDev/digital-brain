const sideBtn = document.getElementById('dropdownSideBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Toggle sidebar visibility when the button is clicked
sideBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// dropdown form
const addTaskBtn = document.getElementById('dropdownAddTask');
const addTaskDropdown = document.getElementById('addTaskDropdown');
const cancelBtn = document.getElementById('cancel'); // tombol Cancel

addTaskBtn.addEventListener('click', () => {
    addTaskDropdown.classList.toggle('active'); // toggle dropdown visibility
});

cancelBtn.addEventListener('click', () => {
    addTaskDropdown.classList.remove('active'); // sembunyikan dropdown saat Cancel diklik
});

const saveBtn = document.getElementById('save');
const taskInput = document.getElementById('taskName');
const taskList = document.getElementById('taskList');

// --- PERBAIKAN: Pastikan completedList ada ---
const completedList = document.getElementById('completedList'); // <-- tambahkan ini jika belum ada di HTML

saveBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const taskDate = document.getElementById('dateTask').value;
    const priorityLevel = document.getElementById('priorityLevel').value;

    if (taskText === "") return;

    const li = document.createElement('li');
    li.classList.add('task-item', priorityLevel); // priority: low, medium, high

    // Buat checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');

    // Buat container untuk isi task
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('task-content');

    // Text task
    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    // Priority level
    const priority = document.createElement('small');
    priority.textContent = `Priority: ${priorityLevel}`;
    priority.classList.add('task-priority');

    // Tanggal
    const date = document.createElement('small');
    date.textContent = `Due: ${taskDate}`;
    date.classList.add('task-date');

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // --- PERBAIKAN: Update stats saat delete ---
    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateStats(); // <-- tambahkan updateStats di sini
    });

    // --- PERBAIKAN: Gabungkan event checkbox jadi satu saja ---
    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed', checkbox.checked);
        li.classList.toggle('completed', checkbox.checked);

        if (checkbox.checked) {
            completedList.appendChild(li); // <-- gunakan variabel completedList
        } else {
            taskList.appendChild(li);
        }
        updateStats(); // <-- update stats setiap pindah
    });

    // Gabungkan isi ke dalam wrapper
    contentWrapper.appendChild(span);
    contentWrapper.appendChild(priority);
    contentWrapper.appendChild(date);

    // Tambahkan semua ke <li>
    li.appendChild(checkbox);
    li.appendChild(contentWrapper);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    updateStats(); // <-- update stats setelah tambah task

    // Reset input dan sembunyikan form
    taskInput.value = "";
    document.getElementById('dateTask').value = "";
    document.getElementById('priorityLevel').value = "low";
    addTaskDropdown.classList.remove('active');
    overlay.classList.remove('active');
});

function updateStats() {
    const total = document.querySelectorAll('.task-item').length;
    const done = completedList.children.length; // <-- gunakan variabel completedList
    const pending = taskList.children.length;

    // --- PERBAIKAN: Pastikan elemen totalTasks ada di HTML, jika tidak hapus baris ini ---
    document.getElementById('totalTasks').textContent = total; 
    document.getElementById('doneTasks').textContent = done;
    document.getElementById('pendingTasks').textContent = pending;
}

const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body ;

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'light') {
        body.classList.toggle('light-mode');
    }
});

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    }
    else {
        localStorage.setItem('theme','dark');
    }
});

document.getElementById("showAll").addEventListener("click", () => {
  document.querySelectorAll(".task-item").forEach(task => {
    task.style.display = "flex";
  });
});

document.getElementById("showCompleted").addEventListener("click", () => {
  document.querySelectorAll(".task-item").forEach(task => {
    if (task.classList.contains("completed")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});

document.getElementById("showPending").addEventListener("click", () => {
  document.querySelectorAll(".task-item").forEach(task => {
    if (!task.classList.contains("completed")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});

document.getElementById('sortByDate').addEventListener('click', () => { // <-- perbaiki id
    const tasks = Array.from(taskList.querySelectorAll('.task-item'));

    tasks.sort((a, b) => {
        const dateA = new Date(a.querySelector('.task-date').textContent.replace("Due: ", ""));
        const dateB = new Date(b.querySelector('.task-date').textContent.replace("Due: ", ""));
        return dateA - dateB;
    });

    tasks.forEach(task => taskList.appendChild(task)); // <-- pindahkan ke luar sort
});