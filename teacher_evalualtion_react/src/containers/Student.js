import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Title'

const student = {
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
  }

class Student extends PureComponent {

static PropTypes = {
  student: PropTypes.objectOf(PropTypes.shape({
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
}

  render() {
    return (
      <div>
        <Nav content="Student"/>
        <div class="card">
          <div class="card-image">
            <img src={"blank-profile-picture.png"} alt="student"/>
          </div>
          {student.evaluations.map(e =>
          <div class={e.color}>
          <span class="card-title">{student.name}</span>
            <div>
              <p>{e.color}</p>
              </div>
            </div>)}
        </div>

        <form action="#">
          <p>
            <label>
              <input name="color" type="radio" />
              <span>Green</span>
            </label>
          </p>
          <p>
            <label>
              <input name="color" type="radio" />
              <span>Yellow</span>
            </label>
          </p>
          <p>
            <label>
              <input name="color" type="radio" />
              <span>Red</span>
            </label>
          </p>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Comments</label>
            </div>
            <div class="row">
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Student
