import React, { Component } from 'react';
import '../Navbar/Navbar.css';

class Navbar extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='find'>Find a Computer</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;