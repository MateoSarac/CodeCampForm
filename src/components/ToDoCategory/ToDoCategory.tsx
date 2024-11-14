import { FC, useState } from "react";
import "./ToDoCategory.scss";
import React from "react";

export const ToDoCategories: FC = () => {
  const [categories, setCategories] = React.useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");

  const handleCagetories = () => {
    if (newCategory !== "") {
      setCategories([...categories, newCategory]);
    }
    console.log(categories);
    setNewCategory("");
  };

  function removeCategory(index: number) {
    const newArray = [...categories];
    newArray.splice(index, 1);
    setCategories(newArray);
  }
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

  return (
    <div className="todo-categories">
      <form>
        <h2> Add New Category</h2>

        <input
          type="text"
          value={newCategory}
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
        />
        <button onClick={handleCagetories} id="addToDoBtn" type="button">
          Add New Category
        </button>
      </form>
      <h1>Category List:</h1>

      <ul>
        {categories.map((category, index) => (
          <li key={index} className="todo-categories__card">
            <div>
              {category}
              <button type="button" onClick={() => removeCategory(index)}>
                Delete
              </button>
            </div>
            <br />
            <div>
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
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
