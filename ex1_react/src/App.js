import React, { useState } from 'react';
import './App.css';
import TodoForm from './ex1/TodoForm';
import TodoListFilter from './ex1/TodoListFilter';



function App() {

  const [todos, setTodos] = useState([
    { id: 0, text: "Eat", completed: true },
    { id: 1, text: "Sleep", completed: false },
    { id: 2, text: "Repeat", completed: false }
  ]);
  
  const [filter, setFilter] = useState("all"); //Estado inicial do filtro

   // Função para adicionar uma nova tarefa
   const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: todos.length, text: text, completed: false }
    ]);
  };

  //Função para filtrar tarefas com base no filtro ativo
  const filteredTodos = todos.filter((todo => {
    if (filter === "all") return true;
    if (filter ==="active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  }))

  const todocheckbox = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  

  // Função para deletar uma tarefa pelo ID
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

   // Função para editar o nome da tarefa
   const editTodo = (id, newName) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newName } : todo
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{ color: "#4d4d4d", marginTop: "20px" }}>TodoMatic</h1>

      <TodoForm addTodo={addTodo}/>
      

        <div class="filters btn-group stack-exception">

          <button 
          type="button" 
          class="btn toggle-btn" 
          aria-pressed="true"
          onClick={() => setFilter("all")}
          >
            <span class="visually-hidden">Show </span>
            <span>All</span>
            <span class="visually-hidden"> tasks</span>
          </button>

          <button 
          type="button" 
          class="btn toggle-btn" 
          aria-pressed="false"
          onClick={() => setFilter("active")}
          >
             <span class="visually-hidden">Show </span>
             <span>Active</span>
             <span class="visually-hidden"> tasks</span>
          </button>

          <button 
          type="button" 
          class="btn toggle-btn" 
          aria-pressed="false"
          onClick={() => setFilter("completed")}
          >
             <span class="visually-hidden">Show </span>
             <span>Completed</span>
             <span class="visually-hidden"> tasks</span>
            </button>
        </div>

        <TodoListFilter todos={filteredTodos} todocheckbox={todocheckbox} deleteTodo={deleteTodo} editTodo={editTodo}/>
        
      </header>
    </div>
  );
}

export default App;
