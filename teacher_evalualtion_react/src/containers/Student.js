import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'

class Student extends PureComponent {
  static propTypes = {
    }

  render() {
    return (
      <Title content="Student" />
    )
  }
}

export default Student
