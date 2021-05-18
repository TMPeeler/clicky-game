import React from "react";

function Navbar(props) {
    return(
        <nav className="navbar">
                <li className="display-4 text-center">Clicky Game</li>
                <li className="display-4 text-center">Just click something would ya?</li>
                <li className="display-4 text-center">Score: {props.score} Top Score: {props.highscore}</li>
        </nav>
    );
}

export default Navbar;