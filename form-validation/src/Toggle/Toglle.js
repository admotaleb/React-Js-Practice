import React, { useState } from 'react'


const Toglle = () => {
    const [toggle, setToggle]= useState(true);
  return (
    <div style={{backgroundColor:"#444", color:"white"}}>
        {toggle && <p>You can now view form-validation in the browser. You can now view form-validation in the browser.
      You can now view form-validation in the browser. You can now view form-validation in the browser.</p>}
      
      <div>
      <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "Show" : "Hide" }</button>
      
      </div>
    </div>
  )
}

export default Toglle
