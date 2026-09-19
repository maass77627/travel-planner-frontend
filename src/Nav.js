import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function Nav({setCurrentUser}) {

const navigate = useNavigate()
function handleLogout() {
  fetch("http://localhost:4567/logout", {
    method: "DELETE",
    credentials: "include"
  })
  .then((res) => res.json())
  .then((json) => {
    navigate("/")
    setCurrentUser(null)
  })

}

    return (
        <AppBar className="nav" position="static">
      <Toolbar>
        <Typography variant="h6">
          Travel Planner
        </Typography>

        <div className="nav-links">
            <NavLink className="link" to="/login">Login</NavLink>
             <NavLink className="link" to="/signup">SignUp</NavLink>
             {/* <NavLink onClick={() => handleLogout()} className="link" to="/logout">Logout</NavLink> */}
             <button className="link-btn" onClick={handleLogout}>
          Logout
        </button>
             <NavLink className="link" to="/">Home</NavLink>
        </div>
      </Toolbar>
    </AppBar>
        // <div className="nav">
        //    <h1>This is the Nav</h1>
        // </div>
    )
}

export default Nav