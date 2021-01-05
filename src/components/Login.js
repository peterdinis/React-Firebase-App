import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import firebaseConfig from "../firebase";
import './Login.scss';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const  currentUser  = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
   <div>
     <h1>Login Here</h1>
     <form className='form-helper' onSubmit={handleSubmit}>
       <div className='form-group'>
            <label className='labelOne' for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       </div>

       <div className="form-group">
            <label className='labelTwo' for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type='submit' className='login-button'>Login</button>
     </form>
   </div>
  );
};

export default Login;