import { AUTH_REQUEST, AUTH_SUCCESS, LOGIN } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  rollNo: null,
  loading: 'initial'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        rollNo: action.payload.rollnumber
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        loading: 'idle'
      }
    case AUTH_REQUEST:
      return {
        ...state,
        loading: 'pending'
      }
    default:
      return state
  }
}
