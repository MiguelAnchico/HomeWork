export const TodoReducer = (initialState, action) => {
  switch (action.type) {
    case "remove":
      let states = [...initialState]
      states.splice(action.payload, 1)

      return states
      break;

      case "Agregar":
        let nuevoEstado = [...initialState, action.payload]
        return nuevoEstado
        break;

    default:
      return initialState;
  }
};
