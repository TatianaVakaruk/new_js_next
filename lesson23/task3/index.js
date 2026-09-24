const tasks = [
  { text: 'Buy milk', done: false, 'data-id':"1" },
  { text: 'Pick up Tom from airport', done: false, 'data-id': "2"},
  { text: 'Visit party', done: false, 'data-id':"3" },
  { text: 'Visit doctor', done: true, 'data-id':"4" },
  { text: 'Buy meat', done: true, 'data-id':"5" },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
    listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, 'data-id': id}) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const createTask = () => {
    const input = document.querySelector('.task-input');
    const btn = document.querySelector('.create-task-btn');

 const onCreate = () => {
    const taskText = input.value.trim();
    if(taskText === ''){
        return;
    }
    tasks.push({text: taskText, done: false, 'data-id': String(Math.floor(Math.random() * 10000)).padStart(4, '0')});
    input.value = '';
    renderTasks(tasks);
}

    btn.addEventListener('click', onCreate);
  }

const updateTask =() => {
    const onUpdate = (e) => {
    
    if (!e.target.classList.contains('list__item-checkbox')) {
      return;
    }

    const taskId = e.target.dataset.id;
    const task = tasks.find(item => item['data-id'] === taskId);

    if (task) {
     task.done = !task.done;
      renderTasks(tasks);
    }
  }
listElem.addEventListener('click', onUpdate);
};


createTask();
updateTask();
renderTasks(tasks);
