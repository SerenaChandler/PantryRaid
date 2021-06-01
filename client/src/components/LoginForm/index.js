import React from 'react';
import './style.css';

const LoginForm = (props) => {
    return (
    <div className="main">
    <div className="col-md-6 col-sm-12">
       <div id="formbox">
          <div className="login-form">
             <form>
                <div className="form-group">
                   <label className="text-light">User Name</label>
                   <input type="text" className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group">
                   <label>Password</label>
                   <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button onClick={props.loginUser} type="submit" className="btn btn-black">Login</button>
             </form>
          </div>
       </div>
    </div>
 </div>
    )
}

export default LoginForm;