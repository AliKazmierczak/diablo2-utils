import React, { Component } from "react";

import icon from "./icon.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-diablo">
        <a className="navbar-brand" href="#">
          <img
            src={icon}
            className="App-logo"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          Diablo 2 Utils
        </a>
      </nav>
    );
  }
}

export default Header;
