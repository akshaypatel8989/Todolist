import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos,completeTodo,removeTodo}) {
  return (
    <div className='todo-list'>
        {todos.map((todo, index)=>(
            <TodoItem key={index} 
                     index={index} 
                     todo={todo} 
                     completeTodo={completeTodo} 
                     removeTodo={removeTodo}/>
        ))}
      
    </div>
  )
}
