import { takeEvery, call, put } from '@redux-saga/core/effects'
import { actions } from '../slices/rootReducer'
import { AllMaps, ApproveMap, delMap } from './tools'


function* adminMap({payload}) {
  console.log('+++++', payload.id)
  try {
    const id = yield call(delMap, 'http://localhost:3001/map/delete',payload.id )
    // console.log('iddddddddddddd', id)
    if(id){
      // console.log('idddddddddddddddddd', id)
    yield put(actions.deleteMapFulfilled( payload.id))
    } 
  } catch (error) {
    throw error
  }
}

function* approveMap( {payload}){
  console.log('--------', payload.id)
  try {
    const id = yield call(ApproveMap, 'http://localhost:3001/map/update', payload.id)
    console.log('idddd', id)
    if(id){
      yield put(actions.updateMapFulfilled(payload.id))
    }
  } catch (error) {
    
  }
}

function* getAllMaps({payload}){
  console.log('0000', payload)

  try {
    const maps = yield call(AllMaps, 'http://localhost:3001/map/getAllPending')
    console.log('maps', maps)
    if(maps){
      yield put(actions.getAllMapsFulfilled(maps))
    } else {
      yield put(actions.getAllMapsFulfilled([]))
    }
  } catch (error) {
    yield put(actions.getAllMapsRejected(error))
  }
}

function* getAllMoney({payload}){
  try {
    const money = yield call()
  } catch (error) {
    
  }
}



export default function* AdminMapSaga(){
  yield takeEvery(`${actions.getAllMapsPending}`, getAllMaps)
  yield takeEvery(`${actions.deleteMapPending}`, adminMap)
  yield takeEvery(`${actions.updateMapPending}`, approveMap)
}
