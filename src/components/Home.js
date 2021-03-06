import React, {useContext} from 'react';
import {FirebaseAuth} from '../contexts/AuthProvider';
import './Home.scss';

const Home = (props) => {

  const {handleSignout} = useContext(FirebaseAuth)
  return (
    <div className='home'>
      <h1 className='heading'>Nice Welcome here</h1>
      <button className='logged-out' onClick={handleSignout}>sign out </button>
    </div>
  );
};

export default Home;