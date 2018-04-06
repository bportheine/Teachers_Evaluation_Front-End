import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Title'
import './BatchList.css'

const batches = [{
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
},
{
  "id": 2,
  "start_date": "2018-05-10",
  "end_date": "2018-08-10",
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
   }
  ]
},
{
  "id": 3,
  "start_date": "2018-07-18",
  "end_date": "2018-10-18",
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
 },
 {
 "id": 7,
 "name": "Amy2",
 }]
}]

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
        <Nav content="Batch List"/>
          <ul class="collection">
          {batches.map(b =>
            <li class="collection-item avatar">
              <i class="material-icons circle">class</i>
              <span class="title">Batch #{b.id}</span>
              <p>Students: {b.students.length} <br/>
                 Start: {b.start_date}<br/>
                 End: {b.end_date}
              </p>
              <a href="http://localhost:3000/batch" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
            </li>)}
          </ul>
      </div>
    )
  }
}

export default BatchList
