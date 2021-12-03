import {AUTHENTICATE, LOGOUT, SET_TRIED_LOGIN} from '../actions/auth'

const initialState = () => ({
  token: null,
  triedLogin: false,
  apiMode: 0,
  me: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        token: action.data.token,
        triedLogin: true,
      }
    case SET_TRIED_LOGIN:
      return {...state, triedLogin: true}
    case LOGOUT:
      return initialState()
    default:
      return state
  }
}