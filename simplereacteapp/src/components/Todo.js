import React from 'react'
import style from './Todo.module.css'

const Todo = (props) => { 
  return (
    <article className={style.todo}>
      <div>
        <h1>{props.todo.titile}</h1>
        <p>{props.todo.description}</p>
      </div>
      <div>
        <button className={style.btn}>
          <i className='fa fa-trash fa-2x'></i>
        </button>
      </div>
    </article>
    
  )
}

export default Todo
