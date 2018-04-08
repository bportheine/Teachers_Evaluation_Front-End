import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Title'

class Login extends PureComponent {
  static propTypes = {
    }

  render() {
    return (
      <div>
      <Nav content="Login" />
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default Login
