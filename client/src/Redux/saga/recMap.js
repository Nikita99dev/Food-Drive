import { takeEvery, call, put} from "@redux-saga/core/effects"
import { actions } from "../slices/rootReducer";
import { findData, recordMap, uId  } from "./tools";

  function* recMap({payload }){
  console.log('rec map payload',payload.newUser.coordinates[0],payload.newUser.coordinates[1], payload.user.user.id)
  console.log(payload.email)
  const final = [payload.newUser.coordinates[1],payload.newUser.coordinates[0]]
  try {
    // const id = yield call(uId, 'http://localhost:3001/map/idCheck', payload.user.user.email)
    // console.log('iddddddddddddddddddddddddddddddddddddddd', id)
    const records = yield call(findData, `https://geocode-maps.yandex.ru/1.x/?apikey=5af5e7e3-5a13-4cf9-a295-273c77328f6b&format=json&geocode=${final}&lang=en-US` )
    const obj = {}
    // console.log(records.response.GeoObjectCollection.featureMember[0].GeoObject?.Point?.pos.split(" "))
    obj.address = records?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.metaDataProperty?.GeocoderMetaData?.Address.formatted
    obj.latitude = records?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point?.pos.split(" ").map((el) => +el)[0]
    obj.longitude = records?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point?.pos.split(" ").map((el) => +el)[1]
    obj.userId = payload.user.user.id
    console.log({obj})
    // console.log('records from rec map', records.response.GeoObjectCollection.featureMember[0])
    let map;
    // console.log('qqqqqqqqqqqqqqqqqq', typeof(obj.latitude) === 'number' && typeof(payload?.user?.user?.id) === 'number')
    if(typeof(obj.latitude) === 'number'  && typeof(payload?.user?.user?.id) === 'number'){
       map = yield call(recordMap, 'http://localhost:3001/map/insertion', obj  )
       console.log('====================================', map, typeof(payload.user.user.id) === 'number')
    } else {
      payload.history.replace('/warning')
    }
    // const map = yield call(recordMap, 'http://localhost:3001/map/insertion', obj  )
    console.log('====================================', map, payload.user)
    if(map?.id){
      console.log('mappppppppppppppppp',map)
      const res = yield put(actions.recordMapFulfilled(map))
      console.log(res)
      if(res.payload.id){
      payload.history.replace('/succes')
      } else {
        payload.history.replace('/warning')
      }
    } else {
      yield put(actions.recordMapRejected(map))
    }
  } catch (error) {
    yield put(actions.recordMapRejected(error))
  }
}

export default function* mapSaga(){
  yield takeEvery(`${actions.recordMapPending}`, recMap)
}
