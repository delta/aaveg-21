import { LOGIN } from './types'

export const loginSuccess = (data) => {
  return {
    type: LOGIN,
    payload: data
  }
}
