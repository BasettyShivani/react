import {BrowserRouter, Routes,Route} from "react-router-dom";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Service from "../Service/Service";
function Link(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Navbar" element={<Navbar/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/About" element={<About/>}/>
             <Route path="/register" element={<Register />} />
             <Route path="/Service" element={<Service/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Link;