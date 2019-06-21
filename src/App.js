import React, { Component } from 'react';
import Navbar from './layout/Navbar'
import Users from './components/Users'
import './App.css';

class App extends Component {
  render() {


    return (
      <div className='App'>
        <Navbar />
        <Users />
      </div>
    );
  }
}
export default App;
