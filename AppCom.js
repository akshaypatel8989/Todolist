
import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function AppCom() {
    const [todos,setTodos] = useState([]);

      const addTodo =(text) =>{
        const newTodos =[...todos, {text , isCompleted : false}];
        setTodos(newTodos);
      };


      const completeTodo =(index)=>{
        const newTodos =[...todos];
      newTodos [index].isCompleted =!newTodos[index].isCompleted
      setTodos(newTodos);
      };
      
      const removeTodo = (index)=>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
      };




  return (
    <div className='app'>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        
      
    </div>
  )
};
