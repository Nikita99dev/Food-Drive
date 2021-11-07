import { all } from 'redux-saga/effects';
import userSaga from './users';
import mapSaga from './recMap';

export default function* rootSaga() {
 yield all([
   userSaga(),
   mapSaga(),
 ])
}
