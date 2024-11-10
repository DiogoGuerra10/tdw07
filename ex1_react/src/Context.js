import React, { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: 0, text: "Eat", completed: true },
          { id: 1, text: "Sleep", completed: false },
          { id: 2, text: "Repeat", completed: false },
        ];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodoCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (id, newText) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  const deleteTodo = (id) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };

  const filterTodos = (todos, filter) => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = filterTodos(todos, filter) || []; 

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        addTodo,
        toggleTodoCompleted,
        editTodo,
        deleteTodo,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
