

export async function regUser(url, user){
  try {
    console.log("from fetch logup", {user});
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });

        const DbUser = await res.json();
        console.log('reg user ', DbUser)
        if(DbUser){
          console.log('inside if')
          return DbUser
          // dispatch(actions.loginUserFulfilled(DbUser));
          // history.replace("/form");
        } else {
          return 'User already exists'
          // dispatch(actions.loginUserFulfilled(DbUser));
          // history.replace('/login')
        }

  } catch (e) {
    console.log('eeeeeeeeeeeeeeeeeee');
    throw e
    // dispatch(actions.loginUserRejEcted(e));
  }
};

export async function logUser(url, user){
  console.log(user)
  try {
    console.log("from fetch logup", user);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
        const Dbuser = await res.json();
        console.log('fetch in thunk', Dbuser)
        if(Dbuser?.userId){
          return Dbuser
          // dispatch(actions.loginUserFulfilled(DbUser));
          // history.replace("/form");
        } else {
          
          // dispatch(actions.loginUserFulfilled(DbUser));
          // history.replace('/login')
        }

  } catch (e) {
    console.log(e);
    throw e
    // dispatch(actions.loginUserRejEcted(e));
  }
};

export async function userLogout(url, history) {
  try {
    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    
    if(res.status === 200){
      return history;
    }
  } catch (e) {
    throw e 
  }
}

export async function InitUser(url){
  try {
    const curUser = await fetch(url, {
      credentials: "include"
    })

    const dbuser = await curUser.json()
    return dbuser
  } catch (e) {
   throw e 
  }
}

export async function recordMap(url, map){
  try {
    const dbMap = await fetch(url,{

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(map)
    })

    const res = await dbMap.json()
    return res
  } catch (e) {
    throw e
  }
}

export async function uId(url, email){
  console.log('222222222', email)
  console.log(JSON.stringify(email))
  try{
    const dbEmail = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(email)
    })

    const id = await dbEmail.json();
    console.log('email', {id})
    return id
  }catch (e){
    throw e 
  }
}

export async function findData(url){
  try {
    const data = await fetch(url)
    const records = data.json()
    return records 
  } catch (error) {
    throw error
  }
}
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
// try {
//   const res = await fetch("http://localhost:3001/users/logout", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify(),
//   }
//   );
//   console.log(res.status)
//   if(res.status === 200){
//   dispatch(actions.logoutUserFulfilled());
//   history.replace('/login');
//   }

// } catch (e) {
//   console.log(e);
//   dispatch(actions.logoutUserRejected(e));
// }
