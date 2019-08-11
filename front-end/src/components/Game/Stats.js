//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React from 'react';
import { Link } from 'react-router-dom';


//==================================================================================================================================
// 
//==================================================================================================================================

const Stat = () => {
    return (

        // <div class="card" style="width: 18rem;">
        <div className="container" id="container">
            
            <img src="https://media.giphy.com/media/hA66say0FkVry/giphy.gif" alt="Dino" width="275" height="275"></img>

            <div className="card-body">
                <h5 className="card-title">Your Stats!</h5>

                <p className="card-text">Your best game streak </p>
                <p className="card-text">Your current score </p>
                               
                <div className='buttons'>
                        <Link to='/home'>
                            <button>Exit</button>
                        </Link>
                </div>
            </div>
        </div>


        )
    };
    
export default Stat;





