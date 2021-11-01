import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../Redux/slices/rootReducer"


export default function Final({newUser, user, history}){

  const dispatch = useDispatch()

  const user1 = useSelector(state=>state.user)

  useEffect(()=>{
    console.log('qqqqqqqqqqqqqqqqqqqqqq', user1)
    if(user1?.user?.id ){
      dispatch(actions.recordMapPending({newUser,user, history}))
    } 
    },[user1])
    
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(actions.registerUserPending({newUser, history}))
    }

  return (
    <div>
    {newUser.role === 'donor'?
    <div>
      <p>{newUser.name}</p>
      <p>{newUser.email}</p>
      <p>{newUser.address}</p>
      <p>{newUser.money}</p>
      <button onClick={submitHandler} >Submit</button>
    </div>
    :<div>
      <p>{newUser.name}</p>
      <p>{newUser.email}</p>
      <p>{newUser.address}</p>
      <p>{newUser.role}</p>
      <button onClick={submitHandler}>Submit</button>
    </div>
    }
    </div>
  )
}
