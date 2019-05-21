import React, { useState, useEffect } from 'react';
import './login.css';

function Login(){
  const [account, setAccount]=useState('');
  const [password, setPassword]=useState('');

  useEffect(() => {
    return () => {
    fetch("http://localhost:3001/api/videos")
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data)
        setAccount(data[0].account)
        setPassword(data[0].password)

      })
    };
  })

  return(
    <div className="login__wrapper">
      <form method='POST' className="login__form">
        <p id="login">Log In to Myblog</p>
        <div className="control__input">
          <label className="login__label">username:</label>
          <br/>
          <input name="username" /></div>
        <div className="control__input">
          <label className="login__label">password:</label>
          <br/>
          <input name='password' type="password" /></div>
        <div className="login__button">Log In</div>
        <div className="login__submit">
          <input type="submit" name='login' value="Login"/>
        </div>
        <div className="create__account">
          <a href="register.php">No account? Creat one!</a>
        </div>
      </form>
    </div>
  )
}

export default Login;
