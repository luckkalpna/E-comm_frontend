import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const collectData = async () => {
    console.log(name, email, password);

    // Await the fetch call
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Await the result.json() call
    result = await result.json();
    console.log(result);
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <input
        className='inputfields'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name'
      />

      <input
        className='inputfields'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Email'
      />

      <input
        className='inputfields'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter Password'
      />

      <button onClick={collectData} className='signup-btn' type='button'>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
