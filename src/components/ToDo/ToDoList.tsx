import React from "react";
import { FC, useState } from "react";
import "./ToDo.scss";
import { useNavigate } from "react-router-dom";

export const ToDoList: FC = () => {
  const navigate = useNavigate();
  const [taskArray, setTaskArray] = React.useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleList = () => {
    if (newTask !== "") {
      setTaskArray([...taskArray, newTask]);
    }
    console.log(taskArray);
    setNewTask("");
  };

  function removeTask(index: number) {
    const newArray = [...taskArray];
    newArray.splice(index, 1);
    setTaskArray(newArray);
  }

  const handleNewCategory = () => {
    navigate("/category");
  };

  // const [checked, setChecked] = React.useState(false);

  // const handleCheck = () => {
  //   setChecked(!checked);
  // };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button id="addToDoBtn" type="button" onClick={handleList}>
          Add Todo
        </button>
      </form>
      <ul>
        {taskArray.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" onClick={() => removeTask(index)}>
              Delete
            </button>

            {/* <label htmlFor="done">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleCheck}
                name="done"
                id="done"
              />
              Done?
            </label> */}
          </li>
        ))}
      </ul>
      <div className="categories">
        <button type="button" onClick={handleNewCategory}>
          +
        </button>
        <h1>Add New Category</h1>
      </div>
    </div>
  );
};
