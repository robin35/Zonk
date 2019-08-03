//==================================================================================================================================
// Dependencies
//==================================================================================================================================

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Landing/Navbar';
import Join from './components/Login/Join';
import Login from './components/Login/Login';


// import Questions from './components/Questions/AddQuestions';
// import './style.css';

import './App.css';


//==================================================================================================================================
// React
//==================================================================================================================================

const App = () => {
  return (
    <Router>
      <div className="App">

          <Navbar />
          <Route exact path='/' component={Login} />
          <Switch>
            <Route exact path= '/join' component={Join} />
            <Route exact path= '/login' component={Login} />
          </Switch>


          {/* <Questions /> */}

      </div>
    </Router>
  );
}

export default App;
