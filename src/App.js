import React from "react";
import Create from "./pages/Create";
import NavTabs from "./components/NavTabs/index";
import Trivia from "./pages/Trivia";
import NewGame from "./pages/NewGame";
import Home from "./pages/Home";
import { TotalPoints, PointBoard } from "./pages/Points";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/trivia" component={Trivia} />
          <Route path="/newgame" component={NewGame} />
          <Route exact path="/game" component={PointBoard} />
        </div>
      </Router>
    );
  }
  
  export default App;