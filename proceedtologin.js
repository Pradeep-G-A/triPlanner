import React from 'react'
import { useNavigate } from "react-router-dom";
import './proceedtologin.css';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const Proceedtologin = () => {

    const navigate = useNavigate();
    const tohome = () => {
        navigate("/homepage"); 
    }

    return (
        <div className='hel12345'>
            <div className='procimg01'>

            <img src='image\advent.png' alt='proceedtologin'  className='procimg'/>
            </div>
       
            <div className='bnofcon01'>
            <div class="buttonproceed" onClick={tohome}>
            <p class="first"> click !</p>
            <p class="slidein"> Continue Your Journey<ArrowCircleRightOutlinedIcon/></p>
            </div>

           {/* <button className='bnofcon' onClick={tohome}>Continue Your Journey</button>
          
           <button class="custom-btn btn-12"><span>Click!</span><span>Continue Your Journey</span></button> */}
            </div>
        </div>
    )
}
