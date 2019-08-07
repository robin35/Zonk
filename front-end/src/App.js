//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Landing/Navbar';

import Landing from './components/Landing/Landing';

import Join from './components/Login/Join';
import Login from './components/Login/Login';

import PlayGame from './components/Game/PlayGame';
import AddQuestions from './components/Questions/AddQuestions';



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
            <Route exact path= '/login' component={Login} />
            <Route exact path= '/join' component={Join} />
            <Route exact path= '/playgame' component={PlayGame} />
            <Route exact path= '/addquestions' component={AddQuestions} />
          </Switch> */}

        
      </div>

    </Router>
  );
}

export default App;
