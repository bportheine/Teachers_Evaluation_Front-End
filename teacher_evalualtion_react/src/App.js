import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Batch from './containers/Batch'
import BatchList from './containers/BatchList'
import Login from './containers/Login'
import Student from './containers/Student'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Batch />

      </div>
    );
  }
}

export default App;
