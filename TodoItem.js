
import React from 'react'

export default function TodoItem({todo,index,completeTodo,removeTodo}) {
  return (
    <div className='todo-item' style={{textDecoration: todo.isCompleted ? 'line-through':''}}>
      {todo.text}
      <div>
        <button onClick={()=>completeTodo(index)}>Complete</button>
        <button onClick={()=>removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}
