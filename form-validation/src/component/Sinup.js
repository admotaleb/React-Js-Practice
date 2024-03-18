import React, { useState } from 'react'

const Sinup = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
   const handelNameChange = (e) => {
            setName(e.target.value);
    };
    
    const handelEmailChange = (e) => {
        setEmail(e.target.value);
};
const handelPasswordChange = (e) => {
    setPassword(e.target.value);
};
const handelSubmit = (e) => {
    e.preventDefault();
    const newUser={
        name, email, password
    }
    console.log(newUser);
};
  return (
    <div>
        <h1>Sinup</h1>
      <form onSubmit={handelSubmit}>
        <div>
            <label htmlFor='name'>Name : </label>
            <input type="text" id="name" name='name' value={name} onChange={handelNameChange}/>
        </div>
        <div>
            <label htmlFor='email'>Name : </label>
            <input type="text" id="email" name='email' value={email} onChange={handelEmailChange}/>
        </div>
        <div>
            <label htmlFor='password'>Name : </label>
            <input type="text" id="password" name='password' value={password} onChange={handelPasswordChange}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Sinup
