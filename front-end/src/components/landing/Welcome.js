import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';
import '../questions/question.css';

const Landing = () => {
    return (
        <div>

          <h1 class="display-4">Welcome to Zonk!!!</h1>
          <p class="lead">The game of chance! Where education and fun meet!</p>
          <hr class="my-4"></hr>

          <div className='buttons'>
            <Link to='/home'>
                <button>Get Started</button>
            </Link>
        </div>

      </div>
    )
};
    
export default Landing;