import * as types from '../types/user'


export const register_user_fulfilled = (user) => ({
  type: types.REGISTER_USER_FULFILLED,
  payload: user,
});

export const register_user_regected = (user) => ({
  type: types.REGISTER_USER_REJECTED,
  payload: user,
  error: true
});

export const register_user_pending = () => ({
  type: types.REGISTER_USER_PENDING,
});


/////////////////////////////////////////////////
export const login_user_fulfilled = (user) => ({
  type: types.LOGIN_USER_FULFILLED,
  payload: user,
});

export const login_user_rejected = (user) => ({
  type: types.LOGIN_USER_REJECTED,
  payload: user,
  error: true
});

export const login_user_pending = () => ({
  type: types.LOGIN_USER_PENDING,
});

///////////////////////////////////////LOGIN


export const logout_user_fulfilled = (user) => ({
  type: types.LOGOUT_USER_FULFILLED,
  payload: user,
});

export const logout_user_regected = (user) => ({
  type: types.LOGOUT_USER_REJECTED,
  payload: user,
  error: true
});

export const logout_user_pending = () => ({
  type: types.LOGOUT_USER_PENDING,
});
