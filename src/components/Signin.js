import React, {useContext} from 'react';
import {FirebaseAuth} from '../contexts/AuthProvider';
import './Signin.scss';

const Signin = () => {
  const {handleSignin, inputs, setInputs, errors} = useContext(FirebaseAuth)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    handleSignin()
    
  }
  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (
    <form className='form-helper' onSubmit={handleSubmit}>
        <div className='form-group'>
          <h1 className='heading'>Sign In</h1>
            <label className='emailLabel' htmlFor='email'>Email</label>
            <input type='email' className='form-control' onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
        </div>

        <div className='form-group'>
          <label className='passwordLabel' htmlFor='password'>Password</label>
          <input type='password' className='form-control' onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
        </div>
        {errors.length > 0 ? errors.map(error => <p className='error'>{error}</p> ) : null}
        <button className='signin-button'>SignIn</button>
    </form>
  );
};

export default Signin;