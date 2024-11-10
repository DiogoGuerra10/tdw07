// ex2/TodoForm.js
import React, { useState, useContext } from 'react';
import { TodoContext } from '../Context';

const TodoForm2 = () => {
  const { addTodo } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper" style={{ color: "#4d4d4d", marginTop: "20px" }}>
        <label htmlFor="new-todo-input">What needs to be done?</label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">Add</button>
    </form>
  );
};

export default TodoForm2;
