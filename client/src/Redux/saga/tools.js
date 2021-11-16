

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

export async function userLogout(url) {
  try {
    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    
    if(res.status === 200){
      return true;
    } else {
      return false 
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


export async function findOneMap(url, userId){
  try {
    const map = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({userId})
    })

    const mapRes = await map.json();
    return mapRes
  } catch (error) {
    throw error
  }
}

export async function existance(url, email) {
  try {
    const exuser = await fetch(url, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({email:email})
    })
    const res = exuser.json()
    return res
  } catch (error) {
    throw error
  }
}

export async function AllMaps(url){
  try {
    const maps = await fetch(url)
    const res = maps.json()
    return res
  } catch (error) {
    
  }
}


export async function AllMapsFullfiled(url){
  try {
    const maps = await fetch(url)
    const res = maps.json()
    return res
  } catch (error) {
    
  }
}

export async function AllUsers(url){
  try {
    const users = await fetch(url)
    const res = users.json()
    return res
  } catch (error) {
    
  }
}


export async function delMap(url, id){
  try {
    const maps = await fetch(url,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({id})
    })
    if(maps.status === 200){
      const res = maps.json()
      return res
    }
  } catch (error) {
    
  }
}

export async function ApproveMap(url, id){
  try {
    const approved = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({id})
    })

    const res = approved.json()
    console.log('----======' ,res)
    return res
  } catch (error) {
    
  }
}


export async function countDonated(url){
  try {
    const amount = await fetch(url)
    if(amount){
      return amount
    }
  } catch (error) {
    
  }
}

export async function updateDonation(url, payload){
  console.log('payload', payload)

  try {
    const money = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(payload)
    })
    if(money.status === 200){
      const res = await money.json()
      return res
    } else return null
  } catch (error) {
    throw error
  }
}
