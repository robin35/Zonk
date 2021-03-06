//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import '../Landing/Landing.css';

const Login = () => {

    // Sets the inital value of the form fields to blank using the React Hook "useState"
    // The useState hook lets you use state and other React features without writing a class.
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // formData is a javaScript constructor.  It populates the FormData object with the form's current key/value pairs 
    // using the name property of each element for the keys and their submitted value for the values.
    const { email, password } = formData;

    // React does not detect when a user types in a form.  
    // onChange is an event handler that captures the changes as they happen.
    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

    // Populates the newUser object with the form data
    const onSubmit = async event => {
        event.preventDefault();
        console.log('SUCCESS');
    };

    // This is the body of the form  
    return (
      <div className="container" id="container">
        <div className="sign-up-container">
          <form onSubmit={event => onSubmit(event)}>
                <h1>Sign In</h1>

                <input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email" 
                    value={email} 
                    onChange={event => onChange(event)}
                    required />

                <input 
                    type="password" 
                    placeholder="Password" 
                    name='password' 
                    value={password} 
                    onChange={event => onChange(event)}
                    minLength='6'
                    required />

                {/* <input 
                    type='submit' 
                    className='btn btn-primary' 
                    value='Sign In' />   */}

                <div className='buttons'>
                    <Link to='/'>
                        <button>Sign In</button>
                    </Link>
                </div>

          </form>
          <p>
              Don't have an account? <Link to='/signup'>Sign Up</Link>
          </p>

        </div>
      </div>
    );
};
    
export default Login;