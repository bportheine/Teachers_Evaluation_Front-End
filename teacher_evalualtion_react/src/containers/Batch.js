import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Title'
import RandomButton from '../components/RandomButton'
import './Batch.css'

export const batch = {
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
      "color": "Green",
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
      "color": "Red",
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
     "color": "Yellow",
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
     "color": "Green",
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
     "color": "Green",
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
     "color": "Red",
     "comment": "Not so good in the hood",
     "teacher-id": 1,
     }
   ]
   }
  ]
}

const Students_Green = batch.students.filter( s => s.evaluations[0].color === 'Green')
console.log(Students_Green)

const Students_Yellow = batch.students.filter( s => s.evaluations[0].color === 'Yellow')
console.log(Students_Yellow)

const Students_Red = batch.students.filter( s => s.evaluations[0].color === 'Red')
console.log(Students_Red)

const Rand = Math.random()
console.log(Rand)

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min));
}

const Algorithm = (r) => {
  if(r <= 0.53){
    return (Students_Red[getRandomInt(0, Students_Red.length)].name)
  }
  else if(r > 0.53 && r <= 0.81){
    return (Students_Yellow[getRandomInt(0, Students_Yellow.length)].name)
  }
  else if(r > 0.81){
    return (Students_Green[getRandomInt(0, Students_Green.length)].name)
  }
  else {
    return ('Error')
  }
}
console.log(Algorithm(Rand))

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
      <div>
        <Nav content="Batch #1"/>
        <RandomButton />
        <p>{Algorithm(Rand)}</p>
        <ul class="collection">
          {batch.students.map(s =>
          <li class="collection-item avatar">
            <i class="material-icons circle orange darken-2">person</i>
            <span class="title">{s.name}</span>
            <p>Student # {s.id}</p>
            {s.evaluations.map(e =>
              <div>
                <p>Current Status: <span class={e.color.toLowerCase()}>{e.color}</span></p>
              </div>
            )}
            <a href="http://localhost:3000/student" class="secondary-content"><i class="material-icons">rate_review</i></a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Batch
