import { BACKEND_API } from '../config/config'
import { LOGIN, AUTH_SUCCESS, AUTH_REQUEST, AUTH_FAILURE, LOGOUT } from './types'
import axios from 'axios'

export const loginSuccess = (data) => (dispatch) => {
  console.log(data)
  dispatch(auth())
  dispatch({
    type: LOGIN,
    payload: data
  })
}

export const auth = () => async (dispatch) => {
  dispatch(authRequest())
  await axios.post(BACKEND_API + '/api/auth/checkLogin', {}, { withCredentials: true, credentials: 'include' })
    .then((res) =>
      dispatch(authSuccess(res.data))
    ).catch((e) => {
      console.log(e)
      dispatch(authFailure())
    })
}

export const logout = () => async (dispatch) => {
  await axios.post(BACKEND_API + '/api/auth/logout', {}, { withCredentials: true, credentials: 'include' })
    .then((res) =>
      dispatch({
        type: LOGOUT
      }
      )
    ).catch((e) => {
      console.log(e)
    })
}

export const authSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data
  }
}

export const authFailure = () => {
  return {
    type: AUTH_FAILURE
  }
}

export const authRequest = () => {
  return {
    type: AUTH_REQUEST
  }
}
