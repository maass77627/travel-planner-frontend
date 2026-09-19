import {useState} from "react"
import {useNavigate} from "react-router-dom"
function SignUp() {
const navigate = useNavigate()
const [formData, setFormData] = useState({
     name: "", 
     email: "", 
     password: "" 
    }); 

function handleChange(e) { 
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
} 

function handleSubmit(e) { 
    e.preventDefault();
     fetch("http://localhost:4567/signup", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData) 
        }) 
        .then((res) => res.json()) 
        .then((json) => { 
            navigate("/")
            console.log(json); }); 
    } 
    
    return (
         <div className="signup">
             <form onSubmit={(e) => handleSubmit(e)}>
                 <input onChange={(e) => handleChange(e)} type="text" name="name" value={formData.name} placeholder="Name" /> 
                  <input onChange={(e) => handleChange(e)} type="email" name="email" value={formData.email} placeholder="Email" /> 
                  <input onChange={(e) => handleChange(e)} type="password" name="password" value={formData.password} placeholder="Password" />
                   <input type="submit" value="Sign Up" /> </form> 
                   </div> 
                   );

    
}

export default SignUp


