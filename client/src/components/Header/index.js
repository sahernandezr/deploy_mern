import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <img src="https://github.com/humberto24/Project-3/blob/master/client/public/getboost_logo.png?raw=true"/>
                    <h1 className="display-4">Find the best coach for you</h1>
            </div>
        </div>
    )
};

export default Header;