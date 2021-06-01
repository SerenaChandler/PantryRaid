import React, {useState} from 'react';
import './style.css';

const RegisterForm = (props) => {
   
   const username = useFormInput('');
   const password = useFormInput('');


    return (
    <div className="main">
    <div className="col-md-6 col-sm-12">
       <div id="formbox">
          <div className="register-form">
             <form>
                <div className="form-group">
                   <label>User Name</label>
                   <input type="text" {...username} className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group">
                   <label>Password</label>
                   <input type="password" {...password} className="form-control" placeholder="Password" />
                </div>
                <button onClick={props.makeUser} type="submit" className="btn btn-black">Register</button>
             </form>
          </div>
       </div>
    </div>
 </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

export default RegisterForm;