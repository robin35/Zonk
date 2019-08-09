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
                    <Link to='/game' className='nav-item nav-link'>Play Game</Link>
                    <Link to='/questions' className='nav-item nav-link'>Create Questions</Link>

                </div>

            </nav>
        </header>
    )
};

export default Navbar;