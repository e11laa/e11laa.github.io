document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const clock = document.getElementById('clock');
    const cuckoo = document.getElementById('cuckoo');

    // 時計機能
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ja-JP', { hour12: false });
        clock.textContent = timeString;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // 鳩時計機能
    function playCuckoo() {
        cuckoo.textContent = 'カッコー';
        cuckoo.style.display = 'block';
        setTimeout(() => {
            cuckoo.style.display = 'none';
        }, 3000); // 鳩が3秒間表示される
    }

    function checkCuckooTime() {
        const now = new Date();
        if (now.getMinutes() === 0 && now.getSeconds() === 0) {
            playCuckoo();
        }
    }

    setInterval(checkCuckooTime, 1000);

    // テスト用ボタンで鳩を表示
    const testCuckooBtn = document.getElementById('testCuckooBtn');
    testCuckooBtn.addEventListener('click', playCuckoo);

    // Todo追加処理
    function addTodo(text) {
        const li = document.createElement('li');
        li.textContent = text;
        li.className = 'todo-item';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(li);
            saveTodos();
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    // ストレージ保存
    function saveTodos() {
        const todos = [];
        document.querySelectorAll('.todo-item').forEach(li => {
            todos.push({ text: li.firstChild.textContent });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // 追加ボタンクリック
    addBtn.addEventListener('click', function() {
        const text = todoInput.value.trim();
        if (text !== '') {
            addTodo(text);
            saveTodos();
            todoInput.value = '';
        }
    });

    // Enterキーでも追加
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    // 初期読み込み
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    savedTodos.forEach(todo => {
        addTodo(todo.text);
    });
});