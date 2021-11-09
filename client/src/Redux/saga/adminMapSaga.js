import { takeEvery, call, put } from '@redux-saga/core/effects'
import { actions } from '../slices/rootReducer'
import { AllMaps, delMap } from './tools'


function* adminMap({payload}) {
  console.log('+++++', payload.id)
  try {
    const id = yield call(delMap, 'http://localhost:3001/map/delete',payload.id )
    console.log('iddddddddddddd', id)
    if(id){
      console.log('idddddddddddddddddd', id)
    yield put(actions.deleteMapFulfilled( payload.id))
    } 
  } catch (error) {
    throw error
  }
}

function* getAllMaps({payload}){
  console.log(payload)

  try {
    const maps = yield call(AllMaps, 'http://localhost:3001/map/getAll')
    if(maps){
      yield put(actions.getAppMapsFulfilled(maps))
    }
  } catch (error) {
    yield put(actions.getAllMapsRejected(error))
  }
}


export default function* AdminMapSaga(){
  yield takeEvery(`${actions.getAllMapsPending}`, getAllMaps)
  yield takeEvery(`${actions.deleteMapPending}`, adminMap)
}
