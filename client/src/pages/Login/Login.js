import React from 'react';
import Hero from '../../components/Hero/index';
import LoginForm from '../../components/LoginForm/index';
import RegisterForm from '../../components/RegisterForm/index';
import './style.css';


const Login = () => {

   return (
      <div>
         
         <div className="sidenav">
            <div className="login-main-text">
               <img src="logo2.jpg" alt="logo"></img>
            </div>
         </div>

         <LoginForm />
         <RegisterForm/>

      </div>
   );
};

export default Login;