import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Batch from './containers/Batch'
import BatchList from './containers/BatchList'
import Student from './containers/Student'
import Login from './containers/Login'


export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Batch} />
        <Route exact path="/batchlist" component={BatchList} />
        <Route exact path="/batch" component={Batch} />
        <Route path="/batchlist/:batchId/students/:studentId" component={Student} />
      </div>
    )
  }
}
