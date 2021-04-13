import { BACKEND_API } from '../config/config'
import { LOGIN, AUTH_SUCCESS, AUTH_REQUEST, AUTH_FAILURE } from './types'
import axios from 'axios'

export const loginSuccess = (data) => (dispatch) => {
  dispatch(auth())
  dispatch({
    type: LOGIN,
    payload: data
  })
}

export const auth = () => async (dispatch) => {
  console.log('here')
  dispatch(authRequest())
  await axios.post(BACKEND_API + '/api/auth/checkLogin', {}, { withCredentials: true, credentials: 'include' })
    .then((res) =>
      dispatch(authSuccess(res.data))
    ).catch((e) => {
      console.log(e)
      dispatch(authFailure())
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
