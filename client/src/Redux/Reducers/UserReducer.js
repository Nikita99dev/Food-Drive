import { setUser } from "../actions/auth";

export default function UserReducer(state = {}, action){
  const { payload, type } = action;


  switch(type){
    case setUser:
      return payload

    default:
      return state;
  }
}
