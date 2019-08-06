import React, { useState } from 'react';
import axios from 'axios';


//import '../Landing/Landing.css';


const Join = () => {

    // Sets the inital value of the form fields to blank using the React Hook "useState"
    // The useState hook lets you use state and other React features without writing a class.
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // formData is a javaScript constructor.  It populates the FormData object with the form's current key/value pairs 
    // using the name property of each element for the keys and their submitted value for the values.
    const { name, email, password } = formData;

    // React does not detect when a user types in a form.  
    // onChange is an event handler that captures the changes as they happen.
    const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

    // Populates the newUser object with the form data
    const onSubmit = async event => {
        event.preventDefault();
        console.log(formData);
        
        const newUser = {
            name,
            email,
            password
        }

        try {
            // configures the header that will accompany the json body below
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            // Takes the data populated into the neUser object and stringify's it to json
            // Posts the data to mongoDB Atlas using the server side route
            const body = JSON.stringify(newUser);
            const res = await axios.post('/api/userregister', body, config);
            console.log(res.data);

        } catch(err) {
            console.error(err.response.data);
        }
    };

    // This is the body of the form
    return (
        <form onSubmit={event => onSubmit(event)}>
            <div className="form-container sign-up-container">
                <h1>Create Account</h1>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={name} 
                    onChange={event => onChange(event)}
                    required />

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

                <input type="submit" className="btn btn-primary" value="Sign Up" />
                    
            </div>
        </form>
    )
};
    
export default Join;