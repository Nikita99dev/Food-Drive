import { useDispatch, useSelector } from "react-redux";
import {
  Link
} from "react-router-dom";
import { useHistory } from "react-router";
import { logoutUser } from "../../Redux/thunks/usersThunks";


export default function Header(){
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user?.user)

  let history = useHistory();

  const logout = (e) => {
    e.preventDefault()
    dispatch(logoutUser(history))
  }
 
  if(user?.username){
  return (
    <div>
    <nav className="navbar navbar-light navbar-expand-lg mg-5" style={{backgroundColor: "#e3f2fd"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/form">Forms</Link>
          <Link className="nav=link" to='/main'>Main</Link>
           {/* <Link className="nav-link" to="/login">Login</Link> */}
          {/* <Link className="nav-link" to="/signup">Sign Up</Link> */}
          <Link className="nav-link" onClick={logout}>Log out</Link>
        </div>
      </div>

    </div>
  </nav>
  </div>
  )
} else {
  return (
    <div>
    <nav className="navbar navbar-light navbar-expand-lg mg-5" style={{backgroundColor: "#e3f2fd"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/form">Forms</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </div>
      </div>

    </div>
  </nav>
  </div>
  )
}
}
