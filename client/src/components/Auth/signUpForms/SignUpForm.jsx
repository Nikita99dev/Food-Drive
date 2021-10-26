import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { actions } from "../../../Redux/slices/rootReducer";
import {initMap } from "../../../Redux/thunks/mapThunk";
import { registerUser } from "../../../Redux/thunks/usersThunks";
import SubmitSeccus from "../../common/common";
import CircularColor from "../../Loader/Loader";
import Main from "../../Main/Main";
import { DescriptionAlert, DescriptionAlert3 } from "../Alert/Alert";


export default function SignUp({user}) {
  const initstate = {
    name: '',
    password: '',
    email: '',
    address: '',
    coordinates: [],
    }

  const [newUser, setNewUser] = useState(initstate)


  useEffect(()=>{
    user = '';
  },[])


  const map = useSelector((state)=> state.map)

  console.log(map)


  const onChange = (e) => {
    setNewUser(prev => ({...prev, [e.target.name]: e.target.value.trim() }))
  }



  const dispatch = useDispatch()

  let history = useHistory();


  useEffect(()=>{
    console.log('7777777777777777777', Boolean(user?.user?.id))
  if(user?.user?.id ){
    dispatch(actions.recordMapPending({newUser,user, history}))
  } 
  },[user])
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(actions.registerUserPending({newUser, history}))
  }

  const sub = (e) => {
    e.preventDefault()
    dispatch(initMap(newUser))
  }

  useEffect(()=> {
    setNewUser(prev=> ({...prev, coordinates: map.coords}))
  },[map])



return (
  <form className={`row m-4  ${newUser.name || newUser.password || newUser.address || newUser.email !== '' ? "was-validated" : "needs-validation"}`} onSubmit={submitHandler}>
    <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">Name</label>
      <input type="text" className="form-control" name="name" onChange={onChange} value={newUser.name} id="validationCustom01" required />
      <div className={newUser?.name === ''?"invalid-feedback":"valid-feedback"}>
        {newUser?.name===''?"Type something":"Looks Good!"}
    </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom02" className="form-label">Password</label>
      <input type="password" className="form-control" name="password" onChange={onChange} value={newUser.password} id="validationCustom02" required />
      <div className={newUser?.password.length > 5 ?"valid-feedback":"invalid-feedback"}>
        {newUser?.password.length > 5 ?"Looks Good!":"Type-something"}
    </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">Email</label>
      <input type="text" className="form-control" name="email" onChange={onChange} value={newUser.email} id="validationCustom01" required />
      <div className={newUser?.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?"valid-feedback":"invalid-feedback"}>
        {newUser?.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?"Looks Good!":"Type-something"}
    </div>
    <div>
      {user?.error && user.error !== 'invalid' ?<DescriptionAlert3 />:''}
    </div>
    </div>
    <div className="col-md-10 align-items-center d-flex flex-row justify-content-center justify-content-xl-around">
      {/* <label htmlFor="validationCustom03" className="form-label">Address</label> */}
      <input type="text" className="form-control " onChange={onChange} placeholder="Address followed by city" name="address"  value={newUser.address} id="validationCustom03" required />
      <div className={newUser?.address !==''?"valid-feedback":"invalid-feedback"}>
        {newUser?.address !==''?"Looks Good!":"Type-something"}
    </div>
    <button className="btn btn-primary m-5" onClick={sub} type="button">Check Address</button>
    {/* {map.loader?<CircularColor/>:<Main points={map.coords}/>} */}
    {/* {map.coords?<Main points={map.coords}/>: null} */}
    </div>
    {map.loader ?<CircularColor/>: map.coords?<Main points={map.coords}/>:null}
    <div className="col-12">
      <div className="form-check m-3">
        <input className="form-check-input" type="checkbox" id="invalidCheck" required />
        <label className="form-check-label" htmlFor="invalidCheck">
          Agree to terms and conditions
        </label>
        <div className="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <button className="btn btn-primary" type="submit" >Submit form</button>
    </div>
  </form>
)
}

// ${!newUser.coordinates.length?'disabled':""}`}
