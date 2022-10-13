import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import React, {useState} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am on Delete of todo: ", todo);
    setTodos(todos.filter((e)=> {
      return e !==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo= (title, desc)=>{
    console.log("I am ading this todo: ", title, desc);
    let sno;
    if(todos.length ===0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      description: desc,
    };
    console.log(myTodo)
    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  
  return (
    <>
    <Header title = "Todo List"  />
    <AddTodo addTodo = {addTodo} />
    <Todos todos={todos} onDelete= {onDelete} />
    <Footer />
  </>
  );
}

export default App;
