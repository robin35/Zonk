import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div></div>
                <div><Link to='/' className='navbar-brand'>Zonk!</Link></div>
                                
                <div className='navbar-nav'>
                    <Link to='/' className='nav-item nav-link'>Home</Link>
                    {/* <Link to='/stats' className='nav-item nav-link'>View Stats</Link> */}
                    {/* <Link to='/searchquestions' className='nav-item nav-link'>Search Questions</Link> */}
                    <Link to='/game/math' className='nav-item nav-link'>Math</Link>
                    {/* <Link to='/game/science' className='nav-item nav-link'>Science</Link>
                    <Link to='/game/socialstudies' className='nav-item nav-link'>US History</Link> */}
                    {/* <Link to='/quiz' className='nav-item nav-link'>Quiz</Link> */}
                </div>

                <div>
                    <Link to='/questions' className='nav-item nav-link'>View Questions</Link>
                    
                </div>
            </nav>
        </header>
    )
};

export default Navbar;