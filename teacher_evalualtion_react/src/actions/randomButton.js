import { RANDOM } from './types'

//export const submitForm = (courseId, studentId, quizId, quizResponse) => (dispatch) => {
export const randomButton= (response) => (dispatch) => {
  dispatch({
    type: RANDOM,
    payload: 'Joe'
  })
}
