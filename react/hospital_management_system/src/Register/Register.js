import Navbar from "../Navbar/Navbar";
import "./Register.css";
export default function Register(){
    return(
        <>
        <Navbar/>
        <div className="register">
    <center>  <h1>Register</h1>
    </center> 
    Full Name:<input type="text" id="fullname" />
          <br />
Email:<input type="email" id="email" />
          <br />
Phone Number:<input type="tel" id="phone" />
          <br />
Password:<input type="password" id="password" />
          <br />

          Confirm Password:<input type="password" id="confirmPassword" /><br />

          <button type="submit">Register</button>
          </div>
        </>
    )
}