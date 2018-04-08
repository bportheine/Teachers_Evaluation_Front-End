import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { randomButton } from '../actions/randomButton'

class RandomButton extends PureComponent {
  static propTypes = {
    randomButton: PropTypes.func.isRequired
  }

  handleClick = () => {
    console.log(this.props);
    this.props.randomButton({...this.props.response})
  }

  render() {
    return (
      <div>
        <a onClick={this.handleClick} class="orange darken-2 waves-effect waves-light btn"><i class="material-icons right">live_help</i>Ask a Question</a>
        <p>Student</p>
      </div>
    )
  }
}

const mapStateToProps = ({ randomButton }) => ({ randomButton })

export default connect(mapStateToProps)(RandomButton)
