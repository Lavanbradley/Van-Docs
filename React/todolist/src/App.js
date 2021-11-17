import React from "react"
import TodoList from './TodoList'
import TodoForm from './TodoForm'


import './App.css';

function App() {




  return (
    <div className="App">
      <div><h1 className="todoHeader">CHECK-LIST</h1></div>
     
      <div className="container">
     <TodoForm/> {/* Passing addTodo to TodoForm  */ }
      
      
      <TodoList  
     
       />  {/* Passing functions to todoList  */ }
    </div>
    </div>
  );
}

export default App;