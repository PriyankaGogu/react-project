import { Alert } from "antd"
import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(){
    var email, password,user;
    var navigate = useNavigate()
    var [error,setError]  = useState();
    
    function handleEmail(event){
        email=event.target.value;
    }

    function handleUser(event){
        user=event.target.value;
    }
    
    function handlePassword(event){
        password=event.target.value;
    }
    function signIn(){

        axios({
            url:"http://apibyauw.eu-4.evennode.com/api/login",
            method:"post",
            data:{"email":email,"password":password}
        }).then((response)=>{
            console.log("Login",response.status+response.data);
            if(response.status===200){
            localStorage.token = response.data.token;
             navigate("/")
            } else{setError("Invalid Credentials")}
            },(error)=>{setError("Invalid Credentials")
        })
      }
    return (
        <div>
            <h1>Login Component</h1>
            <div>
            {error && <Alert type="danger" message={error} />}
            <input placeholder="Email" onChange={handleEmail}></input>

            </div>
            <div>
            <input placeholder="Username" onChange={handleUser}></input>

            </div>
            <div>
            <input type="password" placeholder="Password" onChange={handlePassword}></input>

            </div>

            <Link to="/signup">New User? Signup here</Link>
            <button onClick={signIn}>Login</button>
        
        </div>
    )
}

export default Login