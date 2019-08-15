import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div></div>
                <div><Link to='/' className='navbar-brand'>Zonk!</Link></div>
                                
                <div className='navbar-nav'>
                    <Link to='/home' className='nav-item nav-link'>Sign Up/Sign In</Link>
                    <Link to='/game/math' className='nav-item nav-link'>Math Quiz</Link>
                    <Link to='/game/science' className='nav-item nav-link'>Science Quiz</Link>
                    <Link to='/game/ushistory' className='nav-item nav-link'>US History</Link>
                    <Link to='/game/baseball' className='nav-item nav-link'>Baseball Quiz</Link>
                    <Link to='/game/soccer' className='nav-item nav-link'>Soccer Quiz</Link>
                    <Link to='/game/starwars' className='nav-item nav-link'>Star Wars Quiz</Link>
                    <Link to='/game/jurassic' className='nav-item nav-link'>Jurassic Park Quiz</Link>
                    <Link to='/game/music' className='nav-item nav-link'>80s Music Quiz</Link>
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