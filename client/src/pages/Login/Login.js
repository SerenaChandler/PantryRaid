import React from 'react';
import Hero from '../../components/Hero/index';
import LoginForm from '../../components/LoginForm/index';
import RegisterForm from '../../components/RegisterForm/index';
import './style.css';


const Login = () => {

   const loginUser = () => {

   }

   // const makeUser = () => {
      
   // }

//    const registerFormHandler = async (event) => {
//       event.preventDefault();
  
//       const userName = document.querySelector('#register-username').value.trim();
//       const password = document.querySelector('#register-password').value.trim();
  
//       if (userName && password) {
//           const response = await fetch('/api/User',{
//               method:'POST',
//               body: JSON.stringify({userName,password}),
//               headers: { 'Content-Type': 'application/json'},
//           });
  
//           if (response.ok) {
//               document.location.replace('/');
//           } else {
//              console.log("u messed up guy");
//               alert(response.statusText);
//           }
//       }
//   };

   return (
      <div>
         
         <div className="sidenav">
            <div className="login-main-text">
               <img src="logo2.jpg" alt="logo"></img>
            </div>
         </div>

         <LoginForm 
         loginUser = {() => loginUser()}
         />
         <RegisterForm
         //makeUser = {() => registerFormHandler()}
         />

      </div>
   );
};

export default Login;