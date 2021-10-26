import { combineReducers } from 'redux';
import mapReducer from "../Reducers/mapReducer";
import { initMapActions } from './mapRecSlice';
import UserReducer from './users';
// import UserReducer from './user';
import { userActions } from './users';
import mapRecReducer from './mapRecSlice'

 const rootReducer = combineReducers({
  user: UserReducer,
  map: mapReducer,
  Recmap: mapRecReducer,
})

export default rootReducer

export const actions = {
  ...userActions,
  ...initMapActions,
  ...initMapActions
}
