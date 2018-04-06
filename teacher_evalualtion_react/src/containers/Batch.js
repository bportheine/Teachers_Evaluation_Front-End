import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import RandomButton from '../components/RandomButton'
import './Batch.css'

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
   },
   {
   "id": 3,
   "name": "Ava",
   "photo": "blank-profile-picture.png",
   "evaluations": [
     {
     "id": 1,
     "date": "2018-03-25",
     "color": "yellow",
     "comment": "Could be better in the hood",
     "teacher-id": 1,
     }
   ]
   },
   {
   "id": 4,
   "name": "Ivy",
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
   "id": 5,
   "name": "Bob",
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
   "id": 6,
   "name": "Amy",
   "photo": "blank-profile-picture.png",
   "evaluations": [
     {
     "id": 1,
     "date": "2018-03-25",
     "color": "red",
     "comment": "Not so good in the hood",
     "teacher-id": 1,
     }
   ]
   }
  ]
}

class Batch extends PureComponent {

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
      <div class="container">
        <Title content="Batch" />
        <RandomButton />
        {batch.students.map(s =>
            <div class="card">
              <div class="card-image">
                <img src={"blank-profile-picture.png"} alt="student"/>
                <span class="card-title">{s.name}</span>
              </div>
              {s.evaluations.map(e =>
              <div class={e.color}>
                  <div>
                    <p>{e.color}</p>
                  </div>
              </div>)}
              <div class="card-action">
                <a class="blue-grey darken-1 waves-effect waves-light btn" href="http://localhost:3000/batchlist"><i class="material-icons right">rate_review</i>Evaluate</a>
              </div>
            </div>)}
        <div class="card-action">
          <a class="blue-grey lighten-3 waves-effect waves-light btn"><i class="material-icons right">person_add</i>Add Student</a>
        </div>
      </div>
    )
  }
}

export default Batch
