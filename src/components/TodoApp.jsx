import { useReducer } from "react";
import { TodoList } from "./TodoList";
import { TodoReducer } from "./TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);
  return (
    <div>
      <h1>
        TodoApp: 10, <small> Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input type="text" className="form-control" />
            <button className="btn btn-outline-primary mt-1">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
