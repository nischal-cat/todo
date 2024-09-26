document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.querySelector('.fa-plus');
    const taskInput = document.querySelector('.textarea');
    const taskList = document.querySelector('.tasks ul');

    // Add Task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerText = `
                <input type="checkbox">
                <p>${taskText}</p>
                <i class="fa-solid fa-trash-can"></i>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
            addTaskEventListeners(taskItem);
        }
    });

    // Add event listeners for existing tasks
    const addTaskEventListeners = (taskItem) => {
        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        const deleteBtn = taskItem.querySelector('.fa-trash-can');

        // Mark task as completed
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });

        // Delete task
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    };

    // Initialize event listeners for existing tasks
    document.querySelectorAll('.tasks li').forEach(addTaskEventListeners);
});
