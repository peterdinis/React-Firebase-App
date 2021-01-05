import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
import firebaseConfig from '../firebase';
import './Dashboard.scss';

const Dashboard = () => {
    const {currentUser} = useContext(AuthContext);
    if(!currentUser) {
        return (
            <Redirect to='/login' />
        )
    }

    return (
        <div className='dashboard'>
            <h1>Welcome here {currentUser} </h1>
            <p>THis is dashboard component, if you are here you are logged here correctly</p>
            <button className='logged-out' onClick={() => firebaseConfig.auth().signOut()}>Sign Out</button>
        </div>
    )
}

export default Dashboard;