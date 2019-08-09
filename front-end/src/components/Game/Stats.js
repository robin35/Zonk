//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React from 'react';
import { Link } from 'react-router-dom';


//==================================================================================================================================
// 
//==================================================================================================================================

const Game = () => {
    return (

        // <div class="card" style="width: 18rem;">
        <div>
            <img src="../../../public/images/Animated Gif Fantasy (14).gif" class="card-img-top" alt="..." />

            <div class="card-body">
                <h5 class="card-title">Your Stats!</h5>

                <p class="card-text">Your best game streak </p>
                <p class="card-text">Your current score </p>
                <p class="card-text">You're at this level! </p>

                <p className='my-1'>
                    Want to continue your last game? <Link to='/game'>Start Game</Link>
                </p>

            </div>
        </div>


        )
    };
    
export default Game;





