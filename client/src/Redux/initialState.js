const initialState = {
  user:{}
}

const finalState = () => {
  const localStorageState = JSON.parse(window.localStorage.getItem('user'))
  return localStorageState ? localStorageState : initialState
}

export default finalState
