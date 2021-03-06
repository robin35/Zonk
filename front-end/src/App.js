//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Navbar from './components/landing/Navbar';
import Welcome from './components/landing/Welcome';
import Landing from './components/landing/Landing';
import Signup from './components/login/Signup';
import Signin from './components/login/Signin';

import ViewQuestions from './components/questions/ViewQuestions';

import Stats from './components/game/Stats';
import NewGame from './components/game/NewGame';

import MathTrivia from './components/gameboard/MathTrivia';
import Science from './components/gameboard/Science';
import USHistory from './components/gameboard/SocialStudies';

import Baseball from './components/gameboard/Baseball';
import Soccer from './components/gameboard/Soccer';
import Basketball from './components/gameboard/Basketball';

import Jurassic from './components/gameboard/Jurassic';
import Music from './components/gameboard/Music';
import StarWars from './components/gameboard/StarWars';


//==================================================================================================================================
// React
//==================================================================================================================================

const App = () => {
  return (

    <Router>

        <Fragment>
          <Navbar /> */}

          <Route exact path='/' component={Welcome} />

          <Switch>

          <Route exact path='/home' component={Landing} />

            <Route exact path= '/signin' component={Signin} />
            <Route exact path= '/signup' component={Signup} />

            <Route exact path= '/questions' component={ViewQuestions} />

            <Route exact path= '/stats' component={Stats} />
            <Route exact path= '/newgame' component={NewGame} />

            <Route exact path="/game/math" component={MathTrivia} />
            <Route exact path="/game/science" component={Science} />
            <Route exact path="/game/ushistory" component={USHistory} />

            <Route exact path="/game/baseball" component={Baseball} />
            <Route exact path="/game/soccer" component={Soccer} />
            <Route exact path="/game/basketball" component={Basketball} />
            
            <Route exact path="/game/jurassic" component={Jurassic} />
            <Route exact path="/game/music" component={Music}/>
            <Route exact path="/game/starwars" component={StarWars} />

          </Switch>

        </Fragment>


    </Router>

  );
}

export default App;
