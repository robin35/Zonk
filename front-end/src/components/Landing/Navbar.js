import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <Link to='/' className='navbar-brand'>Navbar</Link>
                                
                <div className='navbar-nav'>
                    <Link to='/' className='nav-item nav-link'>Home</Link>
                    <Link to='/playgame' className='nav-item nav-link'>Play Game</Link>
                    <Link to='/addquestions' className='nav-item nav-link'>Add Questions</Link>
                    <Link to='/login' className='nav-item nav-link'>Sign In</Link>
                    <Link to='/join' className='nav-item nav-link'>Sign Up</Link>
                </div>

            </nav>
        </div>
    )
};

export default Navbar;