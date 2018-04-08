//import {RANDOM} from '../actions/types'

export default (state=['Student'], { type, payload }) => {
  if (type === 'RANDOM') {
    //currently mutating state, but history doesn't matter on random chance
    return state = [...state, payload]
  }

  return state
}
