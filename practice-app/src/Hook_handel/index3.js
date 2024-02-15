import React,{useState} from 'react'

const Hook_handel3 =() =>{
    const [Count, SetCount]=useState(0)
   const handelIncriment= ()=>{
        SetCount((Count)=>Count+1)
        SetCount((Count)=>Count+1)
        SetCount((Count)=>Count+1)
    }
  return (
    <div>
        <h1>Count : {Count}</h1>
      <button onClick={handelIncriment}>+</button>
    </div>
  )
}
export default Hook_handel3
