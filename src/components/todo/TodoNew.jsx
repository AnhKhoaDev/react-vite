import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("eric");

  const { addNewTodo } = props;

  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };

  const handleOnChange = (name) => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        Add
      </button>
      <div>My text input is = {valueInput}</div>
    </div>
  );
};

export default TodoNew;
