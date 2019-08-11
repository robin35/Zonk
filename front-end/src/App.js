//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Landing/Navbar';
import Landing from './components/Landing/Landing';
import Signup from './components/Login/Signup';
import Signin from './components/Login/Signin';

import SearchQuestions from './components/Questions/SearchQuestions';
import Questions from './components/Questions/Questions';

import Stats from './components/Game/Stats';
import NewGame from './components/Game/NewGame';
import GameBoard from './components/Game/GameBoard';

import MathTrivia from './components/GameBoard/MathTrivia';
import Science from './components/GameBoard/Science';
import SocialStudies from './components/GameBoard/SocialStudies';

import Baseball from './components/GameBoard/Baseball';
import Soccer from './components/GameBoard/Soccer';
import Basketball from './components/GameBoard/Basketball';

import Jurassic from './components/GameBoard/Jurassic';
import Music from './components/GameBoard/Music';
import StarWars from './components/GameBoard/StarWars';


//==================================================================================================================================
// React
//==================================================================================================================================

const App = () => {
  return (

    <Router>

      <div className="App">

          <Navbar />

          <Route exact path='/' component={Landing} />

          <Switch>

            <Route exact path= '/signin' component={Signin} />
            <Route exact path= '/signup' component={Signup} />

            <Route exact path= '/searchquestions' component={SearchQuestions} />
            <Route exact path= '/questions' component={Questions} />

            <Route exact path= '/stats' component={Stats} />
            <Route exact path= '/game' component={NewGame} />
            <Route exact path= '/game/gameboard' component={GameBoard} />

            <Route exact path="/game/math" component={MathTrivia} />
            <Route exact path="/game/science" component={Science} />
            <Route exact path="/game/socialstudies" component={SocialStudies} />

            <Route exact path="/game/baseballtrivia" component={Baseball} />
            <Route exact path="/game/soccertrivia" component={Soccer} />
            <Route exact path="/game/basketballtrivia" component={Basketball} />
            
            <Route exact path="/game/jurassic" component={Jurassic} />
            <Route exact path="/game/80music" component={Music}/>
            <Route exact path="/game/starwars" component={StarWars} />

          </Switch>

      </div>

    </Router>

  );
}

export default App;
