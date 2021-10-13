import { useState } from "react";
import { useDispatch } from "react-redux"
import { signUP } from "../../../Redux/actions/auth";

export default function SignUp() {

  const [newUser, setNewUser] = useState({
      name: '',
      password: '',
      email: '',
      address: ''
    }
  )

  const onChange = (e) => {
    setNewUser(prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('============', newUser)
    dispatch(signUP({newUser}))
  }


return (
  <form className="row g-3" onSubmit={submitHandler}>
    <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">Name</label>
      <input type="text" className="form-control" name="name" onChange={onChange} id="validationCustom01" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom02" className="form-label">Password</label>
      <input type="password" className="form-control" name="password" onChange={onChange} id="validationCustom02" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom02" className="form-label">Email</label>
      <input type="password" className="form-control" name="email" onChange={onChange} id="validationCustom" required />
    </div>
    <div className="col-md-6">
      <label htmlFor="validationCustom03" className="form-label">Address</label>
      <input type="text" className="form-control" onChange={onChange} name="address" id="validationCustom03" required />
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


