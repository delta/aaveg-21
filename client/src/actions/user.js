import { BACKEND_API } from '../config/config'
import { LOGIN, AUTH_SUCCESS, AUTH_REQUEST } from './types'
import axios from 'axios'

export const loginSuccess = (data) => {
  return {
    type: LOGIN,
    payload: data
  }
}

export const auth = () => async (dispatch) => {
  console.log('here')
  dispatch(authRequest())
  const data = await axios.post(BACKEND_API + '/api/auth/checkLogin')
  console.log(data)
  dispatch(authSuccess(data))
}

export const authSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data
  }
}

export const authRequest = () => {
  return {
    type: AUTH_REQUEST
  }
}
