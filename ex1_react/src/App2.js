import React, { useContext } from 'react';
import TodoForm from './ex2/TodoForm2';
import TodoListFilter from './ex2/TodoListFilter';
import { TodoContext } from './Context';

const App2 = () => {
  const { setFilter, tasks } = useContext(TodoContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "#4d4d4d", marginTop: "20px" }}>TodoMatic</h1>
        <TodoForm />
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true" onClick={() => setFilter("all")}>
            <span className="visually-hidden">Show </span>
            <span>All</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => setFilter("active")}>
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => setFilter("completed")}>
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <TodoListFilter />
      </header>
    </div>
  );
};

export default App2;
