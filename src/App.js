import React, {useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import {firebaseAuth} from './contexts/AuthProvider';
import Navbar from './components/Navbar';

function App() {
  const {token} = useContext(firebaseAuth);
  console.log(token);
 
  return (
    <div>
    <Navbar />
    <Switch>
        <Route exact path='/' render={rProps => token === null ? <Signin /> : <Home />} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
    </Switch>
  </div>
  )
}

export default App;