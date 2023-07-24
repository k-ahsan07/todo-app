import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, settask] = useState([]);
  const [newTask, setnewtask] = useState('');

  const handleinputchange = (event) => {
    setnewtask(event.target.value);
  };

  const handleaddtask = () => {
    if (newTask.trim() !== '') {
    settask([...tasks, newTask]);
    setnewtask('');
    }
  };

  const handleremovetask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    settask(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="todo-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={newTask}
            onChange={handleinputchange}
          />
          <button onClick={handleaddtask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleremovetask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
