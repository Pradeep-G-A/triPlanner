import React from 'react';
import { useNavigate } from "react-router-dom";
import './loginpage.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Loginpage = () => {
    

        const navigate = useNavigate();
// const redirect = () => {
//     navigate("/homepage");  
// }
const redirect12 = () => {
    navigate("/signup");  
}
const redirect13 = () => {
    navigate("/proceedtologin");  
}


       
  return (
    <div class="image">
        <div class="container">
            <div class="drop">
                <div class="login">
                    <u><h1  className='log1'>Login</h1></u>
                    <form class="forms">
                        <div class="email">
                            <span><label for="email001">Email</label></span><span class="icon"><EmailIcon/></span>
                            <br></br>
                            <input type="text" placeholder="email" className="e-mail"></input>
                        </div>
                        <div class="pass-word">
                           
                            <span><label for="password">Password</label></span><span class="icon"><LockIcon/></span>
                                 <br></br>
                            <input type="password" placeholder="Password" className="password"></input>
                        </div>
                        <span>

                        <div class="forgot-pass"><button class="buut">Forgot Password?</button></div>
                        </span>
                        <div class="log-in">
                            <button class="btn" onClick={redirect13}>Proceed to Login</button>
                        </div>
                        <div class="register">
                            <span>Not a Member ! <button  onClick={redirect12} class="buuut">Sign up?</button> </span><br/>
                        </div>
                        {/* <div className='booo'>        
                            <span ><button onClick={redirect} class="bn">Back to Home</button></span>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    </div>
  );

}

export default Loginpage;