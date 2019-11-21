import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="fakeUL">
        <div className="fakeLI"><p className="nav">GIT</p></div>
        <div className="fakeLI"><p className="nav">SCRUM</p></div>
        <div className="fakeLI"><p className="nav">REACT</p></div>
      </div>
    );
  }
}

export default NavBar;


/* <ul>
<li>REACT</li>
<li>SCRUM</li>
<li>GIT</li>
</ul> */