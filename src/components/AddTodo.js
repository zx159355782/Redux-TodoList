import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const inputChange = (v) => {
    setInput(v);
  };

  const handleAdd = () => {
    if (input) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div className="add">
      <input
        placeholder="輸入事項"
        value={input}
        onChange={(e) => inputChange(e.target.value)}
        className="add-input"
      />
      <button onClick={handleAdd} className="add-btn">
        添加
      </button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
