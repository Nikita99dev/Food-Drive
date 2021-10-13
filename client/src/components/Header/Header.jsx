import {
  Link
} from "react-router-dom";


export default function Header(){
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
          <Link className="nav-link" to="/main">Main</Link>
          <Link className="nav-link" to="/form">Forms</Link>
          <Link className="nav-link" to="/login">LOG IN </Link>
          <Link className="nav-link" to="/signup">Sign Up</Link>
          <Link className="nav-link disabled" to="/"> Disabled</Link>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}
