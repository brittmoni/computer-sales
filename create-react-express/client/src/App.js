import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import FindComp from './pages/FindComp/FindComp';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/find" component={FindComp}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
