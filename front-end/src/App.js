//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Landing/Navbar';
import Landing from './components/Landing/Landing';
import Signup from './components/Login/Signup';
import Signin from './components/Login/Signin';
import Game from './components/Game/Game';
import Questions from './components/Questions/Questions';


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
            <Route exact path= '/game' component={Game} />
            <Route exact path= '/questions' component={Questions} />
          </Switch>

        
      </div>

    </Router>

  );
}

export default App;
