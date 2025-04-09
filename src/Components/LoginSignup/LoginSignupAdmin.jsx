import { useState } from 'react'
import './LoginSignup.css';
import axios from "axios"




const LoginSignupAdmin = () => {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");
    const[user, getUser] = useState(""); 


    const onPress2 = async () => {
        const response = await axios.post("http://localhost:3000/signup", {
            email: email,
            password: password,

        }, {
            header: {
                "Content-Type": "application/json"
            }
        }
        )
        const data = response.data;
        console.log(data.message);
        getUser(data.token);

    }
    if(user){
       
           {window.location.href = '/home'}
        
    }

    return (
        <div className='container1'>
            <div className="header"> 
                <div className="text">Sign up</div>
                <div className='underline'></div>

            </div>
            <div className='inputs'>
                              
                <div className='input'>
                <img src="" alt="" />
                <input type="email" placeholder='Email Id' onChange={(e)=>{
                    getEmail(e.target.value)
                }}/>
                </div>
                <div className='input'>
                <img src="" alt="" />
                <input type="password" onChange={(e)=>{
                    getPassword(e.target.value)
                }} placeholder='Password' />
                </div>
            </div>
            <div className="submit-container">        
                
            <button className='submit gray' onClick={onPress2}>SignUp</button>
                {/* <div className={action==="Sign Up"?"submit gray": "submit"}onClick={()=>{setAction("Login")}}>Login</div> */}
            </div>
            {/* <center> {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}</center> */}
            </div>
    )
}

export default LoginSignupAdmin