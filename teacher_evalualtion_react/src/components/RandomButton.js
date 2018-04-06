import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// const color = {batch.students.map(s => {s.evaluations.map(e => e.color)} )}
//
// switch (color) {
//   case 'green':
//
//     break;
//   case 'yellow':
//
//     break;
//   case 'red':
//
//     break;
//   default:
//  
// }


class RandomButton extends PureComponent {

  render() {
    return (
      <div class="card-action">
        <a class="blue-grey darken-3 waves-effect waves-light btn"><i class="material-icons right">live_help</i>Ask a Question</a>
      </div>
    )
  }
}

export default RandomButton
