import { useState } from "react"

export const TodoAdd = ({dispatch}) => {
    const [description, setDescription] = useState('')

    const onsubmit = (e) => {
        e.preventDefault()

        setDescription('')

        return dispatch({type: 'Agregar', payload: {
            id: new Date().getTime(),
            description,
            done: false,
        }})
    }

  return (
    <form onSubmit={onsubmit}>
        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" />
        <button className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  )
}
