import { LOGIN } from '../actions/types'

export default function reducer (state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload
    default:
      return state
  }
}
