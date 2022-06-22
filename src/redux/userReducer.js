import { LOGIN_USER, SET_LOGIN, SET_PASSWORD } from "./types"

const initialState = {
  login: "",
  password: "",
  userName: ""
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, userName: action.payload }
    case SET_PASSWORD:
      return { ...state, password: action.payload }
    case SET_LOGIN:
      return { ...state, login: action.payload }
    default:
      return state
  }
}
