import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { logUP } from "../../../Redux/actions/auth"
import { actions } from "../../../Redux/slices/rootReducer"
import { loginUser } from "../../../Redux/thunks/usersThunks"
import CircularColor from "../../Loader/Loader"
import { DescriptionAlert, DescriptionAlert2 } from "../Alert/Alert"


const initState = {
  email: '',
  password:'',
  error:''
}


export default function LoginForm() {
  const [data, setData] = useState(initState)



  const dispatch = useDispatch()

  const user = useSelector(state => state.user)


  let history = useHistory()
  // useEffect(() => {
  //   setData({
  //     email: 'undefined',
  //     password: 'undefined',
  //   })
  //   console.log('data.email', data.email, data.password)
  // }, [])

  const onChange = (e) => {
    console.log('e target', e.target.name)
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
}

const submitHandler = (e) => {
  e.preventDefault()
  console.log('data', data)
  console.log(data?.email[0]?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
  if (data?.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    setData(prev=>({...prev, error: false}));
    dispatch(actions.loginUserPending({data, history}))
  } else {
    setData(prev=>({...prev, error: true}));
    history.replace('/login')
  }
  e.target.reset()
}

//  useEffect(()=> {
//     if(data.length) info = "invalid-feedback";
//     else info = ''
//  }, [data])


return (
  <form className={`row m-3 d-flex justify-content-center ${data.email||data.password !== '' ? "was-validated" : "needs-validation"}`} onSubmit={submitHandler} >
    <div className="col-md-4">
      <label htmlFor="validationCustom02" className="form-label">Email</label>
      <input type="text" className="form-control" onChange={onChange} name="email" value={data.email} placeholder="Email" id="validationCustom02" required />
      <div className={data.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ? "valid-feedback" : "invalid-feedback"}>
        {data.email?.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ? "Looks Good!" : "Type-something"}
      </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">Password</label>
      <input type="text" className="form-control" onChange={onChange} name="password" value={data.password} placeholder="password" id="validationCustom01" required />
      <div className={data?.password !== 'undefined' ? "valid-feedback" : "invalid-feedback"}>
        {data?.password !== 'undefined' ? "Looks Good!" : "Type-something"}
      </div>
    </div>
    <div className="col-12 d-flex justify-content-center">
    {user?.loader?<CircularColor/>:""|| user?.error === 'invalid' ? <DescriptionAlert /> : "" || data.error ? <DescriptionAlert2 /> : ""}
    </div>
    <div className="col-12 d-flex justify-content-center">
      <button className="btn m-3 btn-primary" type="submit">Submit form</button>
    </div>
  </form>

)
}


