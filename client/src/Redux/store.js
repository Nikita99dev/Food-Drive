import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices/rootReducer';
import rootSaga from './saga/rootSaga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware(),...middlewares]
})


store.subscribe(() => {
  console.log(store.getState().user)
  console.log(store.getState().map)

  // window.localStorage.setItem('user', JSON.stringify(store.getState().user));
});

sagaMiddleware.run(rootSaga)

export default store;


// const store = configureStore(rootReducer, finalState(), composeWithDevTools(applyMiddleware(thunk)));
// // console.log('000000000000000000000000000000000000000000000000000000', store);
// store.subscribe(() => {
//   console.log(store.getState().user)
//   console.log(store.getState().map)
//   // window.localStorage.setItem('user', JSON.stringify(store.getState().user));
// });

// export default store;
