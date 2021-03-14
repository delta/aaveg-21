const ONLINE = "ONLINE";
const OFFLINE = "OFFLINE";

export const online = () => {
  return {
    type: ONLINE
  }
}

export const offline = () => {
  return {
    type: OFFLINE
  }
}

const initialState = { network: true }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ONLINE:
      return {
        network: true
      }
    case OFFLINE:
      return {
        network: false
      };
    default: return state;
  }
}
