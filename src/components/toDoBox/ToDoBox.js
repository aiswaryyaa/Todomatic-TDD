import React, { useState } from "react";
import ToDoItem from "../toDoItem/ToDoItem";

const ToDoBox = () => {
  const [doList, setDoList] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (Event) => {
    setValue(Event.target.value);
  };
  const handleEnter = (Event) => {
    if (Event.key === "Enter" && value !== "") {
      setDoList([value, ...doList]);
      setValue("");
    }
  };
  const handleClick = () => {
    if (value !== "") setDoList([value, ...doList]);
    setValue("");
  };
  function handleRemoveItem(id) {
    setDoList(doList.filter((toDo, index) => id !== index));
    console.log(id);
    
  }
  return (
    <div className="to-do-box">
      <h2>
        <strong>Add Tasks</strong>
      </h2>
      <div className="to-do-input">
        <label for="name"> </label>
        <input
          data-testid="to-do-input"
          className="do-item"
          type="text"
          value={value}
          placeholder="Add Your Task"
          onChange={handleChange}
          onKeyPress={handleEnter}
        ></input>
        <button data-testid="add-btn" className="btn" onClick={handleClick}>
          {" "}
          +{" "}
        </button>
      </div>

      <div data-testid="to-do-list">
        {doList.map((toDo, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={toDo}
            onChecked={handleRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoBox;