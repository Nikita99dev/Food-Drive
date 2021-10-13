import { useEffect, useState } from "react"

export default function LoginForm() {
  const [data, setData ] = useState('')


  useEffect(()=> {
    console.log(data)
  }, [data])


  const submitHandler = (e) => {
    e.preventDefault()
    setData({name: e.target.Name.value, lastName: e.target.lastName.value})
  }
   return (
    <form className="row g-3 " onSubmit={submitHandler}>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" name="Name" id="validationCustom01" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" name="lastName" id="validationCustom02" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
   )
}
