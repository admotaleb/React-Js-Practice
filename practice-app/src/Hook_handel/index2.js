import React, { useState } from 'react'

export default function Hook_handel2() {
    const [Count, SetCount]=useState(0)
    const hendelincriment = () =>{
        SetCount(Count+1)      
    }
  return (
    <div>
        <h1>Count : {Count}</h1>
      <button onClick={hendelincriment}>Increment</button>
    </div>
  )
}
