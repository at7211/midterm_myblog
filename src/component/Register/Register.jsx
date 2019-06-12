// import React, { useState, useEffect } from 'react';
// import { bindActionCreators } from 'redux';
// import {
//   Field,
//   reduxForm,
// } from 'redux-form';
// import { connect } from 'react-redux';
// import * as Member from '../../actions/Member.js';
// import { REGISTER_FORM } from '../../share/form.js'
// import TextInput from '../Login/TextInput';
// import '../Login/login.css';

// function submit(regisData) {
//   console.log(regisData)
//   if(regisData.Verification !== newAccessToken) alert('驗證碼打錯了啦幹！')
//   storeRegisterInfo(regisData.register__account, regisData.register__password)
//   console.log(storeRegisterInfo(regisData.register__account, regisData.register__password))
// }

// function Register({
//   handleSubmit,
//   accessToken,
//   storeRegisterInfo,
// } : props) {
//   const newAccessToken = accessToken[Math.floor(Math.random()*3)] || 222

//   useEffect(() => {
//     return () => {
//       fetch("http://localhost:3001/api/register", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           account: account,
//           password: password,
//         })
//       })
//         .then(res => res.json())
//         .then(res => console.log('res', res))
//     };
//   })

//   return(
//     <div className="login__wrapper">
//       <form className="login__form" onSubmit={handleSubmit(d => submit(d))}>
//         <p id="login">Register</p>
//         <div className="control__input">
//           <label className="login__label">username:</label>
//           <br/>
//           <Field
//            name="register__account"
//            placeholder="your account"
//            component={TextInput} />
//          </div>
//         <div className="control__input">
//           <label className="login__label">password:</label>
//           <br/>
//           <Field
//            name="register__password"
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
//     accessToken: state.Member.accessToken || 222,
//   }),
//   dispatch => bindActionCreators({
//     ...Member,
//   }, dispatch),
// );

// const formHook = reduxForm({
//   form: REGISTER_FORM,
//   initialValue: {
//     register__account: '',
//     register__password: '',
//   }
// })

// export default formHook(reduxHook(Register));
