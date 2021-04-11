import { NETWORK } from '../actions/types'

const initialState = { network: true }

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case NETWORK:
      return action.payload
    default:
      return state
  }
}
