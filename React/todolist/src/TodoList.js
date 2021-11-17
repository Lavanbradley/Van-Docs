import Todo from "./Todo";
import React, { useContext } from "react"
import { UserContext } from "./UserContext"
import './App.css';
function TodoList(){//Prop functions from app.js

  const {todos, completeTodo, editTodo, deleteTodo} = useContext(UserContext)

  const listTodos = todos.map((todo) => {
    return <Todo
             key ={todo.id}
             todo = {todo}
             completeTodo ={completeTodo}
             deleteTodo = {deleteTodo}
             editTodo = {editTodo}
             />



  })
  return(
    <div className='todo-list'>
      <ul>{listTodos}</ul>
    </div>
  )
}
export default TodoList;