import React, {useState} from 'react';
import './Signup.scss';
import {Redirect} from 'react-router-dom';
import firebaseConfig from '../firebase';

function Signup() {
    const [user, setUser] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // vytvoriť používateľa tuto
        const {email, password} = e.target.elements;
        try {
            // použitie firebase auth
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setUser(true);
        } catch(err) {
            console.error(err);
        }   
    }

    if(user) {
        return (
            <Redirect to='/dashboard' />
        )
    }

    return (
        <div>
        <h1>Signup Here</h1>
        <form className='form-helper' onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label className='labelOne' for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label className='labelTwo' for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Signup
