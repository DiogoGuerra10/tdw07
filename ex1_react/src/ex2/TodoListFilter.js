import React, { useState, useContext } from 'react';
import { TodoContext } from '../Context';

const TodoListFilter2 = () => {
  const {
    filteredTodos = [],
    toggleTodoCompleted,
    deleteTodo,
    editTodo,
  } = useContext(TodoContext) || {};  // <- Garante que o contexto não é undefined

  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState('');

  // Verifica se as funções e filteredTodos foram definidos
  if (!filteredTodos || !toggleTodoCompleted || !deleteTodo || !editTodo) {
    return <p>Error: Context data is not available</p>;
  }

  const handleEditClick = (id, currentName) => {
    setEditingId(id);
    setNewName(currentName);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTodo(editingId, newName);
    setEditingId(null);
    setNewName('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setNewName('');
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <h2 id="list-heading" tabIndex="-1">
        {filteredTodos.length} tasks remaining
      </h2>

      <ul aria-labelledby="list-heading" className="todo-list stack-large stack-exception" role="list">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <li key={todo.id} className="todo">
              <div className="stack-small">
                {editingId === todo.id ? (
                  <form onSubmit={handleEditSubmit}>
                    <label style={{ color: "#4d4d4d" }}>New name for {todo.text}:</label>
                    <input
                      type="text"
                      className="input input__lg"
                      value={newName}
                      onChange={handleNameChange}
                      autoFocus
                    />
                    <button type="button" className="btn btn__secondary btn__sm" onClick={handleCancelEdit}>Cancel</button>
                    <button type="submit" className="btn btn__primary btn__sm">Save</button>
                  </form>
                ) : (
                  <>
                    <div className="c-cb">
                      <input
                        id={`todo-${todo.id}`}
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodoCompleted(todo.id)}
                      />
                      <label className="todo-label" htmlFor={`todo-${todo.id}`}>{todo.text}</label>
                    </div>
                    <div className="btn-group">
                      <button type="button" className="btn" onClick={() => handleEditClick(todo.id, todo.text)}>Edit</button>
                      <button type="button" className="btn btn__danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                  </>
                )}
              </div>
            </li>
          ))
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </div>
  );
};

export default TodoListFilter2;
