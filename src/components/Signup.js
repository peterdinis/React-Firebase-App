import React, {useState} from 'react';
import './Signup.scss';
import {Redirect} from 'react-router-dom';
import firebaseConfig from '../firebase';

function Signup() {
    const [user, setUser] = useState(null);


    return (
        <div className='signup-form'>
            <form>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Email' className='input-class' />
                <label htmlFor="password">Password</label>
                <input className='input-class' type="password" name="password" placeholder="Password" />
                <button type='submit' className='btn'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Signup
