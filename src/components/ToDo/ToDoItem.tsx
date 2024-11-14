import { FC } from "react";
import "./ToDo.scss";

type ToDoProps = {
  todo: string;
  onRemove: () => void;
  isDone: boolean;
};

export const ToDoItems: FC<ToDoProps> = ({ todo, onRemove, isDone }) => {
  return (
    <div className="todo-items">
      <span>{todo}</span>
      {/* <button type="button" onClick={() => onRemove}>
        Obriši
      </button> */}
      {/* <input type="radio" /> */}
    </div>
  );
};
