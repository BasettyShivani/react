import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar(){
    return(
        <>
        <nav>
            <div class="navlink">
                <div className="logo">
                  
          <img src="https://img.freepik.com/premium-vector/hospital-logo-vector_1277164-14294.jpg?w=360"alt="Hospital logo" className="logo" />
          </div>
          <h1 className="title">MediCare Hospital</h1>
               
                            <a href="Home">Home</a>{"  |  "}
            <a href="About">About</a>{"  | "}
            <a href="Contact">Contact</a>{" |  "}
            <a href="Service">Service</a>{"  |  "}
            <a href="Login">Login</a>{"  | "}
             <a href="Register">Register</a>
            </div>
        </nav>
        </>
    )
}
