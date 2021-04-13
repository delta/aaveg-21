import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, LOGIN, LOGOUT } from '../actions/types'

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
        isAuthenticated: action.payload.isLoggedIn,
        loading: 'idle'
      }
    case AUTH_REQUEST:
      return {
        ...state,
        loading: 'pending'
      }
    case AUTH_FAILURE:
      return {
        ...state,
        loading: 'idle',
        isAuthenticated: false
      }
    case LOGOUT:
      return {
        ...state,
        rollNo: null,
        isAuthenticated: false
      }
    default:
      return state
  }
}
