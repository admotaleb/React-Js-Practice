import React from 'react'
import Todos from './Todos'
import style from './Home.module.css'

const todoslist = [
  {
    id:1,
    titile:"todo titile",
    description:"todo description"
  },
  {
    id:2,
    titile:"todo titile2",
    description:"todo description2"
  }
]
const Home = () => {
  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}> Todo App</h1>
      <Todos todos={todoslist}/>
    </div>
  )
}

export default Home
