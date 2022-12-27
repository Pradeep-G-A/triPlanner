import React from 'react';
import { useNavigate } from "react-router-dom";
import './intropage.css'
import sound from "./sound/moan.mpeg";
import vedio from "./vedio/Intropagevedio.mp4";

const Intropage = () => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate("/homepage");  

    }
    const redirect987 = () => {
        navigate("/dummy");  

    }
    function play() {
        new Audio(sound).play()
    }
    
    return (
        <div>
        <div className='hero'>
            <div class="overlay"></div>
            <video src={vedio} autoPlay loop muted/>
            <h1 className='intro'>triPlanner</h1>
            <h3 className='trip'>A Trip To Singapore</h3>
           <div className='vis'>
            <audio src='sound\moan.mpeg'></audio>
            <p  onClick={redirect} >VisitSite.......</p>
            <p  onClick={play} >VisitSite.......</p>
            <p  onClick={redirect987} >VisitSite.......</p>
        

           </div>
        </div>
        </div>
    );
}

export default Intropage;