import React from 'react'  //react arrow function based component (rafc)
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className= "container">
        <h3 className=" my-3">Todos List</h3>
        {props.todos.length ===0? "No todos to display":
        props.todos.map((todos) => {
          return (<TodoItem todo = {todos} key= {todos.sno} onDelete={props.onDelete} /> )
        })
        }
    </div>
  )
}
