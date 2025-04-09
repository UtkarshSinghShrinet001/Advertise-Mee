import { useState } from 'react'
import './LoginSignup.css';
import axios from 'axios';


//import email_icon from '/images/email.jpeg';
//import user_icon from '/images/name-icon.svg';
//import password_icon from '/images/password-lock-icon-free-vector.jpg';


const LoginSignup = () => {
    // const [action,setAction]= useState("Sign Up");
    const [username, getUsername] = useState("");
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");
    const[user, getUser] = useState(""); 


    const onPress1 = async () => {
        const response = await axios.post("http://localhost:3000/signin", {
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
                <div className="text">Login</div>
                <div className='underline'></div>

            </div>
            <div className='inputs'>
                {/* <div className='input'>
                    <img src="" alt="" />
                    <input type="text" placeholder='Name' onChange={(e) => {
                        getUsername(e.target.value)
                    }} />
                </div> */}

                <div className='input'>
                    <img src="" alt="" />
                    <input type="email" placeholder='Email Id' onChange={(e) => {
                        getEmail(e.target.value)
                    }} />
                </div>
                <div className='input'>
                    <img src="" alt="" />
                    <input type="password" placeholder='Password' onChange={(e) => {
                        getPassword(e.target.value)
                    }} />
                </div>
            </div>
            <div className="submit-container">

                <button className='submit gray' onClick={onPress1}>Login In</button>
                {/* <div className={action==="Sign Up"?"submit gray": "submit"}onClick={()=>{setAction("Login")}}>Login</div> */}
            </div>
            <center><div className="forgot-password">Create a new account here? <a href="/signup">Click Here!</a></div></center>
        </div>
    )
}

export default LoginSignup