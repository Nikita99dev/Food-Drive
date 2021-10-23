import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import finalState from './initialState';
import rootReducer from './Reducers/rootReducer';


const store = createStore(rootReducer, finalState(), composeWithDevTools(applyMiddleware(thunk)));
// console.log('000000000000000000000000000000000000000000000000000000', store);
store.subscribe(() => {
  console.log(store.getState().user)
  console.log(store.getState().map)
  // window.localStorage.setItem('user', JSON.stringify(store.getState().user));
});

export default store;
