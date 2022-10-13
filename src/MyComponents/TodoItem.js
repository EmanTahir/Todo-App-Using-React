import React from 'react'  //react arrow function based component (rafc)

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4 >{todo.title}</h4>
      <p>{todo.description}</p>
      <button className="btn btn-sm btn-danger" onClick = {() => {onDelete(todo)}} >Delete</button>

    </div>
  )
}
