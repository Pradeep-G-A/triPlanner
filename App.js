
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Homepage from './homepage';
import Intropage from './intropage';
import Loginpage from './loginpage';
import Place from './places';
import Food from './food';
import Accomadation from './accomadation';
import Signup from './signup';
import Dummy from './dummy';
import Grandparkcity from './grandparkcity';

import { Proceedtologin } from './proceedtologin';
function App() {
  return (
    <Routes>
     <Route path="/" element={<Intropage/>}></Route>
     <Route path="/login" element={<Loginpage/>}></Route>
     <Route path="/places" element={<Place/>}></Route>
     <Route path="/food" element={<Food/>}></Route>
     {/* <Route path="/Mainpage" element={<Mainpage/>}></Route> */}
     <Route path="/homepage" element={<Homepage/>}></Route>
     <Route path="/accomadation" element={<Accomadation/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/grandparkcity" element={<Grandparkcity/>}></Route>
     <Route path="/dummy" element={<Dummy/>}></Route>
     <Route path="/proceedtologin" element={<Proceedtologin/>}></Route>
     
     
     {/* <Route path="/vanila" element={<parallaxTiltEffect/>}></Route> */}
   </Routes>
  );
}

export default App;
