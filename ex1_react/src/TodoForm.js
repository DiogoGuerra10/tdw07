import React, { useState } from 'react';


const TodoForm = ({addTodo}) => {

    const [inputValue, setInputValue] = useState('');

    const mundancavalue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        addTodo(inputValue);  // Chama a função addTodo passada como prop
        setInputValue('');    // Limpa o campo de entrada após adicionar
      }
    };

    return (
        <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper" style={{ color: "#4d4d4d", marginTop: "20px" }}>
        <label htmlFor="new-todo-input">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={inputValue}
        onChange={mundancavalue}
      />
      <button type="submit" className="btn btn__primary btn__lg">Add</button>
    </form>
    )
}

export default TodoForm;