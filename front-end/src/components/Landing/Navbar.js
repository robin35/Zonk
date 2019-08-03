import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='index.html' >Navbar</a>
                
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation' >
                    <span className='navbar-toggler-icon'></span>
                </button>
                
                <div className='collapse navbar-collapse' id='navbarNavAltMarkup' >
                    <div className='navbar-nav'>
                        <a className='nav-item nav-link active' href='login.html'>Login <span class="sr-only">(current)</span></a>
                        <a className='nav-item nav-link' href='home.html'>Home</a>
                        <a className='nav-item nav-link' href='gameboard.html'>Game Board</a>
                        <a className='nav-item nav-link' href='addquestions.html'>Add Questions</a>
                    </div>
                </div>

            </nav>
        </div>
    )
};

export default Navbar;