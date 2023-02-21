"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const todoList = document.getElementById('todo-list');
const todoItemInput = document.getElementById('add-todo-item-input');
// const items = [
//   { id: 1, text: 'Something important to do', done: true },
//   { id: 2, text: 'Another something', done: false },
//   { id: 3, text: 'Get a new pencil', done: false },
//   { id: 4, text: 'Finish some task today', done: false },
// ];
(_a = document.getElementById('add-todo-item-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    yield fetch(`http://localhost:3000/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: todoItemInput === null || todoItemInput === void 0 ? void 0 : todoItemInput.value }),
    });
    // items.push({ text: todoItemInput?.value, done: false, id: items.length + 1 });
    todoItemInput.value = '';
    renderItems();
}));
const toggleItem = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const currentItemId = event.getAttribute('data-list-id');
    console.log(currentItemId);
    // const listItem = items.find(({ id }) => id === currentItemId);
    // listItem && (listItem.done = event.checked);
    yield fetch(`http://localhost:3000/todos/item/${currentItemId}/toggle`, { method: 'PUT' });
    setTimeout(renderItems, 850);
});
const createItem = ({ text, done, id }) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <label>
      <input type="checkbox" data-list-id="${id}" class="hidden-real-check"${done ? ' checked' : ''} onchange="toggleItem(this)" />
      <div class="todo-element">
        <span class="customized-ckeck">
          <span class="checkbox">
            <span class="internal-one"></span>
            <span class="internal-two"></span>
          </span>
        </span>
        <span class="element-title">${text}</span>
      </div>
    </label>
  `;
    return li;
};
const renderItems = () => __awaiter(void 0, void 0, void 0, function* () {
    todoList && (todoList.innerHTML = '');
    // const data = items;
    const response = yield fetch('http://localhost:3000/todos');
    const data = yield response.json();
    [...data]
        .sort((x, y) => (x.done === y.done ? 0 : x.done ? 1 : -1))
        .forEach((item) => {
        const toDoItem = createItem(item);
        todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(toDoItem);
    });
});
renderItems();
