type Item = {
  text: string;
  done: boolean;
  id: number;
};

const todoList = document.getElementById('todo-list');
const todoItemInput = document.getElementById('add-todo-item-input') as HTMLInputElement;
// const items = [
//   { id: 1, text: 'Something important to do', done: true },
//   { id: 2, text: 'Another something', done: false },
//   { id: 3, text: 'Get a new pencil', done: false },
//   { id: 4, text: 'Finish some task today', done: false },
// ];

document.getElementById('add-todo-item-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  await fetch(`http://localhost:3000/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: todoItemInput?.value }),
  });
  // items.push({ text: todoItemInput?.value, done: false, id: items.length + 1 });
  todoItemInput.value = '';
  renderItems();
});

const toggleItem = async (event: HTMLInputElement) => {
  const currentItemId = event.getAttribute('data-list-id');
  console.log(currentItemId)
  // const listItem = items.find(({ id }) => id === currentItemId);
  // listItem && (listItem.done = event.checked);
  await fetch(`http://localhost:3000/todos/item/${currentItemId}/toggle`, { method: 'PUT' });
  setTimeout(renderItems, 850);
};

const createItem = ({ text, done, id }: Item) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <label>
      <input type="checkbox" data-list-id="${id}" class="hidden-real-check"${
    done ? ' checked' : ''
  } onchange="toggleItem(this)" />
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

const renderItems = async () => {
  todoList && (todoList.innerHTML = '');
  // const data = items;
  const response = await fetch('http://localhost:3000/todos');
  const data = await response.json();
  [...data]
    .sort((x, y) => (x.done === y.done ? 0 : x.done ? 1 : -1))
    .forEach((item) => {
      const toDoItem = createItem(item);
      todoList?.appendChild(toDoItem);
    });
};

renderItems();
