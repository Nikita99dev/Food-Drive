// import {  signUP } from "../actions/auth";
import * as actions from "../types/user";

const preloaded = {
  user:{},
  loader: false,
  error: null,
}
export default function UserReducer(state = preloaded, action){

  console.log('state from reducer', state)
  console.log('acttion', action)
  switch(action.type){
    case actions.REGISTER_USER_FULFILLED:
      case actions.LOGIN_USER_FULFILLED:
      console.log('from reducer', action.payload)
      return { user: action.payload, loader: false, error: null }

    case actions.LOGOUT_USER_FULFILLED:
      return {user:{}, error:null, loader:false }

    case actions.REGISTER_USER_PENDING:
      case actions.LOGIN_USER_PENDING:
        case actions.LOGOUT_USER_PENDING:
          return {...state, loader: true}

    case actions.REGISTER_USER_REJECTED:
      case actions.LOGIN_USER_REJECTED:
        case actions.LOGOUT_USER_REJECTED:
                return {...state, loader:false,  error: action.payload}

    default:
      return state;
  }
}
