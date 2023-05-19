import React from 'react'
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './login.css'
import dow from"../IMAGES/download.png"
export const Login = () => {
  const history=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    history('/dasboard');

    
  };
  return (
    <div>   

      <h1 className='bnnn'>LOGIN TO LMS</h1>

  
   
   
    <div className='vvv'>

      <img src={dow}></img>
   
  

    <form  conSubmit={handleLogin} className='jjj'>
    <label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required  className='jjj'/>
    </label>
    <br />
    <label>
      Password:<br></br>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </label>
    <br />
    <button onClick={handleLogin}>Login</button>
  </form>
  </div>
  </div>
 
  )
}

export default Login

