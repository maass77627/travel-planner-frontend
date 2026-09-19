
import { useNavigate } from 'react-router-dom';

import {useState} from "react";
function Login() {
 const navigate = useNavigate();

    const [formData, setFormData] = useState({
        // id: "",
        // name: "",
        email: "",
        password: ""
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


function handleSubmit(e) {

    e.preventDefault()
    console.log("login", formData)
    fetch("http://localhost:4567/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        credentials: "include",
        body: JSON.stringify(formData)
    })
    .then((res) => {
        console.log("Login status", res.status)
        return res.json
    })
    .then((json) => {
        console.log("login response",json)
        navigate("/")
    })
    .catch((error) => {
        console.error("Login error:", error)
    })

}


    return (
        <div className="login">
           <form onSubmit={(e) => handleSubmit(e)}>
              {/* <label>Name:</label> */}
               {/* <input onChange={(e) => handleChange(e)} type="text" name="name" value={formData.name}></input> */}
                <label>Email:</label>
               <input onChange={(e) => handleChange(e)} type="text" name="email" value={formData.email}></input>
                <label>Password:</label>
               <input onChange={(e) => handleChange(e)} type="password" name="password" value={formData.password}/>
               <input type="submit" value="submit"></input>
           </form>
        </div>
    )
}

export default Login