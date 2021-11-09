import { all } from 'redux-saga/effects';
import userSaga from './users';
import mapSaga from './recMap';
import AdminMapSaga from './adminMapSaga';

export default function* rootSaga() {
 yield all([
   userSaga(),
   mapSaga(),
   AdminMapSaga()
 ])
}
