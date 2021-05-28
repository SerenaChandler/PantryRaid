import React from 'react';
import Hero from '../../components/Hero/index';
import './style.css';

const Login = () => {
   return (
      
      <div>
      <Hero />
      <div className="sidenav">
         <div className="login-main-text">
            <img src="logo2.jpg" alt="logo"></img>
        </div>
         </div>
         <div className="main">
            <div className="col-md-6 col-sm-12">
               <div id="formbox">
                  <div className="login-form">
                     <form>
                        <div className="form-group">
                           <label>User Name</label>
                           <input type="text" className="form-control" placeholder="User Name" />
                 </div>
                           <div className="form-group">
                              <label>Password</label>
                              <input type="password" className="form-control" placeholder="Password" />
                 </div>
                              <button type="submit" className="btn btn-black">Login</button>
                              <button type="submit" onclick="renderSignUp()" className="btn btn-secondary">Register</button>
              </form>
                        </div>
        </div>
                  </div>
               </div>
            </div>
    );
};

export default Login;