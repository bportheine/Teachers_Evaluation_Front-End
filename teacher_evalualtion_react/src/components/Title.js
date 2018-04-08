import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Nav extends PureComponent {
  static propTypes = {
      content: PropTypes.string.isRequired,
    }

  render() {
    return (
      <nav>
      <div class="nav-wrapper teal">
        <a href="#" class="brand-logo">{ this.props.content }</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="localhost:3000/login">Log Out</a></li>
        </ul>
      </div>
      </nav>
    )
  }
}

export default Nav
