import React,{useState} from 'react';
import API from '../../utils/API';
import './style.css';

const LoginForm = (props) => {

   const [loginData, setLoginState] = useState({name:"",password:""});

   const handleChange = (event) => {
      setLoginState({...loginData,[event.target.name]: event.target.value})
   }

   const checkCreds = (event) => {
      event.preventDefault();
      console.log(loginData);
      API.checkUser(loginData)
      .then((results)=>{
         console.log(results);
      })
      .catch((err) => {
         console.log(err);
      })

   }

    return (
    <div className="main">
    <div className="col-md-6 col-sm-12">
       <div id="formbox">
          <div className="login-form">
             <form>
                <div className="form-group">
                   <label className="text-light">User Name</label>
                   <input name="name" onChange={handleChange} value={loginData.name} type="text" className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group">
                   <label>Password</label>
                   <input name="password" onChange={handleChange} value={loginData.password} type="password" className="form-control" placeholder="Password" />
                </div>
                <button onClick={checkCreds} type="submit" className="btn btn-black">Login</button>
             </form>
          </div>
       </div>
    </div>
 </div>
    )
}

export default LoginForm;