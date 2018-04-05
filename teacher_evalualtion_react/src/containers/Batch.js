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
    "photo": "blank-profile-picture.png",
    "evaluations": [
      {
      "id": 1,
      "date": "2018-03-25",
      "color": "green",
      "comment": "All's good in the hood",
      "teacher-id": 1,
      }
    ]
    },
    {
    "id": 2,
    "name": "Dan",
    "photo": "blank-profile-picture.png",
    "evaluations": [
      {
      "id": 1,
      "date": "2018-03-25",
      "color": "red",
      "comment": "Not so good in the hood",
      "teacher_id": 1,
      }
    ]
    }
  ]
}

class List extends PureComponent {

static PropTypes = {
  batch: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    students: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      evaluations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        teacher_id: PropTypes.number.isRequired
      })).isRequired
    })).isRequired
  })).isRequired
}

  render() {
    return (
      <div>
      <Title content="Batch 1" />
      <ol>
        {batch.students.map(s =>
          <li>
          <h3>{s.name}</h3>
            {s.evaluations.map(e =>
              <div>
                <p>{e.color}</p>
              </div>
            )}
          </li>)}
      </ol>
      </div>
    )
  }
}

export default List
