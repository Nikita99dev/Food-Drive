import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../Redux/slices/rootReducer";
import { initMap } from "../../../Redux/thunks/mapThunk";
import CircularColor from "../../Loader/Loader";
import Main from "../../Main/Main";
import { DescriptionAlert3 } from "../Alert/Alert";
import RowRadioButtonsGroup from "./extra/amount";
// import { Switch} from 'antd';
// import RowRadioButtonsGroup from "./extra/amount";



export default function SignUpTest({ user, setNewUser, newUser, f }) {
  // console.log('-------------', newUser, user)


  const map = useSelector((state) => state.map)
  // const user = useSelector((state)=> state.user)

  const onClick = () => {
    f(2)
  }

  const onChange = (e) => {
    setNewUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const dispatch = useDispatch()

  // let history = useHistory();


  // useEffect(()=>{
  // if(user?.user?.id ){
  //   dispatch(actions.recordMapPending({newUser,user, history}))
  // } 
  // },[user, dispatch])

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(actions.registerUserPending({newUser, history}))
  // }


  const sub = (e) => {
    e.preventDefault()
    dispatch(initMap(newUser))
  }

  useEffect(() => {
    setNewUser(prev => ({ ...prev, coordinates: map.coords }))
  }, [map])


  useEffect(() => {
    if (newUser?.email) {
      dispatch(actions.occupancyPending(newUser.email))
    }
  }, [newUser])


  const validator = () => newUser.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) && !user?.error ? 'is-valid' : newUser.email !== '' ? 'is-invalid' : user?.error ? "invalid-feedback" : ""
  const validator2 = () => newUser.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) && !user?.error ? "valid-feedback" : newUser.email !== '' ? "invalid-feedback" : user?.error ? "invalid-feedback" : ""
  const validator3 = () => newUser.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) && !user?.error ? "Looks Good!" : user?.error ? "User already exists" : newUser.email !== '' ? "Email isn't correct" : ''

  const validator4 = () => newUser?.password.length > 6 ? 'is-valid' : newUser?.password !== '' ? 'is-invalid' : ''
  const validator5 = () => newUser?.password.length > 6 ? 'valid-feedback' : newUser?.password !== '' ? 'invalid-feedback' : ''
  const validator6 = () => newUser?.password.length > 6 ? 'Looks Good!' : newUser?.password !== '' ? 'Password should be 6 characters long' : ''

  const validator7 = () => newUser.name.match(/^[a-zA-Z_]{3,20}$/gi) ? 'is-valid' : newUser.name !== '' ? 'is-invalid' : ''
  const validator8 = () => newUser.name.match(/^[A-Za-z]{3,20}$/gi) ? 'valid-feedback' : newUser.name !== '' ? 'invalid-feedback' : ''
  const validator9 = () => newUser.name.match(/^[A-Za-z]{3,20}$/gi) ? 'Looks Good!' : newUser.name !== '' ? 'Name has to contain only characters' : ''
  return (
  <>
  <div style={{'margin': '5px'}}>
  <h1 className="col-md-10 mt-5 d-flex justify-content-center" >Enter You Information</h1>
  </div>
  <form className="row m-4 d-flex " >
  {/* onSubmit={submitHandler} */}
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
        {validator6()}
    </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">Email</label>
      <input  type="text" className={`form-control ${validator()}`} name="email" onChange={onChange} value={newUser.email} id="validationCustom01" required />
      <div className={validator2()}>
        {validator3()}
    </div>
    <div>
      {user?.error && user.error === 'invalid'?<DescriptionAlert3 />:''}
    </div>
    </div>
    {newUser.role === 'receiver'?
    <div>
    <div className="col-md-10 align-items-center d-flex flex-row justify-content-center justify-content-xl-around">
      <input type="text" className="form-control " onChange={onChange} placeholder="Address followed by the city" name="address"  value={newUser.address} id="validationCustom03" required />
      <div className={newUser?.address !==''?"valid-feedback":"invalid-feedback"}>
        {newUser?.address !==''?"Looks Good!":"Type-something"}
    </div>
    <button className="btn btn-primary m-5" onClick={sub} type="button">Check Address</button>
    </div>
    {map.loader ?<CircularColor/>: Array.isArray(map.coords)?<Main points={map.coords}/>:""}
    </div>
    :<RowRadioButtonsGroup newUser={newUser} setNewUser={setNewUser}/>
}
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
      {<button className="btn btn-primary" disabled={!newUser?.password.length > 6 || !newUser.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) || !newUser.name.match(/^[a-zA-Z_]{3,20}$/gi) || user.error?'disabled':false} onClick={onClick} type="button">Next Step</button>}
      {/* <button className="btn btn-primary"   onClick={onClick} type="button">Next Step</button> */}
    </div>
  </form>
  </>
  )
}
