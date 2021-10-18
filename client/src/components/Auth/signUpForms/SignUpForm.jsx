import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router";
import { registerUser } from "../../../Redux/thunks/usersThunks";


export default function SignUp() {
  const initstate = {
    name: '',
    password: '',
    email: '',
    address: ''
    }

  const [newUser, setNewUser] = useState(initstate)

  const onChange = (e) => {
    setNewUser(prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const dispatch = useDispatch()

  let history = useHistory();


  const submitHandler = (e) => {
    e.preventDefault()
    // let user = Object.entries(newUser).filter((el)=>el[1] ? el[1].trim(): el[1])
    // user = Object.fromEntries(user)
    // console.log('usersignup', user)
    dispatch(registerUser(newUser, history))
  }

return (
  <form className={`row g-3  ${newUser.name || newUser.password !== '' ? "was-validated" : "needs-validation"}`} onSubmit={submitHandler}>
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
    <div className="col-md-6">
      <label htmlFor="validationCustom03" className="form-label">Address</label>
      <input type="text" className="form-control" onChange={onChange} name="address"  value={newUser.address} id="validationCustom03" required />
      <div className={newUser?.address !==''?"valid-feedback":"invalid-feedback"}>
        {newUser?.address !==''?"Looks Good!":"Type-something"}
    </div>
    </div>
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="invalidCheck" required />
        <label className="form-check-label" htmlFor="invalidCheck">
          Agree to terms and conditions
        </label>
        <div className="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <div className="col-12">
      <button className="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>
)
}
//5af5e7e3-5a13-4cf9-a295-273c77328f6b
