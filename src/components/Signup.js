import React, {useState} from 'react';
import './Signup.scss';
import {Redirect} from 'react-router-dom';
import firebaseConfig from '../firebase/firebase';

function Signup() {
    const [currentUser, setCurrentUser] = useState(null);    
    const handleSubmit = (e) => {
      e.preventDefault();    
      const { email, password } = e.target.value;
      try {
        firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
        setCurrentUser(true);
      } catch (error) {
        console.log(error)
      }
    };
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
        <h1>Signup Here</h1>
        <form className='form-helper' onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='labelOne' htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            
            <div className="form-group">
                <label className='labelTwo' htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Signup;
