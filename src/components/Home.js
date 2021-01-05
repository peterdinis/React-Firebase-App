import React, {useContext} from 'react';
import './Home.scss';
import {AuthContext} from '../contexts/AuthContext'

function Home() {
    const {currentUSer} = useContext(AuthContext);
    return (
        <div>
            <h1>
                Home
            </h1>
            {currentUser ? (
                <p>
                You are logged - <Link to="/dashboard">View Dashboard</Link>
                </p>
            ) : (
                <p>
                <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> 
                </p>
            )}
        </div>
    )
}

export default Home
