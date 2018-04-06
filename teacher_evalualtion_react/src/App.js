import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Routes from './routes'
import Batch from './containers/Batch'
import BatchList from './containers/BatchList'
import Student from './containers/Student'
import Login from './containers/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
