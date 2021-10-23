import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import initMap from "../../../Redux/thunks/mapThunk";
import { registerUser } from "../../../Redux/thunks/usersThunks";
import CircularColor from "../../Loader/Loader";
import Main from "../../Main/Main";


export default function SignUp() {
  const initstate = {
    name: '',
    password: '',
    email: '',
    address: '',
    coordinates: []
    }

  const [newUser, setNewUser] = useState(initstate)

  const map = useSelector((state)=> state.map)

  // useEffect(()=> {
  //   console.log('coords', coords)
  // }, coords)


  const onChange = (e) => {
    setNewUser(prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const dispatch = useDispatch()

  let history = useHistory();

  // const validate = () => {
  //   fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=5af5e7e3-5a13-4cf9-a295-273c77328f6b&format=json&geocode=${newUser.address}&lang=en-US`)
  //   .then(res=>res.json())
  //   .then(resp=> {
  //     const {  featureMember } = resp.response.GeoObjectCollection
  //     const coords = [featureMember[0]?.GeoObject?.Point?.pos.split(" ").map(el=>+el)]
  //     setNewUser(prev=>({...prev, coordinates: [coords[0][1], coords[0][0]]}))
  //   })
  // }

  const submitHandler = (e) => {
    e.preventDefault()
    // let user = Object.entries(newUser).filter((el)=>el[1] ? el[1].trim(): el[1])
    // user = Object.fromEntries(user)
    // console.log('usersignup', user)
    //setNewUser(prev=>({...prev, [coordinates[0], coordinates[1]] = [coordinates[1],coordinates[0]]}))
    dispatch(registerUser(newUser, history))
  }

  const sub = (e) => {
    e.preventDefault()

    dispatch(initMap(newUser))
  }

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
    {map.loader?<CircularColor/>:<Main points={map.coords}/>}
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
//5af5e7e3-5a13-4cf9-a295-273c77328f6b
