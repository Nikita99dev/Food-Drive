// import { actions } from "../slices/rootReducer";



// export const registerUser = (newUser, history) => async (dispatch) => {
//   dispatch(actions.registerUserPending());
//   console.log('from registerUser thunk', newUser)
//   try {
//     console.log("from fetch signup", newUser);
//     const res = await fetch("http://localhost:3001/users/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify(newUser),
//     });
//     const DBuser = await res.json();
//     // console.log("from fetch", user);
//     dispatch(actions.registerUserFulfilled(DBuser));
//     history.replace("/login");
//   } catch (e) {
//     dispatch(actions.registerUserRejected(e));
//     return history.replace("/error");
//   }
// };
// ///////////////////////////
// export const loginUser = (user, history) => async (dispatch) => {
//   dispatch(actions.loginUserPending());
// console.log('first thunk', user)
//   try {
//     console.log("from fetch logup", user);
//     const res = await fetch("http://localhost:3001/users/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify(user),
//     });
//         const DbUser = await res.json();
//         console.log('fetch in thunk', DbUser)
//         if(DbUser?.userId){
//           dispatch(actions.loginUserFulfilled(DbUser));
//           history.replace("/form");
//         } else {
//           dispatch(actions.loginUserFulfilled(DbUser));
//           history.replace('/login')
//         }

//   } catch (e) {
//     console.log(e);
//     history.replace('/form')
//     dispatch(actions.loginUserRejEcted(e));
//   }
// };
// ///////////////////////
// export const logoutUser = (history) => async (dispatch) => {
//   dispatch(actions.logoutUserPending());

//   try {
//     const res = await fetch("http://localhost:3001/users/logout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify(),
//     }
//     );
//     console.log(res.status)
//     if(res.status === 200){
//     dispatch(actions.logoutUserFulfilled());
//     history.replace('/login');
//     }
  
//   } catch (e) {
//     console.log(e);
//     dispatch(actions.logoutUserRejected(e));
//   }
// };


// export const initialUser = () => async(dispatch) => {
//   dispatch(actions.loginUserPending());

//   try {
//     const user = await fetch('http://localhost:3001/users/me',{
//       credentials: "include",
// })
//   const dbuser = await user.json()
//   console.log('initial user from thunk', dbuser)
//     dispatch(actions.loginUserFulfilled(dbuser))
//   }
//   catch (e) {
//     dispatch(actions.loginUserRejected(e))
//   }
// }
// ///////////////////////
// // else if (res.status === 501) {
// //   const user = await res.json();
// //   dispatch(setUser(user));
//   return history.replace("/login");
// } else {
// }
