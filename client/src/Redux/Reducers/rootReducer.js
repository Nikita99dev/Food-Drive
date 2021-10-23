import UserReducer from "./UserReducer";
import { combineReducers } from 'redux';
import mapReducer from "./mapReducer";

 const rootReducer = combineReducers({
  user: UserReducer,
  map: mapReducer,
})

export default rootReducer
