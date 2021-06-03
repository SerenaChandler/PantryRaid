import React, { useState } from 'react';
import API from '../../utils/API';
import './style.css';

const RegisterForm = () => {

   const [userData, setUserData] = useState({ name: "", password: "" });
   const [loggedIn, setLoggedIn] = useState(false);

   const handleChange = (event) => {
      setUserData({...userData,[event.target.name]: event.target.value, });
   }
   // userData: loggedIn

   const toggleLogin = () => setLoggedIn(!loggedIn);

   const formSubmit = (event) => {
      event.preventDefault();
      console.log(userData.name, userData.password);
      API.saveUser(userData)
         .then((results) => {
            console.log(results);
            //toggleLogin();
            localStorage.setItem("loggedIn",results.data.loggedIn);
            localStorage.setItem("userId",results.data.user.id)
            window.location.replace("/");
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div id="formbox">
               <div className="register-form">
                  <form>
                     <div className="form-group">
                        <label>User Name</label>
                        <input name="name" value={userData.name} onChange={handleChange} type="text" className="form-control" placeholder="User Name" />
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input name="password" value={userData.password} onChange={handleChange} type="password" className="form-control" placeholder="Password" />
                     </div>
                     <button onClick={formSubmit} type="submit" className="btn btn-black">Register</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default RegisterForm;