import React from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import './signup.css';

const Signup = () => {

    const navigate = useNavigate();
    const redirect012 = () => {
        navigate("/login");
    }
    const redirect013 = () => {
        navigate("/homepage");
    }
   

    return(
        <div class="image012">
            <div class="container012">
            <div class="drop012">

                <div class="login012">
                    <u><h1  className='log1012'>SignUp</h1></u>
                    <form class="forms012">
                        <div class="email012">
                            <span><label for="email">Email</label></span><span class="icon012"><EmailIcon/></span>
                            <br></br>
                            <input type="text" placeholder="Email" className="e-mail">


                            </input>
                        </div>
                        <div class="pass-word012">
                           
                            <span><label for="password">Password</label></span><span class="icon012"><LockIcon/></span>
                                 <br></br>
                            <input type="password" placeholder="Password" className="password"></input>
                        </div>
                      
                        <div class="log-in012" onClick={redirect013}>
                            <button  class="btn012">SignUp</button>
                        </div>
                        <div class="register012">
                            <span>Already a User ?<button onClick={redirect012} class="buut">Login</button> </span><br/>
                        </div>
                        <div class="ic012">
                            <div><GoogleIcon/></div>
                            <div><FacebookIcon/></div>
                            <div><TwitterIcon/></div>
                        </div>
                       
                       
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
};

export default Signup;