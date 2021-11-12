import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import { actions } from "../../../Redux/slices/rootReducer";
import {initMap } from "../../../Redux/thunks/mapThunk";
import CircularColor from "../../Loader/Loader";
import Main from "../../Main/Main";
import {  DescriptionAlert3 } from "../Alert/Alert";
import { Switch} from 'antd';



export default function SignUp({user, c, f}) {
  const initstate = {
    name: '',
    password: '',
    email: '',
    role: '',
    address: '',
    money: 0,
    coordinates: [],
    }

  const [newUser, setNewUser] = useState(initstate)

  useEffect(()=>{
    user = '';
  },[])


  const map = useSelector((state)=> state.map)
  // const user = useSelector((state)=> state.user)


  const onChange = (e) => {
    setNewUser(prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const dispatch = useDispatch()

  let history = useHistory();


  useEffect(()=>{
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

  const validator = () => newUser.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ? 'is-valid': newUser.email !== ''?'is-invalid':''
  const validator2 = () => newUser.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ? "valid-feedback" : newUser.email !== ''? "invalid-feedback": ""
  const validator3 = () => newUser.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ? "Looks Good!" : newUser.email !== ''? "Email isn't correct": ""
  
  const validator4 = () => newUser?.password.length > 6 ? 'is-valid': newUser?.password !== ''?'is-invalid': ''
  const validator5 = () => newUser?.password.length > 6 ? 'valid-feedback': newUser?.password !== '' ?'invalid-feedback': ''
  const validator6 = () => newUser?.password.length > 6 ? 'Looks Good!': newUser?.password !== '' ?'Password should be 6 characters long': ''
  
  const validator7 = () => newUser.name.match(/^[a-zA-Z_]{3,20}$/gi) ? 'is-valid': newUser.name !== ''?'is-invalid':''
  const validator8 = () => newUser.name.match(/^[A-Za-z]{3,20}$/gi) ? 'valid-feedback': newUser.name !== ''?'invalid-feedback':''
  const validator9 = () => newUser.name.match(/^[A-Za-z]{3,20}$/gi) ? 'Looks Good!': newUser.name !== ''?'Name has to contain only characters':''

return (
  <form className="row m-4 " onSubmit={submitHandler}>
    <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">Name</label>
      <input type="text" className={`form-control ${validator7()}`} name="name" onChange={onChange} value={newUser.name} id="validationCustom01" required />
      <div className={validator8()}>
        {validator9()}
    </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom02" className="form-label">Password</label>
      <input type="password" className={`form-control ${validator4()}`} name="password" onChange={onChange} value={newUser.password} id="validationCustom02" required />
      <div className={validator5()}>
        {validator6}
    </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">Email</label>
      <input type="text" className={`form-control ${validator()}`} name="email" onChange={onChange} value={newUser.email} id="validationCustom01" required />
      <div className={validator2()}>
        {validator3()}
    </div>
    <div>
      {user?.error && user.error !== 'invalid' ?<DescriptionAlert3 />:''}
    </div>
    </div>
    <div className="col-md-10 align-items-center d-flex flex-row justify-content-center justify-content-xl-around">
      <input type="text" className="form-control " onChange={onChange} placeholder="Address followed by city" name="address"  value={newUser.address} id="validationCustom03" required />
      <div className={newUser?.address !==''?"valid-feedback":"invalid-feedback"}>
        {newUser?.address !==''?"Looks Good!":"Type-something"}
    </div>
    <button className="btn btn-primary m-5" onClick={sub} type="button">Check Address</button>
    </div>
    {map.loader ?<CircularColor/>: Array.isArray(map.coords)?<Main points={[[55.751574, 37.573856],[56.751574, 38.573856]]}/>:""}
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
      <button className="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>
)
}
