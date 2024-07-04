let tasks = [
    {
        id: 1,
        taskName: 'Work',
        description: "Complete project report",
        dueDate: new Date('2024-06-10'),
        priority: 'important',
    },
    {
        id: 2,
        taskName: 'School',
        description: "Complete final year thesis",
        dueDate: new Date('2024-07-15'),
        priority: 'very important',
    },
    {
        id: 3,
        taskName: 'Errands',
        description: "Buy groceries from the store",
        dueDate: new Date('2024-06-05'),
        priority: 'important',
    },
    {
        id: 4,
        taskName: 'Health and fitness',
        description: "Go to the hospital for checkup",
        dueDate: new Date('2024-06-08'),
        priority: 'very important',
    },
    {
        id: 5,
        taskName: 'Personal Development',
        description: "Read 10 pages of a self-development book",
        dueDate: new Date('2024-06-04'),
        priority: 'important',
    }
];

function add() {
    const taskName = document.querySelector('.add-new').value;
    const description = "No description"; // Default description
    const dueDate = new Date().toLocaleDateString(); // Default due date
    const priority = 'important'; // Default priority

    if (taskName) {
        const newTask = {
            id: tasks.length + 1,
            taskName,
            description,
            dueDate,
            priority
        };

        tasks.push(newTask);
        displayTasks();
        clearInput();
    } else {
        alert('Please enter a task name');
    }
}

function displayTasks() {
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = ''; // Clear current tasks

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-description');

        taskDiv.innerHTML = `
            <input type="radio" id="task-${task.id}">
            <label for="task-${task.id}">${task.taskName}</label>
            <p>${task.description}</p>
            <p>Reminder - ${task.dueDate}</p>
            <div class="make-changes">
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        taskList.appendChild(taskDiv);
    });
}

function clearInput() {
    document.querySelector('.add-new').value = '';
}

function editTask(taskId) {
    // Placeholder function to handle editing tasks
    console.log(`Edit task with ID: ${taskId}`);
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}

// Initial display of tasks
displayTasks();
