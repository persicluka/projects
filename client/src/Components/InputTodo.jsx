import React, { useState } from "react";
import "./InputTodo.css";

function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <h1> Input a todo </h1>
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="What are your plans?"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="form-button" onClick={onSubmitForm}>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
