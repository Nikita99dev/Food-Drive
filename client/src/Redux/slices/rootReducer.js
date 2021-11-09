import { combineReducers } from 'redux';
import mapReducer from "../Reducers/mapReducer";
import { initMapActions } from './mapRecSlice';
import UserReducer from './users';
// import UserReducer from './user';
import { userActions } from './users';
import mapRecReducer from './mapRecSlice'
import { AdminMapActions } from './adminMapSlice';
import AdminMapReducer from './adminMapSlice'

 const rootReducer = combineReducers({
  user: UserReducer,
  map: mapReducer,
  Recmap: mapRecReducer,
  admin: AdminMapReducer,
})

export default rootReducer

export const actions = {
  ...userActions,
  ...initMapActions,
  ...initMapActions,
  ...AdminMapActions
}
