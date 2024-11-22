import { useState } from 'react';
import './App.css';

function Todo({ text, id, onDelete }) {
  return (
    <li className="list-group-item">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        <span>{text}</span>
      </label>
      <button onClick={() => onDelete(id)}>delete</button>
    </li>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { id: 0, text: 'Вивчити HTML', checked: true },
    { id: 1, text: 'Вивчити CSS', checked: true },
    { id: 2, text: 'Вивчити JS', checked: false },
  ]);

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="container">
      <h1 className="mt-5">My TODO App</h1>
      <div className="mb-3">
        <span className="me-3">
          Item count: <span id="item-count">{todos.length}</span>
        </span>
        <span>
          Unchecked count:{' '}
          <span id="unchecked-count">
            {todos.filter((todo) => !todo.checked).length}
          </span>
        </span>
      </div>
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          const newId = todos.length ? todos[todos.length - 1].id + 1 : 0;
          setTodos([...todos, { id: newId, text: 'New TODO', checked: false }]);
        }}
      >
        New TODO
      </button>
      <ul id="todo-list" className="list-group">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
