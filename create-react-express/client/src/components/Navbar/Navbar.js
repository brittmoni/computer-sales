import React, { Component } from 'react';
import '../Navbar/Navbar.css';

class Navbar extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>About</li>
          <li>Find a Computer</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;