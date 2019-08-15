import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';
import '../questions/question.css';

const Landing = () => {
    return (
        <div className="container" id="container">

            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login!</p>

                    <div className='buttons'>
                        <Link to='/signin'>
                            <button>Sign In</button>
                        </Link>
                    </div>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">

                    <div className="overlay-panel overlay-right">
                        <h1>Not a member yet?</h1>
                        <p>Enter your details and get started!</p>

                        <div className='buttons'>
                            <Link to='/signup'>
                                <button className="ghost" id="signUp">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
    
export default Landing;