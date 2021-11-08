
import { takeEvery, call, put, debounce } from "@redux-saga/core/effects";
import { actions } from "../slices/rootReducer";
import { existance, InitUser, logUser, regUser, userLogout } from "./tools";

function* registerUser({payload}){
  console.log('-----------------', payload.history,payload.newUser)
 try {
   const dbUser = yield call(regUser, "http://localhost:3001/users/signup", payload.newUser)

   if(dbUser) {
     yield put(actions.registerUserFulfilled({id:dbUser}))
     if(payload.newUser.role === 'donor'){ 
       payload.history.replace('/succes')
     }
    } else {
      yield put(actions.registerUserRejected(dbUser))
      payload.history.replace('/signup')
    } 
  //  payload.history.replace('/login')
 } catch (e){
   yield put(actions.registerUserRejected(e))
 }
}


function* loginUser( {payload} ) {
  console.log('=============================', payload.data , payload.history)
  try{
    const DbUser = yield call(logUser, 'http://localhost:3001/users/signin', payload.data, payload.history )
    if(DbUser){
      yield put(actions.loginUserFulfilled(DbUser))
      payload.history.replace('/lk')
    }else  {
      yield put(actions.loginUserRejected('invalid'))
      payload.history.replace('/warning')
    }
    
 } catch(e){
   console.log(e)
    yield put(actions.loginUserRejected(e))
 } 
}

function* logoutUser(payload) {
  console.log('payload', payload.payload.history)
  try{
    const res = yield call(userLogout, "http://localhost:3001/users/logout")
    if(res){
      yield put(actions.logoutUserFulfilled())
      payload.payload.history.push('/login')
    } else {
      yield put(actions.logoutUserRejected(res))
      payload.replace('/login')
    }
  } catch (e) {
    yield put(actions.logoutUserRejected(e))
  }

}

function* initialUser() {
  try{
    const curUser = yield call(InitUser, 'http://localhost:3001/users/me')
    if(curUser){
      yield put(actions.loginInitialFulfilled(curUser))
    } else {
      yield put(actions.logoutUserRejected(null))
    }

  }catch (e) {
    yield put(actions.loginInitialRejected(e))
  }
}

function* exsistanceUser({payload}) {
console.log('email from exuser', 'email from saga', payload)
  try {
    const existed = yield call(existance, 'http://localhost:3001/users/exUser', payload)
    console.log('existance', existed)
    if(existed){
      yield put(actions.occupancyRejected(existed))
    } else {
      yield put(actions.occupancyFullfilled())
    }
  }catch(e) { 
    yield put(actions.occupancyRejected(e))
  }
}

export default function* userSaga() {
  yield takeEvery(`${actions.registerUserPending}`,registerUser)
  yield takeEvery(`${actions.loginUserPending}`,loginUser)
  yield takeEvery(`${actions.logoutUserPending}`,logoutUser)
  yield takeEvery(`${actions.loginInitialPending}`, initialUser)
  yield debounce(500,`${actions.occupancyPending}`, exsistanceUser)
}
