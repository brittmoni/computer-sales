import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Welcome to the online sales page for TechDeskGuru!</h1>
        <Footer />
      </div>
    )
  }
}

export default Home;