// import React, { useState, useEffect } from 'react';
// import {
//   Field,
//   reduxForm,
// } from 'redux-form';
// import { connect } from 'react-redux';
// import { LOGIN_FORM } from '../../share/form.js'
// import TextInput from './TextInput';
// import './login.css';

// function submit(loginData) {
//   if (loginData.Verification !== newAccessToken) alert('驗證碼打錯了啦幹！')
//   if (loginData.username !== account ||loginData.password !== account ) alert("wrong account or password!")
// }

// function Login({
//   handleSubmit,
//   accessToken
// } : Props) {
//   const [ account, setAccount ] = useState('');
//   const [ password, setPassword ]  = useState('');
//   const newAccessToken = accessToken[Math.floor(Math.random()*3)]

//   useEffect(() => {
//     return () => {
//       fetch("http://localhost:3001/api/user")
//         .then(res => res.json())
//         .then(data => {
//           console.log("data: ", data)
//           setAccount(data[0].account)
//           setPassword(data[0].password)
//         })
//     };
//   })

//   return(
//     <div className="login__wrapper">
//       <form className="login__form" onSubmit={handleSubmit(d => submit(d))}>
//         <p id="login">Log In to Myblog</p>
//         <div className="control__input">
//           <label className="login__label">username:</label>
//           <br/>
//           <Field
//            name="username"
//            placeholder="your account"
//            component={TextInput} />
//          </div>
//         <div className="control__input">
//           <label className="login__label">password:</label>
//           <br/>
//           <Field
//            name="password"
//            placeholder="your password"
//            type="password"
//            component={TextInput} />
//         </div>
//         <div className="control__input login__verify">
//           <div>
//             <label className="login__label">verify code:</label>
//             <br/>
//             <Field
//             name="Verification"
//             placeholder="Verification"
//             className="verify__width"
//             component={TextInput} />
//           </div>
//           <h1 className="verify__h1">{newAccessToken}</h1>
//         </div>
//         <button className="login__button" type="submit" name='login__submit' >login</button>
//       </form>
//     </div>
//   )
// }

// const reduxHook = connect(
//   state => ({
//     accessToken: state.Member.accessToken
//   }),
// );

// const formHook = reduxForm({
//   form: LOGIN_FORM,
//   initialValue: {
//     username: '',
//     password: '',
//   }
// })

// export default formHook(reduxHook(Login));
