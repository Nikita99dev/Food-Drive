import { MAP_INIT_FULFILLED, MAP_INIT_PENDING, MAP_INIT_REJECTED } from '../types/map'
const preloaded = {
  coords: {},
  loader: false,
  error: null, 
}
export default function mapReducer(state = preloaded, action){
  switch (action.type) {
    case MAP_INIT_PENDING:
      return {...state, loader: true}
    case MAP_INIT_FULFILLED:
      return {coords: action.payload, loader:false, error: null }
    case MAP_INIT_REJECTED:
      return {...state, loader: false, error: action.payload }
    default:
      return state 
  }
}
