import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'

const batch = {
  "id": 1,
  "start_date": "2018-03-02",
  "end_date": "2018-06-02",
  "students": [
    {
    "id": 1,
    "name": "Joe",
    },
    {
    "id": 2,
    "name": "Dan",
   },
   {
   "id": 3,
   "name": "Ava",
   },
   {
   "id": 4,
   "name": "Ivy",
   },
   {
   "id": 5,
   "name": "Bob",
   },
   {
   "id": 6,
   "name": "Amy",
   }
  ]
}

class BatchList extends PureComponent {

static PropTypes = {
  batch: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    students: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired
  })).isRequired
}
  render() {
    return (
      <div>
        <Title content="BatchList" />
          <ul class="collection">
            <li class="collection-item avatar">
              <i class="material-icons circle">class</i>
              <span class="title">Title</span>
              <p>First Line <br/>
                 Second Line
              </p>
              <a href="http://localhost:3000/batch" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle">class</i>
              <span class="title">Title</span>
              <p>First Line <br/>
                 Second Line
              </p>
              <a href="http://localhost:3000/batch" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle">class</i>
              <span class="title">Title</span>
              <p>First Line <br/>
                 Second Line
              </p>
              <a href="http://localhost:3000/batch" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
            </li>
          </ul>
      </div>
    )
  }
}

export default BatchList
