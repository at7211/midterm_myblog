import React, { useState, useEffect } from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';
import { LOGIN_FORM } from '../../share/form.js'
import TextInput from './TextInput';
import './login.css';

function Login({
  handleSubmit,
} : props) {
  const [account, setAccount]=useState('');
  const [password, setPassword]=useState('');

  useEffect(() => {
    return () => {
    fetch("http://localhost:3001/api/user")
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
      <form className="login__form" onSubmit={console.log('test')}>
        <p id="login">Log In to Myblog</p>
        <div className="control__input">
          <label className="login__label">username:</label>
          <br/>
          <Field
           name="username"
           placeholder="your account"
           component={TextInput} />
         </div>
        <div className="control__input">
          <label className="login__label">password:</label>
          <br/>
          <Field
           name="password"
           placeholder="your password"
           type="password"
           component={TextInput} />
        </div>
        <div className="login__button">Log In</div>
        <div className="login__submit">
          <button type="submit" name='login__submit' />
        </div>
      </form>
    </div>
  )
}

const formHook = reduxForm({
  form: LOGIN_FORM,
  initialValue: {
    username: '',
    password: '',
  }
})

export default formHook(Login);
