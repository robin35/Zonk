import React from "react";
import Create from "./pages/Create";

function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/trivia" component={Trivia} />
          <Route path="/newgame" component={NewGame} />
        </div>
      </Router>
    );
  }
  
  export default App;