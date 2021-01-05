import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';
import {AuthContext} from '../contexts/AuthContext'

function Home() {
    const {currentUser} = useContext(AuthContext);
    return (
        <div className='homepage'>
            <h1>
                Home
            </h1>
            {currentUser ? (
                <p>
                You are logged - <Link  to="/dashboard">View Dashboard</Link>
                </p>
            ) : (
                <p>
                <Link className='link' to="/login">Login</Link> <span className='link-subtext'>or</span> <Link className='link' to="/signup">Sign up</Link> 
                </p>
            )}
        </div>
    )
}

export default Home
