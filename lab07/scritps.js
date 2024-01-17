document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input"); 
    const addButton = document.getElementById("add-button");
    
    // อาร์เรย์สำหรับเก็บรายการ Todo
    let todos = [];

    // เพิ่มรายการ Todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = {
                text: todoText, 
                completed: false, 
            };
            todos.push(todoItem);
            renderTodoList(); 
            todoInput.value = "";
    }
}
// ลบรายการ Todo
function deleteTodo (index) { 
    todos.splice(index, 1); 
    renderTodoList();
}

// ตรวจสอบ/เลิกการเสร็จบราชการ Todo
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodoList();
}

// แสดงรายการ Todo บนหน้าเว็บ
function renderTodoList() {
    console.log(todos);
    todolist.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const todoltem = todos[i];
        const listItem = document.createElement("li"); 
        listItem.textContent = todoItem.text;
        if (todoltem.completed) { 
            listItem.classList.add("completed");
        }
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "";
        deleteButton.addEventListener("click", () => deleteTodo(i));
        const completeButton = document.createElement("button");
        completeButton.textContent = todoItem.completed?"": "r";
        completeButton.addEventListener("click", () => toggleComplete(i)); 
        listItem.appendChild(completeButton); 
        listItem.appendChild(deleteButton); 
        todoList.appendChild(listItem);
    }
}
    
    
    // การกดปุ่มเพิ่ม  " เพิ่ม "
    addButton.addEventListener("click", addTodo);
    
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
    addTodo();
        }
    });

    // แสดงรายการ Todo ครั้งเเรก
    renderTodoList();
})