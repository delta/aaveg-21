import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, LOGIN, LOGOUT } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  rollNo: null,
  loading: 'initial',
  isGirl: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        rollNo: action.payload.rollnumber,
        isGirl: action.payload.isGirl,
        isAuthenticated: true
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
        isAuthenticated: false,
        rollNo: null
      }
    case LOGOUT:
      return {
        ...state,
        rollNo: null,
        isGirl: null,
        isAuthenticated: false
      }
    default:
      return state
  }
}
