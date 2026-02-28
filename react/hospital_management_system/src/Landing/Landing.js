import { Link } from "react-router-dom"
import "./Landing.css";
import Navbar from "../Navbar/Navbar";
 export default function Landing(){
    return(
        <>
        <Navbar/>
        <div className="button">
          
          <Link to="/login">
        
            <button id="login">Login</button>
          </Link>

          <Link to="/register">
            <button id="register">Register</button>
          </Link>
             </div>
                  
<div className="e1">
        <h1>Welcome to MediCare Hospital</h1>
        <p>Your Health, our priority</p>
        <p>Discover a world of possibilities. Join us to track, create, and manage everything you love. 
    Already have an account? Log in to continue where you left off!</p>
      </div>


       
        </>
    )
}