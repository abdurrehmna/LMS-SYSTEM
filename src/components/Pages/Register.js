import React from 'react'
import  { useState } from 'react';
import './register.css'
import dow from"../IMAGES/download.png"
import { useNavigate } from 'react-router-dom';


export const Register = () => {
  const history=useNavigate();
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert(' successful!');

    // Redirect to the login page
    history('/login')
  

  };



  return (
    <div>

      <div    className='raja'>   
      <img src={dow}></img>
      <form action="#" method="post">
  <h2>Sign Up</h2>
		<p>
			<label for="Email" class="floatLabel">Email</label>
			<input id="Email" name="Email" type="text"></input>
		</p>
		<p>
			<label for="password" class="floatLabel">Password</label>
			<input id="password" name="password" type="password"></input>
			<span>Enter a password longer than 8 characters</span>
		</p>
		<p>
			
		</p>
		<p>
			<button className='xxx' onClick={handleSubmit} type="submit" value="Create My Account"></button>
		</p>
	</form>
    </div>

    </div>
  )
}
