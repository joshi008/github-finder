import React, {Component}  from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';
import UserItem from './components/Users/UserItem';

class App extends Component{

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <UserItem/>
      </div>
    );
  }
  
}

export default App;
