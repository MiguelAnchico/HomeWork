import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoReducer } from "./TodoReducer";

const initialState = [
  {
    id: new Date().getTime() + 1,
    description: "Hacer los challenges",
    done: false,
  },
  {
    id: new Date().getTime(),
    description: "Bañarse",
    done: false,
  },
  {
    id: new Date().getTime(),
    description: "Chuzar a alguien",
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
          <TodoList todos={todos} dispatch={dispatchTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd dispatch={dispatchTodo}/>
          
        </div>
      </div>
    </div>
  );
};
