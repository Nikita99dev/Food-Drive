import { AUTH } from "../types/user";


export const setUser = (user) => ({
  type: AUTH,
  payload: user,
});


export const signUP = ( {newUser} ) => function(dispatch){


  fetch('http://localhost:3001/users/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(newUser)
  })
    .then(response=> response.json())
    .then(res=>dispatch(setUser(res)))
};
