import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'

class Batch extends PureComponent {
  static propTypes = {
      content: PropTypes.string.isRequired,
    }

  render() {
    return (
      <Title content="Batch" />
    )
  }
}

export default Batch
