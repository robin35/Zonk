import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <Link className="navbar-brand" to="/">
        Zonk!!
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/create"
              className={window.location.pathname === "/create" ? "nav-link active" : "nav-link"}
            >
              Create
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/trivia"
              className={window.location.pathname === "/trivia" ? "nav-link active" : "nav-link"}
            >
              Trivia
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/newgame"
              className={window.location.pathname === "/newgame" ? "nav-link active" : "nav-link"}
            >
              New Game
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
