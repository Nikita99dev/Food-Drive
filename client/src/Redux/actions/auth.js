import { createAction } from "@reduxjs/toolkit";


export const LOGIN_USER_PENDING = "LOGIN_USER_PENDING";
export const LOGIN_USER_FULFILLED = "LOGIN_USER_FULFILLED";
export const LOGIN_USER_REJECTED = "LOGIN_USER_REJECTED";

export const REGISTER_USER_PENDING = "REGISTER_USER_PENDING";
export const REGISTER_USER_FULFILLED = "REGISTER_USER_FULFILLED";
export const REGISTER_USER_REJECTED = "REGISTER_USER_REJECTED";

export const LOGOUT_USER_PENDING = "LOGOUT_USER_PENDING";
export const LOGOUT_USER_FULFILLED = "LOGOUT_USER_FULFILLED";
export const LOGOUT_USER_REJECTED = "LOGOUT_USER_REJECTED";


export const registerUserPending = createAction("register/user/pending");
export const registerUserFulfilled = createAction("register/user/fulfilled");
export const registerUserRejected = createAction("register/user/rejected", (error)=> ({error: true, payload: error}));


// export const register_user_fulfilled = (user) => ({
//   type: types.REGISTER_USER_FULFILLED,
//   payload: user,
// });

// export const register_user_regected = (user) => ({
//   type: types.REGISTER_USER_REJECTED,
//   payload: user,
//   error: true,
// });

// export const register_user_pending = () => ({
//   type: types.REGISTER_USER_PENDING,
// });

/////////////////////////////////////////////////

export const loginUserPending = createAction("login/user/pending");
export const loginUserFulfilled = createAction("login/user/filfilled");
export const loginUserRejEcted = createAction("login/user/rejected", (error) => ({ error: true, payload: error }));

// export const login_user_fulfilled = (user) => ({
//   type: types.LOGIN_USER_FULFILLED,
//   payload: user,
// });

// export const login_user_rejected = (user) => ({
//   type: types.LOGIN_USER_REJECTED,
//   payload: user,
//   error: true,
// });

// export const login_user_pending = () => ({
//   type: types.LOGIN_USER_PENDING,
// });

///////////////////////////////////////LOGIN

export const logoutUserPending = createAction("logout/user/pending");
export const logoutUserFulfilled = createAction("logout/user/fulfilled");
export const logoutUserRejected = createAction("logout/user/rejected", (error)=> ({error: true, payload: error}));

// export const logout_user_fulfilled = (user) => ({
//   type: types.LOGOUT_USER_FULFILLED,
//   payload: user,
// });

// export const logout_user_regected = (user) => ({
//   type: types.LOGOUT_USER_REJECTED,
//   payload: user,
//   error: true,
// });

// export const logout_user_pending = () => ({
//   type: types.LOGOUT_USER_PENDING,
// });
