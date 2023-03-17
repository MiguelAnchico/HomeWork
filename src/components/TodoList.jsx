import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const action = (index) => {
  return {
    type: 'remove',
    payload: index
  }
}

export const TodoList = ({todos, dispatch}) => {
  
  return (
    <ul className="list-group">
      {todos?.map((state, index) => (
        <li className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{state.description}</span>
          <button
            className="btn btn-danger"
            onClick={(e) => dispatch(action(index))}
          >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  );
};
