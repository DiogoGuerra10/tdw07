import React, { useState } from 'react';

const TodoListFilter = ({ todos, todocheckbox, deleteTodo, editTodo}) => {

  const [editingId, setEditingId] = useState(null); // ID da tarefa que está a ser editada
  const [newName, setNewName] = useState(''); // Novo nome para a tarefa em edição

  const EditClick = (id, currentName) => {
    setEditingId(id); // Define a tarefa em edição
    setNewName(currentName); // Inicializa o input com o nome atual da tarefa
  };

  const NameChange = (e) => {
    setNewName(e.target.value); // Atualiza o valor do input
  };

  const tarefaEdicao = (e) => {
    e.preventDefault();
    editTodo(editingId, newName); // Chama a função editTodo para atualizar o nome
    setEditingId(null); // Sai do modo de edição
    setNewName(''); // Limpa o input
  };

  const CancelEdit = () => {
    setEditingId(null); // Sai do modo de edição
    setNewName(''); // Limpa o input
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <h2 id="list-heading" tabIndex="-1">{todos.length} tasks remaining</h2>

      <ul aria-labelledby="list-heading" className="todo-list stack-large stack-exception" role="list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            <div className="stack-small">
              {editingId === todo.id ? (
                // Exibe o formulário de edição se o ID estiver em edição
                <form onSubmit={tarefaEdicao}>
                  <label style={{ color: "#4d4d4d" }}>New name for {todo.text}:</label>
                  <input
                    type="text"
                    className="input input__lg"
                    value={newName}
                    onChange={NameChange}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="btn btn__secondary btn__sm"
                    onClick={CancelEdit}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn__primary btn__sm">Save</button>
                  
                </form>
              ) : (
                // Exibe as tarefas normais
                <>
                  <div className="c-cb">
                    <input
                      id={`todo-${todo.id}`}
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => todocheckbox(todo.id)}
                    />
                    <label className="todo-label" htmlFor={`todo-${todo.id}`}>{todo.text}</label>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn"
                      onClick={() => EditClick(todo.id, todo.text)}
                    >
                      Edit <span className="visually-hidden">{todo.text}</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn__danger"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete <span className="visually-hidden">{todo.text}</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TodoListFilter;
