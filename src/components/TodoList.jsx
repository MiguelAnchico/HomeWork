import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

export const TodoList = () => {
  return (
    <ul className="list-group">
      {todos?.map((acciones, index) => (
        <li className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">Item 1</span>
          <button
            className="btn btn-danger"
            onClick={(e) => dispatch({ type: "remove", index })}
          >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  );
};
