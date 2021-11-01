import { useDispatch, useSelector } from "react-redux";
import {
  Link
} from "react-router-dom";
import { useHistory } from "react-router";
import { actions } from "../../Redux/slices/rootReducer";
import { UserOutlined, LoginOutlined, UserAddOutlined, GlobalOutlined, HomeOutlined, LogoutOutlined, ShoppingCartOutlined } from '@ant-design/icons'


export default function Header(){
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.user?.user)

  let history = useHistory();

  const logout = (e) => {
    e.preventDefault()
    dispatch(actions.logoutUserPending({history}))
  }
 
  if(user?.username){
  return (
    <div>
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg mg-5" style={{backgroundColor: "#e3f2fd"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><ShoppingCartOutlined lined style={{ fontSize: '35px'}} /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {/* <Link className="nav-link active" aria-current="page" to="/"><HomeOutlined style={{ fontSize: '25px'}} /></Link> */}
          <Link className="nav-link" to="/lk"><UserOutlined style={{ fontSize: '25px'}} /></Link>
          <Link className="nav-link" to='/main'><GlobalOutlined style={{ fontSize: '25px'}} /></Link>
           {/* <Link className="nav-link" to="/login">Login</Link> */}
          {/* <Link className="nav-link" to="/signup">Sign Up</Link> */}
          <Link className="nav-link" onClick={logout}><LogoutOutlined  style={{ fontSize: '25px'}} /></Link>
        </div>
      </div>

    </div>
  </nav>
  </div>
  )
} else {
  return (
    <div>
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg mg-5" style={{backgroundColor: "#e3f2fd"}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><ShoppingCartOutlined style={{ fontSize: '35px'}} /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <Link className="nav-link" to='/main'><GlobalOutlined style={{ fontSize: '25px'}} /></Link>
          <Link className="nav-link" to="/login"><LoginOutlined style={{ fontSize: '25px'}}/></Link>
          <Link className="nav-link" to="/signup"><UserAddOutlined style={{ fontSize: '25px'}} /></Link>
        </div>
      </div>

    </div>
  </nav>
  </div>
  )
}
}
